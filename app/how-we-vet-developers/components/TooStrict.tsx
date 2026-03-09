export default function TooStrict() {
    const items = [
        {
            num: "01",
            title: "We struggle to find developers",
            description: "Because our bar is so high, we manually review hundreds of CVs out of our network to find a single perfect match.",
        },
        {
            num: "02",
            title: "We are impossible to please",
            description: "Yes, we ask tough questions. We probe deep into a candidate's background and reject those who are consistently superficial.",
        },
        {
            num: "03",
            title: "We only want the crème de la crème",
            description: "Our clients trust us to deliver exceptional seniors. We can't compromise early in the pipeline — it costs too much to correct later.",
        },
        {
            num: "04",
            title: "Nothing of the above is true...",
            description: "Except it actually is. The hiring process is tough so that managing the developer is a breeze for our clients.",
        },
    ];

    return (
        <section className="bg-slate-50 py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    <div className="lg:w-[380px] shrink-0">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-5 tracking-tight leading-tight">
                            Too strict, too good to be true?
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8">
                            It&apos;s a common concern. But rigorous screening is exactly what makes our developers reliable.
                        </p>
                        <button className="bg-black hover:bg-slate-800 text-white font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">
                            Hire a vetted dev
                        </button>
                    </div>

                    <div className="flex-1 divide-y divide-slate-200 border-t border-slate-200">
                        {items.map((item) => (
                            <div key={item.num} className="py-8 flex gap-8 items-start">
                                <span className="text-sm font-ibmplexmonomedium text-slate-400 pt-0.5 shrink-0 w-8">{item.num}</span>
                                <div>
                                    <h3 className="text-lg font-dmsans font-medium text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
