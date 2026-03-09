export default function FAQCTA() {
    return (
        <section className="bg-slate-900 text-white py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="border border-slate-800 rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12">
                    <div className="max-w-xl">
                        <p className="text-sm font-ibmplexmonomedium text-slate-500 uppercase tracking-widest mb-6">Still have questions?</p>
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium mb-6 leading-[1.1] tracking-tight">
                            Talk to a person, not a chatbot.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-10">
                            If your question isn&apos;t answered above, reach out directly. Our team responds within a few hours.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white hover:bg-slate-100 text-slate-900 font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">
                                Contact us
                            </button>
                            <button className="border border-slate-700 hover:border-slate-500 text-white font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">
                                Submit a brief
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-[240px] shrink-0 border border-slate-800 rounded-xl p-6 flex flex-col gap-4">
                        <p className="text-xs font-ibmplexmonomedium text-slate-500 uppercase tracking-widest">Response time</p>
                        <div className="border-t border-slate-800 pt-4 divide-y divide-slate-800">
                            {[
                                ["&lt; 4 hours", "Typical reply time"],
                                ["48 hours", "First CV delivery"],
                                ["No sales calls", "Just answers"],
                            ].map(([val, lbl], i) => (
                                <div key={i} className="py-3">
                                    <p className="text-sm text-white font-medium" dangerouslySetInnerHTML={{ __html: val }} />
                                    <p className="text-xs text-slate-400 mt-0.5">{lbl}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
