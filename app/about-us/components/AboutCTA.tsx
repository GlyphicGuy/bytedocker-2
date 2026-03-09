export default function AboutCTA() {
    return (
        <section className="bg-slate-900 text-white py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="border border-slate-800 rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12">
                    <div className="max-w-xl">
                        <p className="text-sm font-ibmplexmonomedium text-slate-500 uppercase tracking-widest mb-6">Work with us</p>
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium mb-6 leading-[1.1] tracking-tight">
                            Hire the engineers we spent years finding.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-10">
                            Ten years of building a talent network so you don&apos;t have to. Let us find your next great engineer.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white hover:bg-slate-100 text-slate-900 font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">
                                Hire a developer
                            </button>
                            <button className="border border-slate-700 hover:border-slate-500 text-white font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">
                                Learn our process
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-[240px] shrink-0 border border-slate-800 rounded-xl p-6 flex flex-col gap-4">
                        <p className="text-xs font-ibmplexmonomedium text-slate-500 uppercase tracking-widest">Who we are</p>
                        <div className="border-t border-slate-800 pt-4 divide-y divide-slate-800">
                            {[
                                ["Kyiv-founded", "Now global"],
                                ["Human-led", "No AI screening"],
                                ["10 years", "Of vetting experience"],
                            ].map(([bold, rest], i) => (
                                <div key={i} className="py-3">
                                    <p className="text-sm text-white font-medium">{bold}</p>
                                    <p className="text-xs text-slate-400 mt-0.5">{rest}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
