import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
import services, { getAllServiceSlugs, getService } from "@/app/services/data";

export async function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) return {};
    return {
        title: `${service.label} | Bytedocker Talent`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) notFound();

    return (
        <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-slate-100 selection:text-slate-900">
            <Navbar />
            <main className="grow pt-20">

                {/* Hero */}
                <section className="relative px-6 pt-32 pb-24 bg-slate-50 overflow-hidden border-b border-slate-100 min-h-[60vh] flex items-center">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id={`grid-${slug}`} width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill={`url(#grid-${slug})`} />
                        </svg>
                    </div>
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
                                <span className="text-xs font-ibmplexmonomedium uppercase text-slate-500">{service.badge}</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 leading-[0.92] mb-8 font-dmsans">
                                {service.headline[0]} <br />
                                <span className="font-medium">{service.headline[1]}</span>
                            </h1>
                            <p className="text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed font-dmsans mb-10">
                                {service.description}
                            </p>
                            <a href="#contact">
                                <button className="bg-black hover:bg-slate-800 text-white font-medium text-base px-8 py-4 rounded-xl transition-colors font-dmsans">
                                    Get started
                                </button>
                            </a>
                        </div>

                        <div className="hidden md:flex w-full md:w-[480px] shrink-0 items-center justify-center">
                            <Image
                                src={service.image}
                                alt={`${service.label} Illustration`}
                                width={480}
                                height={400}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <section className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-4 tracking-tight">How it works</h2>
                        <p className="text-slate-500 text-lg mb-16 max-w-lg">A straightforward process from brief to results.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200">
                            {service.steps.map((s) => (
                                <div key={s.num} className="p-8 flex flex-col gap-5">
                                    <span className="text-sm font-ibmplexmonomedium text-slate-400">{s.num}</span>
                                    <div>
                                        <h3 className="text-lg font-dmsans font-medium text-slate-900 mb-2">{s.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-50" />
                <section className="bg-slate-50 py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="lg:w-[340px] shrink-0">
                                <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-5 tracking-tight leading-tight">
                                    Why choose this service
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    What makes our {service.label.toLowerCase()} offering different from the alternatives.
                                </p>
                            </div>
                            <div className="flex-1 divide-y divide-slate-200 border-t border-slate-200">
                                {service.benefits.map((b) => (
                                    <div key={b.num} className="py-8 flex gap-8 items-start">
                                        <span className="text-sm font-ibmplexmonomedium text-slate-400 pt-0.5 shrink-0 w-8">{b.num}</span>
                                        <div>
                                            <h3 className="text-lg font-dmsans font-medium text-slate-900 mb-2">{b.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">{b.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other services */}
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <section className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-16 tracking-tight">Other services</h2>
                        <div className="divide-y divide-slate-200 border-t border-slate-200">
                            {services.filter((s) => s.slug !== slug).map((s, i) => (
                                <a key={s.slug} href={`/services/${s.slug}`} className="py-6 flex items-center justify-between gap-6 group">
                                    <div className="flex items-center gap-8">
                                        <span className="text-sm font-ibmplexmonomedium text-slate-400 w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                                        <span className="text-xl font-dmsans font-medium text-slate-900 group-hover:text-slate-600 transition-colors">{s.label}</span>
                                    </div>
                                    <span className="text-sm font-ibmplexmonomedium text-slate-400 group-hover:text-slate-600 transition-colors">→</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-900" />
                <section id="contact" className="bg-slate-900 text-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="border border-slate-800 rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12">
                            <div className="max-w-xl">
                                <p className="text-sm font-ibmplexmonomedium text-slate-500 uppercase tracking-widest mb-6">{service.label}</p>
                                <h2 className="text-4xl md:text-5xl font-dmsans font-medium mb-6 leading-[1.1] tracking-tight">
                                    {service.ctaHeadline}
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                    {service.ctaBody}
                                </p>
                                <button className="bg-white hover:bg-slate-100 text-slate-900 font-medium text-base px-7 py-3.5 rounded-xl transition-colors font-dmsans">
                                    Submit your brief
                                </button>
                            </div>

                            <div className="w-full md:w-[240px] shrink-0 border border-slate-800 rounded-xl p-6 flex flex-col gap-4">
                                <p className="text-xs font-ibmplexmonomedium text-slate-500 uppercase tracking-widest">At a glance</p>
                                <div className="border-t border-slate-800 pt-4 divide-y divide-slate-800">
                                    {service.stats.map(([val, lbl], i) => (
                                        <div key={i} className="py-3">
                                            <p className="text-2xl font-dmsans font-medium text-white">{val}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{lbl}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
