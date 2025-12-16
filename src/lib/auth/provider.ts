interface User {
  id: string
  email: string
  name: string
  role: 'USER' | 'AGENT' | 'ADMIN'
}

export abstract class AuthProvider {
  abstract authenticate(email: string, password: string): Promise<User>
  abstract validateEmail(email: string): boolean
  abstract getAllowedDomains(): string[]
}

// Development provider with local authentication
export class LocalAuthProvider extends AuthProvider {
  private allowedEmails = ['alex@alexandermoir.com']
  private allowedDomains = ['localhost', 'pratejra.build', 'alexandermoir.com']

  async authenticate(email: string, password: string): Promise<User> {
    if (!this.validateEmail(email)) {
      throw new Error('Email not authorized for this environment')
    }

    // In development, use environment variable for password
    const expectedPassword = process.env.ALEX_PASSWORD
    if (!expectedPassword || password !== expectedPassword) {
      throw new Error('Invalid credentials')
    }

    return {
      id: 'alex-admin',
      email: 'alex@alexandermoir.com',
      name: 'Alexander Moir',
      role: 'ADMIN'
    }
  }

  validateEmail(email: string): boolean {
    return this.allowedEmails.includes(email.toLowerCase())
  }

  getAllowedDomains(): string[] {
    return this.allowedDomains
  }
}

// Production provider with database authentication
export class ProductionAuthProvider extends AuthProvider {
  private allowedEmails = process.env.ALLOWED_EMAILS?.split(',') || ['alex@alexandermoir.com']
  private allowedDomains = process.env.ALLOWED_DOMAINS?.split(',') || ['pratejra.build', 'alexandermoir.com']

  async authenticate(email: string, _password: string): Promise<User> {
    if (!this.validateEmail(email)) {
      throw new Error('Email not authorized for production')
    }

    // For now, throw an error indicating production auth needs setup
    // This should be replaced with proper database authentication
    throw new Error('Production authentication requires database setup. Please configure your database and update this provider.')
  }

  validateEmail(email: string): boolean {
    return this.allowedEmails.includes(email.toLowerCase())
  }

  getAllowedDomains(): string[] {
    return this.allowedDomains
  }
}

// Factory function to get appropriate provider
export function getAuthProvider(): AuthProvider {
  if (process.env.NODE_ENV === 'production') {
    return new ProductionAuthProvider()
  }
  return new LocalAuthProvider()
}