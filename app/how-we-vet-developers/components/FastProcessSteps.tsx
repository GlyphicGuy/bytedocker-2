export default function FastProcessSteps() {
    const steps = [
        {
            num: "01",
            title: "Submit a request",
            description: "Tell us what you need. Share your tech stack, project details, and team context.",
        },
        {
            num: "02",
            title: "Get a CV in 48h",
            description: "We match you with the best available engineer from our pre-vetted talent pool — fast.",
        },
        {
            num: "03",
            title: "Interview",
            description: "Meet the candidate to ensure technical and cultural fit before making a decision.",
        },
        {
            num: "04",
            title: "Ready to work",
            description: "Onboard your new team member and hit the ground running without delays.",
        },
    ];

    return (
        <section className="py-24 px-6 bg-white font-dmsans border-b border-slate-100">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-16 tracking-tight">
                    Things moving fast at <br /> Bytedocker.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
                    {steps.map((step) => (
                        <div key={step.num} className="p-8 flex flex-col gap-6">
                            <span className="text-sm font-ibmplexmonomedium text-slate-400">{step.num}</span>
                            <div>
                                <h3 className="text-lg font-dmsans font-medium text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
