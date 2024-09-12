import DashboardCard from '@/components/dashboard/dashboard_card'
import { PlanUsage } from '@/components/dashboard/plan_usage'
import CalIcon from '@/icons/cal_icon'
import MoneyIcon from '@/icons/money_icon'
import PersonIcon from '@/icons/person_icon'
import Image from 'next/image'
import React from 'react'
import CreditCardImage from "@/public/images/credit_card.svg"

const page = () => {
  return (
    <div className='w-[90%] h-full flex flex-col items-start justify-start overflow-y-scroll custom-scrollbar py-4 px-6'>
      <div className='flex flex-col items-start justify-start w-full'>
        <h1 className='text-4xl font-semibold '>Dashboard</h1>
        <p className='text-xl font-light text-white/65'>A detailed overview of your metrics, usage, customers and more.</p>
      </div>
      <div className='w-fit min-h-fit gap-8 flex flex-wrap flex-row justify-start items-center mt-10 '>
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
      <div className=' w-full flex justify-start items-start mt-8 flex-col '>
        <div className='flex flex-col items-start justify-start w-full mb-4'>
          <h1 className='text-3xl font-semibold '>Plan usage</h1>
          <p className='text-lg font-light text-white/65'>A detailed overview of your metrics, usage, customers and more.</p>
        </div>
        <div className='w-full flex justify-between items-end'>
          <div className=' w-1/2'>
            <PlanUsage
              plan={'PRO'}
              credits={30}
              domains={1}
              clients={5}
            />
          </div>
          <div className=' w-[25%] relative aspect-video'>
            <Image src={CreditCardImage} alt='Credit Card' fill />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page