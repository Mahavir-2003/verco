// return child in layout
import { onLoginUser } from '@/actions/auth'
import SideBar from "@/components/sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

    const authenticated = await onLoginUser()
    // if (!authenticated) return null

    return (
        <div className="w-[100dvw] h-[100dvh] flex justify-start items-start">
            <SideBar domains={[]} />
            {children}
        </div>
    )
}

export default DashboardLayout;
