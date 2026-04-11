export default function RatingBreakdown() {
    const categories = [
        { label: "Technical quality", score: "4.9" },
        { label: "Communication", score: "4.8" },
        { label: "Speed of placement", score: "4.9" },
        { label: "Cultural fit", score: "4.7" },
        { label: "Post-hire support", score: "4.8" },
    ];

    return (
        <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    <div className="lg:w-[360px] shrink-0">
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-5 tracking-tight leading-tight font-family:var(--font-grotesk) uppercase">
                            Ratings by category
                        </h2>
                        <p className="text-[#4a4a4a] text-lg leading-relaxed">
                            Aggregated from 180+ verified client reviews collected post-placement.
                        </p>
                    </div>

                    <div className="flex-1 divide-y-[3px] divide-[#0a0a0a] border-t-[3px] border-[#0a0a0a]">
                        {categories.map((cat, i) => (
                            <div key={i} className="py-6 flex items-center justify-between gap-6">
                                <div className="flex items-center gap-8">
                                    <span className="text-sm font-ibmplexmonomedium text-[#ff8c00] w-8 shrink-0 font-black">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="text-lg font-dmsans font-black text-[#0a0a0a]">{cat.label}</span>
                                </div>
                                <span className="text-sm font-ibmplexmonomedium text-[#ff8c00] font-black">{cat.score} / 5</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
