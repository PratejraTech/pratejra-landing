import { NextRequest, NextResponse } from 'next/server'
import { getAuthProvider } from '@/lib/auth/provider'
import { validatePassword } from '@/lib/auth/password-policy'
import { generateTokenPair } from '@/lib/auth/jwt'
import { rateLimit } from '@/lib/rate-limit'
import { logAuditEvent } from '@/lib/audit'

const authProvider = getAuthProvider()

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Domain validation
    const host = request.headers.get('host')?.toLowerCase()
    const allowedDomains = authProvider.getAllowedDomains()
    if (!allowedDomains.some(domain => host?.includes(domain))) {
      await logAuditEvent({
        action: 'auth_domain_blocked',
        details: { email, domain: host },
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown'
      })
      return NextResponse.json(
        { error: 'Access denied: Domain not authorized' },
        { status: 403 }
      )
    }

    // Rate limiting: 5 attempts per 15 minutes per IP
    const clientIP = request.headers.get('x-forwarded-for') ||
                    request.headers.get('x-real-ip') ||
                    'unknown'
    const rateLimitKey = `login:${clientIP}`

    if (!rateLimit(rateLimitKey, 5, 15 * 60 * 1000)) {
      await logAuditEvent({
        action: 'auth_rate_limit_exceeded',
        details: { email },
        ipAddress: clientIP
      })
      return NextResponse.json(
        { error: 'Too many login attempts. Please try again later.' },
        { status: 429 }
      )
    }

    // Password complexity validation
    const passwordValidation = validatePassword(password)
    if (!passwordValidation.valid) {
      await logAuditEvent({
        action: 'auth_weak_password_attempt',
        details: { email, errors: passwordValidation.errors },
        ipAddress: clientIP
      })
      return NextResponse.json(
        {
          error: 'Password does not meet complexity requirements',
          details: passwordValidation.errors
        },
        { status: 400 }
      )
    }

    // Email authorization check
    if (!authProvider.validateEmail(email)) {
      await logAuditEvent({
        action: 'auth_unauthorized_email',
        details: { email },
        ipAddress: clientIP
      })
      return NextResponse.json(
        { error: 'Email not authorized for access' },
        { status: 403 }
      )
    }

    // Authentication
    let user
    try {
      user = await authProvider.authenticate(email, password)
    } catch {
      await logAuditEvent({
        action: 'auth_login_failed',
        details: { email, reason: 'authentication_failed' },
        ipAddress: clientIP
      })
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generate token pair
    const tokens = generateTokenPair({
      userId: user.id,
      email: user.email,
      role: user.role
    })

    // Audit successful login
    await logAuditEvent({
      action: 'auth_login_success',
      userId: user.id,
      details: { email, role: user.role },
      ipAddress: clientIP
    })

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      message: 'Login successful'
    })

    // Set HTTP-only cookies
    response.cookies.set('auth-token', tokens.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 15 * 60, // 15 minutes
    })

    response.cookies.set('refresh-token', tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    })

    return response
  } catch {
    console.error('Login error occurred')
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}