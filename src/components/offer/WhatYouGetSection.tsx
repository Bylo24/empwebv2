import { Check, ArrowUpRight, TrendingUp } from "lucide-react";

const deliverables = [
  "Conversion-focused homepage redesign",
  "Clear headline positioning for your market",
  "Strategic call-to-action placement",
  "Mobile-optimised responsive layout",
  "Trust indicators & social proof structure",
  "Personalised Loom video walkthrough",
];

const WhatYouGetSection = () => {
  return (
    <section className="px-6 py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-badge mb-6">✦ What You Get</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">
            A live preview of your
            <br />
            growth engine.
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: deliverables */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-lg text-muted-foreground mb-6">
              This isn't a mockup. It's a working website demo you can click through, test on your phone, and share with your team.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 hover:border-foreground/15 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: ROI example card */}
          <div className="lg:col-span-2">
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground relative overflow-hidden sticky top-24">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/50 font-semibold">ROI Example</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10">
                    <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-1">New jobs / month</p>
                    <p className="text-3xl font-bold text-primary-foreground">3</p>
                  </div>
                  <div className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10">
                    <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-1">Avg. job value</p>
                    <p className="text-3xl font-bold text-primary-foreground">$2,000</p>
                  </div>
                  <div className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10">
                    <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-1">Annual revenue</p>
                    <p className="text-3xl font-bold text-primary-foreground">$72,000</p>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                    <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-1">Return on investment</p>
                    <p className="text-3xl font-bold text-accent">1,100%</p>
                    <p className="text-xs text-primary-foreground/50 mt-1">ROI on ad spend</p>
                  </div>
                </div>

                <a href="#get-demo" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:scale-[1.01] transition-all text-sm shadow-lg shadow-accent/20">
                  Check If You Qualify
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
