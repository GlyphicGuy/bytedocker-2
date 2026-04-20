import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 12;
const rateLimitBuckets = new Map<string, number[]>();

const getClientIp = (req: Request) => {
    const forwardedFor = req.headers.get("x-forwarded-for");
    if (forwardedFor) {
        return forwardedFor.split(",")[0]?.trim() || "unknown";
    }

    return req.headers.get("x-real-ip") || "unknown";
};

const isRateLimited = (ip: string, now: number) => {
    const bucket = rateLimitBuckets.get(ip) || [];
    const fresh = bucket.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
    fresh.push(now);
    rateLimitBuckets.set(ip, fresh);
    return fresh.length > RATE_LIMIT_MAX;
};

export async function POST(req: Request) {
    const { company, role, stack, email, requirements, timeline, website } = await req.json();

    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp, Date.now())) {
        return NextResponse.json({ message: "Success! Brief submitted" }, { status: 200 });
    }

    if (typeof website === "string" && website.trim().length > 0) {
        return NextResponse.json({ message: "Success! Brief submitted" }, { status: 200 });
    }

    try {
        const response = await fetch(process.env.DISCORD_WEBHOOK_URL as string, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: "🔔 **New Startup Brief Received!**",
                embeds: [
                    {
                        title: "Client Requirements",
                        color: 0x5865f2,
                        fields: [
                            { name: "Company", value: company || "N/A" },
                            { name: "Role", value: role || "N/A" },
                            { name: "Email", value: email || "N/A" },
                            { name: "Tech Stack", value: stack || "N/A" },
                            { name: "Project Details", value: requirements || "No details provided." },
                            { name: "Timeline", value: timeline || "N/A" },
                        ],
                        footer: { text: "Bytedocker" },
                        timestamp: new Date(),
                    },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error("Discord responded with an error");
        }

        return NextResponse.json({ message: "Success! Brief submitted" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to submit brief!" }, { status: 500 });
    }
}
