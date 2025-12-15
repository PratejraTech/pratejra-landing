import jwt from 'jsonwebtoken'
import { randomBytes } from 'crypto'

interface JWTPayload {
  userId: string
  email: string
  role: string
  sessionId: string
}

interface JWTConfig {
  secret: string
  issuer: string
  audience: string
  accessTokenExpiry: string
  refreshTokenExpiry: string
}

const jwtConfig: JWTConfig = {
  secret: process.env.JWT_SECRET || 'fallback-secret-change-in-production',
  issuer: 'pratejra-portal',
  audience: process.env.NODE_ENV === 'production' ? 'pratejra-prod' : 'pratejra-dev',
  accessTokenExpiry: '15m', // Short-lived access tokens
  refreshTokenExpiry: '7d'  // Longer refresh tokens
}

export function generateAccessToken(payload: Omit<JWTPayload, 'sessionId'>): string {
  const sessionId = randomBytes(16).toString('hex')

  return jwt.sign({
    ...payload,
    sessionId,
    iss: jwtConfig.issuer,
    aud: jwtConfig.audience,
    jti: randomBytes(16).toString('hex'),
    iat: Math.floor(Date.now() / 1000),
    type: 'access'
  }, jwtConfig.secret, {
    expiresIn: jwtConfig.accessTokenExpiry
  } as jwt.SignOptions)
}

export function generateRefreshToken(payload: Omit<JWTPayload, 'sessionId'>): string {
  const sessionId = randomBytes(16).toString('hex')

  return jwt.sign({
    ...payload,
    sessionId,
    iss: jwtConfig.issuer,
    aud: jwtConfig.audience,
    jti: randomBytes(16).toString('hex'),
    iat: Math.floor(Date.now() / 1000),
    type: 'refresh'
  }, jwtConfig.secret, {
    expiresIn: jwtConfig.refreshTokenExpiry
  } as jwt.SignOptions)
}

export function verifyToken(token: string, type: 'access' | 'refresh' = 'access'): JWTPayload {
  try {
    const decoded = jwt.verify(token, jwtConfig.secret, {
      issuer: jwtConfig.issuer,
      audience: jwtConfig.audience,
      algorithms: ['HS256']
    }) as JWTPayload & { type: string; exp: number; iat: number }

    if (decoded.type !== type) {
      throw new Error('Invalid token type')
    }

    return {
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role,
      sessionId: decoded.sessionId
    }
  } catch {
    throw new Error('Invalid or expired token')
  }
}

export function generateTokenPair(payload: Omit<JWTPayload, 'sessionId'>) {
  return {
    accessToken: generateAccessToken(payload),
    refreshToken: generateRefreshToken(payload),
    expiresIn: 15 * 60 * 1000 // 15 minutes
  }
}