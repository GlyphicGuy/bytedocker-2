import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Features from "@/components/Features";
import Comparisons from "@/components/Comparisons";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f0e8] selection:bg-[#0066ff] selection:text-[#f5f0e8] dark:bg-[#0a0a0a]">
      <Navbar />
      <main className="grow">
        <Hero />
        <LogoCloud />
        <Features />
        <Comparisons />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
