"use client";

import Link from "next/link";
import Image from "next/image";

export default function DeveloperHero() {
    const stats = [
        { label: "Active Developers", val: "5,000+" },
        { label: "Avg. Match Time", val: "13 Days" },
        { label: "Hours Logged", val: "2.5M+" },
        { label: "Partner Startups", val: "400+" }
    ];

    return (
        <section className="relative px-6 pt-32 pb-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
            {/* Technical Stroke Background (Grid) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-hero)" />
                </svg>
            </div>

            {/* Dashed Line Accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-black/5"></div>
                <div className="absolute bottom-1/4 left-0 w-full border-t border-dashed border-black/5"></div>
                <div className="absolute left-1/4 top-0 h-full border-l border-dashed border-black/5"></div>
                <div className="absolute right-1/4 top-0 h-full border-l border-dashed border-black/5"></div>
            </div>

            <div className="container mx-auto max-w-[1400px] relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center mb-0">
                    <div className="flex-1 max-w-2xl">
                        <div className="inline-flex items-center gap-3 mb-8 bg-white/50 backdrop-blur-sm p-2 pr-6 rounded-full border border-slate-200">
                            <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-[10px] font-bold">BY</span>
                            <span className="text-xs font-ibmplexmonomedium uppercase text-slate-500">
                                Join the Elite Engineering Network
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 leading-[0.92] mb-10 font-dmsans">
                            The Remote Career <br />
                            <span className="font-medium">You&apos;ve Earned.</span>
                        </h1>

                        <p className="text-slate-500 text-lg md:text-2xl mb-12 max-w-2xl leading-relaxed font-dmsans">
                            Skip the job boards. We match you with high-growth US startups that respect your craft and pay what you&apos;re worth.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link href="#apply">
                                <button className="bg-black text-white text-xs font-ibmplexmonomedium px-10 py-5 rounded-xl uppercase hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer">
                                    Apply to Join
                                </button>
                            </Link>
                            <Link href="#process">
                                <button className="bg-white text-black border border-slate-200 text-xs font-ibmplexmonomedium px-10 py-5 rounded-xl uppercase hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer">
                                    Our Vetting Process
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:flex w-full md:w-[480px] shrink-0 items-center justify-center">
                        <Image
                            src="/undraw_career-progress_vfq5.svg"
                            alt="Developer Career Illustration"
                            width={480}
                            height={400}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-100">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="space-y-2">
                            <p className="text-[10px] font-ibmplexmonomedium uppercase tracking-[0.2em] text-slate-400">
                                {stat.label}
                            </p>
                            <p className="text-3xl md:text-4xl font-medium text-slate-900 font-dmsans">
                                {stat.val}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
