import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Rate Calculator | Bytedocker Talent",
    description: "Calculate the cost of hiring remote developers through Bytedocker.",
};

export default function RateCalculatorPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main className="grow pt-20">
                <section className="relative px-6 pt-32 pb-24 bg-slate-50 overflow-hidden border-b border-slate-100 min-h-[70vh] flex items-center">
                    {/* Technical Stroke Background (Grid) */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-rate" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-rate)" />
                        </svg>
                    </div>

                    {/* Dashed Line Accents */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-black/5"></div>
                        <div className="absolute bottom-1/4 left-0 w-full border-t border-dashed border-black/5"></div>
                        <div className="absolute left-1/4 top-0 h-full border-l border-dashed border-black/5"></div>
                        <div className="absolute right-1/4 top-0 h-full border-l border-dashed border-black/5"></div>
                    </div>

                    <div className="container mx-auto max-w-[1400px] relative z-10 flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 max-w-2xl">
                            <div className="inline-flex items-center gap-3 mb-8 bg-white/50 backdrop-blur-sm p-2 pr-6 rounded-full border border-slate-200">
                                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-[10px] font-bold">BY</span>
                                <span className="text-xs font-ibmplexmonomedium uppercase text-slate-500">
                                    Pricing Transparency
                                </span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 leading-[0.92] mb-10 font-dmsans">
                                Predictable Rates. <br />
                                <span className="font-medium">No Hidden Fees.</span>
                            </h1>

                            <p className="text-slate-500 text-lg md:text-2xl mb-12 max-w-2xl leading-relaxed font-dmsans">
                                Estimate your engineering team costs instantly. Pay a flat rate based on seniority—no surprises, no complex invoicing.
                            </p>
                        </div>

                        <div className="w-full md:w-[500px] aspect-square md:aspect-[4/3] flex flex-col items-center justify-center border-dashed relative overflow-hidden group">
                            <img
                                src="/undraw_contract_ynau.svg"
                                alt="Rate Calculator"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
