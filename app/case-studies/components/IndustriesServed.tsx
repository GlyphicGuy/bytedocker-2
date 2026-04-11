export default function IndustriesServed() {
    const industries = [
        { num: "01", name: "Fintech", count: "23 placements" },
        { num: "02", name: "HealthTech", count: "18 placements" },
        { num: "03", name: "AI / ML", count: "31 placements" },
        { num: "04", name: "E-Commerce", count: "27 placements" },
        { num: "05", name: "Logistics", count: "14 placements" },
        { num: "06", name: "B2B SaaS", count: "41 placements" },
        { num: "07", name: "Developer Tools", count: "19 placements" },
        { num: "08", name: "EdTech", count: "12 placements" },
    ];

    return (
        <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-4 tracking-tight font-family:var(--font-grotesk) uppercase">
                    Industries we&apos;ve served
                </h2>
                <p className="text-[#4a4a4a] text-lg mb-16 max-w-lg">
                    From early-stage startups to scaling scaleups — across nearly every major sector.
                </p>

                <div className="divide-y-[3px] divide-[#0a0a0a] border-t-[3px] border-[#0a0a0a]">
                    {industries.map((ind) => (
                        <div key={ind.num} className="py-6 flex items-center justify-between gap-6 group">
                            <div className="flex items-center gap-8">
                                <span className="text-sm font-ibmplexmonomedium text-[#ff8c00] w-8 shrink-0 font-black">{ind.num}</span>
                                <span className="text-xl font-dmsans font-black text-[#0a0a0a] uppercase">{ind.name}</span>
                            </div>
                            <span className="text-sm font-ibmplexmonomedium text-[#4a4a4a] font-black">{ind.count}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
