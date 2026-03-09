export default function KeyMetrics() {
    const metrics = [
        { value: "48h", label: "Average time to first CV" },
        { value: "Top 5%", label: "Of candidates placed successfully" },
        { value: "11 days", label: "Median time-to-hire across all cases" },
        { value: "94%", label: "Client retention after first placement" },
    ];

    return (
        <section className="bg-slate-50 py-24 px-6 font-dmsans border-y border-slate-200">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex flex-col md:flex-row items-start gap-16">

                    <div className="md:w-[340px] shrink-0">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-5 tracking-tight leading-tight">
                            Results that speak for themselves
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Aggregated across all Bytedocker placements since 2015.
                        </p>
                    </div>

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 border border-slate-200 rounded-2xl overflow-hidden">
                        {metrics.map((m, i) => (
                            <div
                                key={i}
                                className={`p-10 ${i % 2 === 0 ? "sm:border-r border-slate-200" : ""} ${i < 2 ? "border-b border-slate-200" : ""}`}
                            >
                                <p className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-3">{m.value}</p>
                                <p className="text-sm text-slate-500 leading-relaxed">{m.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
