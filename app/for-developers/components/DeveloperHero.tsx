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
        <section className="relative px-6 pt-24 pb-16 bg-[#f5f0e8] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-hero" width="36" height="36" patternUnits="userSpaceOnUse">
                            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-hero)" />
                </svg>
            </div>
            <div className="absolute -top-6 left-10 w-24 h-24 bg-[#ff8c00] border-[3px] border-[#0a0a0a] rotate-6 shadow-neo"></div>
            <div className="absolute bottom-10 right-12 w-20 h-20 bg-[#ffffff] border-[3px] border-[#0a0a0a] -rotate-6 shadow-neo"></div>

            <div className="container mx-auto max-w-[1400px] relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center mb-0">
                    <div className="flex-1 max-w-2xl">
                        <div className="inline-flex items-center gap-3 mb-8 bg-[#ffffff] px-4 py-2 border-[3px] border-[#0a0a0a] shadow-neo uppercase tracking-widest text-xs font-ibmplexmonomedium">
                            <span className="w-8 h-8 bg-[#0a0a0a] text-[#f5f0e8] flex items-center justify-center text-[10px] font-black">BY</span>
                            <span className="text-[#0a0a0a]">
                                Join the Elite Engineering Network
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0a0a0a] leading-[0.95] mb-8 font-dmsans">
                            The Remote Career <br />
                            <span className="text-[#ff8c00]">You&apos;ve Earned.</span>
                        </h1>

                        <p className="text-[#4a4a4a] text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-dmsans">
                            Skip the job boards. We match you with high-growth US startups that respect your craft and pay what you&apos;re worth.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link href="/find-jobs">
                                <button className="bg-[#0a0a0a] text-[#f5f0e8] text-xs font-ibmplexmonomedium px-10 py-5 rounded-none border-[4px] border-[#0a0a0a] uppercase hover:shadow-neo-lg transition-all shadow-neo active:translate-y-0.5 cursor-pointer">
                                    Apply to Join
                                </button>
                            </Link>
                            <Link href="#process">
                                <button className="bg-[#f5f0e8] text-[#0a0a0a] border-[4px] border-[#0a0a0a] text-xs font-ibmplexmonomedium px-10 py-5 rounded-none uppercase hover:shadow-neo-lg transition-all shadow-neo active:translate-y-0.5 cursor-pointer">
                                    Our Vetting Process
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:flex w-full md:w-[480px] shrink-0 items-center justify-center">
                        <Image
                            src="/illustrations/developer-hero-neo.svg"
                            alt="Developer illustration"
                            width={480}
                            height={360}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="space-y-2">
                            <p className="text-[10px] font-ibmplexmonomedium uppercase tracking-[0.2em] text-[#4a4a4a]">
                                {stat.label}
                            </p>
                            <p className="text-3xl md:text-4xl font-black text-[#ff8c00] font-family:var(--font-grotesk)">
                                {stat.val}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
