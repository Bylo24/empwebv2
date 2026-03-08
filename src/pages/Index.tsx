import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import V1LandingPromo from "@/components/V1LandingPromo";
import Services from "@/components/Services";
import Process from "@/components/Process";
import AboutUs from "@/components/AboutUs";
import PersonalBrandVisual from "@/components/PersonalBrandVisual";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <V1LandingPromo />
        <Services />
        <PersonalBrandVisual />
        <Process />
        <AboutUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
