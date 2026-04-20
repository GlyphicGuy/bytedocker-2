"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full min-h-fit md:min-h-screen bg-[#f5f0e8] text-[#0a0a0a] flex flex-col pt-16 md:pt-24 px-6 md:px-12 pb-12 overflow-hidden selection:bg-[#0a0a0a] selection:text-[#f5f0e8] border-t-[4px] border-[#0a0a0a] relative">
            {/* Decorative animated background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Corner accents */}
                <div className="absolute top-8 left-8 w-16 h-16 border-l-[3px] border-t-[3px] border-dashed border-[#ff8c00] opacity-30 animate-rotate-slow"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 border-r-[3px] border-b-[3px] border-dashed border-[#ff8c00] opacity-30 animate-rotate-slow" style={{ animationDirection: "reverse" }}></div>

                {/* Floating decorative dots */}
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#ff8c00] rounded-full opacity-40 animate-pulse-gentle"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#ff8c00] rounded-full opacity-30 animate-pulse-gentle" style={{ animationDelay: "0.5s" }}></div>
            </div>

            {/* Top Brand Section */}
            <div className="relative mb-6 md:mb-8 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8 md:gap-0">
                <h2 className="text-[14vw] sm:text-[12vw] md:text-[10vw] leading-none font-bold tracking-tighter opacity-100 font-family:var(--font-grotesk) uppercase text-[#0a0a0a]">
                    bytedocker
                </h2>

                {/* Floating decorative element with animation*/}
                <div className="md:mt-8 opacity-40 hidden sm:block animate-float-slow">
                    <div className="w-12 h-12 border-[2px] border-dashed border-[#ff8c00] rotate-45"></div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="w-full border-b-[3px] border-dashed border-[#0a0a0a] mb-12 md:mb-16"></div>

            {/* Content Grid - Three Boxed Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 grow">

                {/* Left Column - Navigation */}
                <div className="relative">
                    <div className="bg-[#f5f0e8] border-[3px] border-[#0a0a0a] shadow-neo p-8 md:p-10 h-full flex flex-col">
                        {/* Column label */}
                        <div className="flex items-center gap-2 mb-8">
                            <span className="text-[10px] font-ibmplexmonomedium opacity-60 font-bold text-[#ff8c00]">01</span>
                            <h4 className="text-sm md:text-base font-bold font-family:var(--font-grotesk) text-[#0a0a0a] uppercase tracking-wide">Navigation</h4>
                        </div>

                        {/* Navigation links */}
                        <div className="space-y-4 md:space-y-5 flex-1">
                            {[
                                { id: "01", name: "Our Process", href: "/#process" },
                                { id: "02", name: "Vetting Standards", href: "/how-we-vet-developers" },
                                { id: "03", name: "Success Stories", href: "/case-studies" },
                                { id: "04", name: "Join Network", href: "/for-developers" },
                                { id: "05", name: "Hire Now", href: "/hire" },
                                { id: "06", name: "FAQ for Companies", href: "/faq-for-companies" },
                                { id: "07", name: "Testimonials", href: "/testimonials" },
                                { id: "08", name: "About Us", href: "/about-us" }
                            ].map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className="flex items-center gap-3 group block"
                                >
                                    <span className="text-xs font-bold text-[#ff8c00] opacity-60 font-ibmplexmonomedium">{link.id}</span>
                                    <span className="text-base md:text-lg font-bold font-family:var(--font-grotesk) group-hover:translate-x-2 transition-transform duration-300 text-[#0a0a0a] uppercase tracking-tight">
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* Decorative dot */}
                        <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#ff8c00] rounded-full"></div>
                    </div>
                </div>

                {/* Middle Column - Insights */}
                <div className="relative">
                    <div className="bg-[#f5f0e8] border-[3px] border-[#0a0a0a] shadow-neo p-8 md:p-10 h-full flex flex-col md:border-l-0 md:border-r-0">
                        {/* Column label */}
                        <div className="flex items-center gap-2 mb-8">
                            <span className="text-[10px] font-ibmplexmonomedium opacity-60 font-bold text-[#ff8c00]">02</span>
                            <h4 className="text-sm md:text-base font-bold font-family:var(--font-grotesk) text-[#0a0a0a] uppercase tracking-wide">Insights</h4>
                        </div>

                        {/* Article links */}
                        <div className="space-y-4 mb-8 flex-1">
                            <Link href="#" className="block text-sm md:text-base text-[#0a0a0a] underline underline-offset-4 decoration-[#0a0a0a] decoration-[2px] hover:opacity-70 transition-opacity font-dmsans font-bold border-l-[4px] border-[#ff8c00] pl-4">
                                Scaling Engineering Teams...
                            </Link>
                            <Link href="#" className="block text-sm md:text-base text-[#0a0a0a] underline underline-offset-4 decoration-[#0a0a0a] decoration-[2px] hover:opacity-70 transition-opacity font-dmsans font-bold border-l-[4px] border-[#ff8c00] pl-4">
                                Indian Remote Hubs...
                            </Link>
                        </div>

                        <p className="text-sm opacity-70 mb-8 font-dmsans leading-relaxed text-[#0a0a0a]">
                            Join our ecosystem to stay updated on talent trends and deployment strategies.
                        </p>

                        {/* Newsletter Input */}
                        <div className="relative group w-full">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full h-12 md:h-14 px-6 md:px-8 rounded-none bg-[#ffffff] border-[3px] border-[#0a0a0a] placeholder:text-[#999999] focus:outline-none focus:ring-3 focus:ring-[#ff8c00] transition-all text-sm md:text-base font-dmsans text-[#0a0a0a] shadow-neo-sm"
                            />
                            <button className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 aspect-square rounded-none bg-[#0a0a0a] text-[#f5f0e8] flex items-center justify-center hover:shadow-neo transition-all active:translate-y-0.5 p-2 border-[2px] border-[#0a0a0a]">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Decorative dot */}
                        <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#ff8c00] rounded-full"></div>
                    </div>
                </div>

                {/* Right Column - Connect */}
                <div className="relative">
                    <div className="bg-[#f5f0e8] border-[3px] border-[#0a0a0a] shadow-neo p-8 md:p-10 h-full flex flex-col">
                        {/* Column label */}
                        <div className="flex items-center gap-2 mb-8">
                            <span className="text-[10px] font-ibmplexmonomedium opacity-60 font-bold text-[#ff8c00]">03</span>
                            <h4 className="text-sm md:text-base font-bold font-family:var(--font-grotesk) text-[#0a0a0a] uppercase tracking-wide">Connect</h4>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6 md:space-y-8 flex-1 font-dmsans text-sm md:text-base w-full">
                            {/* Email */}
                            <div className="space-y-2 border-b-[2px] border-[#0a0a0a] pb-6">
                                <p className="opacity-60 text-[10px] uppercase tracking-widest font-ibmplexmonomedium font-bold text-[#ff8c00]">Email</p>
                                <Link href="mailto:talent@bytedocker.com" className="text-base md:text-lg underline underline-offset-4 decoration-[#0a0a0a] decoration-[2px] hover:opacity-70 transition-all font-bold text-[#0a0a0a] break-all">
                                    talent@bytedocker.com
                                </Link>
                            </div>

                            {/* Phone */}
                            <div className="space-y-2 border-b-[2px] border-[#0a0a0a] pb-6">
                                <p className="opacity-60 text-[10px] uppercase tracking-widest font-ibmplexmonomedium font-bold text-[#ff8c00]">Phone</p>
                                <Link href="tel:+919876543210" className="text-base md:text-lg underline underline-offset-4 decoration-[#0a0a0a] decoration-[2px] hover:opacity-70 transition-all font-bold text-[#0a0a0a]">
                                    +91 9876 543 210
                                </Link>
                            </div>

                            {/* Address */}
                            <div className="space-y-2">
                                <p className="opacity-60 text-[10px] uppercase tracking-widest font-ibmplexmonomedium font-bold text-[#ff8c00]">HQ</p>
                                <address className="not-italic opacity-80 leading-relaxed text-xs md:text-sm text-[#0a0a0a]">
                                    Level 15, UB City<br />
                                    Concorde Towers, Vittal Mallya Rd<br />
                                    Bengaluru, Karnataka 560001<br />
                                </address>
                                <a
                                    href="https://www.google.com/maps/place/Bytedocker/@12.9715895,77.5914451,17z/data=!3m2!4b1!5s0x3bae16775b3b1d3d:0x5ce03bb2785b2a10!4m6!3m5!1s0xf7ff5c4e8e6969d:0x3c2f8aaec08d06b5!8m2!3d12.9715895!4d77.5960585!16s%2Fg%2F11y7gdrj3v?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-[10px] md:text-xs font-ibmplexmonomedium uppercase tracking-widest text-[#0a0a0a] opacity-70 hover:opacity-100 hover:text-[#ff8c00] transition-all group"
                                >
                                    Open in Maps
                                    <span className="inline-block translate-y-[1px] transition-transform duration-300 group-hover:translate-x-1">↗</span>
                                </a>
                            </div>
                        </div>

                        {/* Decorative dot */}
                        <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#ff8c00] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Copyright & Links */}
            <div className="mt-16 md:mt-20 pt-8 md:pt-10 border-t-[3px] border-[#0a0a0a] flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] md:text-xs font-ibmplexmonomedium uppercase tracking-widest opacity-70 text-center md:text-left text-[#0a0a0a]">
                <p className="max-w-[250px] md:max-w-none font-bold">© 2026 BYTEDOCKER TALENT, ALL RIGHTS RESERVED.</p>

                <div className="flex items-center gap-6 md:gap-12">
                    <Link href="#" className="hover:opacity-100 transition-opacity font-bold hover:text-[#ff8c00]">Privacy Policy</Link>
                    <Link href="#" className="hover:opacity-100 transition-opacity font-bold hover:text-[#ff8c00]">Disclaimer</Link>
                </div>
            </div>

            <style jsx>{`
                @keyframes rotate-subtle {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes pulse-gentle {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.6;
                        transform: scale(1.3);
                    }
                }

                @keyframes float-slow {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(8px, -15px);
                    }
                }

                .animate-rotate-slow {
                    animation: rotate-subtle 20s linear infinite;
                }

                .animate-pulse-gentle {
                    animation: pulse-gentle 3s ease-in-out infinite;
                }

                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
            `}</style>
        </footer>
    );
}
