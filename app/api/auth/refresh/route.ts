import { NextRequest, NextResponse } from 'next/server'
import { generateTokenPair, verifyToken } from '@/lib/auth/jwt'
import { logAuditEvent } from '@/lib/audit'

export async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get('refresh-token')?.value

    if (!refreshToken) {
      return NextResponse.json(
        { error: 'Refresh token required' },
        { status: 401 }
      )
    }

    // Verify refresh token
    const decoded = verifyToken(refreshToken, 'refresh')

    // Generate new token pair
    const tokens = generateTokenPair({
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role
    })

    // Audit token refresh
    await logAuditEvent({
      action: 'auth_token_refresh',
      userId: decoded.userId,
      details: { email: decoded.email, sessionId: decoded.sessionId }
    })

    const response = NextResponse.json({
      success: true,
      message: 'Token refreshed'
    })

    // Update cookies with new tokens
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
  } catch (error) {
    console.error('Token refresh error:', error)
    return NextResponse.json(
      { error: 'Invalid refresh token' },
      { status: 401 }
    )
  }
}