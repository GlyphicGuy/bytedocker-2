import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { company, role, stack, email, requirements, timeline } = await req.json();

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
                            { name: "Company", value: company || "N/A"},
                            { name: "Role", value: role || "N/A"},
                            { name: "Email", value: email || "N/A"},
                            { name: "Tech Stack", value: stack || "N/A" },
                            { name: "Project Details", value: requirements || "No details provided." },
                            { name: "Timeline", value: timeline || "N/A"},
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
