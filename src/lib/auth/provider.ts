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

// Production provider with AWS Cognito
export class CognitoAuthProvider extends AuthProvider {
  private allowedEmails = ['alex@alexandermoir.com']
  private allowedDomains = ['pratejra.build', 'alexandermoir.com']

  async authenticate(email: string, _password: string): Promise<User> {
    if (!this.validateEmail(email)) {
      throw new Error('Email not authorized for production')
    }

    // AWS Cognito authentication logic here
    // This would integrate with AWS Cognito for production
    throw new Error('Production authentication not yet implemented')
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
    return new CognitoAuthProvider()
  }
  return new LocalAuthProvider()
}