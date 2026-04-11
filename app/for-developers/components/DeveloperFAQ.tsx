"use client";

import { useState } from "react";

export default function DeveloperFAQ() {
    const faqs = [
        {
            question: "How long does the vetting process take?",
            answer: "Our standard vetting process takes about 2-4 days from your initial application to being fully approved for matching."
        },
        {
            question: "How do I get paid?",
            answer: "We handle all payments through our platform. You set your rate, and we pay you directly on a bi-weekly or monthly schedule, regardless of whether the startup has paid us yet."
        },
        {
            question: "What kind of startups will I work with?",
            answer: "We partner primarily with Series A to Series C startups in the US and Europe. These are high-growth companies with strong engineering cultures and stable funding."
        },
        {
            question: "Is there a minimum commitment?",
            answer: "It depends on the project. Some are full-time (40h/week) replacements for a standard job, while others are part-time advisory or contract roles."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#f5f0e8] border-t-[3px] border-[#0a0a0a]">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="md:col-span-4">
                        <span className="text-[10px] font-ibmplexmonomedium uppercase tracking-[0.3em] text-[#4a4a4a] mb-4 block">Knowledge Base</span>
                        <h2 className="text-4xl font-black text-[#0a0a0a] font-family:var(--font-grotesk) uppercase">
                            Frequently <br /> Asked Questions
                        </h2>
                    </div>

                    <div className="md:col-span-8 space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`bg-[#ffffff] rounded-none overflow-hidden transition-all shadow-neo ${openIndex === idx
                                        ? "shadow-neo-lg border-[3px] border-[#0a0a0a] border-l-[6px] border-l-[#ff8c00]"
                                        : "border-[3px] border-[#0a0a0a]"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full px-8 py-6 text-left flex justify-between items-center group"
                                >
                                    <span className="text-lg font-black text-[#0a0a0a] uppercase tracking-tight font-dmsans group-hover:text-[#ff8c00] transition-colors">
                                        {faq.question}
                                    </span>
                                    <span className={`text-2xl transition-transform duration-300 text-[#0a0a0a] font-black ${openIndex === idx ? "rotate-45" : ""}`}>
                                        +
                                    </span>
                                </button>
                                <div
                                    className={`px-8 transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    <p className="text-[#4a4a4a] font-dmsans leading-relaxed border-t-[2px] border-[#0a0a0a] pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
