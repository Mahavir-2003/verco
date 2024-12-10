'use server'

import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  typescript: true,
  apiVersion: '2023-10-16',
})

export const getUserClients = async () => {
  try {
    const user = await currentUser()
    if (user) {
      const clients = await client.customer.count({
        where: {
          Domain: {
            User: {
              clerkId: user.id,
            },
          },
        },
      })
      if (clients) {
        return clients
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const getUserBalance = async () => {
  try {
    const user = await currentUser()
    if (user) {
      const userDomains = await client.domain.findMany({
        where: {
          User: {
            clerkId: user.id
          }
        },
        select: {
          id: true
        }
      })

      const domainIds = userDomains.map(domain => domain.id)
      
      const charges = await stripe.charges.list({
        limit: 100,
        expand: ['data.payment_intent']
      })

      if (!charges?.data?.length) return 0

      const totalRevenue = charges.data
        .filter(charge => {
          const isSucceeded = charge.status === 'succeeded'
          const isFromUser = charge.metadata?.clerkId === user.id
          const isProductPurchase = charge.metadata?.type === 'product_purchase' || 
                                  charge.metadata?.productId != null

          return isSucceeded && isFromUser && isProductPurchase
        })
        .reduce((sum, charge) => sum + charge.amount, 0)

      return totalRevenue / 100
    }
    return 0
  } catch (error) {
    console.error('Error in getUserBalance:', error)
    return 0
  }
}

export const getUserPlanInfo = async () => {
  try {
    const user = await currentUser()
    if (user) {
      const plan = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          _count: {
            select: {
              domains: true,
            },
          },
          subscription: {
            select: {
              plan: true,
              credits: true,
            },
          },
        },
      })
      if (plan) {
        return {
          plan: plan.subscription?.plan,
          credits: plan.subscription?.credits,
          domains: plan._count.domains,
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const getUserTotalProductPrices = async () => {
  try {
    const user = await currentUser()
    if (user) {
      const products = await client.product.findMany({
        where: {
          Domain: {
            User: {
              clerkId: user.id,
            },
          },
        },
        select: {
          price: true,
        },
      })

      if (products) {
        const total = products.reduce((total, next) => {
          return total + next.price
        }, 0)

        return total
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const getUserTransactions = async () => {
  try {
    const user = await currentUser()
    if (user) {
      const connectedStripe = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          stripeId: true,
        },
      })

      if (connectedStripe) {
        const transactions = await stripe.charges.list({
          limit: 5,
          expand: ['data.customer'],
          transfer_group: user.id,
        })
        
        if (transactions) {
          const validTransactions = transactions.data.filter(
            transaction => transaction.status === 'succeeded' && 
            transaction.metadata.clerkId === user.id
          )
          return {
            data: validTransactions
          }
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const getUserTotalSales = async () => {
  try {
    const user = await currentUser()
    if (user) {
      const connectedStripe = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          stripeId: true,
        },
      })

      if (connectedStripe?.stripeId) {
        const charges = await stripe.charges.list({
          limit: 100, // Adjust as needed
          transfer_group: user.id,
        })

        return charges.data.filter(charge => charge.status === 'succeeded').length
      }

    }
    return 0
  } catch (error) {
    console.log(error)
    return 0
  }
}

export const getRecentTransactions = async () => {
  try {
    const user = await currentUser()
    if (!user) return null

    const charges = await stripe.charges.list({
      limit: 5,
      expand: ['data.payment_intent']
    })

    if (!charges?.data?.length) return []

    const recentTransactions = charges.data
      .filter(charge => {
        const isSucceeded = charge.status === 'succeeded'
        const isFromUser = charge.metadata?.clerkId === user.id
        const isProductPurchase = charge.metadata?.type === 'product_purchase' || 
                                charge.metadata?.productId != null

        return isSucceeded && isFromUser && isProductPurchase
      })
      .map(charge => ({
        id: charge.id,
        name: charge.metadata?.productName || charge.description || 'Product Purchase',
        price: charge.amount / 100,
        purchasedAt: new Date(charge.created * 1000)
      }))

    return recentTransactions
  } catch (error) {
    console.error('Error in getRecentTransactions:', error)
    return null
  }
}
