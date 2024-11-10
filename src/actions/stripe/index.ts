'use server'

import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  typescript: true,
  apiVersion: '2023-10-16',
})

type StripeSecretResponse = 
  | { status?: number; message?: string; plan?: Plans; free: boolean; secret?: undefined }
  | { secret: string | null; free?: undefined }

export const onGetStripeClientSecret = async (
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
): Promise<StripeSecretResponse> => {
  try {
    if (plan === 'STANDARD') {
      return {
        status: 200,
        message: 'Free plan selected',
        plan: 'STANDARD',
        free: true
      }
    }

    const amount = plan === 'PRO' ? 1500 : 3500
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return { secret: paymentIntent.client_secret }
  } catch (error) {
    console.error('Error creating payment intent:', error)
    return { secret: null }
  }
}

export const onCreateCustomerPaymentIntentSecret = async (
  amount: number,
  stripeId: string
) => {
  try {
    const user = await currentUser()
    if (!user) return null

    const paymentIntent = await stripe.paymentIntents.create(
      {
        currency: 'usd',
        amount: amount * 100,
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          clerkId: user.id,
        },
        transfer_group: user.id,
      },
      { stripeAccount: stripeId }
    )

    if (paymentIntent) {
      return { secret: paymentIntent.client_secret }
    }
  } catch (error) {
    console.log(error)
  }
}

export const onUpdateSubscription = async (
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
) => {
  try {
    const user = await currentUser()
    if (!user) return
    const update = await client.user.update({
      where: {
        clerkId: user.id,
      },
      data: {
        subscription: {
          update: {
            data: {
              plan,
              credits: plan == 'PRO' ? 50 : plan == 'ULTIMATE' ? 500 : 10,
            },
          },
        },
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    })
    if (update) {
      return {
        status: 200,
        message: 'subscription updated',
        plan: update.subscription?.plan,
      }
    }
  } catch (error) {
    console.log(error)
  }
}
