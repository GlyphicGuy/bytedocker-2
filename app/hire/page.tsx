import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
import HireBriefForm from "@/app/hire/HireBriefForm";

export const metadata = {
    title: "Hire a Developer | Bytedocker Talent",
    description: "Submit your hiring brief and get matched with a pre-vetted senior developer within 18 hours.",
};

const steps = [
    { num: "01", title: "Submit your brief", description: "Tell us your role, stack, and team context. Takes under 5 minutes." },
    { num: "02", title: "Receive matched CVs", description: "We send you pre-vetted candidates within 18 hours — no noise, no volume plays." },
    { num: "03", title: "Interview & decide", description: "One conversation to confirm fit. Technical vetting is already done." },
    { num: "04", title: "Onboard and ship", description: "Your new engineer is ready to contribute from day one." },
];

const stackOptions = [
    "React / Next.js", "Node.js", "Python", "Go", "TypeScript",
    "React Native", "Kubernetes", "PostgreSQL", "AWS / GCP", "MLOps",
];

export default function HireNowPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#f5f0e8] selection:bg-black selection:text-white">
            <Navbar />
            <main className="grow pt-20">

                {/* Hero */}
                <section className="relative px-6 pt-32 pb-24 bg-[#f5f0e8] overflow-hidden border-b-[4px] border-black min-h-[60vh] flex items-center">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-[#ffe24b] border-[4px] border-black"></div>
                        <div className="absolute -bottom-16 right-10 w-56 h-56 rounded-full bg-[#ff8a5b] border-[4px] border-black"></div>
                        <div className="absolute top-12 right-1/3 w-20 h-20 bg-white border-[4px] border-black rotate-12"></div>
                        <div className="absolute inset-0 opacity-[0.08]">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="grid-hire" width="36" height="36" patternUnits="userSpaceOnUse">
                                        <path d="M 36 0 L 0 0 0 36" fill="none" stroke="black" strokeWidth="2" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid-hire)" />
                            </svg>
                        </div>
                    </div>

                    <div className="container mx-auto max-w-[1400px] relative z-10 flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 max-w-2xl">
                            <div className="inline-flex items-center gap-3 mb-8 bg-white p-2 pr-6 border-[4px] border-black shadow-[6px_6px_0_#000]">
                                <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-[10px] font-bold">BY</span>
                                <span className="text-xs font-ibmplexmonomedium uppercase text-black">Hire in 18 hours</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black leading-[0.98] mb-8 font-dmsans">
                                Find your next <br />
                                <span className="bg-[#b7ffd6] border-[4px] border-black px-2 inline-block -rotate-1">great engineer.</span>
                            </h1>
                            <p className="text-black/80 text-lg md:text-xl max-w-xl leading-relaxed font-dmsans mb-10">
                                Submit a brief. Get a pre-vetted CV in 18 hours. No agencies, no volume plays, no wasted time.
                            </p>
                            <a href="#brief">
                                <button className="bg-black text-white font-black text-base px-8 py-4 uppercase tracking-widest border-[4px] border-black shadow-[6px_6px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#000] transition-all font-ibmplexmonomedium">
                                    Submit your brief
                                </button>
                            </a>
                        </div>

                        <div className="hidden md:flex w-full md:w-[480px] shrink-0 items-center justify-center">
                            <div className="bg-white border-[4px] border-black shadow-[10px_10px_0_#000] p-6 rotate-1">
                                <Image
                                    src="/undraw_agreement_ftet.svg"
                                    alt="Hire a Developer"
                                    width={480}
                                    height={400}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <SectionDivider bgTop="bg-[#f5f0e8]" fillBottom="fill-white" />
                <section className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-black text-black mb-4 tracking-tight">How it works</h2>
                        <p className="text-black/70 text-lg mb-16 max-w-lg">From brief to first commit — here&apos;s what to expect.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {steps.map((s, idx) => (
                                <div
                                    key={s.num}
                                    className="border-[4px] border-black bg-[#fef6da] p-8 flex flex-col gap-5 shadow-[6px_6px_0_#000]"
                                >
                                    <span className="text-sm font-ibmplexmonomedium text-black">
                                        {(idx + 1).toString().padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-dmsans font-black text-black mb-2">{s.title}</h3>
                                        <p className="text-black/70 text-sm leading-relaxed">{s.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stack tags */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-[#f5f0e8]" />
                <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="lg:w-[340px] shrink-0">
                                <h2 className="text-4xl md:text-5xl font-dmsans font-black text-black mb-5 tracking-tight leading-tight">
                                    Popular stacks we cover
                                </h2>
                                <p className="text-black/70 text-lg leading-relaxed">
                                    We have pre-vetted engineers across all major technologies. Don&apos;t see yours? Mention it in your brief.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-wrap gap-3">
                                {stackOptions.map((stack) => (
                                    <span key={stack} className="text-sm font-ibmplexmonomedium text-black border-[3px] border-black bg-white px-4 py-2 shadow-[4px_4px_0_#000]">
                                        {stack}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brief form */}
                <SectionDivider bgTop="bg-[#f5f0e8]" fillBottom="fill-white" />
                <section id="brief" className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-black text-black mb-4 tracking-tight">Submit your brief</h2>
                        <p className="text-black/70 text-lg mb-16 max-w-lg">Fill in the details below and we&apos;ll get back to you within a few hours.</p>

                        <HireBriefForm />
                    </div>
                </section>

                {/* Dark CTA */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-black" />
                <section className="bg-black text-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="border-[4px] border-white p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12 shadow-[8px_8px_0_#fff]">
                            <div className="max-w-xl">
                                <p className="text-sm font-ibmplexmonomedium text-white uppercase tracking-widest mb-6">No commitment needed</p>
                                <h2 className="text-4xl md:text-5xl font-dmsans font-black mb-6 leading-[1.1] tracking-tight">
                                    Not ready to submit a brief yet?
                                </h2>
                                <p className="text-white/70 text-lg leading-relaxed mb-10">
                                    Browse our case studies to see what other companies achieved with Bytedocker — or read how our vetting process works.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-white text-black font-black text-base px-7 py-3.5 uppercase tracking-widest border-[4px] border-white shadow-[6px_6px_0_#fff] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#fff] transition-all font-ibmplexmonomedium">
                                        View case studies
                                    </button>
                                    <button className="bg-black text-white font-black text-base px-7 py-3.5 uppercase tracking-widest border-[4px] border-white shadow-[6px_6px_0_#fff] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#fff] transition-all font-ibmplexmonomedium">
                                        How we vet
                                    </button>
                                </div>
                            </div>
                            <div className="w-full md:w-[240px] shrink-0 border-[4px] border-white p-6 flex flex-col gap-4 shadow-[6px_6px_0_#fff]">
                                <p className="text-xs font-ibmplexmonomedium text-white uppercase tracking-widest">The numbers</p>
                                <div className="border-t-[4px] border-white pt-4 divide-y-[4px] divide-white">
                                    {[["18h", "First CV delivered"], ["Top 1%", "Of candidates placed"], ["97%", "Client retention"]].map(([v, l], i) => (
                                        <div key={i} className="py-3">
                                            <p className="text-2xl font-dmsans font-black text-white">{v}</p>
                                            <p className="text-xs text-white/70 mt-0.5">{l}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
