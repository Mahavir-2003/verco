import React from 'react'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'

type Props = {
  onOpen: JSX.Element
  children: React.ReactNode
  title: string
  description: string
}

const AppDrawer = ({ children, description, onOpen, title }: Props) => {
  return (
    <Drawer>
      <DrawerTrigger>{onOpen}</DrawerTrigger>
      <DrawerContent className=' bg-[#252525] border-0'>
        <div className="flex flex-col items-center justify-center gap-2 pb-20 pt-10">
          <DrawerTitle>{title}</DrawerTitle>  
          <DrawerDescription className=' text-white/60 font-light'>{description}</DrawerDescription>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default AppDrawer
