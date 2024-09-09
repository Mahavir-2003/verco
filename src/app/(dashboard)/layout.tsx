// return child in layout

import SideBar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-[100dvw] h-[100dvh] flex justify-start items-start">
            <SideBar />
            {children}
        </div>
    )
}

export default DashboardLayout;
