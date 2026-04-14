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

export const metadata = {
    title: "For Developers | Bytedocker Talent",
    description: "Join the elite network of the top 1% Indian developers. Work with world-class US startups and build products that matter.",
};

export default function ForDevelopersPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main className="grow pt-20">
                <DeveloperHero />
                <LogoCloud />
                <DeveloperProcess />
                <ProjectShowcase />
                <DeveloperBenefits />
                <DeveloperFAQ />
                <DeveloperQuestionsCTA />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
