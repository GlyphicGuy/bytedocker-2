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
        <section className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="md:col-span-4">
                        <span className="text-[10px] font-ibmplexmonomedium uppercase tracking-[0.3em] text-slate-400 mb-4 block">Knowledge Base</span>
                        <h2 className="text-4xl font-medium text-slate-900 font-dmsans">
                            Frequently <br /> Asked Questions
                        </h2>
                    </div>

                    <div className="md:col-span-8 space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl border border-slate-100 overflow-hidden transition-all hover:border-slate-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full px-8 py-6 text-left flex justify-between items-center group"
                                >
                                    <span className="text-lg font-bold text-slate-900 uppercase tracking-tight font-dmsans group-hover:text-blue-600 transition-colors">
                                        {faq.question}
                                    </span>
                                    <span className={`text-2xl transition-transform duration-300 ${openIndex === idx ? "rotate-45" : ""}`}>
                                        +
                                    </span>
                                </button>
                                <div
                                    className={`px-8 transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    <p className="text-slate-500 font-dmsans leading-relaxed">
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
