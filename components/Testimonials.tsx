"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const testimonials = [
    {
        quote: "Bytedocker shipped high-impact engineers quickly and helped architect our long-term scaling strategy. They're simply the best; true partners every step of the way.",
        author: "FRANCESCO BOCCARDO",
        role: "HEAD OF GEN AI AT BV TECH",
        logo: "BV TECH",
        id: 1
    },
    {
        quote: "The quality of talent we received was exceptional. In just one month, we integrated three senior developers who have already become foundational to our core product.",
        author: "SARAH CHENG",
        role: "CTO AT FINTECH SOLUTIONS",
        logo: "FACTUA LABS",
        id: 2
    },
    {
        quote: "Scaling our engineering team used to be a 3-month bottleneck. With Bytedocker, we moved from requirement to deployment in under 72 hours. Truly game-changing.",
        author: "ALEX RIVERA",
        role: "VP ENG AT SCALEWORKS",
        logo: "NEXTERA",
        id: 3
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const next = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(testimonials.length - 1);
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            gsap.to(sliderRef.current, {
                x: `-${currentIndex * 100}%`,
                duration: 0.8,
                ease: "power3.inOut"
            });
        }
    }, [currentIndex]);

    return (
        <section className="bg-slate-50 py-20 overflow-hidden border-t border-black">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
                    <span className="text-[10px] md:text-xs font-ibmplexmonomedium uppercase block text-slate-400">
                        Testimonials ( 03 )
                    </span>
                    <h2 className="text-3xl md:text-6xl font-medium text-slate-900 font-dmsans tracking-tight uppercase leading-tight md:leading-none">
                        What Our <br className="md:hidden" /> Partners Say
                    </h2>
                </div>

                {/* Slider Wrapper */}
                <div className="relative mx-auto max-w-[1400px]">
                    <div className="overflow-hidden">
                        <div
                            ref={sliderRef}
                            className="flex transition-transform duration-500 ease-in-out"
                        >
                            {testimonials.map((t) => (
                                <div key={t.id} className="w-full shrink-0 px-2 md:px-4">
                                    <div className="bg-white border border-black/10 rounded-2xl p-8 md:p-16 relative flex flex-col justify-between group min-h-[400px] md:min-h-[500px]">
                                        {/* Quote Icon */}
                                        <div className="text-5xl md:text-7xl text-slate-900 font-serif leading-none opacity-10 absolute top-8 left-8 md:top-12 md:left-10 group-hover:opacity-20 transition-opacity">
                                            “
                                        </div>

                                        <div className="relative z-10 pt-8 md:pt-12">
                                            <p className="text-xl md:text-4xl font-medium text-slate-900 leading-[1.3] md:leading-[1.2] font-dmsans max-w-4xl tracking-tight">
                                                {t.quote}
                                            </p>
                                        </div>

                                        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 md:pt-12 border-t border-slate-100">
                                            <div className="text-xl md:text-3xl font-black text-slate-900 font-dmsans tracking-tighter opacity-100 uppercase">
                                                {t.logo}
                                            </div>

                                            <div className="text-left md:text-right flex flex-col items-start md:items-end gap-2 md:gap-3">
                                                <div className="inline-block border border-black/20 px-4 md:px-6 py-2 rounded-full bg-slate-50/50">
                                                    <span className="text-[10px] md:text-xs font-bold text-slate-900 font-ibmplexmonomedium uppercase tracking-widest leading-none">
                                                        {t.author}
                                                    </span>
                                                </div>
                                                <span className="text-[8px] md:text-[10px] font-black text-slate-400 font-ibmplexmonomedium uppercase tracking-widest">
                                                    {t.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="mt-12 md:mt-16 flex items-center justify-between max-w-6xl mx-auto px-4">
                        {/* Pagination Indicator */}
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] md:text-xs font-ibmplexmonomedium text-slate-900 font-bold border border-black/10 px-4 py-2 rounded-full bg-white">
                                {currentIndex + 1} / {testimonials.length}
                            </span>
                        </div>

                        {/* Arrows */}
                        <div className="flex items-center gap-3 md:gap-4">
                            <button
                                onClick={prev}
                                className="w-12 h-6 md:w-16 md:h-8 border border-black/20 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all group active:scale-95 bg-white"
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-active:scale-90 transition-transform">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={next}
                                className="w-12 h-6 md:w-16 md:h-8 border border-black/20 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all group active:scale-95 bg-white"
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-active:scale-90 transition-transform">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
