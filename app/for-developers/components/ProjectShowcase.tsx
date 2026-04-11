"use client";

export default function ProjectShowcase() {
    const projects = [
        {
            title: "Tech Lead for AI-driven business platform",
            tags: ["React", "Python", "OpenAI", "AWS"],
            description: "Scale a Series A stealth startup building a next-gen business intelligence engine. Looking for a high-ownership lead.",
            stats: {
                duration: "12+ Months",
                type: "Full-Time",
                involvement: "40h/week"
            }
        },
        {
            title: "Frontend Architect for Fintech MVP",
            tags: ["Next.js", "Typescript", "Tailwind", "Stripe"],
            description: "Build the foundational UI architecture for a cross-border payment solution targeting European markets.",
            stats: {
                duration: "3-6 Months",
                type: "Contract",
                involvement: "30h/week"
            }
        },
        {
            title: "Mobile Engineer (React Native) for Social App",
            tags: ["React Native", "Firebase", "Redux", "GC"],
            description: "Lead the mobile development for a high-growth social networking platform in the lifestyle space.",
            stats: {
                duration: "9+ Months",
                type: "Full-Time",
                involvement: "40h/week"
            }
        }
    ];

    return (
        <section className="py-24 bg-[#f5f0e8] relative overflow-hidden border-y-[3px] border-[#0a0a0a]">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 pb-12 border-b-[3px] border-[#0a0a0a]">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-ibmplexmonomedium uppercase tracking-[0.3em] text-[#ff8c00] mb-4 block">Social Proof</span>
                        <h2 className="text-4xl md:text-6xl font-black text-[#0a0a0a] font-family:var(--font-grotesk) uppercase">
                            Projects won by <br /> your fellas lately
                        </h2>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-6 bg-[#ffffff] rounded-none border-[3px] border-[#0a0a0a] shadow-neo">
                        <span className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-none border-2 border-[#ffffff] bg-[#ff8c00] flex items-center justify-center text-[10px] font-black">JD</div>
                            ))}
                        </span>
                        <span className="text-[11px] font-black uppercase tracking-widest text-[#0a0a0a]">500+ Devs Active</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-[#ffffff] rounded-none p-8 md:p-12 border-[3px] border-[#0a0a0a] group shadow-neo hover:shadow-neo-lg transition-all">
                            <div className="flex flex-col md:flex-row justify-between  gap-10">
                                <div className="flex-1 space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-[#f5f0e8] border-[2px] border-[#0a0a0a] rounded-none text-[10px] font-ibmplexmonomedium uppercase tracking-tighter text-[#0a0a0a]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-[#0a0a0a] font-dmsans group-hover:text-[#ff8c00] transition-colors uppercase">
                                            {project.title}
                                        </h3>
                                        <p className="text-[#4a4a4a] text-base font-dmsans max-w-2xl leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-12 pt-4">
                                        {[
                                            { label: "Duration", val: project.stats.duration },
                                            { label: "Type", val: project.stats.type },
                                            { label: "Involvement", val: project.stats.involvement }
                                        ].map(s => (
                                            <div key={s.label} className="space-y-1">
                                                <p className="text-[9px] font-ibmplexmonomedium uppercase tracking-widest text-[#4a4a4a]">{s.label}</p>
                                                <p className="text-sm font-black text-[#0a0a0a] uppercase">{s.val}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <button className="w-full md:w-auto bg-[#0a0a0a] hover:shadow-neo-lg text-[#f5f0e8] border-[3px] border-[#0a0a0a] px-10 py-5 rounded-none flex items-center justify-center gap-3 transition-all font-ibmplexmonomedium uppercase text-xs shadow-neo active:translate-y-0.5">
                                        Apply for this role
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
