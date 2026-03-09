export default function FAQQuickLinks() {
    const topics = [
        { num: "01", label: "Getting started", count: "3 questions" },
        { num: "02", label: "The vetting process", count: "3 questions" },
        { num: "03", label: "Pricing & contracts", count: "3 questions" },
        { num: "04", label: "Working with the developer", count: "2 questions" },
    ];

    return (
        <section className="bg-slate-50 py-24 px-6 font-dmsans border-t border-slate-100">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-[340px] shrink-0">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-5 tracking-tight leading-tight">
                            Topics covered
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Browse by topic or scroll through all questions below.
                        </p>
                    </div>

                    <div className="flex-1 divide-y divide-slate-200 border-t border-slate-200">
                        {topics.map((t) => (
                            <div key={t.num} className="py-6 flex items-center justify-between gap-6">
                                <div className="flex items-center gap-8">
                                    <span className="text-sm font-ibmplexmonomedium text-slate-400 w-8 shrink-0">{t.num}</span>
                                    <span className="text-lg font-dmsans font-medium text-slate-900">{t.label}</span>
                                </div>
                                <span className="text-sm font-ibmplexmonomedium text-slate-400 shrink-0">{t.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
