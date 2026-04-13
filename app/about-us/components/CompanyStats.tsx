export default function CompanyStats() {
    const stats = [
        { value: "50+", label: "Developers placed globally" },
        { value: "40+", label: "Countries served" },
        { value: "97%", label: "Client retention after first hire" },
        { value: "2022", label: "Founded — operating for 10 years" },
    ];

    return (
        <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans border-t-[3px] border-[#0a0a0a]">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-16 tracking-tight font-family:var(--font-grotesk) uppercase">
                    Bytedocker by the numbers
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 border-[3px] border-[#0a0a0a] rounded-none overflow-hidden divide-y-[3px] sm:divide-y-0 divide-[#0a0a0a] shadow-neo bg-[#ffffff]">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className={`p-10 ${i % 2 === 0 ? "sm:border-r-[3px] border-[#0a0a0a]" : ""} ${i < 2 ? "border-b-[3px] block sm:border-b-0 border-[#0a0a0a]" : ""}`}
                        >
                            <p className="text-4xl md:text-5xl font-black text-[#ff8c00] mb-3 font-family:var(--font-grotesk) uppercase">{s.value}</p>
                            <p className="text-xs text-[#4a4a4a] leading-relaxed font-ibmplexmonomedium uppercase tracking-widest">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
