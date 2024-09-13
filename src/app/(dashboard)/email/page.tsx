import { onGetAllCampaigns, onGetAllCustomers } from '@/actions/mail'
import EmailMarketing from '@/components/email-marketing'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async () => {

  const user = await currentUser()

  if (!user) return null
  const customers = await onGetAllCustomers(user.id)
  const campaigns = await onGetAllCampaigns(user.id)

  return (
    <div className='w-full h-full flex flex-col items-start justify-start overflow-y-scroll custom-scrollbar py-4 px-6'>
      <div className='flex flex-col items-start justify-start w-full'>
        <h1 className='text-4xl font-semibold '>Email-marketing</h1>
        <p className='text-xl text-white/65'>Send bulk emails to your customers.</p>
      </div>
      <div className=' w-full mt-4'>
        <EmailMarketing
          campaign={campaigns?.campaign!}
          subscription={customers?.subscription!}
          domains={customers?.domains!}
        />
      </div>
    </div>
  )
}

export default page