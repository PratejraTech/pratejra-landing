export interface AuditEvent {
  action: string
  userId?: string
  resource?: string
  details?: Record<string, unknown>
  ipAddress?: string
  userAgent?: string
}

export async function logAuditEvent(event: AuditEvent) {
  try {
    // In a real application, you might want to use a separate audit database
    // or a more sophisticated logging system
    console.log('[AUDIT]', {
      timestamp: new Date().toISOString(),
      ...event,
    })

    // For now, we'll just log to console - in production, use a proper audit system
    // TODO: Implement proper audit logging with separate audit database
  } catch (error) {
    // Don't let audit logging failures break the main flow
    console.error('Audit logging failed:', error)
  }
}

// Middleware helper for audit logging
export function createAuditMiddleware(action: string) {
  return async (request: Request, userId?: string) => {
    const ipAddress = request.headers.get('x-forwarded-for') ||
                     request.headers.get('x-real-ip') ||
                     'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    await logAuditEvent({
      action,
      userId,
      ipAddress,
      userAgent,
    })
  }
}