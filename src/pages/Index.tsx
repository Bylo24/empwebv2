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
import { Grain } from "@/components/Premium";
import { useSeo } from "@/hooks/use-seo";

const Index = () => {
  useSeo({
    title: "Emporom Media | Wellington Digital Marketing Agency — Google & Meta Ads",
    description:
      "Marketing off your plate, handled properly. Emporom Media runs Google Ads, Meta Ads, landing pages and SEO for Wellington businesses. Month-to-month, one team.",
    path: "/",
  });

  return (
    <div className="min-h-screen">
      <Grain tone="light" />
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
