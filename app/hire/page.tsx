import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";

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
        <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-slate-100 selection:text-slate-900">
            <Navbar />
            <main className="grow pt-20">

                {/* Hero */}
                <section className="relative px-6 pt-32 pb-24 bg-slate-50 overflow-hidden border-b border-slate-100 min-h-[60vh] flex items-center">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-hire" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-hire)" />
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
                                <span className="text-xs font-ibmplexmonomedium uppercase text-slate-500">Hire in 18 hours</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 leading-[0.92] mb-8 font-dmsans">
                                Find your next <br />
                                <span className="font-medium">great engineer.</span>
                            </h1>
                            <p className="text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed font-dmsans mb-10">
                                Submit a brief. Get a pre-vetted CV in 18 hours. No agencies, no volume plays, no wasted time.
                            </p>
                            <a href="#brief">
                                <button className="bg-black hover:bg-slate-800 text-white font-medium text-base px-8 py-4 rounded-xl transition-colors font-dmsans">
                                    Submit your brief
                                </button>
                            </a>
                        </div>

                        <div className="hidden md:flex w-full md:w-[480px] shrink-0 items-center justify-center">
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
                </section>

                {/* How it works */}
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <section className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-4 tracking-tight">How it works</h2>
                        <p className="text-slate-500 text-lg mb-16 max-w-lg">From brief to first commit — here&apos;s what to expect.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200">
                            {steps.map((s) => (
                                <div key={s.num} className="p-8 flex flex-col gap-5">
                                    <span className="text-sm font-ibmplexmonomedium text-slate-400">{s.num}</span>
                                    <div>
                                        <h3 className="text-lg font-dmsans font-medium text-slate-900 mb-2">{s.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stack tags */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-50" />
                <section className="bg-slate-50 py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="lg:w-[340px] shrink-0">
                                <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-5 tracking-tight leading-tight">
                                    Popular stacks we cover
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    We have pre-vetted engineers across all major technologies. Don&apos;t see yours? Mention it in your brief.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-wrap gap-3">
                                {stackOptions.map((stack) => (
                                    <span key={stack} className="text-sm font-ibmplexmonomedium text-slate-600 border border-slate-200 bg-white px-4 py-2 rounded-lg">
                                        {stack}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brief form */}
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <section id="brief" className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-4 tracking-tight">Submit your brief</h2>
                        <p className="text-slate-500 text-lg mb-16 max-w-lg">Fill in the details below and we&apos;ll get back to you within a few hours.</p>

                        <div className="border border-slate-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-6">
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest block mb-2">Company / Project name</label>
                                    <input className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-dmsans text-base focus:outline-none focus:border-slate-400 transition-colors bg-slate-50" placeholder="e.g. Acme Inc." />
                                </div>
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest block mb-2">Role needed</label>
                                    <input className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-dmsans text-base focus:outline-none focus:border-slate-400 transition-colors bg-slate-50" placeholder="e.g. Senior Backend Engineer" />
                                </div>
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest block mb-2">Tech stack</label>
                                    <input className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-dmsans text-base focus:outline-none focus:border-slate-400 transition-colors bg-slate-50" placeholder="e.g. Node.js, PostgreSQL, AWS" />
                                </div>
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest block mb-2">Your email</label>
                                    <input type="email" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-dmsans text-base focus:outline-none focus:border-slate-400 transition-colors bg-slate-50" placeholder="you@company.com" />
                                </div>
                            </div>

                            <div className="p-10 md:p-14 space-y-6">
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest block mb-2">Team context & requirements</label>
                                    <textarea rows={6} className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-dmsans text-base focus:outline-none focus:border-slate-400 transition-colors bg-slate-50 resize-none" placeholder="Tell us about your team, the problem you're solving, and what a great candidate looks like." />
                                </div>
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest block mb-2">Timeline</label>
                                    <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-dmsans text-base focus:outline-none focus:border-slate-400 transition-colors bg-slate-50">
                                        <option>As soon as possible</option>
                                        <option>Within 2 weeks</option>
                                        <option>Within a month</option>
                                        <option>Just exploring</option>
                                    </select>
                                </div>
                                <button className="w-full bg-black hover:bg-slate-800 text-white font-medium text-base px-7 py-4 rounded-xl transition-colors font-dmsans">
                                    Send brief →
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dark CTA */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-900" />
                <section className="bg-slate-900 text-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="border border-slate-800 rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12">
                            <div className="max-w-xl">
                                <p className="text-sm font-ibmplexmonomedium text-slate-500 uppercase tracking-widest mb-6">No commitment needed</p>
                                <h2 className="text-4xl md:text-5xl font-dmsans font-medium mb-6 leading-[1.1] tracking-tight">
                                    Not ready to submit a brief yet?
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                    Browse our case studies to see what other companies achieved with Bytedocker — or read how our vetting process works.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-white hover:bg-slate-100 text-slate-900 font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">View case studies</button>
                                    <button className="border border-slate-700 hover:border-slate-500 text-white font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">How we vet</button>
                                </div>
                            </div>
                            <div className="w-full md:w-[240px] shrink-0 border border-slate-800 rounded-xl p-6 flex flex-col gap-4">
                                <p className="text-xs font-ibmplexmonomedium text-slate-500 uppercase tracking-widest">The numbers</p>
                                <div className="border-t border-slate-800 pt-4 divide-y divide-slate-800">
                                    {[["18h", "First CV delivered"], ["Top 5%", "Of candidates placed"], ["94%", "Client retention"]].map(([v, l], i) => (
                                        <div key={i} className="py-3">
                                            <p className="text-2xl font-dmsans font-medium text-white">{v}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{l}</p>
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
