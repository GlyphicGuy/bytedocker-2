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
                                    <pattern id="grid-jobs" width="36" height="36" patternUnits="userSpaceOnUse">
                                        <path d="M 36 0 L 0 0 0 36" fill="none" stroke="black" strokeWidth="2" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid-jobs)" />
                            </svg>
                        </div>
                    </div>

                    <div className="container mx-auto max-w-[1400px] relative z-10 flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 max-w-2xl">
                            <div className="inline-flex items-center gap-3 mb-8 bg-white p-2 pr-6 border-[4px] border-black shadow-[6px_6px_0_#000]">
                                <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-[10px] font-bold">BY</span>
                                <span className="text-xs font-ibmplexmonomedium uppercase text-black">For Developers</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black leading-[0.98] mb-8 font-dmsans">
                                Work you&apos;re <br />
                                <span className="bg-[#b7ffd6] border-[4px] border-black px-2 inline-block -rotate-1">proud of.</span>
                            </h1>
                            <p className="text-black/80 text-lg md:text-xl max-w-xl leading-relaxed font-dmsans mb-10">
                                Join the top 1% of engineers in the Bytedocker network. Work remotely with world-class product companies that value quality.
                            </p>
                            <a href="#apply">
                                <button className="bg-black text-white font-black text-base px-8 py-4 uppercase tracking-widest border-[4px] border-black shadow-[6px_6px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#000] transition-all font-ibmplexmonomedium">
                                    Apply to join
                                </button>
                            </a>
                        </div>

                        <div className="hidden md:flex w-full md:w-[480px] shrink-0 items-center justify-center">
                            <div className="bg-white border-[4px] border-black shadow-[10px_10px_0_#000] p-6 rotate-1">
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
                    </div>
                </section>

                {/* Open roles */}
                <SectionDivider bgTop="bg-[#f5f0e8]" fillBottom="fill-white" />
                <section className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-dmsans font-black text-black tracking-tight mb-2">Open roles</h2>
                                <p className="text-black/70 text-lg">Active positions from our current client network.</p>
                            </div>
                            <span className="text-sm font-ibmplexmonomedium text-black uppercase tracking-widest shrink-0">Remote only</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            {roles.map((role) => (
                                <div
                                    key={role.num}
                                    className="border-[4px] border-black bg-[#fef6da] px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[6px_6px_0_#000]"
                                >
                                    <div className="flex items-start md:items-center gap-8">
                                        <span className="text-sm font-ibmplexmonomedium text-black shrink-0 w-8 pt-0.5 md:pt-0">{role.num}</span>
                                        <div>
                                            <h3 className="text-lg font-dmsans font-black text-black">{role.title}</h3>
                                            <p className="text-sm font-ibmplexmonomedium text-black/70 mt-1">{role.stack}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 ml-16 md:ml-0">
                                        <span className="text-xs font-ibmplexmonomedium text-black border-[3px] border-black px-2.5 py-1 bg-white">{role.type}</span>
                                        <span className="text-xs font-ibmplexmonomedium text-black">{role.location}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why join */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-[#f5f0e8]" />
                <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-black text-black mb-4 tracking-tight">Why join the network</h2>
                        <p className="text-black/70 text-lg mb-16 max-w-lg">What sets working through Bytedocker apart from applying directly or through traditional agencies.</p>

                        <div className="max-w-3xl flex flex-col gap-6">
                            {perks.map((p) => (
                                <div
                                    key={p.num}
                                    className="border-[4px] border-black bg-white px-6 py-6 flex gap-6 items-start shadow-[6px_6px_0_#000]"
                                >
                                    <span className="text-sm font-ibmplexmonomedium text-black pt-0.5 shrink-0 w-8">{p.num}</span>
                                    <div>
                                        <h3 className="text-lg font-dmsans font-black text-black mb-2">{p.title}</h3>
                                        <p className="text-black/70 text-sm leading-relaxed">{p.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Application form */}
                <SectionDivider bgTop="bg-[#f5f0e8]" fillBottom="fill-white" />
                <section id="apply" className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-black text-black mb-4 tracking-tight">Apply to join</h2>
                        <p className="text-black/70 text-lg mb-16 max-w-lg">Tell us about yourself. If your profile looks like a fit, we&apos;ll invite you to the vetting process.</p>

                        <div className="border-[4px] border-black overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-[8px_8px_0_#000]">
                            <div className="p-10 md:p-14 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black space-y-6 bg-[#fef6da]">
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Full name</label>
                                    <input className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white" placeholder="Your full name" />
                                </div>
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Email</label>
                                    <input type="email" className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white" placeholder="you@email.com" />
                                </div>
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Primary stack</label>
                                    <input className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white" placeholder="e.g. React, Node.js, PostgreSQL" />
                                </div>
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Years of experience</label>
                                    <select className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white">
                                        <option>3–5 years</option>
                                        <option>5–8 years</option>
                                        <option>8–12 years</option>
                                        <option>12+ years</option>
                                    </select>
                                </div>
                            </div>

                            <div className="p-10 md:p-14 space-y-6 bg-white">
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">LinkedIn or portfolio URL</label>
                                    <input className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white" placeholder="https://linkedin.com/in/yourname" />
                                </div>
                                <div>
                                    <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Tell us about yourself</label>
                                    <textarea rows={6} className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white resize-none" placeholder="What have you built? What kind of work are you looking for?" />
                                </div>
                                <button className="w-full bg-black text-white font-black text-base px-7 py-4 uppercase tracking-widest border-[4px] border-black shadow-[6px_6px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#000] transition-all font-ibmplexmonomedium">
                                    Submit application →
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dark CTA */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-black" />
                <section className="bg-black text-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="border-[4px] border-white p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12 shadow-[8px_8px_0_#fff]">
                            <div className="max-w-xl">
                                <p className="text-sm font-ibmplexmonomedium text-white uppercase tracking-widest mb-6">Top 1% only</p>
                                <h2 className="text-4xl md:text-5xl font-dmsans font-black mb-6 leading-[1.1] tracking-tight">
                                    Our bar is high for a reason.
                                </h2>
                                <p className="text-white/70 text-lg leading-relaxed mb-10">
                                    We only place developers we&apos;d hire ourselves. If you meet that bar, you&apos;ll have access to the best remote opportunities available.
                                </p>
                                <button className="bg-white text-black font-black text-base px-7 py-3.5 uppercase tracking-widest border-[4px] border-white shadow-[6px_6px_0_#fff] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#fff] transition-all font-ibmplexmonomedium">
                                    Learn about our vetting process
                                </button>
                            </div>
                            <div className="w-full md:w-[240px] shrink-0 border-[4px] border-white p-6 flex flex-col gap-4 shadow-[6px_6px_0_#fff]">
                                <p className="text-xs font-ibmplexmonomedium text-white uppercase tracking-widest">What we test</p>
                                <div className="border-t-[4px] border-white pt-4 divide-y-[4px] divide-white">
                                    {[["English", "Proficiency assessment"], ["Code", "Offline task + live review"], ["Soft skills", "Video interview"]].map(([v, l], i) => (
                                        <div key={i} className="py-3">
                                            <p className="text-sm font-black text-white">{v}</p>
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
