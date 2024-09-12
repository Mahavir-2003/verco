import { onGetPaymentConnected } from '@/actions/settings'
import IntegrationsList from '@/components/integrations'

const page = async () => {

  const payment = await onGetPaymentConnected()

  const connections = {
    stripe: payment ? true : false,
  }

  return (
    <div className='w-full h-full flex flex-col items-start justify-start overflow-y-scroll custom-scrollbar py-4 px-6'>
      <div className='flex flex-col items-start justify-start w-full'>
        <h1 className='text-4xl font-semibold '>integration</h1>
        <p className='text-xl text-white/65'>Connect third-party applications into Verco.</p>
      </div>
      <div className=' mt-8'>
        <IntegrationsList connections={connections} />
      </div>
    </div>
  )
}

export default page