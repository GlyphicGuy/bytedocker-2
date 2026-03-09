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

                {/* Snapshot band */}
                <section className="bg-slate-50 border-b border-slate-100 px-6 py-10 font-dmsans">
                    <div className="container mx-auto max-w-[1200px] flex flex-col lg:flex-row items-start justify-between gap-10">
                        <div className="max-w-md space-y-3">
                            <p className="text-xs font-ibmplexmonomedium uppercase tracking-[0.2em] text-slate-400">
                                At a glance
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                A focused {service.label.toLowerCase()} track with senior engineers, clear rates, and a process that feels calm
                                instead of chaotic.
                            </p>
                        </div>
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {service.stats.map(([val, lbl], i) => (
                                <div
                                    key={`${val}-${i}`}
                                    className="border border-slate-200 rounded-2xl bg-white/60 backdrop-blur-sm px-5 py-4 flex flex-col justify-between"
                                >
                                    <span className="text-xs font-ibmplexmonomedium uppercase tracking-[0.18em] text-slate-400 mb-2">
                                        {lbl}
                                    </span>
                                    <span className="text-2xl font-dmsans font-medium text-slate-900">{val}</span>
                                </div>
                            ))}
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

                {/* What you get */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-50" />
                <section className="bg-slate-50 py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-12">
                            <div className="max-w-md">
                                <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-4 tracking-tight">
                                    What you get with {service.label}
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    Opinionated, senior-level execution wrapped in a process that keeps you in control of scope, quality, and
                                    timelines.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                                <div className="border border-slate-200 rounded-2xl bg-white px-6 py-5 flex flex-col gap-3">
                                    <p className="text-xs font-ibmplexmonomedium uppercase tracking-[0.2em] text-slate-400">
                                        Senior-only talent
                                    </p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Every engineer has shipped real products in production. No juniors learning the basics on your time.
                                    </p>
                                </div>
                                <div className="border border-slate-200 rounded-2xl bg-white px-6 py-5 flex flex-col gap-3">
                                    <p className="text-xs font-ibmplexmonomedium uppercase tracking-[0.2em] text-slate-400">
                                        Clear communication
                                    </p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Async-friendly updates, written docs, and demos that show progress instead of slides that promise it.
                                    </p>
                                </div>
                                <div className="border border-slate-200 rounded-2xl bg-white px-6 py-5 flex flex-col gap-3">
                                    <p className="text-xs font-ibmplexmonomedium uppercase tracking-[0.2em] text-slate-400">
                                        Modern practices
                                    </p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Testing, code review, observability, and security are part of the engagement, not optional extras.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-slate-100" />
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

                {/* Sample talent profiles & rates */}
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <section className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px] space-y-10">
                        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                            <div className="max-w-md space-y-4">
                                <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 tracking-tight">
                                    Sample profiles &amp; rates
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    Actual numbers depend on seniority, stack, and engagement length, but this should give you a realistic range
                                    for planning.
                                </p>
                            </div>
                            <div className="flex-1 w-full overflow-hidden rounded-2xl border border-slate-200">
                                <div className="grid grid-cols-[2fr,1fr,1fr,1fr] bg-slate-950 text-xs font-ibmplexmonomedium uppercase tracking-[0.16em] text-slate-300">
                                    <div className="px-5 py-3 border-r border-slate-800">Role</div>
                                    <div className="px-5 py-3 border-r border-slate-800">Seniority</div>
                                    <div className="px-5 py-3 border-r border-slate-800">Focus</div>
                                    <div className="px-5 py-3">Typical rate</div>
                                </div>
                                <div className="divide-y divide-slate-200 bg-white">
                                    {getProfilesForService(service.label).map((row, i) => (
                                        <div
                                            key={`${row.title}-${i}`}
                                            className="grid grid-cols-[2fr,1fr,1fr,1fr] text-sm text-slate-800"
                                        >
                                            <div className="px-5 py-4 border-r border-slate-100">
                                                <p className="font-medium">{row.title}</p>
                                            </div>
                                            <div className="px-5 py-4 border-r border-slate-100">
                                                <p className="text-slate-600">{row.seniority}</p>
                                            </div>
                                            <div className="px-5 py-4 border-r border-slate-100">
                                                <p className="text-slate-600">{row.stack}</p>
                                            </div>
                                            <div className="px-5 py-4">
                                                <p className="font-ibmplexmonomedium text-slate-900">{row.rate}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 font-ibmplexmonomedium uppercase tracking-[0.18em]">
                            These are illustrative only. We’ll confirm exact profiles and rates once we understand your scope and timeline.
                        </p>
                    </div>
                </section>

                {/* Other services */}
                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-50" />
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

                {/* FAQ */}
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <section className="bg-white py-24 px-6 font-dmsans">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="max-w-xl mb-10">
                            <h2 className="text-4xl md:text-5xl font-dmsans font-medium text-slate-900 mb-4 tracking-tight">
                                Frequently asked questions
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                Straight answers to the things teams usually ask us before starting a {service.label.toLowerCase()} engagement.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {getFaqForService(service.label).map((item, idx) => (
                                <details
                                    key={`${item.question}-${idx}`}
                                    className="group border border-slate-200 rounded-2xl px-6 py-4 bg-slate-50/60"
                                >
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                                        <span className="text-sm md:text-base font-medium text-slate-900">
                                            {item.question}
                                        </span>
                                        <span className="text-xs font-ibmplexmonomedium text-slate-500 group-open:hidden">
                                            +
                                        </span>
                                        <span className="text-xs font-ibmplexmonomedium text-slate-500 hidden group-open:inline">
                                            –
                                        </span>
                                    </summary>
                                    <div className="mt-3 text-sm text-slate-600 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </details>
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
