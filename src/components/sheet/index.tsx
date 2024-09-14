import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

type SideSheetProps = {
  trigger: React.ReactNode
  title: string
  description: string
  children: React.ReactNode
  className?: string
}

export const SideSheet = ({
  trigger,
  title,
  description,
  children,
  className,
}: SideSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger className={className}>{trigger}</SheetTrigger>
      <SheetContent className=' bg-[#181818] text-white border-white/30'>
        <SheetHeader>
          <SheetTitle className=' text-white'>{title}</SheetTitle>
          <SheetDescription className=' text-white/60'>{description}</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  )
}
