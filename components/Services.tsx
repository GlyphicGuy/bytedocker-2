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
            const isActive = activeIndex === index;

            // Desktop Animation (Flex Width)
            if (!isMobile) {
                gsap.to(box, {
                    flex: isActive ? 6 : 1,
                    duration: 0.7,
                    ease: "power4.inOut"
                });

                gsap.to(content, {
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : 20,
                    duration: 0.5,
                    ease: "power3.out",
                    display: isActive ? "flex" : "none"
                });

                gsap.to(brief, {
                    opacity: isActive ? 0 : 1,
                    duration: 0.3
                });
            }
            // Mobile Animation (Vertical Height)
            else {
                gsap.to(box, {
                    height: isActive ? "auto" : "100px",
                    duration: 0.6,
                    ease: "power3.inOut"
                });

                gsap.to(content, {
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 10,
                    height: isActive ? "auto" : 0,
                    duration: 0.5,
                    ease: "power3.out",
                    display: isActive ? "flex" : "none",
                    marginTop: isActive ? "20px" : "0"
                });

                const arrow = brief?.querySelector(".mobile-arrow");
                if (arrow) {
                    gsap.to(arrow, {
                        rotate: isActive ? 180 : 0,
                        duration: 0.4
                    });
                }
            }
        });
    }, [activeIndex]);

    return (
        <section className="bg-slate-50 border-t border-slate-200">
            {/* Header Area */}
            <div className="container mx-auto pt-20 pb-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-[10px] md:text-xs font-ibmplexmonomedium uppercase tracking-widest text-slate-400 block">
                        Our Capabilities / 05
                    </span>
                    <h2 className="text-4xl md:text-6xl font-medium text-slate-900 font-dmsans tracking-tight uppercase leading-none">
                        Our Services
                    </h2>
                </div>
            </div>

            {/* Interaction Area */}
            <div className="flex flex-col lg:flex-row lg:h-[480px] border-y border-black overflow-hidden bg-white">
                {services.map((service, idx) => (
                    <div
                        key={service.id}
                        ref={(el) => { boxRefs.current[idx] = el; }}
                        onMouseEnter={() => window.innerWidth >= 1024 && setActiveIndex(idx)}
                        onMouseLeave={() => window.innerWidth >= 1024 && setActiveIndex(null)}
                        onClick={() => window.innerWidth < 1024 && setActiveIndex(activeIndex === idx ? null : idx)}
                        className={`relative flex-1 border-b lg:border-b-0 lg:border-r border-black last:border-r-0 cursor-pointer overflow-hidden transition-colors hover:bg-slate-50 flex flex-col`}
                    >
                        {/* Brief State */}
                        <div className="service-brief relative lg:absolute top-0 lg:top-12 left-0 lg:left-1/2 lg:-translate-x-1/2 h-full flex flex-row lg:flex-col items-center p-8 lg:p-0 justify-between lg:justify-start">
                            <span className="text-[10px] font-ibmplexmonomedium text-slate-400 lg:mb-8 whitespace-nowrap">
                                {service.id}
                            </span>
                            <div className="lg:rotate-90 lg:origin-center lg:translate-y-28">
                                <h3 className="text-lg md:text-xl font-black text-slate-900 whitespace-nowrap uppercase tracking-tighter font-dmsans">
                                    {service.title}
                                </h3>
                            </div>
                            <div className="lg:hidden mobile-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                        </div>

                        {/* Expanded Content State */}
                        <div className="service-content relative lg:absolute inset-0 p-8 md:p-12 flex flex-col opacity-0">
                            <div className="flex justify-between items-start mb-6 md:mb-10">
                                <span className="text-4xl md:text-6xl font-black text-slate-900 font-dmsans tracking-tighter">
                                    {service.id.split('-')[1]}
                                </span>
                                <div className="text-right">
                                    <h3 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-2 font-dmsans">
                                        // {service.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:grow">
                                <div className="space-y-3 md:space-y-4">
                                    {service.capabilities.map((cap) => (
                                        <div key={cap} className="text-base md:text-lg text-slate-900 font-bold font-dmsans uppercase tracking-tight">
                                            / {cap}
                                        </div>
                                    ))}
                                </div>
                                <div className="hidden lg:block relative rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 h-64 border border-black/5">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 md:mt-12 lg:mt-auto border-t border-slate-100 pt-6 md:pt-8">
                                <p className="text-[10px] md:text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest max-w-sm leading-relaxed">
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
