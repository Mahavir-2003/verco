import {
  onDomainCustomerResponses,
  onGetAllDomainBookings,
} from '@/actions/appointment'
import PortalForm from '@/components/forms/portal/portal-form'
import React from 'react'
import { fixTruncatedUUID } from '@/lib/utils'

type Props = { params: { domainid: string; customerid: string } }

const CustomerSignUpForm = async ({ params }: Props) => {
  if (!params.customerid || !params.domainid) {
    return <div>Invalid parameters: Missing required IDs</div>
  }

  const fixedCustomerId = params.customerid.length === 35 
    ? fixTruncatedUUID(params.customerid)
    : params.customerid

  if (!fixedCustomerId) {
    return <div>Invalid customer ID format: {params.customerid}</div>
  }

  if (fixedCustomerId.length !== 36) {
    return <div>Invalid customer ID length: {fixedCustomerId.length} characters (expected 36)<br/>
    Received ID: {fixedCustomerId}</div>
  }

  if (params.domainid.length !== 36) {
    return <div>Invalid domain ID length: {params.domainid.length} characters (expected 36)<br/>
    Received ID: {params.domainid}</div>
  }

  const questions = await onDomainCustomerResponses(fixedCustomerId)
  if (!questions) {
    return <div>Customer not found or invalid customer ID format</div>
  }

  const bookings = await onGetAllDomainBookings(params.domainid)
  if (!bookings) {
    return <div>Unable to fetch bookings</div>
  }

  return (
    <PortalForm
      bookings={bookings}
      email={questions.email!}
      domainid={params.domainid}
      customerId={fixedCustomerId}
      questions={questions.questions}
      type="Appointment"
    />
  )
}

export default CustomerSignUpForm
