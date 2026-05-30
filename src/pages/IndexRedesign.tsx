import Hero from "@/components/redesign/Hero";
import StatsStrip from "@/components/redesign/StatsStrip";
import AgencyShowcase from "@/components/redesign/AgencyShowcase";
import ServicesGrid from "@/components/redesign/ServicesGrid";
import FeaturedWork from "@/components/redesign/FeaturedWork";
import AboutFounders from "@/components/redesign/AboutFounders";
import FeaturedTestimonial from "@/components/redesign/FeaturedTestimonial";
import TrackingAudit from "@/components/redesign/TrackingAudit";
import Pricing from "@/components/redesign/Pricing";
import FAQRedesign from "@/components/redesign/FAQRedesign";
import FinalCTA from "@/components/redesign/FinalCTA";
import FooterRedesign from "@/components/redesign/FooterRedesign";
import StickyNav from "@/components/redesign/StickyNav";

const IndexRedesign = () => {
  return (
    <div className="redesign-root">
      <StickyNav />
      <Hero />
      <StatsStrip />
      <AgencyShowcase />
      <ServicesGrid />
      <FeaturedWork />
      <AboutFounders />
      <FeaturedTestimonial />
      <TrackingAudit />
      <Pricing />
      <FAQRedesign />
      <FinalCTA />
      <FooterRedesign />
    </div>
  );
};

export default IndexRedesign;
