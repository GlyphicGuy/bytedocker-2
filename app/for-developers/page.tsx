import Navbar from "@/components/Navbar";
import DeveloperHero from "@/app/for-developers/components/DeveloperHero";
import LogoCloud from "@/components/LogoCloud";
import DeveloperProcess from "@/app/for-developers/components/DeveloperProcess";
import ProjectShowcase from "@/app/for-developers/components/ProjectShowcase";
import DeveloperBenefits from "@/app/for-developers/components/DeveloperBenefits";
import DeveloperFAQ from "@/app/for-developers/components/DeveloperFAQ";
import DeveloperQuestionsCTA from "@/app/for-developers/components/DeveloperQuestionsCTA";
import DeveloperForm from "@/components/DeveloperForm";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SectionDivider from "@/components/SectionDivider";

export const metadata = {
    title: "For Developers | Bytedocker Talent",
    description: "Join the elite network of the top 5% Indian developers. Work with world-class US startups and build products that matter.",
};

export default function ForDevelopersPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main className="grow pt-20">
                <DeveloperHero />
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-slate-50" />
                <LogoCloud />
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <DeveloperProcess />
                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-50" />
                <ProjectShowcase />
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-white" />
                <DeveloperBenefits />
                <SectionDivider bgTop="bg-white" fillBottom="fill-slate-50" />
                <DeveloperFAQ />
                <SectionDivider bgTop="bg-slate-50" fillBottom="fill-slate-100" />
                <DeveloperQuestionsCTA />
                <SectionDivider bgTop="bg-slate-100" fillBottom="fill-slate-50" />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
