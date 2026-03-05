"use client";

export default function Infrastructure() {
    const interviewOutput = `
Running Technical Assessment...
[✓] Core JS Engine Fundamentals
[✓] React Component Lifecycle & Hooks
[✓] System Design: Real-time Data Sync
[✓] Security: JWT & OAuth2 Implementation
[✓] Performance: Web Vitals Optimization

Evaluation: TOP 5% (ELITE)
Recommendation: HIRE IMMEDIATELY
    `;

    return (
        <section id="developers" className="py-32 bg-slate-950 text-white overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-blue-500/10 rounded-full blur-[150px] translate-x-1/4 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4"></div>

            <div className="container relative z-10 mx-auto px-6 flex flex-col items-center gap-24 md:flex-row">
                <div className="flex-1 text-center md:text-left">
                    <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-6 block">Elite Engineering</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                        The Highest <br /> Technical Bar.
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed">
                        Every engineer in our network goes through a grueling 5-stage vetting process. We don't just check if they can code; we verify they can build scalable, production-ready systems.
                    </p>
                    <div className="grid grid-cols-2 gap-4 max-w-lg mb-12">
                        {[
                            { label: "Applicants Rejected", val: "80%" },
                            { label: "Vetting Hours", val: "10+ hrs" }
                        ].map((stat) => (
                            <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                                <p className="text-slate-500 text-[10px] font-black uppercase mb-2 tracking-widest">{stat.label}</p>
                                <p className="text-2xl font-bold text-blue-400">{stat.val}</p>
                            </div>
                        ))}
                    </div>
                    <button className="bg-white text-slate-900 font-black text-xs uppercase tracking-widest px-10 py-5 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3">
                        Apply as Developer
                        <span>→</span>
                    </button>
                </div>

                <div className="flex-1 w-full max-w-2xl relative group">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative rounded-[40px] bg-[#111] border border-white/10 shadow-3xl overflow-hidden p-2">
                        <div className="flex items-center px-8 py-5 border-b border-white/5 gap-2 bg-[#1a1a1a]">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            <span className="text-slate-500 text-[10px] ml-4 font-mono font-bold uppercase tracking-widest">TECHNICAL_EVALUATION.SH</span>
                        </div>
                        <div className="p-10 overflow-x-auto bg-[#0a0a0a]">
                            <pre className="text-sm font-mono leading-relaxed text-blue-400">
                                <code>{interviewOutput}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Developer Card Overlay */}
                    <div className="absolute -bottom-16 -right-16 w-3/4 rounded-[32px] bg-white text-slate-950 border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] p-8 hidden md:block group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl">👨‍💻</div>
                            <div>
                                <h4 className="font-black text-lg">Senior Full Stack</h4>
                                <p className="text-slate-500 text-sm font-bold">8+ Years Experience</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {["React", "Node.js", "AWS", "Python"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black uppercase tracking-tight text-slate-600">{tag}</span>
                                ))}
                            </div>
                            <div className="h-px bg-slate-100 w-full my-4"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Status</span>
                                <span className="text-green-600 text-xs font-black uppercase tracking-widest">Available Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

