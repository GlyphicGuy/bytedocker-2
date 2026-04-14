import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import FAQQuickLinks from "./components/FAQQuickLinks";
import FAQAccordion from "./components/FAQAccordion";
import FAQCTA from "./components/FAQCTA";

export const metadata = {
    title: "FAQ for Companies | Bytedocker Talent",
    description: "Everything you need to know about hiring world-class remote developers with Bytedocker.",
};

export default function FAQCompaniesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#f5f0e8] selection:bg-[#ff8c00]/20 selection:text-[#0a0a0a]">
            <Navbar />
            <main className="grow pt-20">

                {/* Hero */}
                <section className="relative px-6 pt-24 pb-16 bg-[#f5f0e8] overflow-hidden border-b-[3px] border-[#0a0a0a] min-h-[50vh] flex items-center">
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-faq" width="36" height="36" patternUnits="userSpaceOnUse">
                                    <path d="M 36 0 L 0 0 0 36" fill="none" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-faq)" />
                        </svg>
                    </div>

                    <div className="absolute -top-6 left-10 w-24 h-24 bg-[#ff8c00] border-[3px] border-[#0a0a0a] rotate-6 shadow-neo"></div>
                    <div className="absolute bottom-10 right-12 w-20 h-20 bg-[#ffffff] border-[3px] border-[#0a0a0a] -rotate-6 shadow-neo"></div>

                    <div className="container mx-auto max-w-[1400px] relative z-10 flex flex-col md:flex-row gap-16 items-center">
                        <div className="hidden md:flex w-full md:w-[480px] shrink-0 items-center justify-center">
                            <Image
                                src="/illustrations/faq-hero-neo.svg"
                                alt="FAQ graphic"
                                width={500}
                                height={400}
                                className="w-full h-auto"
                                priority
                            />
                        </div>

                        <div className="flex-1 max-w-2xl">
                            <div className="inline-flex items-center gap-3 mb-8 bg-[#ffffff] px-4 py-2 border-[3px] border-[#0a0a0a] shadow-neo uppercase tracking-widest text-xs font-ibmplexmonomedium">
                                <span className="w-8 h-8 bg-[#0a0a0a] text-[#f5f0e8] flex items-center justify-center text-[10px] font-black">BY</span>
                                <span className="text-[#0a0a0a]">Got questions?</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0a0a0a] leading-[0.95] mb-8 font-dmsans">
                                Frequently Asked <br />
                                <span className="text-[#ff8c00]">Questions.</span>
                            </h1>
                            <p className="text-[#4a4a4a] text-lg md:text-xl max-w-2xl leading-relaxed font-dmsans">
                                Learn exactly how our matching works, what integration looks like, and how we handle compliance and payments.
                            </p>
                        </div>

                    </div>
                </section>

                <FAQQuickLinks />
                <div className="h-0 border-t-[3px] border-[#0a0a0a] bg-[#f5f0e8]"></div>
                <FAQAccordion />
                <div className="h-0 border-t-[3px] border-[#0a0a0a] bg-[#f5f0e8]"></div>
                <FAQCTA />

            </main>
            <Footer />
        </div>
    );
}
