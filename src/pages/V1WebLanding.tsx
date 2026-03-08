import FAQSection from "@/components/offer/FAQSection";
import ProblemSection from "@/components/offer/ProblemSection";

const V1WebLanding = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <ProblemSection />
      <FAQSection />
    </div>
  );
};

export default V1WebLanding;