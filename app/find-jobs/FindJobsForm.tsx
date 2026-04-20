"use client";

import { useEffect, useState } from "react";

import NeoAlert from "@/components/NeoAlert";

export default function FindJobsForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        stack: "",
        experience: "3-5",
        portfolio: "",
        about: "",
    });
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
            const res = await fetch("/api/jobs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setAlertState({
                    type: "success",
                    message: "Application submitted successfully! We'll review it shortly.",
                    open: true,
                });
                setFormData({
                    name: "",
                    email: "",
                    stack: "",
                    experience: "3-5",
                    portfolio: "",
                    about: "",
                });
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
                        <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Full name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                            className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white"
                            placeholder="Your full name"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white"
                            placeholder="you@email.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Primary stack</label>
                        <input
                            name="stack"
                            value={formData.stack}
                            onChange={(e) => setFormData((prev) => ({ ...prev, stack: e.target.value }))}
                            className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white"
                            placeholder="e.g. React, Node.js, PostgreSQL"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Years of experience</label>
                        <select
                            name="experience"
                            value={formData.experience}
                            onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                            className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white"
                        >
                            <option value="3-5">3–5 years</option>
                            <option value="5-8">5–8 years</option>
                            <option value="8-12">8–12 years</option>
                            <option value="12+">12+ years</option>
                        </select>
                    </div>
                </div>

                <div className="p-10 md:p-14 space-y-6 bg-white">
                    <div>
                        <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">LinkedIn or portfolio URL</label>
                        <input
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={(e) => setFormData((prev) => ({ ...prev, portfolio: e.target.value }))}
                            className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white"
                            placeholder="https://linkedin.com/in/yourname"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-ibmplexmonomedium text-black uppercase tracking-widest block mb-2">Tell us about yourself</label>
                        <textarea
                            name="about"
                            rows={6}
                            value={formData.about}
                            onChange={(e) => setFormData((prev) => ({ ...prev, about: e.target.value }))}
                            className="w-full border-[3px] border-black px-4 py-3 text-black font-dmsans text-base focus:outline-none focus:ring-2 focus:ring-black/60 transition-colors bg-white resize-none"
                            placeholder="What have you built? What kind of work are you looking for?"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white font-black text-base px-7 py-4 uppercase tracking-widest border-[4px] border-black shadow-[6px_6px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#000] transition-all font-ibmplexmonomedium"
                    >
                        Submit application →
                    </button>
                </div>
            </form>
        </div>
    );
}
