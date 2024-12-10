import { getUserAppointments } from '@/actions/appointment'
import {
  getUserBalance,
  getUserClients,
  getUserPlanInfo,
  getUserTotalProductPrices,
  getUserTotalSales,
  getRecentTransactions,
} from '@/actions/dashboard'
import DashboardCard from '@/components/dashboard/cards'
import { PlanUsage } from '@/components/dashboard/plan-usage'
import InfoBar from '@/components/infobar'
import { Separator } from '@/components/ui/separator'
import CalIcon from '@/icons/cal-icon'
import EmailIcon from '@/icons/email-icon'
import PersonIcon from '@/icons/person-icon'
import { TransactionsIcon } from '@/icons/transactions-icon'
import { DollarSign } from 'lucide-react'
import React from 'react'
import { formatDistance } from 'date-fns'

type Props = {}

const Page = async (props: Props) => {
  const clients = await getUserClients()
  const totalRevenue = await getUserBalance()
  const bookings = await getUserAppointments()
  const plan = await getUserPlanInfo()
  const totalSales = await getUserTotalSales()
  const products = await getUserTotalProductPrices()
  const recentTransactions = await getRecentTransactions()

  const productsValue = products || 0

  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0">
        <div className="flex gap-5 flex-wrap">
          <DashboardCard
            value={clients || 0}
            title="Potential Clients"
            icon={<PersonIcon />}
          />
          <DashboardCard
            value={productsValue}
            sales
            title="Total Products Value"
            icon={<DollarSign />}
          />
          <DashboardCard
            value={bookings || 0}
            title="Appointments"
            icon={<CalIcon />}
          />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-10">
          <div>
            <div>
              <h2 className="font-bold text-2xl">Plan Usage</h2>
              <p className="text-sm font-light">
                A detailed overview of your metrics, usage, customers and more
              </p>
            </div>
            <PlanUsage
              plan={plan?.plan!}
              credits={plan?.credits || 0}
              domains={plan?.domains || 0}
              clients={clients || 0}
            />
          </div>
          {/* <div className="flex flex-col">
            <div className="w-full flex justify-between items-start mb-5">
              <div className="flex gap-3 items-center">
                <TransactionsIcon />
                <p className="font-bold">Recent Transactions</p>
              </div>
              <p className="text-sm">See more</p>
            </div>
            <Separator orientation="horizontal" />
            {recentTransactions && recentTransactions.length > 0 ? (
              recentTransactions.map((transaction) => (
                <div
                  className="flex gap-3 w-full justify-between items-center border-b-2 py-5"
                  key={transaction.id}
                >
                  <div>
                    <p className="font-bold">{transaction.name}</p>
                    {transaction.purchasedAt && (
                      <p className="text-sm text-gray-500">
                        {formatDistance(new Date(transaction.purchasedAt), new Date(), { addSuffix: true })}
                      </p>
                    )}
                  </div>
                  <p className="font-bold text-xl">
                    ${transaction.price}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">No recent transactions</p>
            )}
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Page
