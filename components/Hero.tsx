"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative px-4 md:px-6 pt-24 md:pt-32 pb-8 md:pb-12 bg-[#f5f0e8] flex flex-col items-center">
            <div className="relative w-full max-w-[1400px] min-h-[500px] md:min-h-[700px] rounded-none overflow-hidden flex flex-col p-6 md:p-16 border-[4px] border-[#0a0a0a] shadow-neo bg-[#0a0a0a]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>

                {/* Main Content */}
                <div className="relative z-10 max-w-5xl mt-auto md:mt-0">
                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-wider text-[#f5f0e8] leading-[1.1] md:leading-[0.92] mb-6 md:mb-8 font-family:var(--font-grotesk) uppercase">
                        Pre-Vetted Remote Engineers for Funded Startups
                    </h1>

                    <p className="text-[#f5f0e8] text-base md:text-xl mb-10 md:mb-12 max-w-2xl opacity-90 leading-relaxed font-dmsans">
                        Hire top 5% Indian developers matched to your startup within 48 hours. No hiring chaos. No long interviews. No guesswork.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                        <Link href="/for-startups" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-[#f5f0e8] text-[#0a0a0a] text-[12px] md:text-[13px] font-black px-10 py-4 rounded-none uppercase tracking-widest hover:shadow-neo-lg transition-all shadow-neo active:translate-y-0.5 cursor-pointer border-[4px] border-[#f5f0e8]">
                                Hire Now
                            </button>
                        </Link>
                        <Link href="/for-developers" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-transparent text-[#f5f0e8] border-[3px] border-[#f5f0e8] text-[12px] md:text-[13px] font-bold px-10 py-4 rounded-none uppercase hover:bg-[#f5f0e8] hover:text-[#0a0a0a] transition-all hover:shadow-neo active:translate-y-0.5 shadow-neo-sm cursor-pointer">
                                Apply as Developer
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="relative z-10 hidden sm:flex flex-col md:flex-row items-end justify-between gap-12 mt-auto">
                    <div className="max-w-lg">
                        <p className="text-[#f5f0e8] text-sm md:text-base leading-relaxed font-dmsans pr-4">
                            Bytedocker Talent connects funded startups with rigorously vetted, high-performing remote engineers who passing advanced technical screening and real-world project simulations.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}


