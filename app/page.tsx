import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <LeadForm />
      <Footer />

      {/* Floating CTA — always visible */}
      <FloatingCTA />
    </main>
  );
}
