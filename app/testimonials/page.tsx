import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsWall from "./components/TestimonialsWall";
import RatingBreakdown from "./components/RatingBreakdown";
import FeaturedStory from "./components/FeaturedStory";
import TestimonialsCTA from "./components/TestimonialsCTA";

export const metadata = {
    title: "Testimonials | Bytedocker Talent",
    description: "Read what founders and engineering managers are saying about the developers they hired through Bytedocker.",
};

export default function TestimonialsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#f5f0e8] selection:bg-[#ff8c00]/20 selection:text-[#0a0a0a]">
            <Navbar />
            <main className="grow pt-20">

                {/* Hero */}
                <section className="relative px-6 pt-24 pb-16 bg-[#f5f0e8] overflow-hidden border-b-[3px] border-[#0a0a0a] min-h-[50vh] flex items-center">
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-testimonials" width="36" height="36" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-testimonials)" />
                        </svg>
                    </div>
                    <div className="absolute -top-6 left-10 w-24 h-24 bg-[#ff8c00] border-[3px] border-[#0a0a0a] rotate-6 shadow-neo"></div>
                    <div className="absolute bottom-10 right-12 w-20 h-20 bg-[#ffffff] border-[3px] border-[#0a0a0a] -rotate-6 shadow-neo"></div>

                    <div className="container mx-auto max-w-[1400px] relative z-10 flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 max-w-2xl">
                            <div className="inline-flex items-center gap-3 mb-8 bg-[#ffffff] px-4 py-2 border-[3px] border-[#0a0a0a] shadow-neo uppercase tracking-widest text-xs font-ibmplexmonomedium">
                                <span className="w-8 h-8 bg-[#0a0a0a] text-[#f5f0e8] flex items-center justify-center text-[10px] font-black">BY</span>
                                <span className="text-[#0a0a0a]">Real feedback</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0a0a0a] leading-[0.95] mb-8 font-dmsans">
                                Trust But <br />
                                <span className="text-[#ff8c00]">Verify.</span>
                            </h1>
                            <p className="text-[#4a4a4a] text-lg md:text-xl max-w-2xl leading-relaxed font-dmsans">
                                Hear directly from our partners about the quality, speed, and cultural fit of the engineers they onboarded through us.
                            </p>
                        </div>

                        <div className="hidden md:flex w-full md:w-[500px] shrink-0 items-center justify-center relative">
                            <div className="relative w-full h-[320px]">
                                <div className="absolute left-6 top-8 h-28 w-28 bg-[#ff8c00] border-[3px] border-[#0a0a0a] shadow-neo animate-float-wiggle"></div>
                                <div className="absolute right-10 top-4 h-20 w-20 bg-[#ffffff] border-[3px] border-[#0a0a0a] shadow-neo animate-float-slow"></div>
                                <div className="absolute left-20 bottom-10 h-24 w-24 bg-[#0a0a0a] border-[3px] border-[#0a0a0a] shadow-neo animate-float-slower"></div>
                                <div className="absolute right-24 bottom-6 h-14 w-32 bg-[#ffffff] border-[3px] border-[#0a0a0a] shadow-neo animate-float-slow"></div>
                                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5f0e8] border-[3px] border-[#0a0a0a] shadow-neo animate-float-wiggle"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialsWall />
                <RatingBreakdown />
                <FeaturedStory />
                <TestimonialsCTA />

            </main>
            <Footer />
        </div>
    );
}
