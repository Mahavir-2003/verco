import HorizontalLogo from "@/public/logos/verco_logo_horizontal.svg"
import Image from "next/image"

const Navbar = () => {
  return (
    <header className='flex items-center justify-between w-[100dvw] px-4 py-4 '>
        <nav className="flex items-center justify-between w-full h-full">
            <Image src={HorizontalLogo} alt="logo" height={35} />
            <button className="bg-[#F49C46] text-black px-6 py-2 rounded-sm hover:bg-[#F49C46]/80 transition-all duration-300">
                <p className="font-medium">Free Trial</p>
            </button>
        </nav>
    </header>
  )
}

export default Navbar