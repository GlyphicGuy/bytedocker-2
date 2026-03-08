"use client";

import Link from "next/link";

export default function DeveloperBenefits() {
    const steps = [
        {
            number: "1",
            title: "A quick registration",
            description: "Start by registering. We'll review your application and get in touch.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            )
        },
        {
            number: "2",
            title: "Friendly 40 min chat",
            description: "Pass a live interview with both tech and non-tech questions so we can know each other better.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
            )
        },
        {
            number: "3",
            title: "Technical interview",
            description: "The final reckoning—a tech interview by one of Bytedocker best devs. More on what to expect here.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
            )
        },
        {
            number: "4",
            title: "Onboarding to community",
            description: "That's it. You're all ready to start your first project.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-dmsans">
                        How to get into Bytedocker?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 border-t md:border-t-0 border-slate-100">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col relative py-12 lg:py-0 border-b lg:border-b-0 border-slate-100 ${idx !== 3 ? 'lg:border-r lg:border-slate-100' : ''
                                } ${idx === 0 ? 'lg:pr-10' : ''
                                } ${idx > 0 && idx < 3 ? 'lg:px-10' : ''
                                } ${idx === 3 ? 'lg:pl-10' : ''
                                }`}
                        >
                            <div className="relative mb-10 inline-block w-fit">
                                {/* Background container for the icon */}
                                <div className="w-[84px] h-[84px] bg-slate-100 rounded-full flex items-center justify-center ml-8 text-slate-900 shadow-sm relative z-0">
                                    {step.icon}
                                </div>
                                {/* Huge overlapping number */}
                                <div className="absolute -left-2 -top-4 text-[96px] font-black text-slate-900 leading-none font-dmsans z-10 select-none drop-shadow-sm">
                                    {step.number}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 font-dmsans tracking-tight mb-4 pr-4 leading-[1.2]">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-dmsans">
                                {step.title === "Technical interview" ? (
                                    <>
                                        The final reckoning—a tech interview by one of Bytedocker best devs. More on what to expect <Link href="#process" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors">here</Link>.
                                    </>
                                ) : (
                                    step.description
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
