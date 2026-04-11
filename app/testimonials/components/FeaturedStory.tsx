export default function FeaturedStory() {
    return (
        <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans border-t-[3px] border-[#0a0a0a]">
            <div className="container mx-auto max-w-[1200px]">
                <p className="text-sm font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest mb-12 font-black">Featured story</p>

                <div className="border-[3px] border-[#0a0a0a] rounded-none overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-neo bg-[#ffffff]">
                    {/* Quote */}
                    <div className="p-10 md:p-14 flex flex-col justify-between gap-10 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-[#0a0a0a]">
                        <p className="text-2xl md:text-3xl font-black text-[#0a0a0a] leading-snug font-family:var(--font-grotesk)">
                            &ldquo;We scaled from 4 engineers to 11 in five months — all through Bytedocker. Every single hire has stayed with us.&rdquo;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-none bg-[#ff8c00] border-[2px] border-[#0a0a0a] flex items-center justify-center text-sm font-ibmplexmonomedium text-[#ffffff] shrink-0 font-black">
                                DK
                            </div>
                            <div>
                                <p className="font-dmsans font-black text-[#0a0a0a]">Daniel Kim</p>
                                <p className="text-xs font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest mt-0.5 font-black">CTO, Lumen AI</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 divide-x-[3px] divide-y-[3px] divide-[#0a0a0a]">
                        {[
                            { value: "7", label: "Engineers placed" },
                            { value: "5 mo.", label: "Total scaling duration" },
                            { value: "100%", label: "Retention rate" },
                            { value: "9 days", label: "Avg. time-to-hire" },
                        ].map((stat, i) => (
                            <div key={i} className="p-8 flex flex-col justify-end gap-2">
                                <p className="text-3xl font-black text-[#ff8c00]">{stat.value}</p>
                                <p className="text-xs font-ibmplexmonomedium text-[#4a4a4a] uppercase tracking-widest leading-tight font-black">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
