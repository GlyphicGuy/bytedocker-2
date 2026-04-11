"use client";

export default function Engineered() {
    const reasons = [
        { label: "Only Top 5% Accepted" },
        { label: "48-Hour Matching" },
        { label: "Startup-Focused Engineers" },
        { label: "Time-Zone Aligned" },
        { label: "Replacement Guarantee" }
    ];

    return (
        <section id="about" className="py-24 bg-[#f5f0e8] border-y-[3px] border-[#0a0a0a] overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-100/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <span className="text-[#ff8c00] font-bold uppercase tracking-widest text-xs mb-4 block font-ibmplexmonomedium">Our Advantage</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-8 font-family:var(--font-grotesk) uppercase">
                    Why Startups Choose Bytedocker
                </h2>
                <p className="text-xl text-[#4a4a4a] mb-20 max-w-xl mx-auto font-dmsans">
                    We bridge the gap between world-class Indian talent and ambitious US startups.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 mb-16">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-6 group cursor-default">
                            <div className="w-20 h-20 md:w-28 md:h-28 rounded-none bg-[#ffffff] border-[3px] border-[#0a0a0a] flex items-center justify-center shadow-neo group-hover:shadow-neo-lg active:translate-y-0.5 transition-all">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-none bg-[#ff8c00]"></div>
                            </div>
                            <p className="text-xs md:text-sm font-black text-[#0a0a0a] group-hover:text-[#0a0a0a] transition-colors uppercase tracking-widest text-center max-w-[140px] font-ibmplexmonomedium">{reason.label}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto rounded-none bg-[#ffffff] border-[3px] border-[#0a0a0a] shadow-neo mt-24 p-0 overflow-hidden">
                    <div className="p-12 rounded-none bg-[#f5f0e8] border-b-[2px] border-[#0a0a0a] flex flex-col items-center gap-8">
                        <p className="text-[#0a0a0a] text-2xl font-medium leading-relaxed font-dmsans">
                            &quot;Bytedocker matched us with a senior Node.js engineer in 24 hours. Two weeks later, he was the most productive member of our sprint.&quot;
                        </p>
                        <div className="flex items-center gap-4 w-full px-12 py-8 justify-center">
                            <div className="w-12 h-12 rounded-none bg-[#ff8c00] border-[2px] border-[#0a0a0a] flex items-center justify-center text-[#0a0a0a] font-black uppercase text-xs">JS</div>
                            <div className="text-center">
                                <p className="text-base font-family:var(--font-grotesk) font-black uppercase text-[#0a0a0a]">Founder & CTO</p>
                                <p className="text-sm text-[#ff8c00] font-black uppercase text-xs tracking-tight">Series A FinTech Startup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

