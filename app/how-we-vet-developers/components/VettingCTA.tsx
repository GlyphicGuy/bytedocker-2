export default function VettingCTA() {
    return (
        <section className="bg-[#0a0a0a] text-[#f5f0e8] py-24 px-6 font-dmsans border-y-[3px] border-[#f5f0e8]">
            <div className="container mx-auto max-w-[1200px]">
                <div className="border-[3px] border-[#f5f0e8] rounded-none p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12 shadow-neo bg-[#0a0a0a]">

                    <div className="max-w-xl">
                        <p className="text-sm font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest mb-6 font-black">Ready to hire</p>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight font-family:var(--font-grotesk) uppercase">
                            Interview vetted developers waiting for your project.
                        </h2>
                        <p className="text-[#cccccc] text-lg leading-relaxed mb-10">
                            Stop filtering through unqualified CVs. Start building with engineers that are already cleared.
                        </p>
                        <button className="bg-[#f5f0e8] hover:shadow-neo-lg text-[#0a0a0a] font-black text-base px-7 py-3.5 rounded-none transition-all font-ibmplexmonomedium border-[4px] border-[#f5f0e8] shadow-neo active:translate-y-0.5 uppercase tracking-widest text-xs">
                            Hire vetted developer
                        </button>
                    </div>

                    <div className="w-full md:w-[260px] shrink-0 border-[3px] border-[#f5f0e8] rounded-none p-6 flex flex-col gap-4 shadow-neo bg-[#1a1a1a]">
                        <p className="text-xs font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest font-black">By the numbers</p>
                        <div className="border-t-[3px] border-[#f5f0e8] pt-4 divide-y-[3px] divide-[#f5f0e8]">
                            <div className="pb-4">
                                <p className="text-3xl font-black text-[#ff8c00]">18h</p>
                                <p className="text-sm text-[#cccccc] mt-1">Average time to first CV</p>
                            </div>
                            <div className="pt-4 pb-4">
                                <p className="text-3xl font-black text-[#ff8c00]">Top 5%</p>
                                <p className="text-sm text-[#cccccc] mt-1">Of screened candidates placed</p>
                            </div>
                            <div className="pt-4">
                                <p className="text-3xl font-black text-[#ff8c00]">2022</p>
                                <p className="text-sm text-[#cccccc] mt-1">Vetting developers since</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
