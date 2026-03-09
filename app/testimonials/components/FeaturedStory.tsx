export default function FeaturedStory() {
    return (
        <section className="bg-white py-24 px-6 font-dmsans border-t border-slate-100">
            <div className="container mx-auto max-w-[1200px]">
                <p className="text-sm font-ibmplexmonomedium text-slate-400 uppercase tracking-widest mb-12">Featured story</p>

                <div className="border border-slate-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                    {/* Quote */}
                    <div className="p-10 md:p-14 flex flex-col justify-between gap-10 border-b lg:border-b-0 lg:border-r border-slate-200">
                        <p className="text-2xl md:text-3xl font-dmsans font-medium text-slate-900 leading-snug">
                            &ldquo;We scaled from 4 engineers to 11 in five months — all through Bytedocker. Every single hire has stayed with us.&rdquo;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-ibmplexmonomedium text-slate-500 shrink-0">
                                DK
                            </div>
                            <div>
                                <p className="font-dmsans font-medium text-slate-900">Daniel Kim</p>
                                <p className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest mt-0.5">CTO, Lumen AI</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 divide-x divide-y divide-slate-200">
                        {[
                            { value: "7", label: "Engineers placed" },
                            { value: "5 mo.", label: "Total scaling duration" },
                            { value: "100%", label: "Retention rate" },
                            { value: "9 days", label: "Avg. time-to-hire" },
                        ].map((stat, i) => (
                            <div key={i} className="p-8 flex flex-col justify-end gap-2">
                                <p className="text-3xl font-dmsans font-medium text-slate-900">{stat.value}</p>
                                <p className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
