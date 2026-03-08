"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
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
    <nav
      className={`absolute top-0 left-0 right-0 w-full z-50 font-ibmplexmonomedium transition-all duration-500 ease-in-out bg-slate-50/80 backdrop-blur-md py-4 ${isScrolled ? "shadow-sm border-b border-slate-100" : ""
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-6 max-w-[1400px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-xl font-black uppercase tracking-widest text-black">
            bytedocker
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {[
            { name: "For Startups", href: "/for-startups" },
            { name: "For Developers", href: "/for-developers" },
            { name: "Our Process", href: "#process" },
            { name: "About Us", href: "#about" }
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

        <div className="flex items-center gap-4">
          <button className="bg-black text-white text-[11px] font-black px-7 py-3 rounded-lg uppercase tracking-widest hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-md">
            Hire Now
          </button>
        </div>
      </div>
    </nav>
  );
}


