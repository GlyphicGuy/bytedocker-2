export default function KeyMetrics() {
    const metrics = [
        { value: "48h", label: "Average time to first CV" },
        { value: "Top 5%", label: "Of candidates placed successfully" },
        { value: "11 days", label: "Median time-to-hire across all cases" },
        { value: "94%", label: "Client retention after first placement" },
    ];

    return (
        <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans border-y-[3px] border-[#0a0a0a]">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex flex-col md:flex-row items-start gap-16">

                    <div className="md:w-[340px] shrink-0">
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-5 tracking-tight leading-tight font-family:var(--font-grotesk) uppercase">
                            Results that speak for themselves
                        </h2>
                        <p className="text-[#4a4a4a] text-lg leading-relaxed">
                            Aggregated across all Bytedocker placements since 2015.
                        </p>
                    </div>

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 divide-y-[3px] sm:divide-y-0 border-[3px] border-[#0a0a0a] rounded-none overflow-hidden shadow-neo bg-[#ffffff]">
                        {metrics.map((m, i) => (
                            <div
                                key={i}
                                className={`p-10 ${i % 2 === 0 ? "sm:border-r-[3px] border-[#0a0a0a]" : ""} ${i < 2 ? "border-b-[3px] border-[#0a0a0a]" : ""}`}
                            >
                                <p className="text-4xl md:text-5xl font-black text-[#ff8c00] mb-3 font-family:var(--font-grotesk)">{m.value}</p>
                                <p className="text-sm text-[#4a4a4a] leading-relaxed uppercase font-ibmplexmonomedium">{m.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
