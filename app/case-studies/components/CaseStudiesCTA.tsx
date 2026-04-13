export default function CaseStudiesCTA() {
    return (
        <section className="bg-[#0a0a0a] text-[#f5f0e8] py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="border-[3px] border-[#f5f0e8] rounded-none p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12 shadow-neo bg-[#0a0a0a]">

                    <div className="max-w-xl">
                        <p className="text-sm font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest mb-6 font-black">Start your story</p>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight font-family:var(--font-grotesk) text-[#f5f0e8] uppercase">
                            Your case study starts with one brief.
                        </h2>
                        <p className="text-[#cccccc] text-lg leading-relaxed mb-10">
                            Join the companies that scaled their engineering teams faster — without the hiring overhead.
                        </p>
                        <button className="bg-[#f5f0e8] hover:shadow-neo-lg text-[#0a0a0a] font-black text-base px-7 py-3.5 rounded-none transition-all font-ibmplexmonomedium border-[4px] border-[#f5f0e8] shadow-neo active:translate-y-0.5 uppercase tracking-widest text-xs">
                            Submit your brief
                        </button>
                    </div>

                    <div className="w-full md:w-[260px] shrink-0 border-[3px] border-[#f5f0e8] rounded-none p-6 flex flex-col gap-4 shadow-neo bg-[#1a1a1a]">
                        <p className="text-xs font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest font-black">What you get</p>
                        <div className="border-t-[3px] border-[#f5f0e8] pt-4 divide-y-[3px] divide-[#f5f0e8]">
                            {[
                                "CV within 18 hours",
                                "Pre-vetted, no whiteboard tests",
                                "Direct communication, no agency layer",
                                "Ongoing support post-placement",
                            ].map((item, i) => (
                                <div key={i} className="py-3 flex items-start gap-3">
                                    <span className="text-xs font-ibmplexmonomedium text-[#ff8c00] w-5 shrink-0 pt-0.5 font-black">{String(i + 1).padStart(2, "0")}</span>
                                    <p className="text-sm text-[#f5f0e8] leading-snug">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
