import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
import OurMission from "./components/OurMission";
import CompanyStats from "./components/CompanyStats";
import AboutCTA from "./components/AboutCTA";

export const metadata = {
    title: "About Us | Bytedocker Talent",
    description: "Learn about the mission, vision, and team driving Bytedocker forward.",
};

export default function AboutUsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#f5f0e8] selection:bg-[#ff8c00]/20 selection:text-[#0a0a0a]">
            <Navbar />
            <main className="grow pt-20">

                {/* Hero */}
                <section className="relative px-6 pt-24 pb-16 bg-[#f5f0e8] overflow-hidden border-b-[3px] border-[#0a0a0a] min-h-[50vh] flex items-center">
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-about" width="36" height="36" patternUnits="userSpaceOnUse">
                                    <path d="M 36 0 L 0 0 0 36" fill="none" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-about)" />
                        </svg>
                    </div>
                    <div className="absolute -top-8 right-16 h-28 w-28 bg-[#ff8c00] border-[3px] border-[#0a0a0a] -rotate-6 shadow-neo"></div>

                    <div className="container mx-auto max-w-[1400px] relative z-10 flex flex-col md:flex-row gap-16 items-center">
                        <div className="hidden md:flex w-full md:w-[520px] shrink-0 items-center justify-center relative">
                            <Image
                                src="/illustrations/about-hero-neo.svg"
                                alt="About us graphic"
                                width={520}
                                height={400}
                                className="w-full h-auto"
                                priority
                            />
                        </div>

                        <div className="flex-1 max-w-2xl">
                            <div className="inline-flex items-center gap-3 mb-8 bg-[#ffffff] px-4 py-2 border-[3px] border-[#0a0a0a] shadow-neo uppercase tracking-widest text-xs font-ibmplexmonomedium">
                                <span className="w-8 h-8 bg-[#0a0a0a] text-[#f5f0e8] flex items-center justify-center text-[10px] font-black">BY</span>
                                <span className="text-[#0a0a0a]">Our mission</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0a0a0a] leading-[0.95] mb-6 font-dmsans">
                                Building the
                            </h1>
                            <div className="inline-flex items-center gap-3 border-[3px] border-[#0a0a0a] bg-[#ff8c00] px-4 py-2 shadow-neo">
                                <span className="text-2xl md:text-4xl font-black text-[#0a0a0a] font-dmsans">
                                    Future of Work.
                                </span>
                            </div>
                            <p className="text-[#4a4a4a] text-lg md:text-xl max-w-2xl leading-relaxed font-dmsans mt-8">
                                We started Bytedocker with a single goal: connect the most brilliant, overlooked talent in the world with companies building category-defining products.
                            </p>
                        </div>
                    </div>
                </section>

                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <OurMission />

                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-50" />
                <CompanyStats />

                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-900" />
                <AboutCTA />

            </main>
            <Footer />
        </div>
    );
}
