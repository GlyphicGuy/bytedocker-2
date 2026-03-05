"use client";

export default function ChannelGrid() {
    const clients = [
        { name: "Funded Startups", icon: "🌱" },
        { name: "SaaS Companies", icon: "☁️" },
        { name: "AI Platforms", icon: "🤖" },
        { name: "Product Teams", icon: "🛠️" },
        { name: "FinTech Firms", icon: "🏦" },
        { name: "HealthTech", icon: "🏥" }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-24">
                <div className="flex-1 text-center md:text-left">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Focus</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 max-w-lg">
                        Built for High-Growth Tech Teams
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-xl">
                        We specialize in placing senior engineers into fast-moving environments where code quality and speed matter above all else.
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <button className="bg-slate-900 text-white font-bold px-10 py-5 rounded-2xl hover:bg-slate-800 transition-all shadow-xl">
                            Talk to Us
                        </button>
                    </div>
                </div>

                <div className="flex-1 w-full relative">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-10 bg-slate-50 rounded-[48px] border border-slate-100 shadow-inner group">
                        {clients.map((client, idx) => (
                            <div key={idx} className="aspect-square bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-4 group-hover:scale-[0.95] hover:scale-110! transition-all duration-500 cursor-default">
                                <span className="text-5xl mb-1">{client.icon}</span>
                                <span className="text-xs font-black text-slate-500 uppercase tracking-tighter text-center px-4 leading-tight">{client.name}</span>
                            </div>
                        ))}
                        {/* Decorative Blur */}
                        <div className="absolute inset-0 z-[-1] bg-blue-100/30 blur-[100px] rounded-full scale-110"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

