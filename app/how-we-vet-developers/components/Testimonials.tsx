export default function Testimonials() {
    const reviews = [
        {
            initials: "EC",
            quote: "Before we found Bytedocker, hiring senior engineers was a distraction taking away our core team's velocity. Their vetting pipeline genuinely delivers the quality they advertise — without compromises.",
            name: "Eric Collins",
            role: "CTO at TechBridge",
        },
        {
            initials: "AS",
            quote: "It's easy to test coding skills via remote tasks. What Bytedocker did perfectly was finding someone with deep autonomy who fit right into our asynchronous communication style.",
            name: "Amanda Seyfried",
            role: "VP Engineering at GrowthFlow",
        },
    ];

    return (
        <section className="bg-white py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 tracking-tight max-w-md">
                        What clients have to say
                    </h2>
                    <span className="text-sm font-ibmplexmonomedium text-slate-400 uppercase tracking-widest">4.9 / 5 rating</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
                    {reviews.map((r, i) => (
                        <div key={i} className="p-10 flex flex-col justify-between gap-10">
                            <p className="text-slate-600 leading-relaxed text-lg">
                                &ldquo;{r.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-ibmplexmonomedium text-slate-500">
                                    {r.initials}
                                </div>
                                <div>
                                    <p className="font-dmsans font-medium text-slate-900 text-sm">{r.name}</p>
                                    <p className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest mt-0.5">{r.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
