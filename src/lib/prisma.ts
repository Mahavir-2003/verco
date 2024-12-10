import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

if (!globalForPrisma.prisma) {
  try {
    globalForPrisma.prisma = new PrismaClient()
  } catch (error) {
    console.error("Failed to initialize Prisma Client:", error)
    throw error
  }
}

export const client = globalForPrisma.prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = client
