"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full min-h-fit md:min-h-screen bg-[#f5f0e8] text-[#0a0a0a] flex flex-col pt-16 md:pt-24 px-6 md:px-12 pb-12 overflow-hidden selection:bg-[#0a0a0a] selection:text-[#f5f0e8] border-t-[4px] border-[#0a0a0a]">
            {/* Top Brand Name */}
            <div className="relative mb-6 md:mb-10 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8 md:gap-0">
                <h2 className="text-[18vw] sm:text-[14vw] md:text-[12vw] leading-none font-bold tracking-tighter opacity-100 font-family:var(--font-grotesk) uppercase text-[#0a0a0a]">
                    bytedocker
                </h2>

                {/* Optional decorative icon */}
                <div className="md:mt-8 opacity-60 hidden sm:block">
                    <svg width="50" height="50" viewBox="0 0 100 100" className="fill-[#0a0a0a] md:w-[60px] md:h-[60px]">
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

            {/* Solid Line */}
            <div className="w-full border-b-[3px] border-[#0a0a0a] mb-12 md:mb-20"></div>

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
                            <span className="text-[10px] md:text-xs font-ibmplexmonomedium opacity-60 font-bold text-[#0a0a0a]">{link.id}</span>
                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-family:var(--font-grotesk) group-hover:translate-x-2 transition-transform duration-300 text-[#0a0a0a] uppercase tracking-tight">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* News & Newsletter Column */}
                <div className="col-span-12 md:col-span-4 space-y-8 md:space-y-12 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-6 md:gap-10">
                        <span className="text-[10px] md:text-xs font-ibmplexmonomedium opacity-60 font-bold text-[#0a0a0a]">05</span>
                        <h4 className="text-2xl md:text-5xl font-bold font-family:var(--font-grotesk) text-[#0a0a0a] uppercase tracking-tight">Insight</h4>
                    </div>

                    <div className="space-y-4 md:space-y-6 w-full max-w-sm">
                        <Link href="#" className="block text-sm md:text-base text-[#0a0a0a] underline underline-offset-4 decoration-[#0a0a0a] hover:opacity-70 transition-opacity font-dmsans font-bold">
                            Scaling Engineering Teams...
                        </Link>
                        <Link href="#" className="block text-sm md:text-base text-[#0a0a0a] underline underline-offset-4 decoration-[#0a0a0a] hover:opacity-70 transition-opacity font-dmsans font-bold">
                            Indian Remote Hubs...
                        </Link>
                    </div>

                    <p className="text-sm opacity-70 max-w-sm font-dmsans leading-relaxed px-4 md:px-0 text-[#0a0a0a]">
                        Join our ecosystem to stay updated on talent trends and deployment strategies.
                    </p>

                    {/* Newsletter Input */}
                    <div className="relative group w-full max-w-sm px-4 md:px-0">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="w-full h-12 md:h-14 px-6 md:px-8 rounded-none bg-[#ffffff] border-[3px] border-[#0a0a0a] placeholder:text-[#999999] focus:outline-none focus:ring-3 focus:ring-[#ff8c00] transition-all text-sm md:text-base font-dmsans text-[#0a0a0a] shadow-neo-sm"
                        />
                        <button className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 aspect-square rounded-none bg-[#0a0a0a] text-[#f5f0e8] flex items-center justify-center hover:shadow-neo transition-all active:translate-y-0.5 p-2 border-[2px] border-[#0a0a0a]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Contact Column */}
                <div className="col-span-12 md:col-span-4 space-y-8 md:space-y-12 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-6 md:gap-10">
                        <span className="text-[10px] md:text-xs font-ibmplexmonomedium opacity-60 font-bold text-[#0a0a0a]">06</span>
                        <h4 className="text-2xl md:text-5xl font-bold font-family:var(--font-grotesk) text-[#0a0a0a] uppercase tracking-tight">Connect</h4>
                    </div>

                    <div className="space-y-8 font-dmsans text-sm md:text-base w-full">
                        <div className="space-y-2">
                            <p className="opacity-60 text-[10px] uppercase tracking-widest font-ibmplexmonomedium mb-3 font-bold text-[#0a0a0a]">Direct Message</p>
                            <Link href="mailto:talent@bytedocker.com" className="text-lg md:text-base underline underline-offset-4 decoration-[#0a0a0a] hover:opacity-70 transition-all font-bold text-[#0a0a0a]">
                                talent@bytedocker.com
                            </Link>
                        </div>

                        <div className="space-y-2">
                            <p className="opacity-60 text-[10px] uppercase tracking-widest font-ibmplexmonomedium mb-3 font-bold text-[#0a0a0a]">Voice Call</p>
                            <Link href="tel:+919876543210" className="text-lg md:text-base underline underline-offset-4 decoration-[#0a0a0a] hover:opacity-70 transition-all font-bold text-[#0a0a0a]">
                                +91 9876 543 210
                            </Link>
                        </div>

                        <div className="space-y-1 pt-2">
                            <p className="opacity-60 text-[10px] uppercase tracking-widest font-ibmplexmonomedium mb-3 font-bold text-[#0a0a0a]">HQ</p>
                            <address className="not-italic opacity-70 leading-relaxed text-xs md:text-sm text-[#0a0a0a]">
                                Level 15, UB City<br />
                                Concorde Towers, Vittal Mallya Rd<br />
                                Bengaluru, Karnataka 560001<br />
                            </address>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 md:mt-24 pt-8 border-t-[3px] border-[#0a0a0a] flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] md:text-xs font-ibmplexmonomedium uppercase tracking-widest opacity-70 text-center md:text-left text-[#0a0a0a]">
                <p className="max-w-[250px] md:max-w-none font-bold">© 2026 BYTEDOCKER TALENT, ALL RIGHTS RESERVED.</p>

                <div className="flex items-center gap-8 md:gap-12">
                    <Link href="#" className="hover:opacity-100 transition-opacity font-bold">Privacy Policy</Link>
                    <Link href="#" className="hover:opacity-100 transition-opacity font-bold">Disclaimer</Link>
                </div>
            </div>
        </footer>
    );
}
