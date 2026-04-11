export default function TechInterviewsTimeline() {
    const steps = [
        {
            num: "01",
            title: "English test",
            description: "To avoid painful and counterproductive miscommunications.",
        },
        {
            num: "02",
            title: "Programming task",
            description: "We emulate real-life problems the developer will face every day — not whiteboard exercises. This happens offline.",
        },
        {
            num: "03",
            title: "Live coding with a Senior Dev",
            description: "A senior developer reviews and questions the code and architectural decisions. We also throw in a live coding task to observe how the candidate reasons and troubleshoots.",
        },
        {
            num: "04",
            title: "Video & face-to-face screening",
            description: "To verify communication skills, reliability, and overall adequacy of the candidate. We never settle for just messages.",
        },
        {
            num: "05",
            title: "Final verification",
            description: "Once the candidate has passed the entire process, we meet to share feedback and discuss start dates.",
        },
    ];

    return (
        <section className="bg-[#0a0a0a] py-24 px-6 font-dmsans text-[#f5f0e8] border-y-[3px] border-[#f5f0e8]">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight max-w-2xl font-family:var(--font-grotesk) uppercase">
                    Tech interviews designed to spot the right talent
                </h2>
                <p className="text-[#cccccc] text-lg mb-16 max-w-xl">
                    Every interview consists of several specific stages supervised by a relevant technical team lead.
                </p>

                <div className="max-w-3xl divide-y-[3px] divide-[#f5f0e8] border-t-[3px] border-[#f5f0e8]">
                    {steps.map((step) => (
                        <div key={step.num} className="py-8 flex gap-8 items-start">
                            <span className="text-sm font-ibmplexmonomedium text-[#ff8c00] pt-0.5 shrink-0 w-8 font-black">{step.num}</span>
                            <div>
                                <h3 className="text-lg font-dmsans font-black text-[#f5f0e8] mb-2">{step.title}</h3>
                                <p className="text-[#cccccc] leading-relaxed text-sm">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-14">
                    <button className="bg-[#f5f0e8] hover:shadow-neo-lg text-[#0a0a0a] font-black text-base px-7 py-3.5 rounded-none transition-all font-ibmplexmonomedium border-[4px] border-[#f5f0e8] shadow-neo active:translate-y-0.5 uppercase tracking-widest text-xs">
                        Hire vetted developer
                    </button>
                </div>
            </div>
        </section>
    );
}
