import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-primary text-primary-foreground">
      {/* Large decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-primary-foreground/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-foreground/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-primary-foreground/5" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Corner decorations */}
      <div className="absolute top-24 left-8 text-primary-foreground/10 text-sm font-mono tracking-widest" style={{ writingMode: 'vertical-rl' }}>
        EMPOROM MEDIA — 2025
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary-foreground/20 text-sm text-primary-foreground/70 mb-10 animate-fade-in-up backdrop-blur-sm bg-primary-foreground/5">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Limited Spots Available — Apply Now
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] leading-[0.95] tracking-tight mb-8 animate-fade-in-up font-bold" style={{ animationDelay: "0.1s" }}>
          Get a
          <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10">Free Website Demo</span>
            <span className="absolute inset-0 bg-accent/20 -skew-x-3 rounded-lg scale-110" />
          </span>
          <br />
          for your business.
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-12 animate-fade-in-up text-balance leading-relaxed" style={{ animationDelay: "0.2s" }}>
          We only work with a handful of businesses each month. Fill out the short application below 
          and we'll let you know if you're a fit — plus build you a live website demo, <em className="text-primary-foreground/80 not-italic font-medium">completely free</em>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#get-demo"
            className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-xl text-lg font-bold hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-accent/30"
          >
            Check If You Qualify
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 px-10 py-5 rounded-xl text-lg font-medium text-primary-foreground/80 hover:bg-primary-foreground/5 transition-colors"
          >
            How It Works
          </a>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-primary-foreground/40 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> By application only</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> No obligation</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> 100% free if accepted</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
