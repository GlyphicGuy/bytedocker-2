import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
import services, { getAllServiceSlugs, getService } from "@/app/services/data";

type ProfileRow = {
    title: string;
    seniority: string;
    stack: string;
    rate: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

function getProfilesForService(label: string): ProfileRow[] {
    const normalized = label.toLowerCase();

    if (normalized.includes("frontend")) {
        return [
            {
                title: "Senior Frontend Engineer",
                seniority: "7+ years",
                stack: "React, Next.js, TypeScript, Tailwind",
                rate: "$55–$80 / hour",
            },
            {
                title: "Product UI Engineer",
                seniority: "5+ years",
                stack: "React, Design Systems, Motion",
                rate: "$50–$70 / hour",
            },
            {
                title: "Frontend Tech Lead",
                seniority: "10+ years",
                stack: "Architecture, Performance, Accessibility",
                rate: "$80–$110 / hour",
            },
        ];
    }

    if (normalized.includes("fullstack")) {
        return [
            {
                title: "Senior Fullstack Engineer",
                seniority: "8+ years",
                stack: "React, Node.js, Postgres, AWS",
                rate: "$60–$90 / hour",
            },
            {
                title: "Founding Fullstack Engineer",
                seniority: "6+ years",
                stack: "Product, Delivery, Infra-aware",
                rate: "$65–$95 / hour",
            },
            {
                title: "Staff Fullstack Engineer",
                seniority: "10+ years",
                stack: "Architecture, Mentoring, Delivery",
                rate: "$90–$130 / hour",
            },
        ];
    }

    if (normalized.includes("backend")) {
        return [
            {
                title: "Senior Backend Engineer",
                seniority: "7+ years",
                stack: "Node.js, Go, SQL/NoSQL, queues",
                rate: "$60–$90 / hour",
            },
            {
                title: "Platform Engineer",
                seniority: "8+ years",
                stack: "APIs, Messaging, Observability",
                rate: "$70–$100 / hour",
            },
            {
                title: "Backend Tech Lead",
                seniority: "10+ years",
                stack: "Architecture, Reliability, Security",
                rate: "$90–$130 / hour",
            },
        ];
    }

    if (normalized.includes("devops")) {
        return [
            {
                title: "DevOps Engineer",
                seniority: "6+ years",
                stack: "CI/CD, Containers, Monitoring",
                rate: "$55–$85 / hour",
            },
            {
                title: "Cloud Architect",
                seniority: "8+ years",
                stack: "AWS, GCP, IaC, Networking",
                rate: "$80–$120 / hour",
            },
            {
                title: "SRE",
                seniority: "7+ years",
                stack: "SLOs, On-call, Reliability",
                rate: "$65–$95 / hour",
            },
        ];
    }

    if (normalized.includes("mobile")) {
        return [
            {
                title: "Senior Mobile Engineer",
                seniority: "7+ years",
                stack: "React Native, iOS, Android",
                rate: "$60–$90 / hour",
            },
            {
                title: "Mobile Product Engineer",
                seniority: "5+ years",
                stack: "UX, Offline-first, Analytics",
                rate: "$55–$80 / hour",
            },
            {
                title: "Mobile Tech Lead",
                seniority: "9+ years",
                stack: "Architecture, Stores, Tooling",
                rate: "$80–$115 / hour",
            },
        ];
    }

    return [
        {
            title: "Senior Engineer",
            seniority: "7+ years",
            stack: "Modern product stack",
            rate: "$55–$90 / hour",
        },
        {
            title: "Lead Engineer",
            seniority: "9+ years",
            stack: "Architecture & delivery",
            rate: "$80–$120 / hour",
        },
        {
            title: "Staff Engineer",
            seniority: "10+ years",
            stack: "Strategy & execution",
            rate: "$95–$140 / hour",
        },
    ];
}

function getFaqForService(label: string): FaqItem[] {
    const lower = label.toLowerCase();

    const base: FaqItem[] = [
        {
            question: "How quickly can we get started?",
            answer:
                "Most engagements start within 1–2 weeks. We agree on scope, assemble the right engineers, and begin with a focused kickoff session.",
        },
        {
            question: "What timezone do your engineers work in?",
            answer:
                "We primarily work with overlap to European and North American timezones. We align on collaboration windows before the engagement begins.",
        },
        {
            question: "Can we start small before committing long-term?",
            answer:
                "Yes. Many clients start with a smaller initial scope or a single vertical slice, then expand once they see how we work together.",
        },
        {
            question: "Who owns the code and IP?",
            answer:
                "You do. All code, documentation, and artifacts we create as part of the engagement belong to you, with no vendor lock-in.",
        },
    ];

    if (lower.includes("frontend")) {
        return [
            {
                question: "Which frontend stacks do you specialize in?",
                answer:
                    "We focus on modern React and Next.js ecosystems with TypeScript, Tailwind, and component-driven design. We can also work within your existing design system.",
            },
            ...base,
        ];
    }

    if (lower.includes("fullstack")) {
        return [
            {
                question: "Will you work with our existing backend, or build new services?",
                answer:
                    "Both are possible. We can extend your current backend, or design and implement new services when that’s the better move for your product roadmap.",
            },
            ...base,
        ];
    }

    if (lower.includes("backend")) {
        return [
            {
                question: "Do you work with monoliths, microservices, or both?",
                answer:
                    "Both. We’re pragmatic about architecture and will help you evolve your current setup instead of forcing a one-size-fits-all pattern.",
            },
            ...base,
        ];
    }

    if (lower.includes("devops")) {
        return [
            {
                question: "Can you work within our existing cloud provider?",
                answer:
                    "Yes. We commonly work with AWS, GCP, and Azure, and adapt to your current provider, tooling, and compliance requirements.",
            },
            ...base,
        ];
    }

    if (lower.includes("mobile")) {
        return [
            {
                question: "Do you support both iOS and Android?",
                answer:
                    "Yes. With React Native we target both platforms from a shared codebase, and we integrate cleanly with native modules when needed.",
            },
            ...base,
        ];
    }

    return base;
}

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
        <div className="flex min-h-screen flex-col bg-[#f8f4ef] selection:bg-black selection:text-white">
            <Navbar />
            <main className="grow pt-20">

                {/* Hero */}
                <section className="relative px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 bg-[#f8f4ef] overflow-hidden border-b-4 border-black min-h-[50vh] md:min-h-[60vh] flex items-center">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#ffe24b] border-4 border-black"></div>
                        <div className="absolute -bottom-24 right-8 w-64 h-64 rounded-full bg-[#ff8a5b] border-4 border-black"></div>
                        <div className="absolute top-16 right-1/2 translate-x-1/2 w-24 h-24 bg-white border-4 border-black rotate-12"></div>
                        <div className="absolute inset-0 opacity-[0.08]">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id={`grid-${slug}`} width="36" height="36" patternUnits="userSpaceOnUse">
                                        <path d="M 36 0 L 0 0 0 36" fill="none" stroke="black" strokeWidth="2" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill={`url(#grid-${slug})`} />
                            </svg>
                        </div>
                    </div>

                    <div className="container mx-auto max-w-[1400px] relative z-10 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
                        <div className="flex-1 max-w-2xl text-center md:text-left">
                            <div className="inline-flex items-center gap-3 mb-8 bg-white p-2 pr-6 border-4 border-black shadow-[6px_6px_0_#000]">
                                <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-[10px] font-bold">BY</span>
                                <span className="text-xs font-ibmplexmonomedium uppercase text-black">{service.badge}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-black leading-[1.05] md:leading-[0.95] mb-6 md:mb-8 font-dmsans">
                                {service.headline[0]} <br />
                                <span className="text-black bg-[#b7ffd6] border-4 border-black px-2 inline-block -rotate-1">{service.headline[1]}</span>
                            </h1>
                            <p className="text-black/80 text-base md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed font-dmsans mb-10">
                                {service.description}
                            </p>
                            <a href="#contact">
                                <button className="bg-black text-white text-[12px] md:text-[13px] font-black px-10 py-4 uppercase tracking-widest border-4 border-black shadow-[6px_6px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#000] transition-all font-ibmplexmonomedium">
                                    Hire Now
                                </button>
                            </a>
                        </div>

                        <div className="flex w-full md:w-[520px] shrink-0 items-center justify-center -mb-20 md:mb-0">
                            <div className="bg-white border-4 border-black shadow-[10px_10px_0_#000] p-6 rotate-1">
                                <Image
                                    src={service.image}
                                    alt={`${service.label} Illustration`}
                                    width={480}
                                    height={400}
                                    className="w-[80%] md:w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Snapshot band */}
                <section className="bg-[#f8f4ef] border-b-4 border-black px-6 py-12 md:py-16 font-dmsans">
                    <div className="container mx-auto max-w-[1200px] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 text-center lg:text-left">
                        <div className="max-w-md space-y-3">
                            <p className="text-[10px] md:text-xs font-ibmplexmonomedium uppercase tracking-[0.2em] text-black">
                                At a glance
                            </p>
                            <p className="text-lg text-black/80 leading-relaxed">
                                A focused {service.label.toLowerCase()} track with senior engineers, clear rates, and a process that feels calm
                                instead of chaotic.
                            </p>
                        </div>
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                            {service.stats.map(([val, lbl], i) => (
                                <div
                                    key={`${val}-${i}`}
                                    className="border-4 border-black bg-white px-6 py-5 flex flex-col justify-between shadow-[6px_6px_0_#000]"
                                >
                                    <span className="text-[10px] font-ibmplexmonomedium uppercase tracking-[0.18em] text-black mb-3">
                                        {lbl}
                                    </span>
                                    <span className="text-2xl md:text-3xl font-dmsans font-black text-black">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <SectionDivider bgTop="bg-[#f8f4ef]" fillBottom="fill-white" />
                <section className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-black text-black mb-4 tracking-tight">How it works</h2>
                        <p className="text-black/70 text-lg mb-16 max-w-lg">A straightforward process from brief to results.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.steps.map((s, idx) => (
                                <div
                                    key={s.num}
                                    className="border-4 border-black bg-[#fef6da] p-8 flex flex-col gap-5 shadow-[6px_6px_0_#000]"
                                >
                                    <span className="text-sm font-ibmplexmonomedium text-black">
                                        {(idx + 1).toString().padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-dmsans font-black text-black mb-2">{s.title}</h3>
                                        <p className="text-black/70 text-sm leading-relaxed">{s.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What you get */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-[#f8f4ef]" />
                <section className="bg-[#f8f4ef] py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-12">
                            <div className="max-w-md">
                                <h2 className="text-4xl md:text-5xl font-dmsans font-black text-black mb-4 tracking-tight">
                                    What you get with {service.label}
                                </h2>
                                <p className="text-black/70 text-lg leading-relaxed">
                                    Opinionated, senior-level execution wrapped in a process that keeps you in control of scope, quality, and
                                    timelines.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                                <div className="border-4 border-black bg-white px-6 py-5 flex flex-col gap-3 shadow-[6px_6px_0_#000]">
                                    <p className="text-xs font-ibmplexmonomedium uppercase tracking-[0.2em] text-black">
                                        Senior-only talent
                                    </p>
                                    <p className="text-sm text-black/70 leading-relaxed">
                                        Every engineer has shipped real products in production. No juniors learning the basics on your time.
                                    </p>
                                </div>
                                <div className="border-4 border-black bg-white px-6 py-5 flex flex-col gap-3 shadow-[6px_6px_0_#000]">
                                    <p className="text-xs font-ibmplexmonomedium uppercase tracking-[0.2em] text-black">
                                        Clear communication
                                    </p>
                                    <p className="text-sm text-black/70 leading-relaxed">
                                        Async-friendly updates, written docs, and demos that show progress instead of slides that promise it.
                                    </p>
                                </div>
                                <div className="border-4 border-black bg-white px-6 py-5 flex flex-col gap-3 shadow-[6px_6px_0_#000]">
                                    <p className="text-xs font-ibmplexmonomedium uppercase tracking-[0.2em] text-black">
                                        Modern practices
                                    </p>
                                    <p className="text-sm text-black/70 leading-relaxed">
                                        Testing, code review, observability, and security are part of the engagement, not optional extras.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <SectionDivider bgTop="bg-[#f8f4ef]" fillBottom="fill-[#fff7d6]" />
                <section className="bg-[#fff7d6] py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="lg:w-[340px] shrink-0">
                                <h2 className="text-4xl md:text-5xl font-dmsans font-black text-black mb-5 tracking-tight leading-tight">
                                    Why choose this service
                                </h2>
                                <p className="text-black/70 text-lg leading-relaxed">
                                    What makes our {service.label.toLowerCase()} offering different from the alternatives.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-6">
                                {service.benefits.map((b) => (
                                    <div
                                        key={b.num}
                                        className="border-4 border-black bg-white px-6 py-6 flex gap-6 items-start shadow-[6px_6px_0_#000]"
                                    >
                                        <span className="text-sm font-ibmplexmonomedium text-black pt-0.5 shrink-0 w-10">
                                            {b.num}
                                        </span>
                                        <div>
                                            <h3 className="text-lg font-dmsans font-black text-black mb-2">{b.title}</h3>
                                            <p className="text-black/70 text-sm leading-relaxed">{b.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sample talent profiles & rates */}
                <SectionDivider bgTop="bg-[#fff7d6]" fillBottom="fill-white" />
                <section className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px] space-y-10">
                        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                            <div className="max-w-md space-y-4">
                                <h2 className="text-4xl md:text-5xl font-dmsans font-black text-black tracking-tight">
                                    Sample profiles &amp; rates
                                </h2>
                                <p className="text-black/70 text-lg leading-relaxed">
                                    Actual numbers depend on seniority, stack, and engagement length, but this should give you a realistic range
                                    for planning.
                                </p>
                            </div>
                            <div className="flex-1 w-full overflow-hidden border-4 border-black shadow-[6px_6px_0_#000]">
                                <div className="grid grid-cols-[2fr,1fr,1fr,1fr] bg-black text-xs font-ibmplexmonomedium uppercase tracking-[0.16em] text-white">
                                    <div className="px-5 py-3 border-r-4 border-white">Role</div>
                                    <div className="px-5 py-3 border-r-4 border-white">Seniority</div>
                                    <div className="px-5 py-3 border-r-4 border-white">Focus</div>
                                    <div className="px-5 py-3">Typical rate</div>
                                </div>
                                <div className="divide-y-4 divide-black bg-white">
                                    {getProfilesForService(service.label).map((row, i) => (
                                        <div
                                            key={`${row.title}-${i}`}
                                            className="grid grid-cols-[2fr,1fr,1fr,1fr] text-sm text-black"
                                        >
                                            <div className="px-5 py-4 border-r-4 border-black">
                                                <p className="font-black">{row.title}</p>
                                            </div>
                                            <div className="px-5 py-4 border-r-4 border-black">
                                                <p className="text-black/70">{row.seniority}</p>
                                            </div>
                                            <div className="px-5 py-4 border-r-4 border-black">
                                                <p className="text-black/70">{row.stack}</p>
                                            </div>
                                            <div className="px-5 py-4">
                                                <p className="font-ibmplexmonomedium text-black">{row.rate}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-black font-ibmplexmonomedium uppercase tracking-[0.18em]">
                            These are illustrative only. We’ll confirm exact profiles and rates once we understand your scope and timeline.
                        </p>
                    </div>
                </section>

                {/* Other services */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-[#f8f4ef]" />
                <section className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <h2 className="text-4xl md:text-5xl font-dmsans font-black text-black mb-16 tracking-tight">Other services</h2>
                        <div className="flex flex-col gap-4">
                            {services.filter((s) => s.slug !== slug).map((s, i) => (
                                <a
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    className="border-4 border-black bg-[#f8f4ef] px-6 py-5 flex items-center justify-between gap-6 shadow-[6px_6px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#000] transition-all"
                                >
                                    <div className="flex items-center gap-8">
                                        <span className="text-sm font-ibmplexmonomedium text-black w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                                        <span className="text-xl font-dmsans font-black text-black">{s.label}</span>
                                    </div>
                                    <span className="text-sm font-ibmplexmonomedium text-black">→</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <SectionDivider bgTop="bg-[#f8f4ef]" fillBottom="fill-white" />
                <section className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="max-w-xl mb-10">
                            <h2 className="text-4xl md:text-5xl font-dmsans font-black text-black mb-4 tracking-tight">
                                Frequently asked questions
                            </h2>
                            <p className="text-black/70 text-lg leading-relaxed">
                                Straight answers to the things teams usually ask us before starting a {service.label.toLowerCase()} engagement.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {getFaqForService(service.label).map((item, idx) => (
                                <details
                                    key={`${item.question}-${idx}`}
                                    className="group border-4 border-black px-6 py-4 bg-[#f8f4ef] shadow-[6px_6px_0_#000]"
                                >
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                                        <span className="text-sm md:text-base font-black text-black">
                                            {item.question}
                                        </span>
                                        <span className="text-xs font-ibmplexmonomedium text-black group-open:hidden">
                                            +
                                        </span>
                                        <span className="text-xs font-ibmplexmonomedium text-black hidden group-open:inline">
                                            -
                                        </span>
                                    </summary>
                                    <div className="mt-3 text-sm text-black/70 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-black" />
                <section id="contact" className="bg-black text-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="border-4 border-white p-12 md:p-16 flex flex-col md:flex-row items-start justify-between gap-12 shadow-[8px_8px_0_#fff] bg-black">
                            <div className="max-w-xl">
                                <p className="text-sm font-ibmplexmonomedium text-white uppercase tracking-widest mb-6">{service.label}</p>
                                <h2 className="text-4xl md:text-5xl font-dmsans font-black mb-6 leading-[1.1] tracking-tight">
                                    {service.ctaHeadline}
                                </h2>
                                <p className="text-white/70 text-lg leading-relaxed mb-10">
                                    {service.ctaBody}
                                </p>
                                <button className="bg-white text-black font-black text-base px-7 py-3.5 uppercase tracking-widest border-4 border-white shadow-[6px_6px_0_#fff] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#fff] transition-all font-ibmplexmonomedium">
                                    Submit your brief
                                </button>
                            </div>

                            <div className="w-full md:w-[240px] shrink-0 border-4 border-white p-6 flex flex-col gap-4 bg-black shadow-[6px_6px_0_#fff]">
                                <p className="text-xs font-ibmplexmonomedium text-white uppercase tracking-widest">At a glance</p>
                                <div className="border-t-4 border-white pt-4 divide-y-4 divide-white">
                                    {service.stats.map(([val, lbl], i) => (
                                        <div key={i} className="py-3">
                                            <p className="text-2xl font-dmsans font-black text-white">{val}</p>
                                            <p className="text-xs text-white/70 mt-0.5">{lbl}</p>
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
