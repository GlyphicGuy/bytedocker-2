export default function AboutCTA() {
    return (
        <section className="bg-[#0a0a0a] text-[#f5f0e8] py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="border-[3px] border-[#f5f0e8] rounded-none p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12 shadow-neo bg-[#0a0a0a]">
                    <div className="max-w-xl">
                        <p className="text-xs font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest mb-6 font-black">Work with us</p>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight font-family:var(--font-grotesk) text-[#f5f0e8] uppercase">
                            Hire the engineers we spent years finding.
                        </h2>
                        <p className="text-[#cccccc] text-lg leading-relaxed mb-10">
                            Years of building a talent network so you don&apos;t have to. Let us find your next great engineer.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#f5f0e8] hover:shadow-neo-lg text-[#0a0a0a] font-black text-base px-7 py-3.5 rounded-none transition-all font-ibmplexmonomedium border-[4px] border-[#f5f0e8] shadow-neo active:translate-y-0.5 uppercase tracking-widest text-xs">
                                Hire a developer
                            </button>
                            <button className="border-[4px] border-[#f5f0e8] hover:shadow-neo-lg text-[#f5f0e8] font-black text-base px-7 py-3.5 rounded-none transition-all font-ibmplexmonomedium bg-transparent shadow-neo active:translate-y-0.5 uppercase tracking-widest text-xs">
                                Learn our process
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-[240px] shrink-0 border-[3px] border-[#f5f0e8] rounded-none p-6 flex flex-col gap-4 shadow-neo bg-[#1a1a1a]">
                        <p className="text-xs font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest font-black">Who we are</p>
                        <div className="border-t-[3px] border-[#f5f0e8] pt-4 divide-y-[3px] divide-[#f5f0e8]">
                            {[
                                ["Kyiv-founded", "Now global"],
                                ["Human-led", "No AI screening"],
                                ["Years", "Of vetting experience"],
                            ].map(([bold, rest], i) => (
                                <div key={i} className="py-3">
                                    <p className="text-sm text-[#f5f0e8] font-black uppercase">{bold}</p>
                                    <p className="text-xs text-[#cccccc] mt-0.5">{rest}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
