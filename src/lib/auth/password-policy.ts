export interface PasswordValidation {
  valid: boolean
  errors: string[]
  strength: 'weak' | 'medium' | 'strong'
}

export function validatePassword(password: string): PasswordValidation {
  const errors: string[] = []

  // Length requirement
  if (password.length < 16) {
    errors.push('Password must be at least 16 characters long')
  }

  // Character requirements
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    errors.push('Password must contain at least one special character')
  }

  // Common password check
  const commonPasswords = [
    'password', '123456', 'qwerty', 'admin', 'letmein', 'welcome',
    'monkey', 'dragon', 'password1', 'qwerty123'
  ]
  if (commonPasswords.some(common =>
    password.toLowerCase().includes(common)
  )) {
    errors.push('Password contains common words or patterns')
  }

  // Repeated characters
  if (/(.)\1{2,}/.test(password)) {
    errors.push('Password cannot contain repeated characters')
  }

  // Strength calculation
  let strength: 'weak' | 'medium' | 'strong' = 'weak'
  if (errors.length === 0) {
    if (password.length >= 20 &&
        /[A-Z].*[A-Z]/.test(password) &&
        /\d.*\d/.test(password) &&
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      strength = 'strong'
    } else {
      strength = 'medium'
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    strength
  }
}