export default function CaseStudiesCTA() {
    return (
        <section className="bg-slate-900 text-white py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="border border-slate-800 rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12">

                    <div className="max-w-xl">
                        <p className="text-sm font-ibmplexmonomedium text-slate-500 uppercase tracking-widest mb-6">Start your story</p>
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium mb-6 leading-[1.1] tracking-tight">
                            Your case study starts with one brief.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-10">
                            Join the companies that scaled their engineering teams faster — without the hiring overhead.
                        </p>
                        <button className="bg-white hover:bg-slate-100 text-slate-900 font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">
                            Submit your brief
                        </button>
                    </div>

                    <div className="w-full md:w-[260px] shrink-0 border border-slate-800 rounded-xl p-6 flex flex-col gap-4">
                        <p className="text-xs font-ibmplexmonomedium text-slate-500 uppercase tracking-widest">What you get</p>
                        <div className="border-t border-slate-800 pt-4 divide-y divide-slate-800">
                            {[
                                "CV within 48 hours",
                                "Pre-vetted, no whiteboard tests",
                                "Direct communication, no agency layer",
                                "Ongoing support post-placement",
                            ].map((item, i) => (
                                <div key={i} className="py-3 flex items-start gap-3">
                                    <span className="text-xs font-ibmplexmonomedium text-slate-600 w-5 shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                                    <p className="text-sm text-slate-300 leading-snug">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
