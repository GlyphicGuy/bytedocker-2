"use client";

import { useState } from "react";

export default function CTA() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
    };

    return (
        <section className="px-4 md:px-6 py-16 md:py-24 bg-[#0a0a0a] border-t-[3px] border-[#f5f0e8] relative overflow-hidden">
            <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden flex flex-col items-center p-6 md:p-16 group">
                {/* Decorative Animated Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Corner accent squares - Animated */}
                    <div className="absolute top-8 left-8 w-20 h-20 border-[2px] border-dashed border-[#ff8c00] opacity-20 animate-rotate-slow" style={{ transform: "rotate(45deg)" }}></div>
                    <div className="absolute bottom-8 right-8 w-16 h-16 border-[2px] border-dashed border-[#ff8c00] opacity-25 animate-rotate-slow" style={{ animationDirection: "reverse", transform: "rotate(45deg)" }}></div>

                    {/* Floating dots with pulse animation */}
                    <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-[#ff8c00] rounded-full opacity-40 animate-pulse-gentle"></div>
                    <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-[#ff8c00] rounded-full opacity-30 animate-pulse-gentle" style={{ animationDelay: "0.5s" }}></div>
                    <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-[#ff8c00] rounded-full opacity-35 animate-pulse-gentle" style={{ animationDelay: "1s" }}></div>

                    {/* Diagonal accent lines - Animated */}
                    <div className="absolute top-12 left-[5%] w-80 h-[2px] bg-gradient-to-r from-[#ff8c00] to-transparent opacity-20 animate-drift-left" style={{ transform: "rotateZ(25deg)" }}></div>
                    <div className="absolute bottom-1/4 right-[5%] w-96 h-[2px] bg-gradient-to-l from-[#ff8c00] to-transparent opacity-20 animate-drift-right" style={{ transform: "rotateZ(-25deg)" }}></div>
                </div>

                <div className="relative z-10 w-full flex flex-col lg:flex-row gap-12 md:gap-16 items-center lg:items-end">
                    {/* Left Content */}
                    <div className="flex-1 space-y-8 md:space-y-10 text-center lg:text-left w-full">
                        <div className="space-y-4">
                            <span className="text-[#ff8c00] text-[10px] md:text-xs uppercase font-ibmplexmonomedium tracking-[0.2em] font-bold">
                                30 MINUTES. YOUR STACK. LIVE RESULTS.
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#f5f0e8] font-family:var(--font-grotesk) leading-tight uppercase">
                                Build Your Elite <br className="hidden md:block" /> Engineering Team
                            </h2>
                            <p className="text-sm md:text-lg text-[#cccccc] max-w-xl mx-auto lg:mx-0 leading-relaxed font-dmsans">
                                Join the top 5% of funded startups that leverage Bytedocker to integrate pre-vetted engineers into their remote team in 18 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 md:gap-4 max-w-xl mx-auto lg:mx-0">
                            <div className="relative grow group/input">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#999999] group-focus-within/input:text-[#f5f0e8] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Work email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-12 md:h-14 pl-12 pr-4 rounded-none bg-[#ffffff] border-[3px] border-[#f5f0e8] placeholder:text-[#999999] text-[#0a0a0a] font-ibmplexmonomedium text-[10px] md:text-xs uppercase focus:outline-none focus:ring-3 focus:ring-[#ff8c00] transition-all font-medium shadow-neo-sm"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="h-12 md:h-14 px-10 rounded-none bg-[#ff8c00] text-[#0a0a0a] font-black text-[11px] md:text-[12px] uppercase tracking-widest hover:shadow-neo-lg transition-all active:translate-y-0.5 shadow-neo flex items-center justify-center whitespace-nowrap border-[4px] border-[#ff8c00]"
                            >
                                Hire Now
                            </button>
                        </form>

                        <div className="text-[#666666] text-[8px] md:text-[10px] uppercase font-ibmplexmonomedium tracking-widest hidden sm:block">
                            18H MATCH — NO PREP — TRIAL INCLUDED — RESPONSE IN 2 HOURS
                        </div>
                    </div>

                    {/* Right Testimonial Card */}
                    <div className="w-full lg:w-[420px] shrink-0">
                        <div className="bg-[#ffffff] border-[4px] border-[#f5f0e8] p-8 md:p-10 shadow-neo-lg relative overflow-hidden group/card text-left">
                            {/* Decorative corner dots */}
                            <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#ff8c00] rounded-full"></div>
                            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#ff8c00] rounded-full"></div>

                            {/* Dashed border accent */}
                            <div className="absolute top-0 right-0 w-12 h-12 border-t-[2px] border-r-[2px] border-dashed border-[#ff8c00] opacity-30"></div>

                            <div className="relative z-10 space-y-6 md:space-y-8">
                                <p className="text-lg md:text-2xl text-[#0a0a0a] font-medium leading-relaxed font-dmsans tracking-tight">
                                    "Our team moves faster because they focus on building, not hiring. Bytedocker engineers are ready to push code from day one."
                                </p>
                                <div className="space-y-1 border-t-[3px] border-[#0a0a0a] pt-4">
                                    <p className="text-[10px] uppercase tracking-widest text-[#ff8c00] font-black font-ibmplexmonomedium">
                                        HEAD OF ENGINEERING
                                    </p>
                                    <p className="text-[8px] text-[#999999] uppercase tracking-widest font-bold font-ibmplexmonomedium">
                                        Series B SaaS Startup
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes rotate-subtle {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes pulse-gentle {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.6;
                        transform: scale(1.3);
                    }
                }

                @keyframes drift-right {
                    0%, 100% {
                        transform: rotateZ(-25deg) translateX(0);
                        opacity: 0.2;
                    }
                    50% {
                        transform: rotateZ(-25deg) translateX(-20px);
                        opacity: 0.3;
                    }
                }

                @keyframes drift-left {
                    0%, 100% {
                        transform: rotateZ(25deg) translateX(0);
                        opacity: 0.2;
                    }
                    50% {
                        transform: rotateZ(25deg) translateX(20px);
                        opacity: 0.3;
                    }
                }

                .animate-rotate-slow {
                    animation: rotate-subtle 20s linear infinite;
                }

                .animate-pulse-gentle {
                    animation: pulse-gentle 3s ease-in-out infinite;
                }

                .animate-drift-right {
                    animation: drift-right 4s ease-in-out infinite;
                }

                .animate-drift-left {
                    animation: drift-left 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}

