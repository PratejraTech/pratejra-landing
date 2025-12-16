import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './src/lib/auth/jwt'

// Domain and email restrictions
const ALLOWED_DOMAINS = [
  'pratejra.build',
  'alexandermoir.com',
  'localhost:3004',
  'localhost:3000',
  '127.0.0.1:3004',
  '127.0.0.1:3000'
]
const ALLOWED_EMAILS = ['alex@alexandermoir.com']

// Routes that require authentication
const protectedRoutes = ['/portal']
// Routes that are public even in protected areas
const publicRoutes = ['/portal/login']

export function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl

  // Domain validation for all requests
  const isDomainAllowed = ALLOWED_DOMAINS.some(allowedDomain =>
    host.toLowerCase().includes(allowedDomain.toLowerCase())
  )

  if (!isDomainAllowed) {
    return new NextResponse('Domain not authorized', {
      status: 403,
      headers: { 'Content-Type': 'text/plain' }
    })
  }

  // Check if the route requires authentication
  const isProtectedRoute = protectedRoutes.some(route =>
    pathname.startsWith(route)
  )

  if (!isProtectedRoute) {
    return NextResponse.next()
  }

  // Check if it's a public route within protected areas
  const isPublicRoute = publicRoutes.some(route =>
    pathname.startsWith(route)
  )

  if (isPublicRoute) {
    return NextResponse.next()
  }

  // Check for authentication token
  const token = request.cookies.get('auth-token')?.value

  if (!token) {
    const loginUrl = new URL('/portal/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  try {
    // Verify the token with enhanced security
    const decoded = verifyToken(token, 'access')

    // Additional email validation
    if (!ALLOWED_EMAILS.includes(decoded.email.toLowerCase())) {
      const loginUrl = new URL('/portal/login', request.url)
      loginUrl.searchParams.set('error', 'email_not_authorized')
      return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
  } catch (error) {
    // Token is invalid or expired
    const loginUrl = new URL('/portal/login', request.url)
    loginUrl.searchParams.set('error', 'session_expired')
    return NextResponse.redirect(loginUrl)
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}