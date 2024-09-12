import Image from "next/image";
import VercoNameGradient from "@/public/logos/verco_name_gradient.svg"
import DashboardImage from "@/public/images/dashboard_image.svg"
import SettingsPageImage from "@/public/images/settings_page_image.svg"
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex flex-col items-center justify-center w-[100dvw] h-full">
      <section className="flex items-center justify-center w-full h-full mt-16 flex-col">
        <p className="text-lg text-orange-400 bg-orange-50 px-4 py-[1px] rounded-full mb-4">Create your own AI Sales agents.</p>
        <div className="relative w-[40%] h-[140px]">
          <Image src={VercoNameGradient} alt="hero" fill />
        </div>
        <p className="text-lg text-white w-[30%] text-center mt-6 mb-4">
          Verco is an AI sales agent builder that empowers businesses to create their own AI sales agents. create your own AI sales agents.
        </p>
        <Link href="/dashboard">
          <button className="bg-orange-400 text-black px-6 py-2 rounded-sm hover:bg-orange-500 transition-all duration-300">
            <p className="font-medium">Get Started For Free</p>
          </button>
        </Link>
      </section>
      <section className="flex items-center justify-center w-full h-full mt-16 mb-16 ">
        <div className="relative w-[60%] aspect-video shadow-2xl shadow-white/10 rounded-lg overflow-hidden">
          <Image src={DashboardImage} alt="hero" fill />
        </div>
      </section>
      <section className="flex items-center justify-center w-full h-full mt-16 mb-16 ">
        <div className="relative w-[60%] aspect-video shadow-2xl shadow-white/10 rounded-lg overflow-hidden">
          <Image src={SettingsPageImage} alt="hero" fill />
        </div>
      </section>
    </main>
    </>
  );
}
