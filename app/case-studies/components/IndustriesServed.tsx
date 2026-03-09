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
        <section className="bg-white py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-4 tracking-tight">
                    Industries we&apos;ve served
                </h2>
                <p className="text-slate-500 text-lg mb-16 max-w-lg">
                    From early-stage startups to scaling scaleups — across nearly every major sector.
                </p>

                <div className="divide-y divide-slate-200 border-t border-slate-200">
                    {industries.map((ind) => (
                        <div key={ind.num} className="py-6 flex items-center justify-between gap-6 group">
                            <div className="flex items-center gap-8">
                                <span className="text-sm font-ibmplexmonomedium text-slate-400 w-8 shrink-0">{ind.num}</span>
                                <span className="text-xl font-dmsans font-medium text-slate-900">{ind.name}</span>
                            </div>
                            <span className="text-sm font-ibmplexmonomedium text-slate-400">{ind.count}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
