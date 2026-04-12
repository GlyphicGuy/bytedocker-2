"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Features() {
    const [activeSection, setActiveSection] = useState("source");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-15% 0px -40% 0px", // Focus on the top portion of the viewport
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            // Find the entry that is currently intersecting
            const intersectingEntry = entries.find(entry => entry.isIntersecting);
            if (intersectingEntry) {
                setActiveSection(intersectingEntry.target.id);
            }
        }, observerOptions);

        const sections = ["source", "screen", "deploy"];
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const steps = [
        { id: "source", title: "Source", subtitle: "Define your requirements" },
        { id: "screen", title: "Screen", subtitle: "Rigorous tech vetting" },
        { id: "deploy", title: "Deploy", subtitle: "Match in 48 hours" }
    ];

    return (
        <section id="process" className="bg-[#f5f0e8] relative overflow-x-clip border-t-[3px] border-[#0a0a0a]">
            {/* Intro Header */}
            <div className="container mx-auto px-6 pt-24 pb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-[#0a0a0a] font-family:var(--font-grotesk) max-w-2xl uppercase">
                    The Engineering Deployment Layer
                </h2>
            </div>


            <div className="sticky top-0 z-40 bg-[#f5f0e8] border-b-[3px] border-[#0a0a0a] font-ibmplexmonomedium">
                <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
                    <div className="flex items-stretch min-w-[400px] md:min-w-0">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`flex-1 py-6 md:py-8 border-b-[4px] transition-all duration-500 cursor-pointer ${activeSection === step.id
                                    ? "border-[#0a0a0a] opacity-100"
                                    : "border-[#e5dfcf] opacity-30 hover:opacity-100"
                                    }`}
                                onClick={() => {
                                    document.getElementById(step.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }}
                            >
                                <h4 className="text-[10px] md:text-sm font-black uppercase tracking-widest text-[#0a0a0a] mb-1">{step.title}</h4>
                                <p className="text-[8px] md:text-[10px] uppercase font-bold text-[#4a4a4a] tracking-wider">
                                    {step.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="container mx-auto px-6 pb-12">
                <div className="divide-y-[3px] divide-[#0a0a0a]">

                    {/* Source Section */}
                    <div id="source" className="min-h-[80vh] py-32 flex flex-col md:flex-row items-center gap-16 md:gap-24">
                        <div className="flex-1 space-y-8">
                            <h3 className="text-3xl md:text-5xl font-bold text-[#0a0a0a] font-family:var(--font-grotesk) uppercase">
                                Define Once. <br /> <span className="text-[#ff8c00]">Source Everywhere.</span>
                            </h3>
                            <p className="text-lg text-slate-500 leading-relaxed font-dmsans max-w-lg">
                                Tell us your technical stack, team culture, and project milestones. We build a custom sourcing profile that scans our elite network of 20,000+ developers.
                            </p>
                            <ul className="space-y-4 font-ibmplexmonomedium">
                                {["Stack-specific requirements", "Time-zone alignment", "Cultural fit evaluation"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-700">
                                        <span className="w-1.5 h-1.5 bg-slate-900 rounded-full"></span> {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-[#0a0a0a] text-[#f5f0e8] font-black uppercase tracking-widest text-[10px] py-4 px-10 rounded-none border-[4px] border-[#0a0a0a] shadow-neo hover:shadow-neo-lg active:translate-y-0.5 transition-all">
                                Learn More
                            </button>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="aspect-4/3 bg-[#ffffff] border-[3px] border-[#0a0a0a] rounded-none overflow-hidden shadow-neo">
                                <Image
                                    src="/define-once-source.png"
                                    alt="Define requirements once and source developers everywhere — neobrutalist illustration"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Screen Section */}
                    <div id="screen" className="min-h-[80vh] py-32 flex flex-col md:flex-row items-center gap-16 md:gap-24">
                        <div className="flex-1 w-full md:order-1 order-2">
                            <div className="aspect-4/3 bg-[#ffffff] border-[3px] border-[#0a0a0a] rounded-none overflow-hidden shadow-neo">
                                <Image
                                    src="/vet-rigorously.png"
                                    alt="Rigorous developer vetting process — screening for code, communication, and live tests to find the top 5%"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-8 md:order-2 order-1">
                            <h3 className="text-3xl md:text-5xl font-bold text-[#0a0a0a] font-family:var(--font-grotesk) uppercase">
                                Vet Rigorously. <br /> <span className="text-[#ff8c00]">Hire Confidently.</span>
                            </h3>
                            <p className="text-lg text-slate-500 leading-relaxed font-dmsans max-w-lg">
                                We screen for 200+ data points, including technical fundamentals, live coding proficiency, and communication excellence.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Rejected", val: "80%", isHighlight: false },
                                    { label: "Elite", val: "TOP 5%", isHighlight: true }
                                ].map(s => (
                                    <div key={s.label} className={`p-5 border-[3px] border-[#0a0a0a] rounded-none bg-[#ffffff] shadow-neo ${s.isHighlight ? 'border-l-[4px] border-l-[#ff8c00]' : ''}`}>
                                        <p className={`text-[10px] font-black uppercase mb-1 ${s.isHighlight ? 'text-[#ff8c00]' : 'text-[#999999]'}`}>{s.label}</p>
                                        <p className="text-2xl font-black text-[#0a0a0a] font-ibmplexmonomedium">{s.val}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href="/hire">
                                <button className="bg-[#0a0a0a] text-[#f5f0e8] font-ibmplexmonomedium uppercase tracking-widest text-[10px] py-4 px-10 rounded-none border-[4px] border-[#0a0a0a] shadow-neo hover:shadow-neo-lg active:translate-y-0.5 transition-all">
                                    Hire Now
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Match Section */}
                    <div id="deploy" className="min-h-[50vh] py-20 flex flex-col md:flex-row items-center gap-16 md:gap-24">
                        <div className="flex-1 space-y-8">
                            <h3 className="text-3xl md:text-5xl font-bold text-[#0a0a0a] font-family:var(--font-grotesk) uppercase">
                                Deploy Speed. <br /> <span className="text-[#ff8c00]">SCALE FASTER.</span>
                            </h3>
                            <p className="text-lg text-[#4a4a4a] leading-relaxed font-dmsans max-w-lg">
                                Once vetted, we match you with 1-3 hand-picked engineers who are ready to integrate.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-6 p-4 border-[3px] border-[#0a0a0a] rounded-none hover:bg-[#f5f0e8] transition-colors cursor-default group shadow-neo border-l-[4px] border-l-[#ff8c00]">
                                    <div className="w-2 h-2 bg-[#ff8c00] rounded-none"></div>
                                    <span className="text-xs font-black uppercase tracking-widest text-[#4a4a4a]">48-Hour Shortlist</span>
                                </div>
                                <div className="flex items-center gap-6 p-4 border-[3px] border-[#0a0a0a] rounded-none hover:bg-[#f5f0e8] transition-colors cursor-default group shadow-neo">
                                    <div className="w-2 h-2 bg-[#0a0a0a] rounded-none"></div>
                                    <span className="text-xs font-black uppercase tracking-widest text-[#4a4a4a]">Replacement Guarantee</span>
                                </div>
                            </div>
                            <button className="bg-[#0a0a0a] text-[#f5f0e8] font-black uppercase tracking-widest text-[10px] py-4 px-10 rounded-none border-[4px] border-[#0a0a0a] shadow-neo hover:shadow-neo-lg active:translate-y-0.5 transition-all">
                                Hire a Dev
                            </button>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="bg-[#ffffff] border-[3px] border-[#0a0a0a] rounded-none overflow-hidden shadow-neo aspect-4/3">
                                <Image
                                    src="/deploy-scale.png"
                                    alt="Rapid 48-hour developer deployment conveyor belt — from start to deployed"
                                    width={800}
                                    height={800}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}


