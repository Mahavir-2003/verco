import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ArrowBigLeftIcon, ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

type Props = {
  trigger: React.ReactNode
  children: React.ReactNode
  title: string
  description: string
  type?: 'Integration'
  logo?: string
}

const Modal = ({
  trigger,
  children,
  title,
  description,
  type,
  logo,
}: Props) => {
  switch (type) {
    case 'Integration':
      return (
        <Dialog>
          <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent className=' bg-[#252525] border-[1px] border-white/30 text-white'>
            <div className="flex justify-center items-center gap-3">
              <div className="w-[2.7rem] object-fill h-10 relative">
                <Image
                  src={`https://ucarecdn.com/0ef03f84-c121-4ce1-919c-423fadf6e2c5/`}
                  fill
                  alt="Verco"
                />
              </div>
              <div className="text-white">
                <ArrowLeft size={15} />
                <ArrowRight size={15} />
              </div>
              <div className="w-28 h-12 relative">
                <Image
                  src={`https://ucarecdn.com/${logo}/`}
                  fill
                  alt="Stripe"
                />
              </div>
            </div>
            <DialogHeader className="flex items-center">
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <DialogDescription className=" text-center text-white/70 font-light">
                {description}
              </DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      )
    default:
      return (
        <Dialog>
          <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent className='bg-[#252525] border-[1px] border-white/30 text-white'>
            <DialogHeader>
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <DialogDescription className='text-white/70 font-light'>{description}</DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      )
  }
}

export default Modal
