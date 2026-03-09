export default function ClientTestimonials() {
    const testimonials = [
        {
            initials: "MR",
            quote: "We'd been burned by two freelancers before Bytedocker. The vetting process they use is unlike anything I've seen — our engineer hit the ground running on day one.",
            name: "Marcus Reeves",
            role: "CTO, FinTrack",
        },
        {
            initials: "JL",
            quote: "I was skeptical about remote hiring for a medical platform. Bytedocker delivered a senior dev who understood compliance requirements without being told twice.",
            name: "Jana Lin",
            role: "VP Product, Orion Health",
        },
        {
            initials: "TN",
            quote: "The speed is what impressed me most. We sent a brief on Monday and had a qualified CV by Wednesday. The engineer is still with us two years later.",
            name: "Tom Nakamura",
            role: "Co-founder, ShipFast",
        },
    ];

    return (
        <section className="bg-slate-50 py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 tracking-tight max-w-md">
                        From the clients themselves
                    </h2>
                    <span className="text-sm font-ibmplexmonomedium text-slate-400 uppercase tracking-widest">4.9 / 5 rating</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200">
                    {testimonials.map((t, i) => (
                        <div key={i} className="p-8 flex flex-col justify-between gap-8">
                            <p className="text-slate-600 leading-relaxed text-base">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-ibmplexmonomedium text-slate-500 shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-dmsans font-medium text-slate-900 text-sm">{t.name}</p>
                                    <p className="text-xs font-ibmplexmonomedium text-slate-400 uppercase tracking-widest mt-0.5">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
