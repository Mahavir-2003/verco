import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full flex flex-col items-start justify-start overflow-y-scroll custom-scrollbar py-4 px-6'>
      <div className='flex flex-col items-start justify-start w-full'>
        <h1 className='text-4xl font-semibold '>Appointments</h1>
        <p className='text-xl text-white/65'>View and edit all your appointments.</p>
      </div>
    </div>
  )
}

export default page