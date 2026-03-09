export default function VettingCTA() {
    return (
        <section className="bg-slate-900 text-white py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="border border-slate-800 rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12">

                    <div className="max-w-xl">
                        <p className="text-sm font-ibmplexmonomedium text-slate-500 uppercase tracking-widest mb-6">Ready to hire</p>
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium mb-6 leading-[1.1] tracking-tight">
                            Interview vetted developers waiting for your project.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-10">
                            Stop filtering through unqualified CVs. Start building with engineers that are already cleared.
                        </p>
                        <button className="bg-white hover:bg-slate-100 text-slate-900 font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">
                            Hire vetted developer
                        </button>
                    </div>

                    <div className="w-full md:w-[260px] shrink-0 border border-slate-800 rounded-xl p-6 flex flex-col gap-4">
                        <p className="text-xs font-ibmplexmonomedium text-slate-500 uppercase tracking-widest">By the numbers</p>
                        <div className="border-t border-slate-800 pt-4 space-y-4">
                            <div>
                                <p className="text-3xl font-dmsans font-medium text-white">48h</p>
                                <p className="text-sm text-slate-500 mt-1">Average time to first CV</p>
                            </div>
                            <div className="border-t border-slate-800 pt-4">
                                <p className="text-3xl font-dmsans font-medium text-white">Top 5%</p>
                                <p className="text-sm text-slate-500 mt-1">Of screened candidates placed</p>
                            </div>
                            <div className="border-t border-slate-800 pt-4">
                                <p className="text-3xl font-dmsans font-medium text-white">2015</p>
                                <p className="text-sm text-slate-500 mt-1">Vetting developers since</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
