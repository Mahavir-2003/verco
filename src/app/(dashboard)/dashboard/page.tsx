import DashboardCard from '@/components/dashboard/dashboard_card'
import CalIcon from '@/icons/cal_icon'
import MoneyIcon from '@/icons/money_icon'
import PersonIcon from '@/icons/person_icon'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full flex flex-col items-start justify-start overflow-y-scroll custom-scrollbar py-4 px-6'>
      <div className='flex flex-col items-start justify-start w-full'>
        <h1 className='text-4xl font-semibold '>Dashboard</h1>
        <p className='text-xl text-white/65'>A detailed overview of your metrics, usage, customers and more.</p>
      </div>
      <div className='w-full min-h-fit gap-8 flex flex-wrap flex-row justify-start items-center mt-10'>
        {/* Render the Cards  */}
        <DashboardCard
            value={0}
            title="Potential Clients"
            icon={<PersonIcon />}
          />
          <DashboardCard
            value={0}
            sales
            title="Pipline Value"
            icon={<MoneyIcon />}
          />
          <DashboardCard
            value={0}
            title="Appointments"
            icon={<CalIcon />}
          />
          <DashboardCard
            value={0}
            sales
            title="Total Sales"
            icon={<MoneyIcon />}
          />
      </div>

    </div>
  )
}

export default page