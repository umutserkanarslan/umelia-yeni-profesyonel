import Navbar from "@/components/rezervasyon/Navbar";
import Hero from "@/components/rezervasyon/Hero";
import HowItWorks from "@/components/rezervasyon/HowItWorks";
import Features from "@/components/rezervasyon/Features";
import LiveDemo from "@/components/rezervasyon/LiveDemo";
import Pricing from "@/components/rezervasyon/Pricing";
import FAQ from "@/components/rezervasyon/FAQ";
import CTA from "@/components/rezervasyon/CTA";
import Footer from "@/components/rezervasyon/Footer";

export default function RezervasyonPage() {
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
