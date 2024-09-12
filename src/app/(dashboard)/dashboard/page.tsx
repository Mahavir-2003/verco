import DashboardCard from '@/components/dashboard/dashboard_card'
import { PlanUsage } from '@/components/dashboard/plan_usage'
import {
  getUserBalance,
  getUserClients,
  getUserPlanInfo,
  getUserTotalProductPrices,
  getUserTransactions,
} from '@/actions/dashboard'
import CalIcon from '@/icons/cal_icon'
import MoneyIcon from '@/icons/money_icon'
import PersonIcon from '@/icons/person_icon'
import React from 'react'
import { getUserAppointments } from '@/actions/appointment'
import TransactionsIcon from "@/icons/transaction_icon"
import { Separator } from '@/components/ui/separator'

const page = async () => {

  const clients = await getUserClients()
  const sales = await getUserBalance()
  const bookings = await getUserAppointments()
  const plan = await getUserPlanInfo()
  const transactions = await getUserTransactions()
  const products = await getUserTotalProductPrices()

  return (
    <div className='w-[90%] h-full flex flex-col items-start justify-start overflow-y-scroll custom-scrollbar py-4 px-6'>
      <div className='flex flex-col items-start justify-start w-full'>
        <h1 className='text-4xl font-semibold '>Dashboard</h1>
        <p className='text-xl font-light text-white/65'>A detailed overview of your metrics, usage, customers and more.</p>
      </div>
      <div className='w-fit min-h-fit gap-8 flex flex-wrap flex-row justify-start items-center mt-10 '>
        {/* Render the Cards  */}
        <DashboardCard
          value={clients || 0}
          title="Potential Clients"
          icon={<PersonIcon />}
        />
        <DashboardCard
          value={products! * clients! || 0}
          sales
          title="Pipline Value"
          icon={<MoneyIcon />}
        />
        <DashboardCard
          value={bookings || 0}
          title="Appointments"
          icon={<CalIcon />}
        />
        <DashboardCard
          value={sales || 0}
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
        <div className='w-full flex justify-between items-start'>
          <div className=' w-1/2 '>
            <PlanUsage
              plan={plan?.plan!}
              credits={plan?.credits || 0}
              domains={plan?.domains || 0}
              clients={clients || 0}
            />
          </div>
          <div className='w-1/2 relative aspect-video'>
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-start mb-5">
                <div className="flex gap-3 items-center">
                  <TransactionsIcon />
                  <p className="font-bold">Recent Transactions</p>
                </div>
                <p className="text-sm">See more</p>
              </div>
              <Separator orientation="horizontal" />
              {transactions &&
                transactions.data.map((transaction) => (
                  <div
                    className="flex gap-3 w-full justify-between items-center border-b-2 py-5"
                    key={transaction.id}
                  >
                    <p className="font-bold">
                      {transaction.calculated_statement_descriptor}
                    </p>
                    <p className="font-bold text-xl">
                      ${transaction.amount / 100}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page