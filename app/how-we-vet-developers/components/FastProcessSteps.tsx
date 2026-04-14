export default function FastProcessSteps() {
    const steps = [
        {
            num: "01",
            title: "Submit a request",
            description: "Tell us what you need. Share your tech stack, project details, and team context.",
        },
        {
            num: "02",
            title: "Get a CV in 18h",
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
        <section className="py-20 px-6 bg-[#f5f0e8] font-dmsans border-b-[3px] border-[#0a0a0a]">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-12 tracking-tight font-family:var(--font-grotesk) uppercase">
                    Things moving fast at <br /> Bytedocker.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-[#0a0a0a] border-[3px] border-[#0a0a0a] rounded-none overflow-hidden shadow-neo">
                    {steps.map((step) => (
                        <div key={step.num} className="p-8 flex flex-col gap-6">
                            <span className="text-sm font-ibmplexmonomedium text-[#ff8c00] font-black">{step.num}</span>
                            <div>
                                <h3 className="text-lg font-dmsans font-black text-[#0a0a0a] mb-2">{step.title}</h3>
                                <p className="text-[#4a4a4a] text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
