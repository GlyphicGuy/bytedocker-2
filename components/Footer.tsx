"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full min-h-fit md:min-h-screen bg-slate-50 text-slate-900 flex flex-col pt-16 md:pt-24 px-6 md:px-12 pb-12 overflow-hidden selection:bg-slate-950 selection:text-white">
            {/* Top Brand Name */}
            <div className="relative mb-6 md:mb-10 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8 md:gap-0">
                <h2 className="text-[18vw] sm:text-[14vw] md:text-[12vw] leading-none font-medium tracking-tighter opacity-100 font-dmsans">
                    bytedocker
                </h2>

                {/* Optional decorative icon */}
                <div className="md:mt-8 opacity-20 hidden sm:block">
                    <svg width="50" height="50" viewBox="0 0 100 100" className="fill-slate-900 md:w-[60px] md:h-[60px]">
                        <circle cx="50" cy="50" r="4" />
                        <circle cx="50" cy="30" r="3" />
                        <circle cx="50" cy="10" r="2" />
                        <circle cx="70" cy="50" r="3" />
                        <circle cx="90" cy="50" r="2" />
                        <circle cx="30" cy="50" r="3" />
                        <circle cx="10" cy="50" r="2" />
                        <circle cx="65" cy="35" r="2.5" />
                        <circle cx="35" cy="35" r="2.5" />
                        <circle cx="65" cy="65" r="2.5" />
                        <circle cx="35" cy="65" r="2.5" />
                    </svg>
                </div>
            </div>

            {/* Dashed Line */}
            <div className="w-full border-b border-dashed border-slate-200 mb-12 md:mb-20"></div>

            {/* Content Grid */}
            <div className="grid grid-cols-12 gap-y-16 md:gap-y-20 gap-x-0 md:gap-x-12 grow">

                {/* Navigation Links Column */}
                <div className="col-span-12 md:col-span-4 space-y-6 md:space-y-8 flex flex-col items-center md:items-start">
                    {[
                        { id: "01", name: "Our Process" },
                        { id: "02", name: "Vetting Standards" },
                        { id: "03", name: "Success Stories" },
                        { id: "04", name: "Join Network" }
                    ].map((link) => (
                        <Link
                            key={link.id}
                            href={`#${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-center gap-6 md:gap-10 group"
                        >
                            <span className="text-[10px] md:text-xs font-ibmplexmonomedium opacity-40">{link.id}</span>
                            <span className="text-2xl sm:text-3xl md:text-4xl font-medium font-dmsans group-hover:translate-x-2 transition-transform duration-300">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* News & Newsletter Column */}
                <div className="col-span-12 md:col-span-4 space-y-8 md:space-y-12 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-6 md:gap-10">
                        <span className="text-[10px] md:text-xs font-ibmplexmonomedium opacity-40">05</span>
                        <h4 className="text-2xl md:text-5xl font-medium font-dmsans">Insight</h4>
                    </div>

                    <div className="space-y-4 md:space-y-6 w-full max-w-sm">
                        <Link href="#" className="block text-sm md:text-base opacity-70 underline underline-offset-8 decoration-slate-300 hover:opacity-100 transition-opacity font-dmsans">
                            Scaling Engineering Teams...
                        </Link>
                        <Link href="#" className="block text-sm md:text-base opacity-70 underline underline-offset-8 decoration-slate-300 hover:opacity-100 transition-opacity font-dmsans">
                            Indian Remote Hubs...
                        </Link>
                    </div>

                    <p className="text-sm opacity-50 max-w-sm font-dmsans leading-relaxed px-4 md:px-0">
                        Join our ecosystem to stay updated on talent trends and deployment strategies.
                    </p>

                    {/* Pill Shape Newsletter Input */}
                    <div className="relative group w-full max-w-sm px-4 md:px-0">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="w-full h-12 md:h-16 px-6 md:px-8 rounded-full bg-white border border-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-all text-sm md:text-base font-dmsans"
                        />
                        <button className="absolute right-6 md:right-2 top-1.5 md:top-2 bottom-1.5 md:bottom-2 aspect-square rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-105 transition-transform">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Contact Column */}
                <div className="col-span-12 md:col-span-4 space-y-8 md:space-y-12 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-6 md:gap-10">
                        <span className="text-[10px] md:text-xs font-ibmplexmonomedium opacity-40">06</span>
                        <h4 className="text-2xl md:text-5xl font-medium font-dmsans">Connect</h4>
                    </div>

                    <div className="space-y-8 font-dmsans text-sm md:text-base w-full">
                        <div className="space-y-2">
                            <p className="opacity-40 text-[10px] uppercase tracking-widest font-ibmplexmonomedium mb-3">Direct Message</p>
                            <Link href="mailto:talent@bytedocker.com" className="text-lg md:text-base underline underline-offset-4 decoration-slate-200 hover:decoration-slate-400 transition-all font-medium">
                                talent@bytedocker.com
                            </Link>
                        </div>

                        <div className="space-y-2">
                            <p className="opacity-40 text-[10px] uppercase tracking-widest font-ibmplexmonomedium mb-3">Voice Call</p>
                            <Link href="tel:+919876543210" className="text-lg md:text-base underline underline-offset-4 decoration-slate-200 hover:decoration-slate-400 transition-all font-medium">
                                +91 9876 543 210
                            </Link>
                        </div>

                        <div className="space-y-1 pt-2">
                            <p className="opacity-40 text-[10px] uppercase tracking-widest font-ibmplexmonomedium mb-3">HQ</p>
                            <address className="not-italic opacity-60 leading-relaxed text-xs md:text-sm">
                                bytedocker HQ,<br />
                                12th Floor, Technopark,<br />
                                Bangalore, KA, 560103
                            </address>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 md:mt-24 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] md:text-xs font-ibmplexmonomedium uppercase tracking-[0.2em] opacity-40 text-center md:text-left">
                <p className="max-w-[250px] md:max-w-none">© 2026 BYTEDOCKER TALENT, ALL RIGHTS RESERVED.</p>

                <div className="flex items-center gap-8 md:gap-12">
                    <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
                    <Link href="#" className="hover:opacity-100 transition-opacity">Disclaimer</Link>
                </div>
            </div>
        </footer>
    );
}
