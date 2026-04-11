export default function TestimonialsWall() {
    const testimonials = [
        {
            initials: "EC",
            quote: "Before Bytedocker, hiring senior engineers was a constant distraction. Their vetting pipeline delivers exactly what they advertise — no compromises.",
            name: "Eric Collins",
            role: "CTO, TechBridge",
        },
        {
            initials: "AS",
            quote: "Finding someone with deep autonomy who fit into our async communication style felt impossible. Bytedocker found them in a week.",
            name: "Amanda Seyfried",
            role: "VP Engineering, GrowthFlow",
        },
        {
            initials: "MR",
            quote: "We'd been burned by two freelancers before Bytedocker. The vetting process they use is unlike anything I've seen. Our engineer hit the ground running on day one.",
            name: "Marcus Reeves",
            role: "CTO, FinTrack",
        },
        {
            initials: "JL",
            quote: "I was skeptical about remote hiring for a medical platform. Bytedocker delivered a senior dev who understood compliance requirements without being told twice.",
            name: "Jana Lin",
            role: "VP Product, Orion Health",
        },
        {
            initials: "TN",
            quote: "The speed is what impressed me most. We sent a brief on Monday and had a qualified CV by Wednesday. The engineer is still with us two years later.",
            name: "Tom Nakamura",
            role: "Co-founder, ShipFast",
        },
        {
            initials: "RB",
            quote: "I've hired through agencies, job boards, and referrals. Nothing came close to the quality and turnaround speed we got from Bytedocker.",
            name: "Rachel Burke",
            role: "Engineering Manager, Storeify",
        },
    ];

    return (
        <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] tracking-tight max-w-md font-family:var(--font-grotesk) uppercase">
                        What our clients say
                    </h2>
                    <span className="text-sm font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest font-black">4.9 / 5 — 180+ reviews</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-[3px] border-[#0a0a0a] rounded-none overflow-hidden divide-y-[3px] lg:divide-y-0 divide-[#0a0a0a] [&>*:nth-child(n+4)]:lg:border-t-[3px] [&>*:nth-child(n+4)]:border-t-[#0a0a0a] shadow-neo bg-[#ffffff]">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`p-8 flex flex-col justify-between gap-8 border-l-[6px] border-l-[#ff8c00] ${i % 3 !== 2 ? "lg:border-r-[3px] lg:border-r-[#0a0a0a]" : ""} ${i % 2 !== 1 ? "md:border-r-[3px] lg:border-r-0 md:border-r-[#0a0a0a]" : ""}`}
                        >
                            <p className="text-[#4a4a4a] leading-relaxed text-base">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-none bg-[#ff8c00] border-[2px] border-[#0a0a0a] flex items-center justify-center text-xs font-ibmplexmonomedium text-[#ffffff] shrink-0 font-black">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-dmsans font-black text-[#0a0a0a] text-sm">{t.name}</p>
                                    <p className="text-xs font-ibmplexmonomedium text-[#4a4a4a] uppercase tracking-widest mt-0.5">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
