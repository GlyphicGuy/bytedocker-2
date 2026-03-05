"use client";

import { useState } from "react";

export default function CTA() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
    };

    return (
        <section className="px-6 py-20 bg-slate-50">
            <div className="relative w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-10 md:py-16 group">
                {/* Background Video with Gradient Overlay */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-all duration-1000"
                    >
                        <source src="/cta-bg.mp4" type="video/mp4" />
                    </video>

                </div>

                <div className="relative z-10 w-full flex flex-col lg:flex-row gap-16 items-end">
                    {/* Left Content */}
                    <div className="flex-1 space-y-10 text-left">
                        <div className="space-y-4">
                            <span className="text-white/80 text-[10px] md:text-xs uppercase font-ibmplexmonomedium">
                                30 MINUTES. YOUR STACK. LIVE RESULTS.
                            </span>
                            <h2 className="text-4xl md:text-5xl font-medium text-white font-dmsans">
                                Build Your Elite <br /> Engineering Team
                            </h2>
                            <p className="text-md text-white/80 max-w-xl leading-relaxed font-dmsans">
                                Join the top 5% of funded startups that leverage Bytedocker to integrate pre-vetted engineers into their remote team in 48 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-4 max-w-xl">
                            <div className="relative flex-grow group/input">
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-black group-focus-within/input:text-black transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Work email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-12 pl-10 pr-4 rounded-2xl bg-white border border-white/20 backdrop-blur-md placeholder:text-black text-black font-ibmplexmonomedium text-xs uppercase focus:outline-none focus:ring-2 focus:ring-white/30 transition-all font-medium"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="h-12 px-6 rounded-2xl bg-white text-black font-ibmplexmonomedium text-xs uppercase hover:bg-slate-50 transition-all shadow-2xl flex items-center justify-center whitespace-nowrap"
                            >
                                Book Demo
                            </button>
                        </form>

                        <div className="text-white text-xs uppercase font-ibmplexmonomedium">
                            48H MATCH - NO PREP - TRIAL INCLUDED - RESPONSE IN 2 HOURS
                        </div>
                    </div>

                    {/* Right Testimonial Card */}
                    <div className="w-full lg:w-[450px]">
                        <div className="bg-white rounded-2xl p-6 shadow-2xl relative overflow-hidden group/card text-left">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50 group-hover/card:scale-150 transition-transform duration-700"></div>
                            <div className="relative z-10 space-y-8">
                                <p className="text-xl text-slate-800 font-medium leading-relaxed font-dmsans">
                                    “Our team moves faster because they focus on building, not hiring. Bytedocker engineers are ready to push code from day one.”
                                </p>
                                <div className="space-y-1">
                                    <p className="text-xs  uppercase tracking-widest text-black font-ibmplexmonomedium">
                                        HEAD OF ENGINEERING
                                    </p>
                                    <p className="text-xs  text-black uppercase tracking-tight font-ibmplexmonomedium">
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

