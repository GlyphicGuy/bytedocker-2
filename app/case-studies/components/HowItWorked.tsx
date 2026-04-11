export default function HowItWorked() {
    const steps = [
        {
            num: "01",
            title: "Client submits a brief",
            description: "A short form covering the role, stack, team context, and timeline. No lengthy onboarding process.",
        },
        {
            num: "02",
            title: "We match from our pool",
            description: "Our team identifies the best available pre-vetted candidates from our active talent network — within 48 hours.",
        },
        {
            num: "03",
            title: "Client interviews the candidate",
            description: "One call to verify cultural fit. Technical skills are already confirmed by our vetting process.",
        },
        {
            num: "04",
            title: "Engineer starts contributing",
            description: "Onboarding takes a day. Most engineers push their first commit within the first week.",
        },
    ];

    return (
        <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans border-t-[3px] border-[#0a0a0a]">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-4 tracking-tight font-family:var(--font-grotesk) uppercase">
                    How it worked
                </h2>
                <p className="text-[#4a4a4a] text-lg mb-16 max-w-lg">
                    The same repeatable process behind every successful placement in our case studies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-[3px] border-[#0a0a0a] rounded-none overflow-hidden divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-[#0a0a0a] shadow-neo bg-[#ffffff]">
                    {steps.map((step) => (
                        <div key={step.num} className="p-8 flex flex-col gap-5">
                            <span className="text-sm font-ibmplexmonomedium text-[#ff8c00] font-black">{step.num}</span>
                            <div>
                                <h3 className="text-lg font-black text-[#0a0a0a] mb-2 uppercase">{step.title}</h3>
                                <p className="text-[#4a4a4a] text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
