"use client";

import { useEffect, useRef } from "react";

export default function LogoCloud() {
    const filters = ["FINTECH", "SAAS", "AI", "INFRA", "WEB3"];

    const logos = [
        { name: "Google", color: "text-black" },
        { name: "Microsoft", color: "text-black" },
        { name: "Amazon", color: "text-black" },
        { name: "Meta", color: "text-black" },
        { name: "Stripe", color: "text-black" },
        { name: "OpenAI", color: "text-black" },
        { name: "Scale", color: "text-black" },
        { name: "Vercel", color: "text-black" },
        { name: "Retool", color: "text-black" },
        { name: "Linear", color: "text-black" },
    ];

    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let position = 0;
        const speed = 0.5; // pixels per frame
        let animationId: number;

        // Calculate the width of one full logo set (for seamless looping)
        const singleSetWidth = carousel.scrollWidth / 2; // Since we have duplicated logos

        const scroll = () => {
            position += speed;

            // Seamlessly reset when we've scrolled exactly one set
            if (position >= singleSetWidth) {
                position = 0;
            }

            carousel.style.transform = `translateX(-${position}px)`;
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className="bg-[#f5f0e8] py-16 md:py-24 border-y-[3px] border-[#0a0a0a]">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 mb-16 md:mb-20 border-b-[3px] border-[#0a0a0a] pb-12">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-[#ff8c00] font-black uppercase tracking-widest font-ibmplexmonomedium border-l-[4px] border-[#ff8c00] pl-3">( 02 )</span>
                            <span className="text-lg md:text-2xl uppercase tracking-widest text-[#0a0a0a] font-black font-family:var(--font-grotesk)">Working For</span>
                        </div>
                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                            {filters.map((filter) => (
                                <span
                                    key={filter}
                                    className="text-sm md:text-base uppercase tracking-widest font-black text-[#0a0a0a] font-ibmplexmonomedium border-[2px] border-[#0a0a0a] px-4 py-2 bg-transparent hover:bg-[#0a0a0a] hover:text-[#f5f0e8] transition-all duration-200"
                                >
                                    {filter}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-[320px] shrink-0">
                        <p className="text-xs leading-relaxed text-[#0a0a0a] uppercase tracking-widest font-black border-l-[4px] border-[#ff8c00] pl-4 font-ibmplexmonomedium">
                            The vetted developers in our network have previously worked at high-growth startups and leading technology companies, bringing proven experience in building scalable products and strong engineering cultures.
                        </p>
                    </div>
                </div>

                {/* Infinite Carousel */}
                <div className="border-[3px] border-[#0a0a0a] rounded-none bg-[#ffffff] shadow-neo overflow-hidden">
                    <div className="h-32 md:h-40 flex items-center overflow-hidden relative">
                        {/* Fade edges for smooth visual transition */}
                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#ffffff] to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none"></div>

                        {/* Scrolling container */}
                        <div
                            ref={carouselRef}
                            className="flex gap-0 items-center py-8 will-change-transform transition-none"
                            style={{ width: `${logos.length * 240}px` }}
                        >
                            {[...logos, ...logos].map((logo, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 w-60 flex items-center justify-center px-8 border-r-[3px] border-[#0a0a0a] group cursor-default"
                                >
                                    <span className={`text-lg md:text-xl font-black uppercase tracking-tighter transition-all duration-300 grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 ${logo.color}`}>
                                        {logo.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
