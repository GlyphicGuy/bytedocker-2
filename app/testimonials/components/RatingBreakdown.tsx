export default function RatingBreakdown() {
    const categories = [
        { label: "Technical quality", score: "4.9" },
        { label: "Communication", score: "4.8" },
        { label: "Speed of placement", score: "4.9" },
        { label: "Cultural fit", score: "4.7" },
        { label: "Post-hire support", score: "4.8" },
    ];

    return (
        <section className="bg-slate-50 py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    <div className="lg:w-[360px] shrink-0">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-5 tracking-tight leading-tight">
                            Ratings by category
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Aggregated from 180+ verified client reviews collected post-placement.
                        </p>
                    </div>

                    <div className="flex-1 divide-y divide-slate-200 border-t border-slate-200">
                        {categories.map((cat, i) => (
                            <div key={i} className="py-6 flex items-center justify-between gap-6">
                                <div className="flex items-center gap-8">
                                    <span className="text-sm font-ibmplexmonomedium text-slate-400 w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="text-lg font-dmsans font-medium text-slate-900">{cat.label}</span>
                                </div>
                                <span className="text-sm font-ibmplexmonomedium text-slate-500">{cat.score} / 5</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
