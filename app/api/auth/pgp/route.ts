import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const token = request.cookies.get('auth-token')?.value
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }
    const userId = decoded.userId

    // Get user's PGP keys
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        publicKey: true,
        privateKey: true,
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      pgpKeys: {
        publicKey: user.publicKey,
        hasPrivateKey: !!user.privateKey,
      },
    })
  } catch (error) {
    console.error('Failed to fetch PGP keys:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const token = request.cookies.get('auth-token')?.value
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }
    const userId = decoded.userId

    const { publicKey, privateKey } = await request.json()

    if (!publicKey) {
      return NextResponse.json(
        { error: 'Public key is required' },
        { status: 400 }
      )
    }

    // Update user's PGP keys
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        publicKey,
        privateKey: privateKey || undefined, // Only update if provided
      },
      select: {
        id: true,
        publicKey: true,
        privateKey: true,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'PGP keys updated successfully',
      pgpKeys: {
        publicKey: updatedUser.publicKey,
        hasPrivateKey: !!updatedUser.privateKey,
      },
    })
  } catch (error) {
    console.error('Failed to update PGP keys:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Generate new PGP key pair
export async function PUT(request: NextRequest) {
  try {
    // Verify authentication
    const token = request.cookies.get('auth-token')?.value
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }
    const userId = decoded.userId

    const { name, email } = await request.json()

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required for key generation' },
        { status: 400 }
      )
    }

    // Load OpenPGP dynamically
    const openpgp = await import('openpgp')

    // Generate new key pair
    const { privateKey, publicKey } = await openpgp.generateKey({
      type: 'rsa',
      rsaBits: 4096,
      userIDs: [{ name, email }],
      passphrase: '', // In production, you might want to use a passphrase
      format: 'armored',
    })

    // Update user's PGP keys
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        publicKey,
        privateKey, // Store encrypted private key
      },
      select: {
        id: true,
        publicKey: true,
        privateKey: true,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'PGP key pair generated successfully',
      pgpKeys: {
        publicKey: updatedUser.publicKey,
        privateKey: updatedUser.privateKey,
        hasPrivateKey: !!updatedUser.privateKey,
      },
    })
  } catch (error) {
    console.error('Failed to generate PGP keys:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}