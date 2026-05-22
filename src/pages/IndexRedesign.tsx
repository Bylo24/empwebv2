import Navbar from "@/components/redesign/Navbar";
import Hero from "@/components/redesign/Hero";
import Services from "@/components/redesign/Services";
import Process from "@/components/redesign/Process";
import AboutUs from "@/components/redesign/AboutUs";
import PersonalBrandVisual from "@/components/redesign/PersonalBrandVisual";
import FAQ from "@/components/redesign/FAQ";
import CTA from "@/components/redesign/CTA";
import Footer from "@/components/redesign/Footer";

const IndexRedesign = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
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

export default IndexRedesign;
