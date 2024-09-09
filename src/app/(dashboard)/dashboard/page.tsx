import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full flex flex-col items-start justify-start overflow-y-scroll custom-scrollbar py-4 px-6'>
      <div className='flex flex-col items-start justify-start w-full'>
        <h1 className='text-4xl font-semibold '>Dashboard</h1>
        <p className='text-xl text-white/65'>A detailed overview of your metrics, usage, customers and more.</p>
      </div>
    </div>
  )
}

export default page