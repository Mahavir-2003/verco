import React from 'react'
import { Card } from '../ui/card'
import { CloudIcon } from 'lucide-react'
import { Separator } from '../ui/separator'
import Modal from '../modal'
import { IntegrationModalBody } from './integration-modal-body'

type Props = {
  name: 'stripe'
  logo: string
  title: string
  descrioption: string
  connections: {
    [key in 'stripe']: boolean
  }
}

const IntegrationTrigger = ({
  name,
  logo, 
  title,
  descrioption,
  connections,
}: Props) => {
  return (
    <Modal
      title={title}
      type="Integration"
      logo={logo}
      description={descrioption}
      trigger={
        <Card className="px-6 py-2 cursor-pointer flex gap-2 bg-transparent text-white rounded-md border-[1px] border-white/40 hover:border-white/80 transition-all duration-200">
          <CloudIcon />
          {connections[name] ? 'connected' : 'connect'}
        </Card>
      }
    >
      <Separator orientation="horizontal" />
      <IntegrationModalBody
        connections={connections}
        type={name}
      />
    </Modal>
  )
}

export default IntegrationTrigger
