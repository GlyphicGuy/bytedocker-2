import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import FastProcessSteps from "@/app/how-we-vet-developers/components/FastProcessSteps";
import TopVettedDevelopers from "@/app/how-we-vet-developers/components/TopVettedDevelopers";
import TechInterviewsTimeline from "@/app/how-we-vet-developers/components/TechInterviewsTimeline";
import TooStrict from "@/app/how-we-vet-developers/components/TooStrict";
import MeetTheTeam from "@/app/how-we-vet-developers/components/MeetTheTeam";
import WhyChooseUs from "@/app/how-we-vet-developers/components/WhyChooseUs";
import Testimonials from "@/app/how-we-vet-developers/components/Testimonials";
import VettingCTA from "@/app/how-we-vet-developers/components/VettingCTA";

export const metadata = {
    title: "How We Vet Developers | Bytedocker Talent",
    description: "Learn about our rigorous multi-stage vetting process that ensures you only work with the top 1%.",
};

export default function VettingProcessPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#f5f0e8] selection:bg-[#ff8c00]/20 selection:text-[#0a0a0a]">
            <Navbar />
            <main className="grow pt-20">
                <section className="relative px-6 pt-24 pb-16 bg-[#f5f0e8] overflow-hidden border-b-[3px] border-[#0a0a0a] min-h-[70vh] flex items-center">
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-vet" width="36" height="36" patternUnits="userSpaceOnUse">
                                    <path d="M 36 0 L 0 0 0 36" fill="none" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-vet)" />
                        </svg>
                    </div>

                    <div className="absolute -top-6 left-10 w-28 h-28 bg-[#ff8c00] border-[3px] border-[#0a0a0a] rotate-6 shadow-neo"></div>
                    <div className="absolute bottom-10 right-12 w-20 h-20 bg-[#ffffff] border-[3px] border-[#0a0a0a] -rotate-6 shadow-neo"></div>

                    <div className="container mx-auto max-w-[1400px] relative z-10 flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 max-w-2xl">
                            <div className="inline-flex items-center gap-3 mb-8 bg-[#ffffff] px-4 py-2 border-[3px] border-[#0a0a0a] shadow-neo uppercase tracking-widest text-xs font-ibmplexmonomedium">
                                <span className="w-8 h-8 bg-[#0a0a0a] text-[#f5f0e8] flex items-center justify-center text-[10px] font-black">BY</span>
                                <span className="text-[#0a0a0a]">The Top 1% Filter</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0a0a0a] leading-[0.95] mb-8 font-dmsans">
                                Engineering Quality,<br />
                                <span className="text-[#ff8c00]">Guaranteed.</span>
                            </h1>

                            <p className="text-[#4a4a4a] text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-dmsans">
                                Our multi-stage vetting process filters for deep technical expertise, robust architecture knowledge, and excellent communication skills.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="bg-[#0a0a0a] hover:shadow-neo-lg text-[#f5f0e8] font-black text-base px-7 py-3.5 rounded-none transition-all font-ibmplexmonomedium border-[4px] border-[#0a0a0a] shadow-neo active:translate-y-0.5 uppercase tracking-widest text-xs">
                                    Start vetting
                                </button>
                                <button className="bg-[#ffffff] hover:shadow-neo-lg text-[#0a0a0a] font-black text-base px-7 py-3.5 rounded-none transition-all font-ibmplexmonomedium border-[4px] border-[#0a0a0a] shadow-neo active:translate-y-0.5 uppercase tracking-widest text-xs">
                                    See process
                                </button>
                            </div>
                        </div>

                        <div className="w-full md:w-[520px] aspect-square md:aspect-[4/3] flex items-center justify-center border-[3px] border-[#0a0a0a] bg-[#ffffff] shadow-neo relative overflow-hidden">
                            <Image
                                src="/illustrations/vetting-hero-neo.svg"
                                alt="Vetting checklist graphic"
                                width={520}
                                height={520}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </section>

                <FastProcessSteps />
                <div className="h-0 border-t-[3px] border-[#0a0a0a] bg-[#f5f0e8]"></div>
                <TopVettedDevelopers />
                <div className="h-0 border-t-[3px] border-[#0a0a0a] bg-[#f5f0e8]"></div>
                <TechInterviewsTimeline />
                <div className="h-0 border-t-[3px] border-[#0a0a0a] bg-[#f5f0e8]"></div>
                <TooStrict />
                <div className="h-0 border-t-[3px] border-[#0a0a0a] bg-[#f5f0e8]"></div>
                <MeetTheTeam />
                <div className="h-0 border-t-[3px] border-[#0a0a0a] bg-[#f5f0e8]"></div>
                <WhyChooseUs />
                <div className="h-0 border-t-[3px] border-[#0a0a0a] bg-[#f5f0e8]"></div>
                <Testimonials />
                <div className="h-0 border-t-[3px] border-[#0a0a0a] bg-[#f5f0e8]"></div>
                <VettingCTA />
            </main>
            <Footer />
        </div>
    );
}
