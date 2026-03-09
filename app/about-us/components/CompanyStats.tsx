export default function CompanyStats() {
    const stats = [
        { value: "1,000+", label: "Developers placed globally" },
        { value: "40+", label: "Countries served" },
        { value: "94%", label: "Client retention after first hire" },
        { value: "2015", label: "Founded — operating for 10 years" },
    ];

    return (
        <section className="bg-white py-24 px-6 font-dmsans border-t border-slate-100">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-16 tracking-tight">
                    Bytedocker by the numbers
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 border border-slate-200 rounded-2xl overflow-hidden divide-y sm:divide-y-0">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className={`p-10 ${i % 2 === 0 ? "sm:border-r border-slate-200" : ""} ${i < 2 ? "border-b border-slate-200" : ""}`}
                        >
                            <p className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-3">{s.value}</p>
                            <p className="text-sm text-slate-500 leading-relaxed">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
