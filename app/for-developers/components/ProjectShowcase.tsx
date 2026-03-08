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
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 pb-12 border-b border-slate-200">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-ibmplexmonomedium uppercase tracking-[0.3em] text-blue-600 mb-4 block">Social Proof</span>
                        <h2 className="text-4xl md:text-6xl font-medium text-slate-900 font-dmsans">
                            Projects won by <br /> your fellas lately
                        </h2>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-6 bg-white rounded-full border border-slate-200 shadow-sm">
                        <span className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">JD</div>
                            ))}
                        </span>
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-600">500+ Devs Active</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 group">
                            <div className="flex flex-col md:flex-row justify-between  gap-10">
                                <div className="flex-1 space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-ibmplexmonomedium uppercase tracking-tighter text-slate-500">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-medium text-slate-900 font-dmsans group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-500 text-base font-dmsans max-w-2xl leading-relaxed">
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
                                                <p className="text-[9px] font-ibmplexmonomedium uppercase tracking-widest text-slate-400">{s.label}</p>
                                                <p className="text-sm font-bold text-slate-900 uppercase">{s.val}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <button className="w-full md:w-auto bg-slate-50 hover:bg-black hover:text-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all font-ibmplexmonomedium uppercase text-xs shadow-sm">
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
