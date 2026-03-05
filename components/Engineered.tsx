"use client";

export default function Engineered() {
    const reasons = [
        { label: "Only Top 5% Accepted", icon: "🏆" },
        { label: "48-Hour Matching", icon: "⚡" },
        { label: "Startup-Focused Engineers", icon: "🚀" },
        { label: "Time-Zone Aligned", icon: "🌍" },
        { label: "Replacement Guarantee", icon: "🛡️" }
    ];

    return (
        <section id="about" className="py-24 bg-white border-y border-slate-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-100/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Advantage</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
                    Why Startups Choose Bytedocker
                </h2>
                <p className="text-xl text-slate-600 mb-20 max-w-xl mx-auto">
                    We bridge the gap between world-class Indian talent and ambitious US startups.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 mb-16">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-6 group cursor-default">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[32px] bg-slate-50 border border-slate-100 flex items-center justify-center text-4xl md:text-5xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-white group-hover:rotate-6">
                                {reason.icon}
                            </div>
                            <p className="text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors uppercase tracking-widest text-center max-w-[120px]">{reason.label}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto p-1 rounded-[40px] bg-slate-50 border border-slate-100 mt-24">
                    <div className="p-12 rounded-[36px] bg-white flex flex-col items-center gap-8 shadow-sm">
                        <p className="italic text-slate-800 text-2xl font-medium leading-relaxed">
                            &quot;Bytedocker matched us with a senior Node.js engineer in 24 hours. Two weeks later, he was the most productive member of our sprint.&quot;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-black">JS</div>
                            <div className="text-left font-bold text-slate-900">
                                <p className="text-base">Founder & CTO</p>
                                <p className="text-sm text-blue-600">Series A FinTech Startup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

