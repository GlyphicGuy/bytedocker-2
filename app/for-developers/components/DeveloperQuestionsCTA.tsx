"use client";

import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function DeveloperQuestionsCTA() {
    return (
        <section className="bg-[#f5f0e8] relative overflow-hidden py-24 border-y-[3px] border-[#0a0a0a]">
            {/* Technical grid background */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-cta" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-cta)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Content Column */}
                    <div className="lg:w-3/5 space-y-8 text-[#0a0a0a]">
                        <h2 className="text-4xl md:text-5xl font-black font-family:var(--font-grotesk) leading-tight uppercase">
                            Got any questions still? <br />
                            Get precise answers.
                        </h2>

                        <div className="space-y-4 max-w-2xl font-dmsans text-[17px] leading-relaxed text-[#4a4a4a]">
                            <p>
                                If you still have doubts about top-tier remote engineering and joining our network, we can answer all your questions—just contact us.
                            </p>
                            <p>
                                Elite roles for software developers might be hard to get for some, but we are masters at finding you the best high-growth projects matching your exact stack. Here is to our future successful partnership! Press the button here and accelerate your career.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/">
                                <button className="w-full sm:w-auto bg-[#ffffff] border-[3px] border-[#0a0a0a] text-[#0a0a0a] uppercase font-ibmplexmonomedium text-xs px-8 py-4 rounded-none hover:shadow-neo-lg transition-all flex items-center justify-center gap-3 shadow-neo active:translate-y-0.5">
                                    View all FAQs
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </Link>

                            <Link href="#apply">
                                <button className="w-full sm:w-auto bg-[#0a0a0a] border-[3px] border-[#0a0a0a] text-[#f5f0e8] uppercase font-ibmplexmonomedium text-xs px-8 py-4 rounded-none hover:shadow-neo-lg transition-all flex items-center justify-center gap-3 group shadow-neo active:translate-y-0.5">
                                    Apply and ask in person
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Illustration / Graphic Column */}
                    <div className="lg:w-2/5 flex justify-center">
                        <div className="relative w-72 h-72">
                            <img
                                src="/illustrations/developer-questions-neo.svg"
                                alt="Questions and answers graphic"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
