export default function OurMission() {
    const values = [
        {
            num: "01",
            title: "Quality over quantity",
            description: "We'd rather place one excellent developer than ten mediocre ones. Every placement reflects our reputation.",
        },
        {
            num: "02",
            title: "Human-first vetting",
            description: "No automated screening. Every candidate is assessed by a human interviewer who has actually built software in production.",
        },
        {
            num: "03",
            title: "Transparent by default",
            description: "No hidden fees, no mysterious matchmaking. We show our process, our pricing, and our reasoning.",
        },
        {
            num: "04",
            title: "Long-term thinking",
            description: "We care about what happens after the hire. Our team stays in contact with both the client and developer post-placement.",
        },
    ];

    return (
        <section className="bg-white py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
                    <div className="lg:w-[420px] shrink-0">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-5 tracking-tight leading-tight">
                            Our mission
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Connect the most talented, overlooked engineers in the world with companies building category-defining products — without the overhead of a traditional agency.
                        </p>
                    </div>

                    <div className="flex-1 border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-200">
                        {values.map((v) => (
                            <div key={v.num} className="p-8 flex gap-8 items-start">
                                <span className="text-sm font-ibmplexmonomedium text-slate-400 pt-0.5 shrink-0 w-8">{v.num}</span>
                                <div>
                                    <h3 className="text-lg font-dmsans font-medium text-slate-900 mb-2">{v.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
