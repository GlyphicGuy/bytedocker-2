"use client";

import { useState } from "react";

const faqs = [
    {
        category: "Getting started",
        items: [
            {
                q: "How do I submit a hiring request?",
                a: "Fill out our brief form with your role requirements, tech stack, team context, and timeline. We'll follow up within a few hours to confirm the details.",
            },
            {
                q: "How fast will I receive a CV?",
                a: "In most cases, you'll receive a shortlisted candidate within 48 hours of submitting your brief. Complex or niche roles may take slightly longer.",
            },
            {
                q: "Do I need to sign a contract upfront?",
                a: "No. You only engage a contract once you've decided to hire a candidate. There's no commitment required to receive CVs.",
            },
        ],
    },
    {
        category: "The vetting process",
        items: [
            {
                q: "What does your vetting process actually look like?",
                a: "Every candidate goes through an English assessment, an offline programming task, a live coding session with one of our senior engineers, a video interview, and a final verification call.",
            },
            {
                q: "Do you use AI or automated tools to screen candidates?",
                a: "No. Every stage is human-led. We believe automated tools miss the nuance that makes a developer truly great to work with.",
            },
            {
                q: "Can I conduct my own technical interview?",
                a: "Absolutely. We encourage it. Our vetting is thorough, but you should always have one conversation to verify cultural and team fit for your specific context.",
            },
        ],
    },
    {
        category: "Pricing & contracts",
        items: [
            {
                q: "How does pricing work?",
                a: "We have a transparent placement fee structure. There are no hidden recruitment overhead costs. You pay for our service once per successful placement.",
            },
            {
                q: "Are there any ongoing monthly fees?",
                a: "No ongoing platform fees. You pay your developer directly, and our one-time fee is settled at the point of hire.",
            },
            {
                q: "What if the placement doesn't work out?",
                a: "We offer a replacement guarantee. If for any reason a placement doesn't work out within the first 30 days, we find you another candidate at no extra charge.",
            },
        ],
    },
    {
        category: "Working with the developer",
        items: [
            {
                q: "Who manages the developer after hiring?",
                a: "You do — directly. There's no agency layer between you and your new engineer. We facilitate the introduction and step aside.",
            },
            {
                q: "What timezone do developers work in?",
                a: "We have developers across multiple timezones. Let us know your preferred overlap hours and we'll filter accordingly.",
            },
        ],
    },
];

export default function FAQAccordion() {
    const [open, setOpen] = useState<string | null>(null);

    return (
        <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans border-y-[3px] border-[#0a0a0a]">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-4 tracking-tight font-family:var(--font-grotesk) uppercase">
                    Your questions, answered
                </h2>
                <p className="text-[#4a4a4a] text-lg mb-16 max-w-lg">
                    Everything you need to know before submitting your first brief.
                </p>

                <div className="space-y-4">
                    {faqs.map((section) => (
                        <div key={section.category}>
                            <p className="text-xs font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest mb-4 font-black">{section.category}</p>
                            <div className="divide-y-[3px] divide-[#0a0a0a]">
                                {section.items.map((item) => {
                                    const id = `${section.category}-${item.q}`;
                                    const isOpen = open === id;
                                    return (
                                        <div key={id} className={`border-[3px] border-[#0a0a0a] bg-[#ffffff] rounded-none mb-4 transition-all ${isOpen ? "shadow-neo-lg border-l-[6px] border-l-[#ff8c00]" : "shadow-neo"}`}>
                                            <button
                                                className="w-full py-6 px-6 flex items-start justify-between gap-6 text-left group"
                                                onClick={() => setOpen(isOpen ? null : id)}
                                            >
                                                <span className="text-lg font-dmsans font-black text-[#0a0a0a] group-hover:text-[#ff8c00] transition-colors">
                                                    {item.q}
                                                </span>
                                                <span className={`text-[#0a0a0a] shrink-0 mt-1 transition-transform duration-200 font-black ${isOpen ? "rotate-45" : ""}`}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                                        <path d="M12 5v14M5 12h14" />
                                                    </svg>
                                                </span>
                                            </button>
                                            {isOpen && (
                                                <div className="pb-6 px-6 border-t-[3px] border-[#0a0a0a] pt-6">
                                                    <p className="text-[#4a4a4a] leading-relaxed">{item.a}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
