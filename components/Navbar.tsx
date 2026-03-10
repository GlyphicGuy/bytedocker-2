"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled enough to change appearance
      setIsScrolled(currentScrollY > 20);

      // Smart Header Logic: Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 font-ibmplexmonomedium transition-all duration-500 ease-in-out py-4 ${isMobileMenuOpen ? "bg-white" : "bg-slate-50/90 backdrop-blur-md"
          } ${isScrolled ? "shadow-sm border-b border-slate-100" : ""} ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="container mx-auto px-6 max-w-[1400px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <h2 className="text-xl font-montserrat font-bold tracking-tighter uppercase text-black">
              bytedocker
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div
              onMouseEnter={() => setIsCompaniesOpen(true)}
              onMouseLeave={() => setIsCompaniesOpen(false)}
              className="h-full py-2"
            >
              <DropdownMenu open={isCompaniesOpen} onOpenChange={setIsCompaniesOpen}>
                <DropdownMenuTrigger className="text-[13px] font-bold text-slate-800 hover:text-blue-600 transition-colors uppercase tracking-wider flex items-center gap-1 focus:outline-none cursor-pointer">
                  For Companies
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-2 font-ibmplexmonomedium p-2 bg-white/95 backdrop-blur-sm border-slate-100 shadow-xl rounded-xl">
                  <Link href="/rate-calculator" className="w-full block">
                    <DropdownMenuItem className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 rounded-lg p-3">
                      <span className="font-bold text-slate-900">Rate Calculator</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/how-we-vet-developers" className="w-full block">
                    <DropdownMenuItem className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 rounded-lg p-3">
                      <span className="font-bold text-slate-900">How we vet developers</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/faq-for-companies" className="w-full block">
                    <DropdownMenuItem className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 rounded-lg p-3">
                      <span className="font-bold text-slate-900">FAQ for companies</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/case-studies" className="w-full block">
                    <DropdownMenuItem className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 rounded-lg p-3">
                      <span className="font-bold text-slate-900">Case studies</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/testimonials" className="w-full block">
                    <DropdownMenuItem className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 rounded-lg p-3">
                      <span className="font-bold text-slate-900">Testimonials</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/about-us" className="w-full block">
                    <DropdownMenuItem className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 rounded-lg p-3">
                      <span className="font-bold text-slate-900">About us</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="h-full py-2"
            >
              <DropdownMenu open={isServicesOpen} onOpenChange={setIsServicesOpen}>
                <DropdownMenuTrigger className="text-[13px] font-bold text-slate-800 hover:text-blue-600 transition-colors uppercase tracking-wider flex items-center gap-1 focus:outline-none cursor-pointer">
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[calc(100vw-80px)] max-w-[1250px] mt-4 p-0 bg-white/98 backdrop-blur-xl border-slate-100 shadow-2xl rounded-[32px] overflow-hidden" align="center" sideOffset={15}>
                  <div className="p-16">
                    <div className="grid grid-cols-[250px_1fr] gap-16">
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Hire by role</h3>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-ibmplexmonomedium">Tailored recruitment for specific positions</p>
                      </div>
                      <div className="grid grid-cols-3 gap-x-12 gap-y-5">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-4">
                          {["Full-stack developers", "Front-end developers", "Back-end developers", "Mobile developers", "Game developers", "DevOps"].map((item) => (
                            <Link key={item} href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2 group whitespace-nowrap">
                              <span className="text-slate-400 text-[13px] font-medium transition-colors group-hover:text-slate-900">Hire</span>
                              <span className="text-slate-800 text-[14px] font-bold transition-transform group-hover:translate-x-1">{item}</span>
                            </Link>
                          ))}
                        </div>
                        {/* Column 2 */}
                        <div className="flex flex-col gap-4">
                          {["Cloud engineers", "AI engineers", "Machine Learning engineers", "Data analysts", "Data engineers", "Data scientists"].map((item) => (
                            <Link key={item} href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2 group whitespace-nowrap">
                              <span className="text-slate-400 text-[13px] font-medium transition-colors group-hover:text-slate-900">Hire</span>
                              <span className="text-slate-800 text-[14px] font-bold transition-transform group-hover:translate-x-1">{item}</span>
                            </Link>
                          ))}
                        </div>
                        {/* Column 3 */}
                        <div className="flex flex-col gap-4">
                          {["Blockchain developers", "Automation QA engineers"].map((item) => (
                            <Link key={item} href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2 group whitespace-nowrap">
                              <span className="text-slate-400 text-[13px] font-medium transition-colors group-hover:text-slate-900">Hire</span>
                              <span className="text-slate-800 text-[14px] font-bold transition-transform group-hover:translate-x-1">{item}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-[250px_1fr] gap-16 mt-20">
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Hire by skill</h3>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-ibmplexmonomedium">Find experts in your stack</p>
                      </div>
                      <div className="grid grid-cols-3 gap-x-12 gap-y-5">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-4">
                          {["React developers", "Angular developers", "Node.js developers", "JavaScript developers", "Next.js developers", "Vue.js developers", "Three.js developers"].map((item) => (
                            <Link key={item} href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2 group whitespace-nowrap">
                              <span className="text-slate-400 text-[13px] font-medium transition-colors group-hover:text-slate-900">Hire</span>
                              <span className="text-slate-800 text-[14px] font-bold transition-transform group-hover:translate-x-1">{item}</span>
                            </Link>
                          ))}
                        </div>
                        {/* Column 2 */}
                        <div className="flex flex-col gap-4">
                          {["Python developers", "Unity developers", "Django developers", "Java developers", "Ruby on Rails developers", "PHP developers", "Laravel developers"].map((item) => (
                            <Link key={item} href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2 group whitespace-nowrap">
                              <span className="text-slate-400 text-[13px] font-medium transition-colors group-hover:text-slate-900">Hire</span>
                              <span className="text-slate-800 text-[14px] font-bold transition-transform group-hover:translate-x-1">{item}</span>
                            </Link>
                          ))}
                        </div>
                        {/* Column 3 */}
                        <div className="flex flex-col gap-4">
                          {[".NET developers", "ASP.NET developers", "iOS developers", "Flutter developers", "React Native developers", "Android developers"].map((item) => (
                            <Link key={item} href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2 group whitespace-nowrap">
                              <span className="text-slate-400 text-[13px] font-medium transition-colors group-hover:text-slate-900">Hire</span>
                              <span className="text-slate-800 text-[14px] font-bold transition-transform group-hover:translate-x-1">{item}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-20 border-t border-slate-100 pt-10 flex justify-between items-center">
                      <div className="flex gap-4">
                        <p className="text-[11px] text-slate-400 font-ibmplexmonomedium uppercase tracking-widest">( 04 ) Specialized Engineering Services</p>
                      </div>
                      <Link href="/services">
                        <button className="flex items-center gap-3 px-8 py-3.5 bg-black text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg group">
                          View all services
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {[
              { name: "For Developers", href: "/for-developers" },
              { name: "About Us", href: "/about-us" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[13px] font-bold text-slate-800 hover:text-blue-600 transition-colors uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <Link href="/find-jobs">
                <button className="border border-slate-300 text-slate-700 text-[11px] font-black px-6 py-3 rounded-lg uppercase tracking-widest hover:border-slate-500 hover:text-slate-900 transition-all active:scale-95">
                  Find Jobs
                </button>
              </Link>
              <Link href="/hire">
                <button className="bg-black text-white text-[11px] font-black px-8 py-3.5 rounded-xl uppercase tracking-widest hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-md">
                  Hire Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-900 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
              )}
            </button>
          </div>
        </div>

      </nav>
      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[72px] bg-white z-50 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-8 gap-8 overflow-y-auto max-h-[calc(100vh-72px)]">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Main</p>
            <div className="flex flex-col gap-6">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/for-developers" className="text-2xl font-bold text-slate-900">For Developers</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/about-us" className="text-2xl font-bold text-slate-900">About Us</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/case-studies" className="text-2xl font-bold text-slate-900">Case Studies</Link>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full flex items-center justify-between text-left"
            >
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Services</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div className={`space-y-6 overflow-hidden transition-all duration-500 ease-in-out ${isMobileServicesOpen ? "max-h-[3000px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
              <div className="space-y-6 pl-4 border-l border-slate-100">
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-ibmplexmonomedium">Hire by role</p>
                  <div className="flex flex-col gap-4">
                    {["Full-stack developers", "Front-end developers", "Back-end developers", "Mobile developers", "Game developers", "DevOps", "Cloud engineers", "AI engineers", "Machine Learning engineers", "Data analysts", "Data engineers", "Data scientists", "Blockchain developers", "Automation QA engineers"].map((item) => (
                      <Link
                        key={item}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                        href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                        className="text-lg font-bold text-slate-900"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-ibmplexmonomedium">Hire by skill</p>
                  <div className="flex flex-col gap-4">
                    {["React developers", "Angular developers", "Node.js developers", "JavaScript developers", "Next.js developers", "Vue.js developers", "Three.js developers", "Python developers", "Unity developers", "Django developers", "Java developers", "Ruby on Rails developers", "PHP developers", "Laravel developers", ".NET developers", "ASP.NET developers", "iOS developers", "Flutter developers", "React Native developers", "Android developers"].map((item) => (
                      <Link
                        key={item}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                        href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                        className="text-lg font-bold text-slate-900"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                  href="/services"
                  className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black pt-4"
                >
                  View all services
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-6">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/how-we-vet-developers" className="text-2xl font-bold text-slate-900">How we vet</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/rate-calculator" className="text-2xl font-bold text-slate-900">Rate Calculator</Link>
            </div>
          </div>

          <div className="mt-auto space-y-4 pt-8">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/hire" className="block w-full text-center bg-black text-white p-4 rounded-xl font-black uppercase tracking-widest text-sm transition-transform active:scale-95">Hire Now</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/find-jobs" className="block w-full text-center border border-slate-200 text-slate-900 p-4 rounded-xl font-black uppercase tracking-widest text-sm transition-transform active:scale-95">Find Jobs</Link>
          </div>
        </div>
      </div>
    </>
  );
}


