"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Comparisons() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const steps = [
        {
            id: "01",
            title: "Pre-vetted matching is our core infrastructure.",
            subtitle: "Requirement Analysis",
            description: "We dive deep into your tech stack and company culture to build a 100% accurate developer profile.",
        },
        {
            id: "02",
            title: "Deploy 10x faster with our pre-vetted network.",
            subtitle: "Technical Vetting",
            description: "Only the top 1% of engineers pass our rigorous multi-stage coding and communication assessment.",
        },
        {
            id: "03",
            title: "Scale your engineering team with zero risk.",
            subtitle: "Team Integration",
            description: "Start with a trial to ensure the perfect fit for your remote workflows.",
        },
        {
            id: "04",
            title: "Engineered for high-performing startups.",
            subtitle: "Long-term Support",
            description: "Continuous performance monitoring and dedicated success management for your remote team.",
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                // Pin the card
                if (index < cardsRef.current.length - 1) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: "top top",
                        pin: true,
                        pinSpacing: false,
                        scrub: true,
                        invalidateOnRefresh: true,
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="how-it-works" className="relative bg-white">
            <div className="flex flex-col">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        ref={(el) => { cardsRef.current[idx] = el; }}
                        className="h-dvh w-full relative flex items-center justify-center overflow-hidden border-b border-slate-100 bg-white"
                        style={{ zIndex: idx + 1 }}
                    >
                        {/* Technical Stroke Background (Grid) - Solid Stroke */}
                        <div className="absolute inset-0 pointer-events-none">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id={`grid-${idx}`} width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill={`url(#grid-${idx})`} />
                            </svg>
                        </div>

                        {/* Dashed Line Accents - Solid Stroke */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-slate-200/50"></div>
                            <div className="absolute bottom-1/4 left-0 w-full border-t border-dashed border-slate-200/50"></div>
                            <div className="absolute left-[15%] md:left-1/4 top-0 h-full border-l border-dashed border-slate-200/50"></div>
                            <div className="absolute right-[15%] md:right-1/4 top-0 h-full border-l border-dashed border-slate-200/50"></div>
                        </div>

                        <div className="container mx-auto px-6 relative z-10">
                            <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
                                {/* Large Number Accent - Solid Color */}
                                <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-start">
                                    <span className="text-[10rem] sm:text-[15rem] md:text-[20rem] font-bold text-slate-50 leading-none block select-none font-dmsans">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Content Section */}
                                <div className="col-span-12 lg:col-span-8 space-y-6 md:space-y-8 text-center lg:text-left -mt-8 md:mt-0">
                                    <div className="inline-flex items-center gap-4">
                                        <div className="hidden md:block w-12 h-[1px] bg-slate-900"></div>
                                        <span className="text-[9px] md:text-xs font-ibmplexmonomedium uppercase tracking-[0.3em] text-slate-400">
                                            {step.subtitle}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-medium text-slate-900 font-dmsans leading-[1.1] tracking-tight px-4 md:px-0">
                                        {step.title}
                                    </h2>

                                    <p className="text-sm md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 font-dmsans leading-relaxed px-4 md:px-0">
                                        {step.description}
                                    </p>

                                    <div className="pt-2 md:pt-8 flex justify-center lg:justify-start">
                                        <button className="group flex items-center gap-4 md:gap-6 text-[10px] md:text-[12px] font-black uppercase tracking-widest text-white bg-black px-8 md:px-10 py-3 md:py-4 rounded-xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                            Hire Now
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Labels (Vertical) */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 hidden xl:flex flex-col gap-24 text-[10px] font-ibmplexmonomedium text-slate-300 uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">
                            <span>Infrastructure Layer // {step.id}</span>
                            <span>Deployment Logic // 04-2026</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
