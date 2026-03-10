"use client";

import { useState } from "react";

export default function CTA() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
    };

    return (
        <section className="px-4 md:px-6 py-16 md:py-24 bg-slate-50">
            <div className="relative w-full max-w-[1400px] mx-auto rounded-3xl overflow-hidden flex flex-col items-center p-6 md:p-16 group">
                {/* Background Video with Gradient Overlay */}
                <div className="absolute inset-0 bg-black">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60"
                    >
                        <source src="/cta-bg.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full flex flex-col lg:flex-row gap-12 md:gap-16 items-center lg:items-end">
                    {/* Left Content */}
                    <div className="flex-1 space-y-8 md:space-y-10 text-center lg:text-left w-full">
                        <div className="space-y-4">
                            <span className="text-white/60 text-[10px] md:text-xs uppercase font-ibmplexmonomedium tracking-[0.2em]">
                                30 MINUTES. YOUR STACK. LIVE RESULTS.
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium text-white font-dmsans leading-tight">
                                Build Your Elite <br className="hidden md:block" /> Engineering Team
                            </h2>
                            <p className="text-sm md:text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-dmsans">
                                Join the top 5% of funded startups that leverage Bytedocker to integrate pre-vetted engineers into their remote team in 48 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 md:gap-4 max-w-xl mx-auto lg:mx-0">
                            <div className="relative grow group/input">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 group-focus-within/input:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Work email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-12 md:h-14 pl-12 pr-4 rounded-xl md:rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md placeholder:text-white/40 text-white font-ibmplexmonomedium text-[10px] md:text-xs uppercase focus:outline-none focus:ring-2 focus:ring-white/30 transition-all font-medium"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="h-12 md:h-14 px-10 rounded-xl md:rounded-2xl bg-white text-black font-black text-[11px] md:text-[12px] uppercase tracking-[0.2em] hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center whitespace-nowrap"
                            >
                                Hire Now
                            </button>
                        </form>

                        <div className="text-white/40 text-[8px] md:text-[10px] uppercase font-ibmplexmonomedium tracking-widest hidden sm:block">
                            48H MATCH — NO PREP — TRIAL INCLUDED — RESPONSE IN 2 HOURS
                        </div>
                    </div>

                    {/* Right Testimonial Card */}
                    <div className="w-full lg:w-[420px] shrink-0">
                        <div className="bg-white rounded-2xl md:rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden group/card text-left">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50 group-hover/card:scale-150 transition-transform duration-700"></div>
                            <div className="relative z-10 space-y-6 md:space-y-8">
                                <p className="text-lg md:text-2xl text-slate-800 font-medium leading-relaxed font-dmsans tracking-tight">
                                    “Our team moves faster because they focus on building, not hiring. Bytedocker engineers are ready to push code from day one.”
                                </p>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-black font-black font-ibmplexmonomedium">
                                        HEAD OF ENGINEERING
                                    </p>
                                    <p className="text-[8px] text-slate-400 uppercase tracking-widest font-bold font-ibmplexmonomedium">
                                        Series B SaaS Startup
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

