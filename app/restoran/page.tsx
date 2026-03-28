import Navbar from "@/components/restoran/Navbar";
import Hero from "@/components/restoran/Hero";
import HowItWorks from "@/components/restoran/HowItWorks";
import Features from "@/components/restoran/Features";
import LiveDemo from "@/components/restoran/LiveDemo";
import Pricing from "@/components/restoran/Pricing";
import FAQ from "@/components/restoran/FAQ";
import CTA from "@/components/restoran/CTA";
import Footer from "@/components/restoran/Footer";

export default function RestoranPage() {
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
