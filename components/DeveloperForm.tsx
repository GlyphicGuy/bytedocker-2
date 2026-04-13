"use client";

import { useState } from "react";

export default function DeveloperForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        linkedin: "",
        stack: "",
        experience: "",
        projects: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Application submitted:", formData);
        setStep(3);
    };

    return (
        <section id="developers" className="py-32 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-[48px] border border-slate-100 shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-blue-600 p-12 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-3xl font-bold mb-6">Join the Network</h3>
                            <p className="text-blue-100 leading-relaxed font-medium">
                                Work with world-class US startups. Earn in USD. Build products that matter.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {[
                                { step: 1, label: "Basic Info" },
                                { step: 2, label: "Vetting Questions" },
                                { step: 3, label: "Confirmation" }
                            ].map((s) => (
                                <div key={s.step} className={`flex items-center gap-4 transition-opacity ${step === s.step ? "opacity-100" : "opacity-40"}`}>
                                    <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-sm">
                                        {s.step}
                                    </div>
                                    <span className="font-bold uppercase tracking-widest text-[10px]">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-2/3 p-12 md:p-16">
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                <h4 className="text-2xl font-bold text-slate-900 mb-8">Tell us about yourself</h4>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                                        <input name="name" type="text" value={formData.name} onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                                        <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">LinkedIn Profile</label>
                                        <input name="linkedin" type="url" value={formData.linkedin} onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20" placeholder="https://linkedin.com/in/johndoe" />
                                    </div>
                                    <button onClick={nextStep} className="w-full bg-blue-600 text-white font-black uppercase tracking-widest text-xs py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                                        Continue to Screening
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                <h4 className="text-2xl font-bold text-slate-900 mb-8">Technical Screening</h4>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Primary Tech Stack</label>
                                        <select name="stack" value={formData.stack} onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20">
                                            <option value="">Select Stack</option>
                                            <option value="frontend">Frontend (React/Next.js)</option>
                                            <option value="backend">Backend (Node/Python/Go)</option>
                                            <option value="fullstack">Full Stack</option>
                                            <option value="mobile">Mobile (Flutter/React Native)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Years of Experience</label>
                                        <input name="experience" type="number" value={formData.experience} onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20" placeholder="5" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Highlight 2 major projects you built</label>
                                        <textarea name="projects" value={formData.projects} onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 h-32" placeholder="Describe the impact and tech stack..."></textarea>
                                    </div>
                                    <div className="flex gap-4">
                                        <button onClick={prevStep} className="flex-1 bg-slate-100 text-slate-600 font-black uppercase tracking-widest text-xs py-5 rounded-2xl hover:bg-slate-200 transition-all">
                                            Back
                                        </button>
                                        <button onClick={handleSubmit} className="flex-2 bg-blue-600 text-white font-black uppercase tracking-widest text-xs py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                                            Submit Application
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="text-center py-12 animate-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-8">✓</div>
                                <h4 className="text-3xl font-bold text-slate-900 mb-4">Application Received!</h4>
                                <p className="text-slate-500 leading-relaxed mb-10 font-medium">
                                    Our vetting team will review your profile. If you match our high standards, we&apos;ll reach out for a technical screening within 18 hours.
                                </p>
                                <button onClick={() => setStep(1)} className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] hover:underline">
                                    Apply another role
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
