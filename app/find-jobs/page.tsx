import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";

export const metadata = {
    title: "Find Jobs | Bytedocker Talent",
    description: "Apply to work with world-class startups and scaleups. Bytedocker connects vetted senior engineers with companies that value quality.",
};

const roles = [
    { num: "01", title: "Senior Backend Engineer", stack: "Node.js · PostgreSQL · AWS", type: "Full-time", location: "Remote" },
    { num: "02", title: "Full-Stack Engineer", stack: "React · Python · GCP", type: "Full-time", location: "Remote" },
    { num: "03", title: "MLOps Engineer", stack: "Python · Kubernetes · MLflow", type: "Contract", location: "Remote" },
    { num: "04", title: "Senior Frontend Engineer", stack: "Next.js · TypeScript · Figma", type: "Full-time", location: "Remote" },
    { num: "05", title: "Mobile Engineer", stack: "React Native · TypeScript · Firebase", type: "Full-time", location: "Remote" },
    { num: "06", title: "Platform Engineer", stack: "Go · Redis · PostgreSQL", type: "Contract", location: "Remote" },
];

const perks = [
    { num: "01", title: "Work with top-tier companies", description: "Every client we place developers with has gone through our company review. You only interview with companies worth your time." },
    { num: "02", title: "Full remote, always", description: "Every role in our network is remote-first. No office mandates, no commutes." },
    { num: "03", title: "No recruiter spam", description: "We only reach out when there's a genuine match. You'll never receive a role that doesn't fit your profile." },
    { num: "04", title: "Human support throughout", description: "A real person guides you through the process from application to first day — not a chatbot." },
];

