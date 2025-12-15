import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Lazy initialization to avoid build-time issues
let prismaInstance: PrismaClient | null = null

function getPrismaClient(): PrismaClient {
  if (!prismaInstance) {
    if (typeof window !== 'undefined') {
      throw new Error('Prisma client cannot be used in browser')
    }

    try {
      prismaInstance = globalForPrisma.prisma ?? new PrismaClient()
      if (process.env.NODE_ENV !== 'production') {
        globalForPrisma.prisma = prismaInstance
      }
    } catch (error) {
      console.error('Failed to initialize Prisma client:', error)
      throw error
    }
  }

  return prismaInstance
}

// Export a proxy that lazily initializes the client
export const prisma = new Proxy({} as PrismaClient, {
  get(_, prop) {
    const client = getPrismaClient()
    return (client as PrismaClient)[prop as keyof PrismaClient]
  }
})