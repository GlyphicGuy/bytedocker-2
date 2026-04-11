export default function MeetTheTeam() {
    const team = [
        { name: "Aleksandr S.", role: "CEO" },
        { name: "Philip K.", role: "CTO" },
        { name: "Martha S.", role: "HR Lead" },
        { name: "John S.", role: "Sr. Recruiter" },
        { name: "Anna S.", role: "Tech Lead" },
        { name: "David S.", role: "Interviewer" },
        { name: "Elena S.", role: "Operations" },
        { name: "Michael S.", role: "Client Success" },
        { name: "Sarah S.", role: "Vetting Spec." },
        { name: "James K.", role: "Vetting Spec." },
        { name: "Lucas S.", role: "Sr. Engineer" },
        { name: "Sophia K.", role: "Recruiter" },
    ];

    return (
        <section className="bg-[#f5f0e8] py-24 px-6 font-dmsans">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-16 tracking-tight font-family:var(--font-grotesk) uppercase">
                    Meet the team
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {team.map((member, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="aspect-4/5 bg-[#ffffff] mb-4 rounded-none overflow-hidden relative border-[3px] border-[#0a0a0a] shadow-neo">
                                <div className="absolute inset-0 flex items-center justify-center text-[#cccccc]">
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="font-dmsans font-black text-[#0a0a0a] text-base">{member.name}</p>
                            <p className="text-xs font-ibmplexmonomedium text-[#ff8c00] uppercase tracking-widest mt-1 font-black">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
