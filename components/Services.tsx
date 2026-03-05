"use client";

import { useRef, useEffect } from "react";
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
    const containerRef = useRef<HTMLDivElement>(null);
    const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const boxes = boxRefs.current;

        boxes.forEach((box, index) => {
            if (!box) return;

            const content = box.querySelector(".service-content");
            const brief = box.querySelector(".service-brief");

            // Set initial state
            gsap.set(content, { opacity: 0, scale: 0.95 });

            const onEnter = () => {
                // Animate flex-grow for all boxes
                boxes.forEach((b, i) => {
                    gsap.to(b, {
                        flex: i === index ? 6 : 1,
                        duration: 0.7,
                        ease: "power4.inOut"
                    });
                });

                // Animate content for target box
                gsap.to(content, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    delay: 0.2,
                    ease: "power3.out"
                });

                // Hide the vertical brief title
                gsap.to(brief, {
                    opacity: 0,
                    duration: 0.3
                });
            };

            const onLeave = () => {
                // Reset everything
                boxes.forEach((b) => {
                    gsap.to(b, {
                        flex: 1,
                        duration: 0.7,
                        ease: "power4.inOut"
                    });
                });

                gsap.to(content, {
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.3,
                    ease: "power3.in"
                });

                gsap.to(brief, {
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.2
                });
            };

            box.addEventListener("mouseenter", onEnter);
            box.addEventListener("mouseleave", onLeave);

            return () => {
                box.removeEventListener("mouseenter", onEnter);
                box.removeEventListener("mouseleave", onLeave);
            };
        });
    }, []);

    return (
        <section className="bg-slate-50 border-t border-slate-200">
            {/* Header Area */}
            <div className="container mx-auto pt-24 pb-12">
                <div className="text-center mb-24 space-y-6">
                    <span className="text-xs font-ibmplexmonomedium uppercase block">
                        Bytedocker / 24-5
                    </span>
                    <h2 className="text-4xl md:text-6xl font-medium text-slate-900 font-dmsans tracking-tight uppercase leading-none">
                        Services
                    </h2>
                </div>
            </div>

            {/* Interaction Area */}
            <div ref={containerRef} className="flex h-[420px] border-y border-black overflow-hidden bg-white">
                {services.map((service, idx) => (
                    <div
                        key={service.id}
                        ref={(el) => { boxRefs.current[idx] = el; }}
                        className={`relative flex-1 border-r border-black last:border-r-0 cursor-pointer overflow-hidden transition-colors hover:bg-slate-50 group flex flex-col`}
                    >
                        {/* Brief State - Vertical Title */}
                        <div className="service-brief absolute top-12 left-1/2 -translate-x-1/2 h-full flex flex-col items-center">
                            <span className="text-[10px] font-ibmplexmonomedium text-slate-400 mb-8 whitespace-nowrap">
                                {service.id}
                            </span>
                            <div className="rotate-90 origin-center translate-y-24">
                                <h3 className="text-xl font-bold text-slate-900 whitespace-nowrap uppercase tracking-tighter font-dmsans">
                                    {service.title}
                                </h3>
                            </div>
                        </div>

                        {/* Expanded Content State */}
                        <div className="service-content absolute inset-0 p-12 flex flex-col pointer-events-none opacity-0">
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-5xl font-bold text-slate-900 font-dmsans tracking-tighter">
                                    {service.id}
                                </span>
                                <div className="text-right">
                                    <h3 className="text-4xl font-bold text-slate-900 uppercase tracking-tighter mb-2 font-dmsans">
                                        // {service.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-12 grow">
                                <div className="space-y-4">
                                    {service.capabilities.map((cap) => (
                                        <div key={cap} className="text-lg text-slate-900 font-medium font-dmsans uppercase">
                                            / {cap}
                                        </div>
                                    ))}
                                </div>
                                <div className="relative rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 h-64">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mt-auto border-t border-slate-200 pt-8">
                                <p className="text-xs font-ibmplexmonomedium text-slate-500 uppercase tracking-widest max-w-sm leading-relaxed">
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
