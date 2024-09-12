'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Loader } from '../loader'
import { useStripe } from '@/hooks/billing/use-billing'

type StripeConnectProps = {
  connected: boolean
}

export const StripeConnect = ({ connected }: StripeConnectProps) => {
  const { onStripeConnect, onStripeAccountPending } = useStripe()
  return (
    <Button
      className='bg-transparent border-[1px] border-white/40 hover:border-white/80 transition-all duration-200'
      disabled={connected}
      onClick={onStripeConnect}
    >
      <Loader loading={onStripeAccountPending} className='' >
        {connected ? 'Connected' : 'Connect to stripe'}
      </Loader>
    </Button>
  )
}
