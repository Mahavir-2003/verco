'use client'
import React from 'react'
import { CardDescription } from '../ui/card'
import { Loader } from '../loader'
import { PaymentElement } from '@stripe/react-stripe-js'
import { Button } from '../ui/button'
import { useCompletePayment } from '@/hooks/billing/use-billing'
import { StripePaymentElementOptions } from '@stripe/stripe-js'


type PaymentFormProps = {
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
}

const stripeAppearance : StripePaymentElementOptions = {
  business : {
    name: 'Varco AI',
  } ,
   layout: {
    type: 'accordion',
    defaultCollapsed: false,
    spacedAccordionItems: false
  }
};

export const PaymentForm = ({ plan }: PaymentFormProps) => {
  const { processing, onMakePayment } = useCompletePayment(plan)
  return (
    <form
      onSubmit={onMakePayment}
      className="flex flex-col gap-5"
    >
      <div>
        <h2 className="font-semibold text-xl text-white">Payment Method</h2>
        <CardDescription className=' text-white/60'>Enter your card details</CardDescription>
      </div>
      <PaymentElement options={stripeAppearance} />
      <Button type="submit" variant="secondary">
        <Loader loading={processing}>Pay</Loader>
      </Button> 
    </form>
  )
}
