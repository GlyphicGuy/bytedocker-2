"use client";

import { useEffect, useState } from "react";

import NeoAlert from "@/components/NeoAlert";

const initialFormData = {
    company: "",
    role: "",
    stack: "",
    email: "",
    requirements: "",
    timeline: "asap",
};

export default function HireBriefForm() {
    const [formData, setFormData] = useState(initialFormData);
    const [alertState, setAlertState] = useState<{
        type: "success" | "error";
        message: string;
        open: boolean;
    }>({ type: "success", message: "", open: false });

    useEffect(() => {
        if (!alertState.open) return;

        const timeoutId = window.setTimeout(() => {
            setAlertState((prev) => ({ ...prev, open: false }));
        }, 4500);

        return () => window.clearTimeout(timeoutId);
    }, [alertState.open]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/hire", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setAlertState({
                    type: "success",
                    message: "Brief submitted successfully! We'll follow up shortly.",
                    open: true,
                });
                setFormData(initialFormData);
            } else {
                setAlertState({
                    type: "error",
                    message: "Something went wrong. Please try again in a moment.",
                    open: true,
                });
            }
        } catch (err) {
            console.error("Submission error:", err);
            setAlertState({
                type: "error",
                message: "Submission failed. Please check your connection and retry.",
                open: true,
            });
        }
    };

    return (
        <div className="space-y-6">
            <NeoAlert
                type={alertState.type}
                message={alertState.message}
                open={alertState.open}
                onClose={() => setAlertState((prev) => ({ ...prev, open: false }))}
            />
            <form
                className="border-[4px] border-black overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-[8px_8px_0_#000]"
                onSubmit={handleSubmit}
            >
                <div className="p-10 md:p-14 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black space-y-6 bg-[#fef6da]">
                    <div>
                        <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Company / Project name</label>
                        <input
                            name="company"
                            value={formData.company}
                            onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                            className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white"
                            placeholder="e.g. Acme Inc."
                            required
                        />
                    </div>
                    <div>
                        <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Role needed</label>
                        <input
                            name="role"
                            value={formData.role}
                            onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                            className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white"
                            placeholder="e.g. Senior Backend Engineer"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Tech stack</label>
                        <input
                            name="stack"
                            value={formData.stack}
                            onChange={(e) => setFormData((prev) => ({ ...prev, stack: e.target.value }))}
                            className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white"
                            placeholder="e.g. Node.js, PostgreSQL, AWS"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Your email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white"
                            placeholder="you@company.com"
                            required
                        />
                    </div>
                </div>

                <div className="p-10 md:p-14 space-y-6 bg-white">
                    <div>
                        <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Team context & requirements</label>
                        <textarea
                            name="requirements"
                            rows={6}
                            value={formData.requirements}
                            onChange={(e) => setFormData((prev) => ({ ...prev, requirements: e.target.value }))}
                            className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white resize-none"
                            placeholder="Tell us about your team, the problem you're solving, and what a great candidate looks like."
                            required
                        />
                    </div>
                    <div>
                        <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Timeline</label>
                        <select
                            name="timeline"
                            className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white"
                            value={formData.timeline}
                            onChange={(e) => setFormData((prev) => ({ ...prev, timeline: e.target.value }))}
                        >
                            <option value="asap">As soon as possible</option>
                            <option value="2-weeks">Within 2 weeks</option>
                            <option value="month">Within a month</option>
                            <option value="exploring">Just exploring</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white font-black text-base px-7 py-4 uppercase tracking-widest border-[4px] border-black shadow-[6px_6px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#000] transition-all font-ibmplexmonomedium"
                    >
                        Send brief →
                    </button>
                </div>
            </form>
        </div>
    );
}
