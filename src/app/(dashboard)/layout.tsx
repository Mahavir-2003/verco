// return child in layout

import SideBar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-[100dvw] h-[100dvh] bg-yellow-100 flex justify-start items-center">
            <SideBar />
            {children}
        </div>
    )
}

export default DashboardLayout;
