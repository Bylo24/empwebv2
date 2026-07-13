import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Marquee, Results, Audit } from "@/components/Proof";
import Compare from "@/components/Compare";
import { ReceiptTable, Cases, Approach } from "@/components/EmporomBlocks";
import Services from "@/components/Services";
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
        <Audit />
        <Cases />
        <Approach />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
