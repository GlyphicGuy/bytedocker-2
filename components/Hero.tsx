"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative px-4 md:px-6 pt-32 md:pt-40 pb-20 md:pb-32 bg-[#f5f0e8] flex flex-col items-center overflow-hidden">
            {/* Dotted Grid Background - Animated */}
            <div className="absolute inset-0 opacity-8 animate-grid-subtle">
                <svg className="w-full h-full" style={{ animationName: "none" }}>
                    <defs>
                        <pattern id="dots-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="2" fill="#ff8c00" opacity="0.4" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots-pattern)" />
                </svg>
            </div>

            {/* Diagonal dashed lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.15 }}>
                <line x1="0" y1="100" x2="600" y2="300" stroke="#ff8c00" strokeWidth="2" strokeDasharray="10,5" />
                <line x1="1400" y1="0" x2="800" y2="500" stroke="#ff8c00" strokeWidth="2" strokeDasharray="10,5" />
            </svg>

            {/* Diagonal accent lines - Animated */}
            <div className="absolute top-20 right-[10%] w-96 h-[2px] bg-gradient-to-r from-[#ff8c00] to-transparent opacity-25 animate-drift-right" style={{ transform: "rotateZ(-25deg)" }}></div>
            <div className="absolute bottom-32 left-[5%] w-80 h-[2px] bg-gradient-to-l from-[#ff8c00] to-transparent opacity-25 animate-drift-left" style={{ transform: "rotateZ(25deg)" }}></div>

            {/* Floating geometric elements with dashed borders - Animated */}
            <div className="absolute top-1/3 right-[8%] w-24 h-24 border-[2px] border-dashed border-[#ff8c00] opacity-20 animate-float-slow" style={{ transform: "rotate(45deg)" }}></div>
            <div className="absolute bottom-1/4 left-[10%] w-16 h-16 border-[2px] border-dashed border-[#ff8c00] opacity-25 animate-float-slower" style={{ transform: "rotate(45deg)" }}></div>

            {/* Accent dots scattered - Animated with pulse */}
            <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-[#ff8c00] rounded-full opacity-40 animate-pulse-gentle"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-[#ff8c00] rounded-full opacity-30 animate-pulse-gentle" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute top-1/2 left-1/4 w-2.5 h-2.5 bg-[#ff8c00] rounded-full opacity-35 animate-pulse-gentle" style={{ animationDelay: "1s" }}></div>
            <div className="absolute bottom-1/2 right-1/2 w-1 h-1 bg-[#ff8c00] rounded-full opacity-40 animate-pulse-gentle" style={{ animationDelay: "1.5s" }}></div>

            {/* Corner accents with dashed style - Rotated animation */}
            <div className="absolute top-0 left-0 w-24 h-24 animate-rotate-slow">
                <div className="absolute top-4 left-4 w-16 h-16 border-l-[3px] border-t-[3px] border-dashed border-[#ff8c00] opacity-40"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 animate-rotate-slow" style={{ animationDirection: "reverse" }}>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-r-[3px] border-b-[3px] border-dashed border-[#ff8c00] opacity-40"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-[1000px]">
                {/* Pre-heading with accent */}
                <div className="flex items-center gap-3 mb-8">
                    <span className="inline-block w-4 h-4 border-[2px] border-[#ff8c00] rounded-full"></span>
                    <span className="text-xs font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest font-black">Top Talent</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0a0a0a] leading-[1.2] md:leading-[1.15] mb-8 max-w-4xl font-family:var(--font-grotesk) uppercase">
                    Pre-Vetted Remote Engineers for Funded Startups
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed max-w-2xl mb-12 md:mb-16 font-dmsans">
                    Hire top 1% Indian developers matched to your startup within 18 hours. No hiring chaos. No long interviews. No guesswork.
                </p>

                {/* CTA Buttons - Enhanced with more pop */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16 md:mb-20">
                    <Link href="/for-startups">
                        <button className="bg-[#ff8c00] hover:bg-[#e67e00] hover:shadow-lg text-[#f5f0e8] font-black text-sm px-8 py-3 rounded-none uppercase tracking-widest transition-all cursor-pointer font-ibmplexmonomedium border-[3px] border-[#ff8c00] transform hover:scale-105">
                            Hire Now
                        </button>
                    </Link>
                    <Link href="/for-developers">
                        <button className="bg-transparent hover:bg-[#0a0a0a] hover:bg-opacity-8 text-[#0a0a0a] font-black text-sm px-8 py-3 rounded-none uppercase tracking-widest transition-all cursor-pointer font-ibmplexmonomedium border-[3px] border-[#0a0a0a] transform hover:scale-105">
                            Apply as Developer
                        </button>
                    </Link>
                </div>

                {/* Key Stats/Features - Enhanced Grid with more visual interest */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-[3px] border-[#0a0a0a] rounded-none overflow-hidden relative">
                    {/* Decorative dots corners */}
                    <div className="absolute -top-3 -left-3 w-2 h-2 bg-[#ff8c00] rounded-full"></div>
                    <div className="absolute -bottom-3 -right-3 w-2 h-2 bg-[#ff8c00] rounded-full"></div>

                    <div className="p-8 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#0a0a0a] relative group hover:bg-[#f5f0e8] hover:bg-opacity-50 transition-all">
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#ff8c00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-xs font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest font-black mb-3">Turnaround</p>
                        <p className="text-3xl md:text-4xl font-black text-[#0a0a0a]">18h</p>
                    </div>
                    <div className="p-8 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#0a0a0a] relative group hover:bg-[#f5f0e8] hover:bg-opacity-50 transition-all">
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#ff8c00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-xs font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest font-black mb-3">Retention Rate</p>
                        <p className="text-3xl md:text-4xl font-black text-[#0a0a0a]">97%+</p>
                    </div>
                    <div className="p-8 md:p-10 relative group hover:bg-[#f5f0e8] hover:bg-opacity-50 transition-all">
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#ff8c00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-xs font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest font-black mb-3">Vetting Since</p>
                        <p className="text-3xl md:text-4xl font-black text-[#0a0a0a]">2022</p>
                    </div>
                </div>

                {/* Bottom Descriptor with enhanced styling */}
                <div className="mt-16 md:mt-20 relative">
                    <div className="border-l-[6px] border-[#ff8c00] pl-6 pt-4 pb-4 relative">
                        {/* Dotted accent pattern */}
                        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex gap-2">
                            <span className="w-1.5 h-1.5 bg-[#ff8c00] rounded-full opacity-30"></span>
                            <span className="w-1.5 h-1.5 bg-[#ff8c00] rounded-full opacity-20"></span>
                            <span className="w-1.5 h-1.5 bg-[#ff8c00] rounded-full opacity-10"></span>
                        </div>
                        <p className="text-sm md:text-base text-[#4a4a4a] leading-relaxed font-dmsans max-w-2xl">
                            Bytedocker connects funded startups with rigorously vetted, high-performing remote engineers. Every candidate passes advanced technical screening and real-world project simulations.
                        </p>
                    </div>
                    {/* Small accent dot */}
                    <div className="absolute -left-4 top-0 w-3 h-3 bg-[#ff8c00] rounded-full"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0px) rotate(45deg);
                    }
                    50% {
                        transform: translate(-10px, -10px) rotate(45deg);
                    }
                }

                @keyframes float-slow {
                    0%, 100% {
                        transform: translate(0, 0) rotate(45deg);
                    }
                    50% {
                        transform: translate(8px, -15px) rotate(45deg);
                    }
                }

                @keyframes float-slower {
                    0%, 100% {
                        transform: translate(0, 0) rotate(45deg);
                    }
                    50% {
                        transform: translate(-12px, -20px) rotate(45deg);
                    }
                }

                @keyframes drift-right {
                    0%, 100% {
                        transform: rotateZ(-25deg) translateX(0);
                        opacity: 0.25;
                    }
                    50% {
                        transform: rotateZ(-25deg) translateX(-20px);
                        opacity: 0.35;
                    }
                }

                @keyframes drift-left {
                    0%, 100% {
                        transform: rotateZ(25deg) translateX(0);
                        opacity: 0.25;
                    }
                    50% {
                        transform: rotateZ(25deg) translateX(20px);
                        opacity: 0.35;
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

                @keyframes rotate-subtle {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes grid-fade {
                    0%, 100% {
                        opacity: 0.08;
                    }
                    50% {
                        opacity: 0.12;
                    }
                }

                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }

                .animate-float-slower {
                    animation: float-slower 8s ease-in-out infinite;
                }

                .animate-drift-right {
                    animation: drift-right 4s ease-in-out infinite;
                }

                .animate-drift-left {
                    animation: drift-left 4s ease-in-out infinite;
                }

                .animate-pulse-gentle {
                    animation: pulse-gentle 3s ease-in-out infinite;
                }

                .animate-rotate-slow {
                    animation: rotate-subtle 20s linear infinite;
                }

                .animate-grid-subtle {
                    animation: grid-fade 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}


