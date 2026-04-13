import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Features from "@/components/Features";
import Comparisons from "@/components/Comparisons";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
    title: "For Startups | Bytedocker Talent",
    description: "Scale your startup with the top 5% Indian developers. Pre-vetted, matched in 18 hours, and ready to deploy.",
};

export default function ForStartupsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main className="grow">
                <Hero />
                <LogoCloud />
                <Features />
                <Comparisons />
                <Services />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
