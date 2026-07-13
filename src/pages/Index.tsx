import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Marquee, Results, Audit } from "@/components/Proof";
import Compare from "@/components/Compare";
import { DashboardBand, ReceiptTable, OnboardTimeline, Cases } from "@/components/EmporomBlocks";
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
        <ReceiptTable />
        <Services />
        <DashboardBand />
        <PersonalBrandVisual />
        <AboutUs />
        <Audit />
        <Cases />
        <Process />
        <OnboardTimeline />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
