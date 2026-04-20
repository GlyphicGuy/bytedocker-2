import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, email, stack, experience, portfolio, about } = await req.json();
    const webhookUrl = process.env.DISCORD_JOBS_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
        return NextResponse.json({ error: "Missing Discord webhook URL" }, { status: 500 });
    }

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: "🧑‍💻 **New Developer Application Received!**",
                embeds: [
                    {
                        title: "Developer Profile",
                        color: 0x5865f2,
                        fields: [
                            { name: "Name", value: name || "N/A", inline: true },
                            { name: "Email", value: email || "N/A", inline: true },
                            { name: "Primary Stack", value: stack || "N/A" },
                            { name: "Experience", value: experience || "N/A", inline: true },
                            { name: "Portfolio", value: portfolio || "N/A" },
                            { name: "About", value: about || "No details provided." },
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

        return NextResponse.json({ message: "Success! Application submitted." }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to submit application." }, { status: 500 });
    }
}
