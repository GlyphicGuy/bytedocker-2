export default function CaseStudiesGrid() {
    const cases = [
        {
            num: "01",
            company: "FinTrack",
            industry: "Fintech",
            role: "Senior Backend Engineer",
            result: "Reduced time-to-hire from 3 months to 11 days. Engineer shipped their first feature within the first week.",
            tags: ["Node.js", "PostgreSQL", "AWS"],
            timeToHire: "11 days",
        },
        {
            num: "02",
            company: "Orion Health",
            industry: "HealthTech",
            role: "Full-Stack Engineer",
            result: "Scaled their patient portal from 2k to 40k users in 4 months without a single critical incident.",
            tags: ["React", "Python", "GCP"],
            timeToHire: "8 days",
        },
        {
            num: "03",
            company: "Lumen AI",
            industry: "AI / ML",
            role: "MLOps Engineer",
            result: "Reduced model inference latency by 62% and cut cloud costs by $18k/month within 6 weeks.",
            tags: ["Python", "Kubernetes", "MLflow"],
            timeToHire: "14 days",
        },
        {
            num: "04",
            company: "ShipFast",
            industry: "Logistics",
            role: "Mobile Engineer",
            result: "Rebuilt their driver app from scratch. App store rating went from 2.8 to 4.6 within 3 months.",
            tags: ["React Native", "TypeScript", "Firebase"],
            timeToHire: "6 days",
        },
        {
            num: "05",
            company: "Storeify",
            industry: "E-Commerce",
            role: "Platform Engineer",
            result: "Built a custom order management system that replaced three separate SaaS tools, saving $4k/month.",
            tags: ["Go", "Redis", "PostgreSQL"],
            timeToHire: "9 days",
        },
        {
            num: "06",
            company: "ClearBooks",
            industry: "B2B SaaS",
            role: "Senior Frontend Engineer",
            result: "Redesigned and rebuilt the core dashboard. User session time increased by 38% post-launch.",
            tags: ["Next.js", "TypeScript", "Figma"],
            timeToHire: "7 days",
        },
    ];

    return (
        <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans border-y-[3px] border-[#0a0a0a]">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-4 tracking-tight font-family:var(--font-grotesk) uppercase">
                    Client case studies
                </h2>
                <p className="text-[#4a4a4a] text-lg mb-16 max-w-xl">
                    Real placements, real results. Here&apos;s what our clients achieved after hiring through Bytedocker.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-[3px] border-[#0a0a0a] rounded-none overflow-hidden divide-y-[3px] md:divide-y-0 [&>*:nth-child(n+4)]:md:border-t-[3px] [&>*:nth-child(n+4)]:border-[#0a0a0a] shadow-neo bg-[#ffffff] [&>*:nth-child(n+4)]:md:border-[#0a0a0a]">
                    {cases.map((c, i) => (
                        <div
                            key={c.num}
                            className={`p-8 flex flex-col gap-6 ${i % 3 !== 2 ? "lg:border-r-[3px] lg:border-[#0a0a0a]" : ""} ${i % 2 !== 1 ? "md:border-r-[3px] lg:border-r-0 border-[#0a0a0a]" : ""}`}
                        >
                            <div className="flex items-start justify-between">
                                <span className="text-sm font-ibmplexmonomedium text-[#ff8c00] font-black">{c.num}</span>
                                <span className="text-xs font-ibmplexmonomedium text-[#0a0a0a] uppercase tracking-widest border-[2px] border-[#0a0a0a] px-2.5 py-1 rounded-none font-black">{c.industry}</span>
                            </div>

                            <div>
                                <h3 className="text-xl font-black text-[#0a0a0a] mb-1 uppercase">{c.company}</h3>
                                <p className="text-sm text-[#4a4a4a] font-ibmplexmonomedium">{c.role}</p>
                            </div>

                            <p className="text-[#4a4a4a] text-sm leading-relaxed flex-1">{c.result}</p>

                            <div className="flex items-center justify-between pt-4 border-t-[2px] border-[#0a0a0a]">
                                <div className="flex flex-wrap gap-1.5">
                                    {c.tags.map(tag => (
                                        <span key={tag} className="text-xs font-ibmplexmonomedium text-[#0a0a0a] bg-[#f5f0e8] border-[2px] border-[#0a0a0a] px-2 py-0.5 rounded-none font-black">{tag}</span>
                                    ))}
                                </div>
                                <span className="text-xs font-ibmplexmonomedium text-[#4a4a4a] shrink-0 ml-4 font-black">{c.timeToHire}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
