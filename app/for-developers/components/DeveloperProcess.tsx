"use client";

import Link from "next/link";

export default function DeveloperProcess() {
    const perks = [
        {
            title: "No working for peanuts",
            description: "You name your rate at the market average, you get it. Commissions? These are clients who pay them.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#0a0a0a]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "No sales, just coding",
            description: "Sales, soul-crushing negotiations, and other boring stuff are on us. Just show up for an interview and jump right in.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#0a0a0a]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
            )
        },
        {
            title: "Eternal access to projects",
            description: "Pass our lightweight screening once and get access to top projects forever. Easy as that!",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#0a0a0a]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
            )
        },
        {
            title: "Choice is yours",
            description: "We will only offer projects that match your skills, experience, and availability. Doesn't click? We'll get you a better one.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#0a0a0a]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>
            )
        },
        {
            title: "Justice for all, not just clients",
            description: "We treat both clients and developers equally. If anything goes wrong, we are there to cover your back!",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#0a0a0a]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
            )
        },
        {
            title: "Bye post-freelance trauma",
            description: "Forget about client ghosting, time trackers, and payment issues. Get your work done—get your guaranteed money!",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#0a0a0a]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section id="process" className="py-24 bg-[#f5f0e8] relative border-y-[3px] border-[#0a0a0a]">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] font-family:var(--font-grotesk) uppercase">
                        Why earn with us?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                    {perks.map((perk, index) => (
                        <div
                            key={index}
                            className={`flex flex-col relative ${index % 3 !== 2 ? 'lg:border-r-[3px] lg:border-[#0a0a0a] lg:pr-12' : ''
                                } ${index < 3 ? 'lg:pb-16 lg:border-b-[3px] lg:border-[#0a0a0a]' : ''
                                }`}
                        >
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-[#ffffff] border-[3px] border-[#0a0a0a] rounded-none flex items-center justify-center p-4 shadow-neo text-[#0a0a0a]">
                                    {perk.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-[#0a0a0a] font-dmsans tracking-tight mb-4 uppercase">
                                {perk.title}
                            </h3>
                            <p className="text-[#4a4a4a] text-[15px] leading-relaxed font-dmsans">
                                {perk.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <Link href="#apply">
                        <button className="bg-[#0a0a0a] text-[#f5f0e8] font-ibmplexmonomedium uppercase text-sm px-8 py-4 rounded-none border-[4px] border-[#0a0a0a] hover:shadow-neo-lg transition-all flex items-center gap-2 group shadow-neo active:translate-y-0.5">
                            Apply now
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

