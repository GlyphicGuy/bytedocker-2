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

                    // Add scale and dimming effect as it's covered by the next card
                    const nextCard = cardsRef.current[index + 1];
                    if (nextCard) {
                        gsap.to(card, {
                            scale: 0.9,
                            opacity: 0.5,
                            scrollTrigger: {
                                trigger: nextCard,
                                start: "top bottom",
                                end: "top top",
                                scrub: true,
                            }
                        });
                    }
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="how-it-works" className="relative">
            <div className="flex flex-col">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        ref={(el) => { cardsRef.current[idx] = el; }}
                        className="h-screen w-full relative flex items-center justify-center overflow-hidden border-b border-t border-black/5 bg-slate-50"
                    >
                        {/* Technical Stroke Background (Grid) */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id={`grid-${idx}`} width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill={`url(#grid-${idx})`} />
                            </svg>
                        </div>

                        {/* Dashed Line Accents */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-black/10"></div>
                            <div className="absolute bottom-1/4 left-0 w-full border-t border-dashed border-black/10"></div>
                            <div className="absolute left-1/4 top-0 h-full border-l border-dashed border-black/10"></div>
                            <div className="absolute right-1/4 top-0 h-full border-l border-dashed border-black/10"></div>
                        </div>

                        <div className="container mx-auto px-6 relative z-10">
                            <div className="grid grid-cols-12 gap-8 items-center">
                                {/* Large Number Accent */}
                                <div className="col-span-12 lg:col-span-4">
                                    <span className="text-[20rem] font-bold text-black/[0.03] leading-none block select-none font-dmsans">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Content Section */}
                                <div className="col-span-12 lg:col-span-8 space-y-8">
                                    <div className="inline-flex items-center gap-4">
                                        <div className="w-12 h-[1px] bg-black"></div>
                                        <span className="text-xs font-ibmplexmonomedium uppercase tracking-[0.3em] text-slate-500">
                                            {step.subtitle}
                                        </span>
                                    </div>

                                    <h2 className="text-5xl md:text-7xl font-medium text-slate-900 font-dmsans leading-[1.1] tracking-tight">
                                        {step.title}
                                    </h2>

                                    <p className="text-xl text-slate-500 max-w-xl font-dmsans leading-relaxed">
                                        {step.description}
                                    </p>

                                    <div className="pt-8">
                                        <button className="group flex items-center gap-6 text-xs font-ibmplexmonomedium uppercase tracking-widest text-slate-900 border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all">
                                            Execute Protocol
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Labels (Vertical) */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-8 hidden xl:flex flex-col gap-24 text-[10px] font-ibmplexmonomedium text-slate-400 uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">
                            <span>Infrastructure Layer // {step.id}</span>
                            <span>Deployment Logic // 04-2026</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
