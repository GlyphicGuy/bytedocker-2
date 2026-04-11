export default function CompanyTimeline() {
    const milestones = [
        { year: "2015", event: "Bytedocker founded in Kyiv with a team of three." },
        { year: "2017", event: "First 50 placements completed. Expanded vetting to include live coding rounds." },
        { year: "2019", event: "Launched our structured English proficiency evaluation for all candidates." },
        { year: "2021", event: "Crossed 500 successful placements. Expanded into the US and EU markets." },
        { year: "2023", event: "Introduced dedicated Tech Lead reviews for senior-level candidates." },
        { year: "2025", event: "1,000+ placements across 40+ countries. 94% client retention rate." },
    ];

    return (
        <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-4 tracking-tight font-family:var(--font-grotesk) uppercase">
                    A decade of doing it right
                </h2>
                <p className="text-[#4a4a4a] text-lg mb-16 max-w-lg">
                    Ten years of refining our process, one placement at a time.
                </p>

                <div className="max-w-3xl divide-y-[3px] divide-[#0a0a0a] border-t-[3px] border-[#0a0a0a]">
                    {milestones.map((m, i) => (
                        <div key={i} className="py-8 px-8 flex gap-10 items-start bg-[#ffffff] border-[3px] border-[#0a0a0a] border-t-0 mb-3 shadow-neo hover:shadow-neo-lg transition-all">
                            <span className="text-sm font-ibmplexmonomedium text-[#ff8c00] shrink-0 w-12 font-black uppercase">{m.year}</span>
                            <p className="text-[#0a0a0a] font-dmsans font-black text-lg leading-snug">{m.event}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
