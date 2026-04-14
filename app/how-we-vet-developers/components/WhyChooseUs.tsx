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
        <section className="bg-[#f5f0e8] py-20 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-12 max-w-xl tracking-tight leading-tight font-family:var(--font-grotesk) uppercase">
                    Why companies trust our infrastructure
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 divide-y-[3px] md:divide-y-0 border-[3px] border-[#0a0a0a] rounded-none overflow-hidden shadow-neo bg-[#ffffff]">
                    {items.map((item, i) => (
                        <div key={item.num} className={`p-8 flex gap-6 items-start border-b-[3px] border-[#0a0a0a] ${i % 2 === 0 ? "md:border-r-[3px] md:border-b-0" : ""} ${i % 2 === 0 ? "" : ""}`}>
                            <span className="text-sm font-ibmplexmonomedium text-[#ff8c00] shrink-0 w-8 pt-0.5 font-black">{item.num}</span>
                            <div>
                                <h3 className="text-lg font-dmsans font-black text-[#0a0a0a] mb-2">{item.title}</h3>
                                <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <button className="bg-[#0a0a0a] hover:shadow-neo-lg text-[#f5f0e8] font-black text-base px-7 py-3.5 rounded-none transition-all font-ibmplexmonomedium border-[4px] border-[#0a0a0a] shadow-neo active:translate-y-0.5 uppercase tracking-widest text-xs">
                        Start your process
                    </button>
                </div>
            </div>
        </section>
    );
}
