"use client";

export default function LogoCloud() {
    const filters = ["FINTECH", "SAAS", "AI", "INFRA", "WEB3"];

    const logos = [
        { name: "Google", color: "text-black" },
        { name: "Microsoft", color: "text-black" },
        { name: "Amazon", color: "text-black" },
        { name: "Meta", color: "text-black" },
        { name: "Stripe", color: "text-black" },
        { name: "OpenAI", color: "text-black" },
        { name: "Scale", color: "text-black" },
        { name: "Vercel", color: "text-black" },
        { name: "Retool", color: "text-black" },
        { name: "Linear", color: "text-black" },
    ];

    return (
        <div className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 mb-16 md:mb-20 border-b border-slate-100 pb-12 font-ibmplexmonomedium">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] text-slate-400 font-bold">( 02 )</span>
                            <span className="text-[11px] uppercase tracking-widest text-slate-900 font-black">Working For</span>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    className="text-[10px] sm:text-[11px] uppercase tracking-widest transition-colors text-slate-400 hover:text-slate-900 font-bold"
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-md">
                        <p className="text-[10px] md:text-xs leading-relaxed text-slate-900 uppercase tracking-widest font-black opacity-80">
                            The vetted developers in our network have previously worked at high-growth startups and leading technology companies, bringing proven experience in building scalable products and strong engineering cultures.
                        </p>
                    </div>
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-slate-100 font-ibmplexmonomedium">
                    {logos.map((logo, idx) => (
                        <div
                            key={idx}
                            className="aspect-square flex items-center justify-center p-6 sm:p-8 border-r border-b border-slate-100 group transition-all hover:bg-slate-50/50"
                        >
                            <span className={`text-base sm:text-lg md:text-xl font-black uppercase tracking-tighter transition-all grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 ${logo.color}`}>
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
