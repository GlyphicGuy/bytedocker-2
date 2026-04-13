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
        className={`fixed top-0 left-0 right-0 w-full z-50 font-ibmplexmonomedium transition-all duration-500 ease-in-out py-4 ${isMobileMenuOpen ? "bg-[#f5f0e8]" : "bg-[#f5f0e8]"
          } ${isScrolled ? "shadow-neo border-b-4 border-[#0a0a0a]" : "border-b-4 border-[#0a0a0a]"} ${isVisible ? "translate-y-0" : "-translate-y-full"
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
                <DropdownMenuTrigger className="text-[13px] font-bold text-[#0a0a0a] hover:text-[#0066ff] transition-colors uppercase tracking-wider flex items-center gap-1 focus:outline-none cursor-pointer font-family:var(--font-grotesk)">
                  For Companies
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-2 font-ibmplexmonomedium p-2 bg-[#f5f0e8] border-[3px] border-[#0a0a0a] shadow-neo-lg">
                  <Link href="/how-we-vet-developers" className="w-full block">
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#e5dfcf] focus:bg-[#e5dfcf] p-3">
                      <span className="font-bold text-[#0a0a0a]">How we vet developers</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/faq-for-companies" className="w-full block">
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#e5dfcf] focus:bg-[#e5dfcf] p-3">
                      <span className="font-bold text-[#0a0a0a]">FAQ for companies</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/case-studies" className="w-full block">
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#e5dfcf] focus:bg-[#e5dfcf] p-3">
                      <span className="font-bold text-[#0a0a0a]">Case studies</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/testimonials" className="w-full block">
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#e5dfcf] focus:bg-[#e5dfcf] p-3">
                      <span className="font-bold text-[#0a0a0a]">Testimonials</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/about-us" className="w-full block">
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#e5dfcf] focus:bg-[#e5dfcf] p-3">
                      <span className="font-bold text-[#0a0a0a]">About us</span>
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
                <DropdownMenuTrigger className="text-[13px] font-bold text-[#0a0a0a] hover:text-[#0066ff] transition-colors uppercase tracking-wider flex items-center gap-1 focus:outline-none cursor-pointer font-family:var(--font-grotesk)">
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[calc(100vw-80px)] max-w-[1250px] mt-4 p-0 bg-[#f5f0e8] border-[4px] border-[#0a0a0a] shadow-neo-lg overflow-hidden" align="center" sideOffset={15}>
                  <div className="p-16">
                    <div className="grid grid-cols-[250px_1fr] gap-16">
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-[#0a0a0a] tracking-tight font-family:var(--font-grotesk) uppercase">Hire by role</h3>
                        <p className="text-xs text-[#4a4a4a] uppercase tracking-widest font-ibmplexmonomedium">Tailored recruitment for specific positions</p>
                      </div>
                      <div className="grid grid-cols-3 gap-x-12 gap-y-5">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-4">
                          {["Full-stack developers", "Front-end developers", "Back-end developers", "Mobile developers", "Game developers", "DevOps"].map((item) => (
                            <Link key={item} href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2 group whitespace-nowrap">
                              <span className="text-[#4a4a4a] text-[13px] font-medium transition-colors group-hover:text-[#0a0a0a]">Hire</span>
                              <span className="text-[#0a0a0a] text-[14px] font-bold transition-transform group-hover:translate-x-1">{item}</span>
                            </Link>
                          ))}
                        </div>
                        {/* Column 2 */}
                        <div className="flex flex-col gap-4">
                          {["Cloud engineers", "AI engineers", "Machine Learning engineers", "Data analysts", "Data engineers", "Data scientists"].map((item) => (
                            <Link key={item} href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2 group whitespace-nowrap">
                              <span className="text-[#4a4a4a] text-[13px] font-medium transition-colors group-hover:text-[#0a0a0a]">Hire</span>
                              <span className="text-[#0a0a0a] text-[14px] font-bold transition-transform group-hover:translate-x-1">{item}</span>
                            </Link>
                          ))}
                        </div>
                        {/* Column 3 */}
                        <div className="flex flex-col gap-4">
                          {["Blockchain developers", "Automation QA engineers"].map((item) => (
                            <Link key={item} href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2 group whitespace-nowrap">
                              <span className="text-[#4a4a4a] text-[13px] font-medium transition-colors group-hover:text-[#0a0a0a]">Hire</span>
                              <span className="text-[#0a0a0a] text-[14px] font-bold transition-transform group-hover:translate-x-1">{item}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-[250px_1fr] gap-16 mt-20">
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-[#0a0a0a] tracking-tight font-family:var(--font-grotesk) uppercase">Hire by skill</h3>
                        <p className="text-xs text-[#4a4a4a] uppercase tracking-widest font-ibmplexmonomedium">Find experts in your stack</p>
                      </div>
                      <div className="grid grid-cols-3 gap-x-12 gap-y-5">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-4">
                          {["React developers", "Angular developers", "Node.js developers", "JavaScript developers", "Next.js developers", "Vue.js developers", "Three.js developers"].map((item) => (
                            <Link key={item} href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2 group whitespace-nowrap">
                              <span className="text-[#4a4a4a] text-[13px] font-medium transition-colors group-hover:text-[#0a0a0a]">Hire</span>
                              <span className="text-[#0a0a0a] text-[14px] font-bold transition-transform group-hover:translate-x-1">{item}</span>
                            </Link>
                          ))}
                        </div>
                        {/* Column 2 */}
                        <div className="flex flex-col gap-4">
                          {["Python developers", "Unity developers", "Django developers", "Java developers", "Ruby on Rails developers", "PHP developers", "Laravel developers"].map((item) => (
                            <Link key={item} href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2 group whitespace-nowrap">
                              <span className="text-[#4a4a4a] text-[13px] font-medium transition-colors group-hover:text-[#0a0a0a]">Hire</span>
                              <span className="text-[#0a0a0a] text-[14px] font-bold transition-transform group-hover:translate-x-1">{item}</span>
                            </Link>
                          ))}
                        </div>
                        {/* Column 3 */}
                        <div className="flex flex-col gap-4">
                          {[".NET developers", "ASP.NET developers", "iOS developers", "Flutter developers", "React Native developers", "Android developers"].map((item) => (
                            <Link key={item} href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2 group whitespace-nowrap">
                              <span className="text-[#4a4a4a] text-[13px] font-medium transition-colors group-hover:text-[#0a0a0a]">Hire</span>
                              <span className="text-[#0a0a0a] text-[14px] font-bold transition-transform group-hover:translate-x-1">{item}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-20 border-t-[3px] border-[#0a0a0a] pt-10 flex justify-between items-center">
                      <div className="flex gap-4">
                        <p className="text-[11px] text-[#4a4a4a] font-ibmplexmonomedium uppercase tracking-widest">( 04 ) Specialized Engineering Services</p>
                      </div>
                      <Link href="/services">
                        <button className="flex items-center gap-3 px-8 py-3.5 bg-[#0a0a0a] text-[#f5f0e8] rounded-none text-[11px] font-black uppercase tracking-widest hover:shadow-neo-lg transition-all hover:shadow-neo shadow-neo active:translate-y-0.5 group border-[4px] border-[#0a0a0a]">
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
                className="text-[13px] font-bold text-[#0a0a0a] hover:text-[#0066ff] transition-colors uppercase tracking-wider font-family:var(--font-grotesk)"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <Link href="/find-jobs">
                <button className="border-[3px] border-[#0a0a0a] text-[#0a0a0a] text-[11px] font-black px-6 py-3 rounded-none uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-[#f5f0e8] hover:shadow-neo transition-all active:translate-y-0.5 shadow-neo-sm border-[#0a0a0a]">
                  Find Jobs
                </button>
              </Link>
              <Link href="/hire">
                <button className="bg-[#0a0a0a] text-[#f5f0e8] text-[11px] font-black px-8 py-3.5 rounded-none uppercase tracking-widest hover:shadow-neo-lg transition-all hover:shadow-neo shadow-neo active:translate-y-0.5 border-[4px] border-[#0a0a0a]">
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
      <div className={`lg:hidden fixed inset-0 top-[72px] bg-[#f5f0e8] z-50 transition-transform duration-500 ease-in-out border-t-4 border-[#0a0a0a] ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-8 gap-8 overflow-y-auto max-h-[calc(100vh-72px)]">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest text-[#4a4a4a] font-bold">Main</p>
            <div className="flex flex-col gap-6">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/for-developers" className="text-2xl font-bold text-[#0a0a0a] font-family:var(--font-grotesk) uppercase">For Developers</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/about-us" className="text-2xl font-bold text-[#0a0a0a] font-family:var(--font-grotesk) uppercase">About Us</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/case-studies" className="text-2xl font-bold text-[#0a0a0a] font-family:var(--font-grotesk) uppercase">Case Studies</Link>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full flex items-center justify-between text-left"
            >
              <p className="text-[10px] uppercase tracking-widest text-[#4a4a4a] font-bold">Services</p>
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
              <div className="space-y-6 pl-4 border-l-[3px] border-[#0a0a0a]">
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest text-[#4a4a4a] font-ibmplexmonomedium">Hire by role</p>
                  <div className="flex flex-col gap-4">
                    {["Full-stack developers", "Front-end developers", "Back-end developers", "Mobile developers", "Game developers", "DevOps", "Cloud engineers", "AI engineers", "Machine Learning engineers", "Data analysts", "Data engineers", "Data scientists", "Blockchain developers", "Automation QA engineers"].map((item) => (
                      <Link
                        key={item}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                        href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                        className="text-lg font-bold text-[#0a0a0a]"
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
                        className="text-lg font-bold text-[#0a0a0a]"
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
                  className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#0a0a0a] pt-4 font-family:var(--font-grotesk)"
                >
                  View all services
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-6">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/how-we-vet" className="text-2xl font-bold text-[#0a0a0a] font-family:var(--font-grotesk) uppercase">How we vet</Link>
            </div>
          </div>

          <div className="mt-auto space-y-4 pt-8">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/hire" className="block w-full text-center bg-[#0a0a0a] text-[#f5f0e8] p-4 rounded-none font-black uppercase tracking-widest text-sm transition-all active:translate-y-0.5 border-[4px] border-[#0a0a0a] shadow-neo">Hire Now</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/find-jobs" className="block w-full text-center border-[3px] border-[#0a0a0a] text-[#0a0a0a] p-4 rounded-none font-black uppercase tracking-widest text-sm transition-all active:translate-y-0.5 shadow-neo-sm">Find Jobs</Link>
          </div>
        </div>
      </div>
    </>
  );
}


