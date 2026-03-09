export type Service = {
    slug: string;
    label: string;
    badge: string;
    headline: string[];
    description: string;
    image: string;
    steps: { num: string; title: string; description: string }[];
    benefits: { num: string; title: string; description: string }[];
    stats: [string, string][];
    ctaHeadline: string;
    ctaBody: string;
    panel: [string, string][];
};

const services: Service[] = [
    {
        slug: "staff-augmentation",
        label: "Staff Augmentation",
        badge: "Scale your team",
        headline: ["Extend your team,", "not your headcount."],
        description: "Add pre-vetted senior engineers to your existing team — without the overhead of full-time hiring. They work on your stack, in your timezone, under your direction.",
        image: "/undraw_agreement_ftet.svg",
        steps: [
            { num: "01", title: "Submit your role", description: "Tell us what your team needs — stack, seniority, and how many engineers." },
            { num: "02", title: "Receive matched profiles", description: "We surface pre-vetted candidates from our talent pool within 48 hours." },
            { num: "03", title: "Interview and select", description: "One conversation to confirm fit. Vetting is already done on our end." },
            { num: "04", title: "Deploy and contribute", description: "Your augmented engineer plugs into your workflows from day one." },
        ],
        benefits: [
            { num: "01", title: "No long-term commitment", description: "Engage engineers for a sprint, a quarter, or longer — you stay in control of the timeline." },
            { num: "02", title: "Your stack, your process", description: "Augmented engineers adopt your existing tools and workflows. No ramp-up friction." },
            { num: "03", title: "Senior level, every time", description: "We only place developers with 5+ years of production experience in their specialty." },
            { num: "04", title: "Cost-effective scaling", description: "Skip recruitment fees, benefits, and overhead. Pay only for the engineering time you actually use." },
        ],
        stats: [["48h", "Median time to first CV"], ["Top 5%", "Of screened candidates"], ["94%", "Client retention rate"]],
        ctaHeadline: "Ready to augment your team?",
        ctaBody: "Submit a brief and we'll match you with a pre-vetted engineer within 48 hours.",
        panel: [["Flexible", "No lock-in contracts"], ["Senior only", "5+ years experience"], ["Remote-first", "Global timezone coverage"]],
    },
    {
        slug: "dedicated-teams",
        label: "Dedicated Teams",
        badge: "Full team delivery",
        headline: ["A complete team,", "built around your product."],
        description: "We assemble a cross-functional engineering team — frontend, backend, QA, and DevOps — tailored to your product roadmap and managed for you.",
        image: "/undraw_agreement_ftet.svg",
        steps: [
            { num: "01", title: "Define your roadmap", description: "Share your product goals, delivery timelines, and required disciplines." },
            { num: "02", title: "Team composition", description: "We propose a team structure matched to your roadmap — roles, seniorities, and size." },
            { num: "03", title: "Vetting and matching", description: "Each team member passes our full vetting process before joining." },
            { num: "04", title: "Team onboarding", description: "Your dedicated team is ready to sprint within days, not months." },
        ],
        benefits: [
            { num: "01", title: "Cross-functional coverage", description: "Frontend, backend, QA, DevOps — one team, one point of contact." },
            { num: "02", title: "Managed delivery", description: "We take ownership of team management so you can focus on product strategy." },
            { num: "03", title: "Elastic capacity", description: "Scale the team up or down based on your roadmap phases — with no friction." },
            { num: "04", title: "Transparent reporting", description: "Regular delivery updates, velocity reports, and direct access to every engineer on the team." },
        ],
        stats: [["5–15", "Typical team size range"], ["2 weeks", "Avg. team assembly time"], ["100%", "Remote, globally distributed"]],
        ctaHeadline: "Need a full team, not just one hire?",
        ctaBody: "Tell us about your product and we'll propose the right team structure for your roadmap.",
        panel: [["Full stack", "End-to-end capability"], ["Managed", "One point of contact"], ["Scalable", "Flex up or down"]],
    },
    {
        slug: "tech-consulting",
        label: "Tech Consulting",
        badge: "Expert guidance",
        headline: ["Architecture decisions", "made with confidence."],
        description: "Access senior technical advisors who have built and scaled real products. Get hands-on guidance on architecture, team structure, and technology choices.",
        image: "/undraw_agreement_ftet.svg",
        steps: [
            { num: "01", title: "Discovery session", description: "A focused 60-minute call to understand your current stack, challenges, and goals." },
            { num: "02", title: "Technical audit", description: "We review your codebase, infrastructure, and team workflows for gaps and risks." },
            { num: "03", title: "Recommendations report", description: "A clear, prioritized report with actionable recommendations — no vague advice." },
            { num: "04", title: "Ongoing advisory", description: "Optionally retain a senior advisor for ongoing guidance as your team executes." },
        ],
        benefits: [
            { num: "01", title: "Senior perspective, no bias", description: "Our advisors have no stake in your tooling choices — just honest, experienced opinions." },
            { num: "02", title: "Fast time-to-value", description: "Most clients get their first meaningful insights within a single week of engagement." },
            { num: "03", title: "Code-level depth", description: "We go beyond whiteboard advice — we review actual code, infra, and CI/CD pipelines." },
            { num: "04", title: "Async-friendly", description: "All documentation is written for async review so your team can absorb it on their own time." },
        ],
        stats: [["60 min", "Discovery session"], ["1 week", "First insights delivered"], ["10+ years", "Avg. advisor experience"]],
        ctaHeadline: "Want expert eyes on your stack?",
        ctaBody: "Book a discovery session and we'll identify your biggest technical risks and opportunities.",
        panel: [["No bias", "Stack-agnostic advice"], ["Async", "Remote-friendly process"], ["Actionable", "No vague consulting"]],
    },
    {
        slug: "mvp-development",
        label: "MVP Development",
        badge: "Launch faster",
        headline: ["From idea to", "working product."],
        description: "We scope, staff, and deliver your MVP with a hand-picked team of engineers optimized for speed and quality. Validate your idea without building a full internal team first.",
        image: "/undraw_agreement_ftet.svg",
        steps: [
            { num: "01", title: "Scope and estimate", description: "We work with you to define the MVP scope — what's in, what's out, and what it'll take." },
            { num: "02", title: "Team assembly", description: "We assign a focused team: a lead engineer, supporting devs, and QA if needed." },
            { num: "03", title: "Sprint-based delivery", description: "Two-week sprints with demo calls after each. You stay in control of the direction." },
            { num: "04", title: "Handoff or continue", description: "Take full ownership of the codebase or continue working with the team post-MVP." },
        ],
        benefits: [
            { num: "01", title: "Scoped for speed", description: "We challenge unnecessary scope aggressively. You launch faster because we prioritize ruthlessly." },
            { num: "02", title: "Production-quality code", description: "MVP doesn't mean throwaway code. We build with handoff readiness in mind from day one." },
            { num: "03", title: "Fixed scope option", description: "For well-defined MVPs, we offer a fixed-scope, fixed-price engagement with clear deliverables." },
            { num: "04", title: "Full IP ownership", description: "All code belongs to you. No licensing complexity, no vendor lock-in." },
        ],
        stats: [["6–12 weeks", "Typical MVP timeline"], ["Day 1", "Code ownership from"], ["2-week", "Sprint cycle"]],
        ctaHeadline: "Ready to build your MVP?",
        ctaBody: "Share your idea and we'll scope a delivery plan and propose the right team for it.",
        panel: [["Fixed scope", "Clear deliverables"], ["You own it", "Full IP ownership"], ["Sprint-based", "Transparent delivery"]],
    },
    {
        slug: "engineering-hiring",
        label: "Engineering Hiring",
        badge: "Permanent placement",
        headline: ["Hire engineers", "you actually keep."],
        description: "For companies ready to make permanent hires, we run the full technical vetting pipeline and deliver candidates ready to receive an offer — not just a first round.",
        image: "/undraw_agreement_ftet.svg",
        steps: [
            { num: "01", title: "Role definition", description: "We work with your hiring manager to define the exact profile — technically and culturally." },
            { num: "02", title: "Full vetting pipeline", description: "All candidates pass our English, coding task, live coding, and video interview stages." },
            { num: "03", title: "Shortlist delivery", description: "You receive a shortlist of 2–3 fully vetted candidates, ready for your final interview." },
            { num: "04", title: "Offer and onboarding", description: "We support the offer process and stay available during the first 30 days post-hire." },
        ],
        benefits: [
            { num: "01", title: "Skip early-stage screening", description: "By the time a candidate reaches you, they have already been through four rigorous stages." },
            { num: "02", title: "Cultural fit assessment", description: "We evaluate communication, autonomy, and collaboration style — not just technical skills." },
            { num: "03", title: "30-day replacement guarantee", description: "If a placement doesn't work out within 30 days, we find a replacement at no extra charge." },
            { num: "04", title: "No volume plays", description: "We send 2–3 qualified candidates, not 20 who might be a fit. Your time matters." },
        ],
        stats: [["2–3", "Shortlisted candidates max"], ["30 days", "Replacement guarantee"], ["11 days", "Median time-to-hire"]],
        ctaHeadline: "Looking for a permanent hire?",
        ctaBody: "Tell us about the role and we'll begin sourcing from our pre-vetted talent pool immediately.",
        panel: [["Permanent", "Full-time placement"], ["Guaranteed", "30-day replacement"], ["Shortlisted", "Max 3 candidates"]],
    },
];

export default services;

export function getService(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return services.map((s) => s.slug);
}
