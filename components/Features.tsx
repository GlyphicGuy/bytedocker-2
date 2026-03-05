"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
        <section id="process" className="bg-slate-50 relative overflow-x-clip">
            {/* Intro Header */}
            <div className="container mx-auto px-6 pt-24 pb-12">
                <h2 className="text-4xl md:text-6xl font-medium text-slate-900 font-dmsans max-w-2xl">
                    The Engineering Deployment Layer
                </h2>
            </div>

            {/* Sticky Sub-header */}
            <div className="sticky top-0 z-40 bg-slate-50 border-b border-slate-100 font-ibmplexmonomedium">
                <div className="container mx-auto px-6">
                    <div className="flex items-stretch">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`flex-1 py-8 border-t-4 transition-all duration-500 cursor-pointer ${activeSection === step.id
                                    ? "border-slate-950 opacity-100"
                                    : "border-slate-50 opacity-30 hover:opacity-100"
                                    }`}
                                onClick={() => {
                                    document.getElementById(step.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }}
                            >
                                <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 mb-1">{step.title}</h4>
                                <p className="text-[9px] md:text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                                    {step.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="container mx-auto px-6 pb-24">
                <div className="divide-y divide-slate-100">

                    {/* Source Section */}
                    <div id="source" className="min-h-[80vh] py-32 flex flex-col md:flex-row items-center gap-16 md:gap-24">
                        <div className="flex-1 space-y-8">
                            <h3 className="text-3xl md:text-5xl font-medium text-slate-900 font-dmsans">
                                Define Once. <br /> Source Everywhere.
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
                            <button className="bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] py-4 px-10 rounded-xl hover:scale-105 active:scale-95 transition-all">
                                Learn More
                            </button>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="aspect-4/3 bg-slate-50 border border-slate-100 rounded-3xl p-10 flex flex-col justify-center">
                                <div className="space-y-4 opacity-40 grayscale">
                                    <div className="h-4 w-3/4 bg-slate-200 rounded-full"></div>
                                    <div className="h-4 w-1/2 bg-slate-200 rounded-full"></div>
                                    <div className="h-4 w-2/3 bg-slate-200 rounded-full"></div>
                                    <div className="pt-8 flex gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-slate-200"></div>
                                        <div className="w-12 h-12 rounded-xl bg-slate-200"></div>
                                        <div className="w-12 h-12 rounded-xl bg-slate-200"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Screen Section */}
                    <div id="screen" className="min-h-[80vh] py-32 flex flex-col md:flex-row items-center gap-16 md:gap-24">
                        <div className="flex-1 w-full md:order-1 order-2">
                            <div className="aspect-4/3 bg-slate-50 border border-slate-100 rounded-[40px] p-8 relative overflow-hidden">
                                <div className="w-full h-full border border-slate-200 rounded-3xl bg-white shadow-sm p-6 space-y-6">
                                    <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                                        <div>
                                            <div className="h-3 w-24 bg-slate-100 rounded-full mb-2"></div>
                                            <div className="h-2 w-16 bg-slate-50 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2 w-full bg-slate-50 rounded-full"></div>
                                        <div className="h-2 w-full bg-slate-50 rounded-full"></div>
                                        <div className="h-2 w-2/3 bg-slate-50 rounded-full"></div>
                                    </div>
                                    <div className="pt-4 flex justify-between">
                                        <div className="h-8 w-24 bg-green-50 rounded-lg border border-green-100"></div>
                                        <div className="h-8 w-24 bg-slate-100 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-8 md:order-2 order-1">
                            <h3 className="text-3xl md:text-5xl font-medium text-slate-900 font-dmsans">
                                Vet Rigorously. <br /> Hire Confidently.
                            </h3>
                            <p className="text-lg text-slate-500 leading-relaxed font-dmsans max-w-lg">
                                We screen for 200+ data points, including technical fundamentals, live coding proficiency, and communication excellence.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Rejected", val: "80%" },
                                    { label: "Elite", val: "TOP 5%" }
                                ].map(s => (
                                    <div key={s.label} className="p-5 border border-slate-100 rounded-2xl bg-slate-50">
                                        <p className="text-[10px] font-black uppercase text-slate-400 mb-1">{s.label}</p>
                                        <p className="text-2xl font-black text-slate-900 font-ibmplexmonomedium">{s.val}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] py-4 px-10 rounded-xl hover:scale-105 active:scale-95 transition-all">
                                View Vetting Process
                            </button>
                        </div>
                    </div>

                    {/* Match Section */}
                    <div id="deploy" className="min-h-[80vh] py-32 flex flex-col md:flex-row items-center gap-16 md:gap-24">
                        <div className="flex-1 space-y-8">
                            <h3 className="text-3xl md:text-5xl font-medium text-slate-900 font-dmsans">
                                Deploy Speed. <br /> SCALE FASTER.
                            </h3>
                            <p className="text-lg text-slate-500 leading-relaxed font-dmsans max-w-lg">
                                Once vetted, we match you with 1-3 hand-picked engineers who are ready to integrate. Risk-free 2-week trial included.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-6 p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors cursor-default group">
                                    <div className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity">⚡</div>
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-600">48-Hour Shortlist</span>
                                </div>
                                <div className="flex items-center gap-6 p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors cursor-default group">
                                    <div className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity">🛡️</div>
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-600">Replacement Guarantee</span>
                                </div>
                            </div>
                            <button className="bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] py-4 px-10 rounded-xl hover:scale-105 active:scale-95 transition-all">
                                Hire a Dev
                            </button>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="aspect-square bg-slate-50 border border-slate-100 rounded-[50%] p-16 flex items-center justify-center relative">
                                <div className="w-full aspect-square border-2 border-dashed border-slate-200 rounded-full animate-[spin_20s_linear_infinite] absolute"></div>
                                <div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-xl flex items-center justify-center text-4xl z-10">👨‍💻</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}


