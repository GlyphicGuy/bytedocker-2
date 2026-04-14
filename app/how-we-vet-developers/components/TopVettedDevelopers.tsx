import Image from "next/image";

export default function TopVettedDevelopers() {
    return (
        <section className="bg-[#f5f0e8] border-b-[3px] border-[#0a0a0a] py-20 px-6 font-dmsans relative overflow-hidden">
            <div className="absolute -top-6 left-8 w-16 h-16 bg-[#ff8c00] border-[3px] border-[#0a0a0a] rotate-6 shadow-neo"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#ffffff] border-[3px] border-[#0a0a0a] -rotate-6 shadow-neo"></div>
            <div className="container mx-auto max-w-[1200px]">

                {/* Header & Image Row */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-14">
                    <div className="flex-1 max-w-2xl">
                        <div className="inline-flex items-center gap-3 mb-6 bg-[#ffffff] px-4 py-2 border-[3px] border-[#0a0a0a] shadow-neo uppercase tracking-widest text-xs font-ibmplexmonomedium">
                            <span className="w-7 h-7 bg-[#0a0a0a] text-[#f5f0e8] flex items-center justify-center text-[10px] font-black">TOP</span>
                            <span className="text-[#0a0a0a]">Vetting standard</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-6 leading-[1.1] tracking-tight font-family:var(--font-grotesk) uppercase">
                            When we say &ldquo;top vetted developers&rdquo;, we mean it
                        </h2>

                        <div className="space-y-5 text-[#4a4a4a] leading-relaxed text-lg">
                            <p>Since 2022, after screening thousands of candidates, we&apos;ve found how to filter for developers who can get things done without babysitting.</p>
                            <p>We don&apos;t trust online tests, AI, and auto-screening software. Call it old-fashioned, but those are people of flesh and blood making your next hire happen fast and easily.</p>
                            <p className="text-[#0a0a0a] font-black">How do we identify a good candidate?</p>
                        </div>
                    </div>

                    {/* Image placeholder — drop your image here */}
                    <div className="w-full lg:w-[450px] shrink-0 aspect-4/3 flex flex-col items-center justify-center gap-3 border-[3px] border-[#0a0a0a] bg-[#ffffff] shadow-neo relative overflow-hidden">
                        <Image src="/undraw_grading-papers_lty0.svg" alt="Top vetted developers" width={300} height={300} className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* Feature List */}
                <div className="max-w-3xl divide-y-[3px] divide-[#0a0a0a] border-[3px] border-[#0a0a0a] bg-[#ffffff] shadow-neo">

                    <div className="p-8 md:p-10 flex gap-8 items-start">
                        <span className="text-xs font-ibmplexmonomedium text-[#0a0a0a] bg-[#ff8c00] border-[2px] border-[#0a0a0a] px-2 py-1 shrink-0 font-black">01</span>
                        <div>
                            <h3 className="text-xl font-dmsans font-black text-[#0a0a0a] mb-3">Proven commercial experience</h3>
                            <p className="text-[#4a4a4a] leading-relaxed">Not on paper — real-world experience with the required stack. Our developers solve realistic problems on a technical interview to prove it.</p>
                        </div>
                    </div>

                    <div className="p-8 md:p-10 flex gap-8 items-start">
                        <span className="text-xs font-ibmplexmonomedium text-[#0a0a0a] bg-[#ff8c00] border-[2px] border-[#0a0a0a] px-2 py-1 shrink-0 font-black">02</span>
                        <div>
                            <h3 className="text-xl font-dmsans font-black text-[#0a0a0a] mb-3">Fluent English &amp; effective communication</h3>
                            <p className="text-[#4a4a4a] leading-relaxed">No rehearsed speeches. We test communication from casual small talk to complex collaboration scenarios. Our developers are a pleasure to work with.</p>
                        </div>
                    </div>

                    <div className="p-8 md:p-10 flex gap-8 items-start">
                        <span className="text-xs font-ibmplexmonomedium text-[#0a0a0a] bg-[#ff8c00] border-[2px] border-[#0a0a0a] px-2 py-1 shrink-0 font-black">03</span>
                        <div>
                            <h3 className="text-xl font-dmsans font-black text-[#0a0a0a] mb-3">Self-management &amp; responsibility</h3>
                            <p className="text-[#4a4a4a] leading-relaxed">Non-responsive or chronically late candidates are eliminated immediately. Our two-week screening involves constant interactions — no second chances for those who can&apos;t honour commitments.</p>
                        </div>
                    </div>

                </div>

                <div className="mt-10">
                    <button className="bg-[#0a0a0a] hover:shadow-neo-lg text-[#f5f0e8] font-black text-base px-7 py-3.5 rounded-none transition-all font-ibmplexmonomedium border-[4px] border-[#0a0a0a] shadow-neo active:translate-y-0.5 uppercase tracking-widest text-xs">
                        Hire vetted developer
                    </button>
                </div>

            </div>
        </section>
    );
}
