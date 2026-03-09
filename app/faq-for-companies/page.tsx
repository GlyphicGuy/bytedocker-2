import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
import FAQQuickLinks from "./components/FAQQuickLinks";
import FAQAccordion from "./components/FAQAccordion";
import FAQCTA from "./components/FAQCTA";

export const metadata = {
    title: "FAQ for Companies | Bytedocker Talent",
    description: "Everything you need to know about hiring world-class remote developers with Bytedocker.",
};

export default function FAQCompaniesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-slate-100 selection:text-slate-900">
            <Navbar />
            <main className="grow pt-20">

                {/* Hero */}
                <section className="relative px-6 pt-32 pb-24 bg-slate-50 overflow-hidden border-b border-slate-100 min-h-[50vh] flex items-center">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-faq" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-faq)" />
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
                                <span className="text-xs font-ibmplexmonomedium uppercase text-slate-500">Got Questions?</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 leading-[0.92] mb-8 font-dmsans">
                                Frequently Asked <br />
                                <span className="font-medium">Questions.</span>
                            </h1>
                            <p className="text-slate-500 text-lg md:text-2xl max-w-2xl leading-relaxed font-dmsans">
                                Learn exactly how our matching works, what integration looks like, and how we handle compliance and payments.
                            </p>
                        </div>

                        <div className="hidden md:flex w-full md:w-[500px] shrink-0 items-center justify-center">
                            <Image
                                src="/undraw_questions_52ic.svg"
                                alt="FAQ Illustration"
                                width={500}
                                height={400}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </section>

                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-slate-50" />
                <FAQQuickLinks />

                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <FAQAccordion />

                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-900" />
                <FAQCTA />

            </main>
            <Footer />
        </div>
    );
}
