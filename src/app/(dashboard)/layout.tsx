// return child in layout
import { onCompleteUserRegistration, onLoginUser } from '@/actions/auth'
import SideBar from "@/components/sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

    const kf = await onCompleteUserRegistration()
    const authenticated = await onLoginUser()
    // if (!authenticated) return null

    return (
        <div className="w-[100dvw] h-[100dvh] flex justify-start items-start">
            <SideBar domains={authenticated?.domain} />
            {children}
        </div>
    )
}

export default DashboardLayout;
