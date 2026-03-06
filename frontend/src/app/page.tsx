import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTASection />
      <Footer />
    </main>
  );
}
