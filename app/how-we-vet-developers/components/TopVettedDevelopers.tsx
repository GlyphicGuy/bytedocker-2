import Image from "next/image";

export default function TopVettedDevelopers() {
    return (
        <section className="bg-slate-50 border-b border-slate-100 py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">

                {/* Header & Image Row */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 mb-20">
                    <div className="flex-1 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-8 leading-[1.1] tracking-tight">
                            When we say &ldquo;top vetted developers&rdquo;, we mean it
                        </h2>

                        <div className="space-y-5 text-slate-500 leading-relaxed text-lg">
                            <p>Since 2015, after screening thousands of candidates, we&apos;ve found how to filter for developers who can get things done without babysitting.</p>
                            <p>We don&apos;t trust online tests, AI, and auto-screening software. Call it old-fashioned, but those are people of flesh and blood making your next hire happen fast and easily.</p>
                            <p className="text-slate-900 font-medium">How do we identify a good candidate?</p>
                        </div>
                    </div>

                    {/* Image placeholder — drop your image here */}
                    <div className="w-full lg:w-[450px] shrink-0 aspect-4/3 flex flex-col items-center justify-center gap-3">
                        <Image src="/undraw_grading-papers_lty0.svg" alt="Top vetted developers" width={300} height={300} className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* Feature List */}
                <div className="max-w-3xl divide-y divide-slate-200 border-t border-slate-200">

                    <div className="py-10 flex gap-8 items-start">
                        <span className="text-sm font-ibmplexmonomedium text-slate-400 pt-1 shrink-0 w-8">01</span>
                        <div>
                            <h3 className="text-xl font-dmsans font-medium text-slate-900 mb-3">Proven commercial experience</h3>
                            <p className="text-slate-500 leading-relaxed">Not on paper — real-world experience with the required stack. Our developers solve realistic problems on a technical interview to prove it.</p>
                        </div>
                    </div>

                    <div className="py-10 flex gap-8 items-start">
                        <span className="text-sm font-ibmplexmonomedium text-slate-400 pt-1 shrink-0 w-8">02</span>
                        <div>
                            <h3 className="text-xl font-dmsans font-medium text-slate-900 mb-3">Fluent English &amp; effective communication</h3>
                            <p className="text-slate-500 leading-relaxed">No rehearsed speeches. We test communication from casual small talk to complex collaboration scenarios. Our developers are a pleasure to work with.</p>
                        </div>
                    </div>

                    <div className="py-10 flex gap-8 items-start">
                        <span className="text-sm font-ibmplexmonomedium text-slate-400 pt-1 shrink-0 w-8">03</span>
                        <div>
                            <h3 className="text-xl font-dmsans font-medium text-slate-900 mb-3">Self-management &amp; responsibility</h3>
                            <p className="text-slate-500 leading-relaxed">Non-responsive or chronically late candidates are eliminated immediately. Our two-week screening involves constant interactions — no second chances for those who can&apos;t honour commitments.</p>
                        </div>
                    </div>

                </div>

                <div className="mt-12">
                    <button className="bg-black hover:bg-slate-800 text-white font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">
                        Hire vetted developer
                    </button>
                </div>

            </div>
        </section>
    );
}
