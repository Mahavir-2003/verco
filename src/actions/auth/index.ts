'use server'

import { client } from '@/lib/prisma'
import { currentUser, redirectToSignIn } from '@clerk/nextjs'
import { onGetAllAccountDomains } from '../settings'

export const onCompleteUserRegistration = async (
) => {

  // get the parameter data from clerk directly
  const user  = await currentUser()
  const fullname = `${user?.firstName ?? ''} ${user?.lastName ?? ''}`.trim() || 'Unknown User'
  const clerkId = user?.id
  const type = 'student'

  try {
    // Check if user already exists
    const existingUser = await client.user.findUnique({
      where: { clerkId },
      select: { id: true, fullname: true, type: true },
    })

    if (existingUser) {
      // User already exists, return the existing user
      console.log('User already exists:', existingUser)
      return { status: 200, user: existingUser }
    }

    console.log('User does not exist, creating a new user...')

    // User doesn't exist, create a new one
    const newUser = await client.user.create({
      data: {
        fullname,
        clerkId: clerkId!,
        type,
        subscription: {
          create: {},
        },
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    })

    return { status: 200, user: newUser }
  } catch (error) {
    console.error('Error in onCompleteUserRegistration:', error)
    return { status: 400, error: 'Failed to register user' }
  }
}

export const onLoginUser = async () => {
  const user = await currentUser()
  if (!user) redirectToSignIn()
  else {
    try {
      const authenticated = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          fullname: true,
          id: true,
          type: true,
        },
      })
      if (authenticated) {
        const domains = await onGetAllAccountDomains()
        return { status: 200, user: authenticated, domain: domains?.domains }
      }
    } catch (error) {
      return { status: 400 }
    }
  }
}
