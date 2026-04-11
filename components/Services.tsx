"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const services = [
    {
        id: "00-1",
        title: "Frontend Development",
        capabilities: ["React & Next.js", "Motion Design", "Performance", "State Management"],
        description: "Pixel-perfect, ultra-fast interfaces engineered for the modern web using cutting-edge frameworks.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
    },
    {
        id: "00-2",
        title: "Backend Infrastructure",
        capabilities: ["Node.js & Go", "Scalable Systems", "API Design", "Cloud Native"],
        description: "Robust, high-throughput server architectures built to handle massive scale and mission-critical data.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80"
    },
    {
        id: "00-3",
        title: "Mobile Operations",
        capabilities: ["React Native", "Native Performance", "Cross-Platform", "App Store Logic"],
        description: "High-performance mobile experiences that feel native, built with cross-platform efficiency.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
    },
    {
        id: "00-4",
        title: "Product Design",
        capabilities: ["UX Research", "Design Systems", "Prototyping", "Visual Identity"],
        description: "Strategic design focused on conversion and user retention for high-growth digital products.",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80"
    },
    {
        id: "00-5",
        title: "Elite Engineering",
        capabilities: ["Architecture Audit", "Team Augmentation", "CTO Advisory", "Project Recovery"],
        description: "High-level technical leadership and execution for startups that need to move at the speed of light.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
    }
];

export default function Services() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const boxes = boxRefs.current;
        const isMobile = window.innerWidth < 1024;

        boxes.forEach((box, index) => {
            if (!box) return;

            const content = box.querySelector(".service-content");
            const brief = box.querySelector(".service-brief");
            const image = box.querySelector(".service-image");
            const isActive = activeIndex === index;

            // Desktop Animation (Flex Width)
            if (!isMobile) {
                gsap.to(box, {
                    flex: isActive ? 6 : 1,
                    duration: 0.8,
                    ease: "power3.inOut"
                });

                gsap.to(content, {
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : 30,
                    duration: 0.6,
                    ease: "power2.out",
                    display: isActive ? "flex" : "none",
                    delay: isActive ? 0.1 : 0
                });

                gsap.to(brief, {
                    opacity: isActive ? 0 : 1,
                    duration: 0.4,
                    ease: "power2.inOut"
                });

                gsap.to(image, {
                    filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                    duration: 0.8,
                    ease: "power2.out"
                });
            }
            // Mobile Animation (Vertical Height)
            else {
                gsap.to(box, {
                    height: isActive ? "auto" : "80px",
                    duration: 0.6,
                    ease: "power3.inOut"
                });

                gsap.to(content, {
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 15,
                    height: isActive ? "auto" : 0,
                    duration: 0.5,
                    ease: "power2.out",
                    display: isActive ? "flex" : "none",
                    marginTop: isActive ? "16px" : "0"
                });

                const arrow = brief?.querySelector(".mobile-arrow");
                if (arrow) {
                    gsap.to(arrow, {
                        rotate: isActive ? 180 : 0,
                        duration: 0.4,
                        ease: "power2.inOut"
                    });
                }
            }
        });
    }, [activeIndex]);

    return (
        <section className="bg-[#f5f0e8] border-t-[3px] border-[#0a0a0a]">
            {/* Header Area */}
            <div className="container mx-auto pt-24 pb-16 px-6">
                <div className="text-center mb-20 space-y-6">
                    <span className="text-[10px] md:text-xs font-ibmplexmonomedium uppercase tracking-widest text-[#ff8c00] block font-bold">
                        / 05 Our Capabilities
                    </span>
                    <h2 className="text-4xl md:text-7xl font-bold text-[#0a0a0a] font-family:var(--font-grotesk) tracking-tight uppercase leading-none max-w-3xl mx-auto">
                        Our Services
                    </h2>
                    <p className="text-sm md:text-base text-[#4a4a4a] font-dmsans max-w-2xl mx-auto leading-relaxed">
                        Hover over any service to explore our capabilities across all engineering disciplines
                    </p>
                </div>
            </div>

            {/* Interaction Area */}
            <div className="flex flex-col lg:flex-row lg:h-[480px] border-y-[4px] border-[#0a0a0a] overflow-hidden bg-[#ffffff] shadow-neo relative">
                {services.map((service, idx) => (
                    <div
                        key={service.id}
                        ref={(el) => { boxRefs.current[idx] = el; }}
                        onMouseEnter={() => window.innerWidth >= 1024 && setActiveIndex(idx)}
                        onMouseLeave={() => window.innerWidth >= 1024 && setActiveIndex(null)}
                        onClick={() => window.innerWidth < 1024 && setActiveIndex(activeIndex === idx ? null : idx)}
                        className={`relative flex-1 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-[#0a0a0a] last:border-r-0 cursor-pointer overflow-hidden transition-colors hover:bg-[#fff8f0] flex flex-col group`}
                    >
                        {/* Brief State */}
                        <div className="service-brief relative lg:absolute top-0 lg:top-1/2 lg:-translate-y-1/2 left-0 lg:left-1/2 lg:-translate-x-1/2 w-full h-full lg:w-auto flex flex-row lg:flex-col items-center p-6 lg:p-8 justify-between lg:justify-center lg:gap-8 text-center">
                            <span className="text-[9px] font-ibmplexmonomedium text-[#ff8c00] font-bold uppercase tracking-widest flex-shrink-0">
                                {service.id.split('-')[1]}
                            </span>
                            <div className="flex-1 lg:flex-none">
                                <h3
                                    className="text-base md:text-lg lg:text-xl font-black text-[#0a0a0a] uppercase tracking-tighter font-family:var(--font-grotesk) leading-tight transition-all duration-300"
                                    style={
                                        activeIndex !== null && activeIndex !== idx
                                            ? { writingMode: 'vertical-rl', textOrientation: 'mixed' }
                                            : {}
                                    }
                                >
                                    {service.title}
                                </h3>
                            </div>
                            <div className="lg:hidden mobile-arrow text-[#0a0a0a] flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                        </div>

                        {/* Expanded Content State */}
                        <div className="service-content relative lg:absolute inset-0 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col opacity-0 bg-gradient-to-br from-[#ffffff] to-[#fff8f0]">
                            <div className="flex justify-between items-start mb-8 md:mb-12 gap-6">
                                <span className="text-5xl md:text-7xl lg:text-8xl font-black text-[#ff8c00] font-family:var(--font-grotesk) tracking-tighter leading-none flex-shrink-0">
                                    {service.id.split('-')[1]}
                                </span>
                                <div className="flex-1 text-right">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0a0a0a] uppercase tracking-tighter leading-tight font-family:var(--font-grotesk)">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 flex-1">
                                <div className="space-y-4 md:space-y-5">
                                    <div className="text-[9px] font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest font-bold mb-4">Capabilities</div>
                                    {service.capabilities.map((cap) => (
                                        <div key={cap} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-[#ff8c00] rounded-none flex-shrink-0 mt-1.5"></div>
                                            <span className="text-sm md:text-base text-[#0a0a0a] font-bold font-dmsans uppercase tracking-tight">{cap}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 pt-8 md:pt-10 border-t-[3px] border-[#0a0a0a]">
                                <p className="text-xs md:text-sm font-ibmplexmonomedium text-[#4a4a4a] uppercase tracking-wide max-w-md leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
