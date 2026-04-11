"use client";

export default function ChannelGrid() {
    const clients = [
        { name: "Funded Startups" },
        { name: "SaaS Companies" },
        { name: "AI Platforms" },
        { name: "Product Teams" },
        { name: "FinTech Firms" },
        { name: "HealthTech" }
    ];

    return (
        <section className="py-24 bg-[#f5f0e8] overflow-hidden border-y-[3px] border-[#0a0a0a]">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-24">
                <div className="flex-1 text-center md:text-left">
                    <span className="text-[#ff8c00] font-bold uppercase tracking-widest text-xs mb-4 block font-ibmplexmonomedium">Our Focus</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-8 max-w-lg font-family:var(--font-grotesk) uppercase">
                        Built for High-Growth Tech Teams
                    </h2>
                    <p className="text-xl text-[#4a4a4a] mb-12 max-w-xl font-dmsans">
                        We specialize in placing senior engineers into fast-moving environments where code quality and speed matter above all else.
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <button className="bg-[#0a0a0a] text-[#f5f0e8] font-black px-10 py-5 rounded-none border-[3px] border-[#0a0a0a] shadow-neo hover:shadow-neo-lg active:translate-y-0.5 transition-all uppercase text-xs tracking-widest font-ibmplexmonomedium">
                            Talk to Us
                        </button>
                    </div>
                </div>

                <div className="flex-1 w-full relative">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-8 md:p-12 bg-[#ffffff] rounded-none border-[3px] border-[#0a0a0a] shadow-neo group">
                        {clients.map((client, idx) => (
                            <div key={idx} className="aspect-square bg-[#f5f0e8] rounded-none border-[3px] border-[#0a0a0a] shadow-neo flex flex-col items-center justify-center gap-4 group-hover:shadow-neo hover:shadow-neo-lg! transition-all duration-500 cursor-default active:translate-y-0.5">
                                <div className="w-12 h-12 rounded-none bg-[#0a0a0a]"></div>
                                <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-tighter text-center px-4 leading-tight font-ibmplexmonomedium">{client.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

