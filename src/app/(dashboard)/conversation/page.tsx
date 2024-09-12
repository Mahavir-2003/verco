import React from 'react'
import { onGetAllAccountDomains } from '@/actions/settings'
import ConversationMenu from '@/components/conversations'
import Messenger from '@/components/conversations/messenger'
import InfoBar from '@/components/infobar'
import { Separator } from '@/components/ui/separator'

const page = async () => {

  const domains = await onGetAllAccountDomains()

  return (
    <div className='w-full h-full flex flex-col items-start justify-start overflow-y-scroll custom-scrollbar py-4 px-6'>
      <div className='flex flex-col items-start justify-start w-full'>
        <h1 className='text-4xl font-semibold '>Conversation</h1>
        <p className='text-xl text-white/65'>Modify domain settings, change chatbot options, enter sales questions and train your bot to do what you want it to.</p>
      </div>
      <div>
        <div className="w-full h-full flex">
          <ConversationMenu domains={domains?.domains} />

          <Separator orientation="vertical" />
          <div className="w-full flex flex-col">
            <div className="px-5">
              <InfoBar />
            </div>
            <Messenger />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page