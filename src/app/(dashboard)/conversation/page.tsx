import React from 'react'
import { onGetAllAccountDomains } from '@/actions/settings'
import ConversationMenu from '@/components/conversations'
import Messenger from '@/components/conversations/messenger'
import InfoBar from '@/components/infobar'
import { Separator } from '@/components/ui/separator'

const page = async () => {

  const domains = await onGetAllAccountDomains()

  return (
    <div className="w-full h-full flex">
          <ConversationMenu domains={domains?.domains} />

          {/* <Separator orientation="vertical" /> */}
          <div className="w-full flex flex-col py-2">
            <div className="px-5">
              <InfoBar />
            </div>
            <Messenger />
          </div>
        </div>
  )
}

export default page