export default function FindJobsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-slate-100 selection:text-slate-900">
            <Navbar />
            <main className="grow pt-20">

                {/* Hero */}
                <section className="relative px-6 pt-32 pb-24 bg-slate-50 overflow-hidden border-b border-slate-100 min-h-[60vh] flex items-center">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-jobs" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-jobs)" />
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
                                <span className="text-xs font-ibmplexmonomedium uppercase text-slate-500">For Developers</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 leading-[0.92] mb-8 font-dmsans">
                                Work you&apos;re <br />
                                <span className="font-medium">proud of.</span>
                            </h1>
                            <p className="text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed font-dmsans mb-10">
                                Join the top 1% of engineers in the Bytedocker network. Work remotely with world-class product companies that value quality.
                            </p>
                            <a href="#apply">
                                <button className="bg-black hover:bg-slate-800 text-white font-medium text-base px-8 py-4 rounded-xl transition-colors font-dmsans">
                                    Apply to join
                                </button>
                            </a>
                        </div>

                        <div className="hidden md:flex w-full md:w-[480px] shrink-0 items-center justify-center">
                            <Image
                                src="/undraw_job-hunt_5umi.svg"
                                alt="Find Jobs Illustration"
                                width={480}
                                height={400}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Open roles */}
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <section className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 tracking-tight mb-2">Open roles</h2>
                                <p className="text-slate-500 text-lg">Active positions from our current client network.</p>
                            </div>
                            <span className="text-sm font-ibmplexmonomedium text-slate-400 uppercase tracking-widest shrink-0">Remote only</span>
                        </div>

                        <div className="divide-y divide-slate-200 border-t border-slate-200">
                            {roles.map((role) => (
                                <div key={role.num} className="py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer">
                                    <div className="flex items-start md:items-center gap-8">
                                        <span className="text-sm font-ibmplexmonomedium text-slate-400 shrink-0 w-8 pt-0.5 md:pt-0">{role.num}</span>
                                        <div>
                                            <h3 className="text-lg font-dmsans font-medium text-slate-900 group-hover:text-slate-700 transition-colors">{role.title}</h3>
                                            <p className="text-sm font-ibmplexmonomedium text-slate-400 mt-1">{role.stack}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 ml-16 md:ml-0">
                                        <span className="text-xs font-ibmplexmonomedium text-slate-500 border border-slate-200 px-2.5 py-1 rounded-full">{role.type}</span>
                                        <span className="text-xs font-ibmplexmonomedium text-slate-400">{role.location}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why join */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-50" />
                <section className="bg-slate-50 py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-4 tracking-tight">Why join the network</h2>
                        <p className="text-slate-500 text-lg mb-16 max-w-lg">What sets working through Bytedocker apart from applying directly or through traditional agencies.</p>

                        <div className="max-w-3xl divide-y divide-slate-200 border-t border-slate-200">
                            {perks.map((p) => (
                                <div key={p.num} className="py-8 flex gap-8 items-start">
                                    <span className="text-sm font-ibmplexmonomedium text-slate-400 pt-0.5 shrink-0 w-8">{p.num}</span>
                                    <div>
                                        <h3 className="text-lg font-dmsans font-medium text-slate-900 mb-2">{p.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Application form */}
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <section id="apply" className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-4 tracking-tight">Apply to join</h2>
                        <p className="text-slate-500 text-lg mb-16 max-w-lg">Tell us about yourself. If your profile looks like a fit, we&apos;ll invite you to the vetting process.</p>

                        <div className="border border-slate-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-6">
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest block mb-2">Full name</label>
                                    <input className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-dmsans text-base focus:outline-none focus:border-slate-400 transition-colors bg-slate-50" placeholder="Your full name" />
                                </div>
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest block mb-2">Email</label>
                                    <input type="email" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-dmsans text-base focus:outline-none focus:border-slate-400 transition-colors bg-slate-50" placeholder="you@email.com" />
                                </div>
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest block mb-2">Primary stack</label>
                                    <input className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-dmsans text-base focus:outline-none focus:border-slate-400 transition-colors bg-slate-50" placeholder="e.g. React, Node.js, PostgreSQL" />
                                </div>
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest block mb-2">Years of experience</label>
                                    <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-dmsans text-base focus:outline-none focus:border-slate-400 transition-colors bg-slate-50">
                                        <option>3–5 years</option>
                                        <option>5–8 years</option>
                                        <option>8–12 years</option>
                                        <option>12+ years</option>
                                    </select>
                                </div>
                            </div>

                            <div className="p-10 md:p-14 space-y-6">
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest block mb-2">LinkedIn or portfolio URL</label>
                                    <input className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-dmsans text-base focus:outline-none focus:border-slate-400 transition-colors bg-slate-50" placeholder="https://linkedin.com/in/yourname" />
                                </div>
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest block mb-2">Tell us about yourself</label>
                                    <textarea rows={6} className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-dmsans text-base focus:outline-none focus:border-slate-400 transition-colors bg-slate-50 resize-none" placeholder="What have you built? What kind of work are you looking for?" />
                                </div>
                                <button className="w-full bg-black hover:bg-slate-800 text-white font-medium text-base px-7 py-4 rounded-xl transition-colors font-dmsans">
                                    Submit application →
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
                                <p className="text-sm font-ibmplexmonomedium text-slate-500 uppercase tracking-widest mb-6">Top 1% only</p>
                                <h2 className="text-4xl md:text-5xl font-dmsans font-medium mb-6 leading-[1.1] tracking-tight">
                                    Our bar is high for a reason.
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                    We only place developers we&apos;d hire ourselves. If you meet that bar, you&apos;ll have access to the best remote opportunities available.
                                </p>
                                <button className="bg-white hover:bg-slate-100 text-slate-900 font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">
                                    Learn about our vetting process
                                </button>
                            </div>
                            <div className="w-full md:w-[240px] shrink-0 border border-slate-800 rounded-xl p-6 flex flex-col gap-4">
                                <p className="text-xs font-ibmplexmonomedium text-slate-500 uppercase tracking-widest">What we test</p>
                                <div className="border-t border-slate-800 pt-4 divide-y divide-slate-800">
                                    {[["English", "Proficiency assessment"], ["Code", "Offline task + live review"], ["Soft skills", "Video interview"]].map(([v, l], i) => (
                                        <div key={i} className="py-3">
                                            <p className="text-sm font-medium text-white">{v}</p>
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
