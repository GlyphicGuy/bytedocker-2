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
        <section id="developers" className="py-32 bg-[#0a0a0a] text-[#f5f0e8] overflow-hidden relative border-t-[3px] border-[#f5f0e8]">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-blue-500/10 rounded-full blur-[150px] translate-x-1/4 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4"></div>

            <div className="container relative z-10 mx-auto px-6 flex flex-col items-center gap-24 md:flex-row">
                <div className="flex-1 text-center md:text-left">
                    <span className="text-[#ff8c00] font-bold uppercase tracking-widest text-xs mb-6 block font-ibmplexmonomedium">Elite Engineering</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 font-family:var(--font-grotesk) uppercase">
                        The Highest <br /> Technical Bar.
                    </h2>
                    <p className="text-xl text-[#cccccc] mb-12 max-w-xl leading-relaxed font-dmsans">
                        Every engineer in our network goes through a grueling 5-stage vetting process. We don't just check if they can code; we verify they can build scalable, production-ready systems.
                    </p>
                    <div className="grid grid-cols-2 gap-4 max-w-lg mb-12">
                        {[
                            { label: "Applicants Rejected", val: "80%" },
                            { label: "Vetting Hours", val: "10+ hrs" }
                        ].map((stat) => (
                            <div key={stat.label} className="p-6 rounded-none bg-[#1a1a1a] border-[3px] border-[#f5f0e8] shadow-neo group hover:shadow-neo-lg transition-all">
                                <p className="text-[#cccccc] text-[10px] font-black uppercase mb-2 tracking-widest font-ibmplexmonomedium">{stat.label}</p>
                                <p className="text-2xl font-bold text-[#ff8c00]">{stat.val}</p>
                            </div>
                        ))}
                    </div>
                    <button className="bg-[#f5f0e8] text-[#0a0a0a] font-black text-xs uppercase tracking-widest px-10 py-5 rounded-none border-[4px] border-[#f5f0e8] shadow-neo hover:shadow-neo-lg active:translate-y-0.5 transition-all flex items-center gap-3 font-ibmplexmonomedium">
                        Apply as Developer
                        <span>→</span>
                    </button>
                </div>

                <div className="flex-1 w-full max-w-2xl relative group">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative rounded-none bg-[#0a0a0a] border-[3px] border-[#f5f0e8] shadow-neo-lg overflow-hidden p-2">
                        <div className="flex items-center px-8 py-5 border-b-[2px] border-[#f5f0e8] gap-2 bg-[#1a1a1a]">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            <span className="text-[#f5f0e8] text-[10px] ml-4 font-mono font-bold uppercase tracking-widest font-ibmplexmonomedium">TECHNICAL_EVALUATION.SH</span>
                        </div>
                        <div className="p-10 overflow-x-auto bg-[#0a0a0a]">
                            <pre className="text-sm font-mono leading-relaxed text-blue-400">
                                <code>{interviewOutput}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Developer Card Overlay */}
                    <div className="absolute -bottom-16 -right-16 w-3/4 rounded-none bg-[#ffffff] text-[#0a0a0a] border-[3px] border-[#0a0a0a] shadow-neo-lg p-8 hidden md:block group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-none bg-[#f5f0e8] border-[2px] border-[#0a0a0a] flex items-center justify-center text-3xl font-black">SR</div>
                            <div>
                                <h4 className="font-black text-lg font-family:var(--font-grotesk) uppercase text-[#0a0a0a]">Senior Full Stack</h4>
                                <p className="text-[#4a4a4a] text-sm font-bold font-ibmplexmonomedium uppercase tracking-tight">8+ Years Experience</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {["React", "Node.js", "AWS", "Python"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-[#f5f0e8] rounded-none border-[2px] border-[#0a0a0a] text-[10px] font-black uppercase tracking-tight text-[#0a0a0a] font-ibmplexmonomedium">{tag}</span>
                                ))}
                            </div>
                            <div className="h-px bg-[#e5dfcf] w-full my-4"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-[#4a4a4a] text-[10px] font-black uppercase tracking-widest font-ibmplexmonomedium">Status</span>
                                <span className="text-[#00cc44] text-xs font-black uppercase tracking-widest font-ibmplexmonomedium">Available Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

