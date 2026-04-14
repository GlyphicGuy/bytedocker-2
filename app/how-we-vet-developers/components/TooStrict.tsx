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
        <section className="bg-[#f5f0e8] py-20 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
            <div className="flex flex-col lg:flex-row gap-12 items-start">

                    <div className="lg:w-[380px] shrink-0">
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-5 tracking-tight leading-tight font-family:var(--font-grotesk) uppercase">
                            Too strict, too good to be true?
                        </h2>
                        <p className="text-[#4a4a4a] text-lg leading-relaxed mb-6">
                            It&apos;s a common concern. But rigorous screening is exactly what makes our developers reliable.
                        </p>
                        <button className="bg-[#0a0a0a] hover:shadow-neo-lg text-[#f5f0e8] font-black text-base px-7 py-3.5 rounded-none transition-all font-ibmplexmonomedium border-[4px] border-[#0a0a0a] shadow-neo active:translate-y-0.5 uppercase tracking-widest text-xs">
                            Hire a vetted dev
                        </button>
                    </div>

                    <div className="flex-1 divide-y-[3px] divide-[#0a0a0a] border-t-[3px] border-[#0a0a0a]">
                        {items.map((item) => (
                            <div key={item.num} className="py-8 flex gap-8 items-start">
                                <span className="text-sm font-ibmplexmonomedium text-[#ff8c00] pt-0.5 shrink-0 w-8 font-black">{item.num}</span>
                                <div>
                                    <h3 className="text-lg font-dmsans font-black text-[#0a0a0a] mb-2">{item.title}</h3>
                                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
