import HeroSection from "@/components/offer/HeroSection";
import HowItWorksSection from "@/components/offer/HowItWorksSection";
import LeadFormSection from "@/components/offer/LeadFormSection";
import OfferFooter from "@/components/offer/OfferFooter";
import OfferNav from "@/components/offer/OfferNav";
import ProblemSection from "@/components/offer/ProblemSection";
import FAQSection from "@/components/offer/FAQSection";
import WhatYouGetSection from "@/components/offer/WhatYouGetSection";
import "./V1WebLanding.css";

const V1WebLanding = () => {
  return (
    <main className="v1-web-landing min-h-screen bg-background text-foreground pt-20">
      <OfferNav />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <WhatYouGetSection />
      <LeadFormSection />
      <FAQSection />
      <OfferFooter />
    </main>
  );
};

export default V1WebLanding;
