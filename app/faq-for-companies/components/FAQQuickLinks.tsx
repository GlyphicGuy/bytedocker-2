export default function FAQQuickLinks() {
    const topics = [
        { num: "01", label: "Getting started", count: "3 questions" },
        { num: "02", label: "The vetting process", count: "3 questions" },
        { num: "03", label: "Pricing & contracts", count: "3 questions" },
        { num: "04", label: "Working with the developer", count: "2 questions" },
    ];

    return (
        <section className="bg-[#f5f0e8] py-20 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="lg:w-[340px] shrink-0">
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-5 tracking-tight leading-tight font-family:var(--font-grotesk) uppercase">
                            Topics covered
                        </h2>
                        <p className="text-[#4a4a4a] text-lg leading-relaxed">
                            Browse by topic or scroll through all questions below.
                        </p>
                    </div>

                    <div className="flex-1 divide-y-[3px] divide-[#0a0a0a] border-t-[3px] border-[#0a0a0a]">
                        {topics.map((t) => (
                            <div key={t.num} className="py-6 flex items-center justify-between gap-6 hover:bg-[#ffffff] transition-colors px-6 -mx-6">
                                <div className="flex items-center gap-8">
                                    <span className="text-sm font-ibmplexmonomedium text-[#ff8c00] w-8 shrink-0 font-black">{t.num}</span>
                                    <span className="text-lg font-dmsans font-black text-[#0a0a0a]">{t.label}</span>
                                </div>
                                <span className="text-sm font-ibmplexmonomedium text-[#4a4a4a] shrink-0 font-black">{t.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
