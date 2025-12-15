'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  name: string
  role: 'USER' | 'AGENT' | 'ADMIN'
}

interface PermissionGateProps {
  children: React.ReactNode
  requiredRole?: 'USER' | 'AGENT' | 'ADMIN'
  requiredRoles?: ('USER' | 'AGENT' | 'ADMIN')[]
  fallback?: React.ReactNode
}

export function PermissionGate({
  children,
  requiredRole,
  requiredRoles,
  fallback = <div>You do not have permission to access this content.</div>
}: PermissionGateProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkPermissions()
  }, [])

  const checkPermissions = async () => {
    try {
      const response = await fetch('/api/auth/session')
      if (!response.ok) {
        router.push('/portal/login')
        return
      }

      const data = await response.json()
      setUser(data.user)
    } catch (error) {
      console.error('Permission check failed:', error)
      router.push('/portal/login')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  // Check role requirements
  const hasRequiredRole = () => {
    if (requiredRole) {
      return user.role === requiredRole
    }

    if (requiredRoles) {
      return requiredRoles.includes(user.role)
    }

    return true // No specific role required
  }

  if (!hasRequiredRole()) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

// Hook for checking permissions in components
export function usePermissions() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch('/api/auth/session')
        if (response.ok) {
          const data = await response.json()
          setUser(data.user)
        }
      } catch (error) {
        console.error('Failed to check user permissions:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkUser()
  }, [])

  const hasRole = (role: 'USER' | 'AGENT' | 'ADMIN') => {
    return user?.role === role
  }

  const hasAnyRole = (roles: ('USER' | 'AGENT' | 'ADMIN')[]) => {
    return user ? roles.includes(user.role) : false
  }

  return {
    user,
    isLoading,
    hasRole,
    hasAnyRole,
    isAdmin: hasRole('ADMIN'),
    isAgent: hasRole('AGENT'),
    isUser: hasRole('USER'),
  }
}