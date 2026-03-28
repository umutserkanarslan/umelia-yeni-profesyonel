import Navbar from "@/components/otel/Navbar";
import Hero from "@/components/otel/Hero";
import HowItWorks from "@/components/otel/HowItWorks";
import Features from "@/components/otel/Features";
import LiveDemo from "@/components/otel/LiveDemo";
import Pricing from "@/components/otel/Pricing";
import FAQ from "@/components/otel/FAQ";
import CTA from "@/components/otel/CTA";
import Footer from "@/components/otel/Footer";

export default function OtelPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <LiveDemo />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
