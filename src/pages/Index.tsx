import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Marquee, Results, Audit } from "@/components/Proof";
import Compare from "@/components/Compare";
import Services from "@/components/Services";
import Process from "@/components/Process";
import AboutUs from "@/components/AboutUs";
import PersonalBrandVisual from "@/components/PersonalBrandVisual";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Results />
        <Compare />
        <Services />
        <PersonalBrandVisual />
        <Process />
        <AboutUs />
        <Audit />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
