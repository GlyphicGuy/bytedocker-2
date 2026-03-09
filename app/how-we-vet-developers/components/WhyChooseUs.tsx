export default function WhyChooseUs() {
    const items = [
        {
            num: "01",
            title: "Accuracy over software",
            description: "AI is a useful tool, but we don't delegate our core competency to it. Every candidate undergoes a series of manual, human-led reviews.",
        },
        {
            num: "02",
            title: "Direct process, no bureaucracy",
            description: "You communicate directly with the developers you hire — establishing an organic team extension from day one.",
        },
        {
            num: "03",
            title: "Human-centric approach",
            description: "Our interviews evaluate emotional intelligence, teamwork, and cultural adaptability — not just coding ability.",
        },
        {
            num: "04",
            title: "No middleman cost",
            description: "Transparent billing with no hidden recruitment fees. You pay for execution and talent availability only.",
        },
    ];

    return (
        <section className="bg-slate-50 py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-16 max-w-xl tracking-tight leading-tight">
                    Why companies trust our infrastructure
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 border border-slate-200 rounded-2xl overflow-hidden">
                    {items.map((item, i) => (
                        <div key={item.num} className={`p-8 flex gap-6 items-start ${i % 2 === 0 ? "md:border-r border-slate-200" : ""} ${i < 2 ? "border-b border-slate-200" : ""}`}>
                            <span className="text-sm font-ibmplexmonomedium text-slate-400 shrink-0 w-8 pt-0.5">{item.num}</span>
                            <div>
                                <h3 className="text-lg font-dmsans font-medium text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <button className="bg-black hover:bg-slate-800 text-white font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">
                        Start your process
                    </button>
                </div>
            </div>
        </section>
    );
}
