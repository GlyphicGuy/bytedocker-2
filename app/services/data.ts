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
        slug: "frontend-development",
        label: "Frontend Development",
        badge: "Pixel-perfect interfaces",
        headline: ["Frontend that feels", "fast, polished & modern."],
        description: "We design and build crisp, responsive interfaces in React and Next.js that feel instant to your users and simple for your team to maintain.",
        image: "/undraw_agreement_ftet.svg",
        steps: [
            { num: "01", title: "Define your product surface", description: "We map the key user journeys, states, and constraints across web and mobile web." },
            { num: "02", title: "Architecture & design system", description: "We propose a component architecture, state strategy, and design system that match your roadmap." },
            { num: "03", title: "Implementation & motion", description: "We implement UI, micro-interactions, and accessibility with production-grade code and reviews." },
            { num: "04", title: "Handoff & enablement", description: "We document patterns so your internal team can extend the frontend without friction." },
        ],
        benefits: [
            { num: "01", title: "Performance-first builds", description: "Lighthouse-friendly, Core Web Vitals aware — we optimize for speed from day one." },
            { num: "02", title: "Design-system driven", description: "We create reusable components and tokens so your UI stays consistent as you ship." },
            { num: "03", title: "Accessible by default", description: "We factor in keyboard navigation, color contrast, and screen reader support from the start." },
            { num: "04", title: "Tightly aligned with backend", description: "We collaborate with your API teams so frontends and backends evolve in sync." },
        ],
        stats: [["<1s", "Target time-to-interactive"], ["100%", "Responsive layouts"], ["A11y", "Accessibility minded"]],
        ctaHeadline: "Need a frontend your users love?",
        ctaBody: "Share your product and stack, and we’ll scope a frontend engagement that ships quickly without sacrificing quality.",
        panel: [["React & Next.js", "Modern frontend stack"], ["Design systems", "Reusable UI patterns"], ["Performance", "Fast, smooth UX"]],
    },
    {
        slug: "fullstack-development",
        label: "Fullstack Development",
        badge: "End-to-end delivery",
        headline: ["From UI to infra,", "one aligned team."],
        description: "We own the full vertical slice — frontend, backend, and integration — so you get shippable features instead of disconnected pieces.",
        image: "/undraw_agreement_ftet.svg",
        steps: [
            { num: "01", title: "Scope business flows", description: "We translate your requirements into clear user stories and technical acceptance criteria." },
            { num: "02", title: "Design the architecture", description: "We select patterns, storage, and integration points that match your constraints and timelines." },
            { num: "03", title: "Implement & iterate", description: "We ship in small vertical slices so you see real product surface early and often." },
            { num: "04", title: "Stabilize & hand over", description: "We harden observability, tests, and docs so your team can confidently own the stack." },
        ],
        benefits: [
            { num: "01", title: "Vertical ownership", description: "One team is accountable for UX, APIs, and data — fewer handoffs, more momentum." },
            { num: "02", title: "Production pragmatism", description: "We balance ideal architecture with what will move the needle for you right now." },
            { num: "03", title: "Integrated quality", description: "Testing, monitoring, and logging are part of the work, not an afterthought." },
            { num: "04", title: "Cloud-ready by default", description: "We build with modern CI/CD and hosting so you deploy often and safely." },
        ],
        stats: [["2–4 weeks", "Typical feature cycle"], ["End-to-end", "From UI to DB"], ["1 team", "Single point of contact"]],
        ctaHeadline: "Looking for a fullstack build partner?",
        ctaBody: "Tell us about the product you want to ship and we’ll propose a fullstack team and delivery plan.",
        panel: [["Fullstack", "Frontend + backend"], ["Cloud-native", "Modern delivery"], ["Vertical slices", "Feature-focused work"]],
    },
    {
        slug: "backend-engineering",
        label: "Backend Engineering",
        badge: "APIs & data",
        headline: ["Backends built for", "scale, safety & speed."],
        description: "We design and implement robust APIs, services, and data models that stay reliable as your traffic and team grow.",
        image: "/undraw_agreement_ftet.svg",
        steps: [
            { num: "01", title: "Current-state audit", description: "We review your existing services, data flows, and pain points around latency or reliability." },
            { num: "02", title: "Target architecture", description: "We define the right mix of services, queues, and storage patterns for your use case." },
            { num: "03", title: "Implementation & hardening", description: "We build and refactor services with strong contracts, observability, and tests." },
            { num: "04", title: "Rollout with confidence", description: "We help you roll out changes behind flags with clear rollback strategies." },
        ],
        benefits: [
            { num: "01", title: "Stable APIs", description: "We design contracts that are explicit, versioned, and easy for frontends to consume." },
            { num: "02", title: "Operational visibility", description: "Tracing, logging, metrics, and alerts are wired in from the first commit." },
            { num: "03", title: "Secure by design", description: "We bake in authentication, authorization, and data protection as first-class concerns." },
            { num: "04", title: "Future-proof foundations", description: "We favor patterns that make it easier to onboard new engineers and services later." },
        ],
        stats: [["99.9%", "Reliability targets"], ["ms", "Latency-minded APIs"], ["Observability", "Included by default"]],
        ctaHeadline: "Need backends you can trust?",
        ctaBody: "Share your current stack and challenges and we’ll outline how we can stabilize and extend your backend.",
        panel: [["APIs", "HTTP & RPC"], ["Data", "Reliable persistence"], ["Ops", "Monitoring & alerts"]],
    },
    {
        slug: "devops-and-cloud",
        label: "DevOps & Cloud",
        badge: "Ship with confidence",
        headline: ["Pipelines, infra &", "runtime you don't worry about."],
        description: "We design CI/CD, infrastructure, and runtime practices so your team can ship often without firefighting every deploy.",
        image: "/undraw_agreement_ftet.svg",
        steps: [
            { num: "01", title: "Environment audit", description: "We review how you build, test, deploy, and observe your applications today." },
            { num: "02", title: "Cloud architecture", description: "We propose a pragmatic target setup across environments, regions, and services." },
            { num: "03", title: "CI/CD & automation", description: "We wire in pipelines, checks, and safety rails so deploys become boring." },
            { num: "04", title: "Knowledge transfer", description: "We document runbooks and train your team on operating the new setup." },
        ],
        benefits: [
            { num: "01", title: "Faster releases", description: "From idea to production in hours, not weeks, thanks to reliable pipelines." },
            { num: "02", title: "Lower on-call stress", description: "Better alerts and dashboards mean fewer surprises at 3 a.m." },
            { num: "03", title: "Cost-aware design", description: "We keep cloud bills in mind when picking services and patterns." },
            { num: "04", title: "Security baked in", description: "From secrets management to least-privilege access, we align with best practices." },
        ],
        stats: [["Daily", "Deploy cadence"], ["Reduced", "Change failure rate"], ["Runbooks", "Documented operations"]],
        ctaHeadline: "Want calmer, faster deploys?",
        ctaBody: "Tell us how you ship today and we’ll design a DevOps and cloud setup that your team can rely on.",
        panel: [["CI/CD", "Automated pipelines"], ["Cloud", "Modern infrastructure"], ["SRE", "Operational practices"]],
    },
    {
        slug: "mobile-engineering",
        label: "Mobile Engineering",
        badge: "Native-feel apps",
        headline: ["Mobile experiences", "that feel truly native."],
        description: "We craft high-performance mobile apps using React Native and modern tooling so your product feels at home on every device.",
        image: "/undraw_agreement_ftet.svg",
        steps: [
            { num: "01", title: "Product & platform strategy", description: "We clarify which platforms, devices, and offline behaviors matter most for your users." },
            { num: "02", title: "Architecture & integrations", description: "We design navigation, state, and native integrations that will scale with your roadmap." },
            { num: "03", title: "Implementation & polishing", description: "We implement features with attention to gestures, animations, and perceived performance." },
            { num: "04", title: "Store readiness", description: "We help you prepare for App Store and Play Store submission and ongoing releases." },
        ],
        benefits: [
            { num: "01", title: "One codebase, many devices", description: "React Native lets you serve both iOS and Android without sacrificing UX." },
            { num: "02", title: "Performance-conscious", description: "We pay attention to startup times, bundle size, and memory use from the beginning." },
            { num: "03", title: "Deep integrations", description: "Push notifications, deep links, and native modules are part of our standard toolkit." },
            { num: "04", title: "Smooth handoff", description: "We leave behind clear structure and docs so your team can continue shipping confidently." },
        ],
        stats: [["iOS & Android", "Cross-platform"], ["Native feel", "Smooth interactions"], ["Store-ready", "Submission support"]],
        ctaHeadline: "Ready to launch or upgrade your mobile app?",
        ctaBody: "Share your idea or existing app and we’ll outline a delivery path for your mobile roadmap.",
        panel: [["React Native", "Modern mobile stack"], ["UX-focused", "Delightful interactions"], ["Cross-platform", "Broad coverage"]],
    },
];

export default services;

export function getService(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return services.map((s) => s.slug);
}
