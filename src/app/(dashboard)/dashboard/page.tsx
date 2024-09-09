import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-1 w-full h-full justify-center items-center bg-green-100'>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default page