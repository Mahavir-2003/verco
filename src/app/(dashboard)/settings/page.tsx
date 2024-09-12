import React from 'react'
import BillingSettings from '@/components/settings/billing-settings'
import ChangePassword from '@/components/settings/change-password'


const page = () => {
  return (
    <div className='w-full h-full flex flex-col items-start justify-start overflow-y-scroll custom-scrollbar py-4 px-6'>
      <div className='flex flex-col items-start justify-start w-full'>
        <h1 className='text-4xl font-semibold '>settings</h1>
        <p className='text-xl text-white/65'>Manage your account settings, preferences and integrations.</p>
      </div>
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10 mt-8">
        <BillingSettings />
        <ChangePassword />
      </div>
    </div>
  )
}

export default page