export default function TestimonialsCTA() {
    return (
        <section className="bg-slate-900 text-white py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="border border-slate-800 rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12">
                    <div className="max-w-xl">
                        <p className="text-sm font-ibmplexmonomedium text-slate-500 uppercase tracking-widest mb-6">Join them</p>
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium mb-6 leading-[1.1] tracking-tight">
                            Ready to write your own success story?
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-10">
                            Hundreds of companies have already scaled their teams with Bytedocker. Yours could be next.
                        </p>
                        <button className="bg-white hover:bg-slate-100 text-slate-900 font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">
                            Submit your brief
                        </button>
                    </div>

                    <div className="w-full md:w-[240px] shrink-0 border border-slate-800 rounded-xl p-6 flex flex-col gap-4">
                        <p className="text-xs font-ibmplexmonomedium text-slate-500 uppercase tracking-widest">At a glance</p>
                        <div className="border-t border-slate-800 pt-4 divide-y divide-slate-800">
                            {[
                                ["180+", "Verified reviews"],
                                ["4.9", "Average rating"],
                                ["2015", "Placing developers since"],
                            ].map(([val, lbl], i) => (
                                <div key={i} className="py-3">
                                    <p className="text-2xl font-dmsans font-medium text-white">{val}</p>
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
