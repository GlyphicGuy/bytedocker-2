import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
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
        <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-slate-100 selection:text-slate-900">
            <Navbar />
            <main className="grow pt-20">

                {/* Hero */}
                <section className="relative px-6 pt-32 pb-24 bg-slate-50 overflow-hidden border-b border-slate-100 min-h-[50vh] flex items-center">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-testimonials" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-testimonials)" />
                        </svg>
                    </div>
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-black/5"></div>
                        <div className="absolute bottom-1/4 left-0 w-full border-t border-dashed border-black/5"></div>
                        <div className="absolute left-1/4 top-0 h-full border-l border-dashed border-black/5"></div>
                        <div className="absolute right-1/4 top-0 h-full border-l border-dashed border-black/5"></div>
                    </div>

                    <div className="container mx-auto max-w-[1400px] relative z-10 flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 max-w-2xl">
                            <div className="inline-flex items-center gap-3 mb-8 bg-white/50 backdrop-blur-sm p-2 pr-6 rounded-full border border-slate-200">
                                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-[10px] font-bold">BY</span>
                                <span className="text-xs font-ibmplexmonomedium uppercase text-slate-500">Real Feedback</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 leading-[0.92] mb-8 font-dmsans">
                                Trust But <br />
                                <span className="font-medium">Verify.</span>
                            </h1>
                            <p className="text-slate-500 text-lg md:text-2xl max-w-2xl leading-relaxed font-dmsans">
                                Hear directly from our partners about the quality, speed, and cultural fit of the engineers they onboarded through us.
                            </p>
                        </div>

                        <div className="hidden md:flex w-full md:w-[500px] shrink-0 items-center justify-center">
                            <Image
                                src="/undraw_testimonials_4c7y.svg"
                                alt="Testimonials Illustration"
                                width={500}
                                height={400}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </section>

                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <TestimonialsWall />

                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-50" />
                <RatingBreakdown />

                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <FeaturedStory />

                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-900" />
                <TestimonialsCTA />

            </main>
            <Footer />
        </div>
    );
}
