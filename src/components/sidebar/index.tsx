"use client"
import { cn } from '@/lib/utils'; 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from "@/public/logos/verco_logo.svg"
import DashboardIcon from "@/public/icons/dashboard.svg";
import ConversationIcon from "@/public/icons/conversation.svg";
import IntegrationIcon from "@/public/icons/integration.svg";
import SettingsIcon from "@/public/icons/settings.svg";
import CalenderIcon from "@/public/icons/calender.svg";
import EmailIcon from "@/public/icons/email.svg";
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs';

const sidebar_icons = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    slug: 'dashboard',
    icon: DashboardIcon,
  },
  {
    name: 'Conversation',
    href: '/conversation',
    slug: 'conversation',
    icon: ConversationIcon,
  },
  {
    name: 'Integration',
    href: '/integration',
    slug: 'integration',
    icon: IntegrationIcon,
  },
  {
    name: 'Settings',
    href: '/settings',
    slug: 'settings',
    icon: SettingsIcon,
  },
  {
    name: 'Calender',
    href: '/calender',
    slug: 'calender',
    icon: CalenderIcon,
  },
  {
    name: 'Email',
    href: '/email',
    slug: 'email',
    icon: EmailIcon,
  }
]

const SideBar = () => {
  const pathname = usePathname()

  return (
    <div className='min-w-fit p-4 h-[100dvh] bg-[#161616] flex flex-col justify-between items-center border-r-[1px] border-r-white/10 rounded-sm'>
      <div className='flex flex-col gap-y-12'>
        <div className='logo'>
          <Image src={Logo} alt='verco_logo' width={34} height={30} />
        </div>
        <div className='nav-icons flex flex-col gap-y-5 justify-center items-center '>
          {sidebar_icons.map((icon, index) => (
            <Link key={index} href={icon.href}>
              <div className={cn(
                'nav-icon w-[28px] h-[28px] relative flex items-center justify-center hover:opacity-100 transition-all duration-200',
                pathname === icon.href ? 'opacity-100' : 'opacity-70'
              )}>
                <Image src={icon.icon} alt={icon.name} fill />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='profile'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  )
}

export default SideBar