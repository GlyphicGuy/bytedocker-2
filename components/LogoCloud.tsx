"use client";

export default function LogoCloud() {
    const filters = ["ALL", "FINTECH", "SAAS", "AI", "INFRA", "WEB3"];

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
        <div className="bg-slate-50 py-12 md:py-24">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 border-b border-slate-100 pb-12 font-ibmplexmonomedium">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] text-slate-400">( 02 )</span>
                            <span className="text-[11px] uppercase tracking-widest text-slate-900">Working For</span>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                            {filters.map((filter, idx) => (
                                <button
                                    key={filter}
                                    className={`text-[10px] uppercase tracking-widest transition-colors ${idx === 0 ? "text-slate-900 underline underline-offset-8 decoration-1" : "text-slate-400 hover:text-slate-900"}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-md">
                        <p className="text-[11px] md:text-xs leading-relaxed text-slate-900 uppercase tracking-widest">
                            Bytedocker Talent is proud to partner with high-growth startups which have ambitious goals and are passionate about building elite engineering cultures.
                        </p>
                    </div>
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-slate-100 font-ibmplexmonomedium">
                    {logos.map((logo, idx) => (
                        <div
                            key={idx}
                            className="aspect-square flex items-center justify-center p-8 border-r border-b border-slate-100 group transition-all hover:bg-slate-50/50"
                        >
                            <span className={`text-lg md:text-xl font-black uppercase tracking-tighter transition-all grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 ${logo.color}`}>
                                {logo.name}
                            </span>
                        </div>
                    ))}
                    {/* <div className="aspect-square border-r border-b border-slate-100 bg-slate-50/20"></div> */}
                </div>
            </div>
        </div>

    );
}
