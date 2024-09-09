import {
    Dashboard,
    Settings,
    Integration,
    Email,
    Conversation,
    Calender
} from "@/components/icons";

const sidebar_icons = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        slug: 'dashboard',
        icon: Dashboard,
    },
    {
        name: 'Conversation',
        href: '/conversation',
        slug: 'conversation',
        icon: Conversation,
    },
    {
        name: 'Integration',
        href: '/integration',
        slug: 'integration',
        icon: Integration,
    },
    {
        name: 'Settings',
        href: '/settings',
        slug: 'settings',
        icon: Settings,
    },
    {
        name: 'Calender',
        href: '/calender',
        slug: 'calender',
        icon: Calender,
    },
    {
        name: 'Email',
        href: '/email',
        slug: 'email',
        icon: Email,
    }
]

export default sidebar_icons