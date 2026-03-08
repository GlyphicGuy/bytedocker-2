"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative px-6 pt-20 pb-12 bg-slate-50 flex flex-col items-center">
            <div className="relative w-full max-w-[1400px] min-h-[700px] rounded-2xl overflow-hidden flex flex-col p-8 md:p-16">
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
                <div className="relative z-10 max-w-5xl">
                    <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white leading-[0.92] mb-8">
                        Pre-Vetted Remote Engineers for Funded Startups
                    </h1>

                    <p className="text-white text-lg md:text-xl mb-12 max-w-2xl opacity-90 leading-relaxed font-dmsans">
                        Hire top 5% Indian developers matched to your startup within 48 hours. No hiring chaos. No long interviews. No guesswork.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-10">
                        <Link href="/for-startups">
                            <button className="bg-white text-black text-[13px] font-bold px-10 py-4 rounded-lg uppercase hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-2xl cursor-pointer">
                                Hire a Developer
                            </button>
                        </Link>
                        <Link href="/for-developers">
                            <button className="bg-transparent text-white border border-white/30 text-[13px] font-bold px-10 py-4 rounded-lg uppercase backdrop-blur-md hover:bg-white/10 transition-all hover:scale-105 active:scale-95 shadow-2xl cursor-pointer">
                                Apply as Developer
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 mt-auto">
                    <div className="max-w-lg">
                        <p className="text-white/80 text-sm md:text-base leading-relaxed font-dmsans mb-12 pr-4">
                            Bytedocker Talent connects funded startups with rigorously vetted, high-performing remote engineers who passing advanced technical screening and real-world project simulations.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}


