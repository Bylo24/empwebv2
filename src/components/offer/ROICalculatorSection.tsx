import { TrendingUp, ArrowUpRight } from "lucide-react";

const ROICalculatorSection = () => {
  return (
    <section id="roi-calculator" className="px-6 py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-badge mb-6">✦ ROI Example</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">
            What 3 extra jobs a month
            <br />
            looks like for you.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's a realistic example of the return a high-converting website can deliver.
          </p>
        </div>

        <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-5 h-5 text-accent" />
              <p className="text-xs uppercase tracking-widest text-primary-foreground/50 font-semibold">Example scenario</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-primary-foreground/5 rounded-xl p-5 border border-primary-foreground/10">
                <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-1">New jobs / month</p>
                <p className="text-4xl font-bold text-primary-foreground">3</p>
              </div>
              <div className="bg-primary-foreground/5 rounded-xl p-5 border border-primary-foreground/10">
                <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-1">Avg. job value</p>
                <p className="text-4xl font-bold text-primary-foreground">$2,000</p>
              </div>
              <div className="bg-primary-foreground/5 rounded-xl p-5 border border-primary-foreground/10">
                <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-1">Monthly ad spend</p>
                <p className="text-4xl font-bold text-primary-foreground">$500</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-primary-foreground/5 rounded-xl p-5 border border-primary-foreground/10">
                <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-1">Monthly revenue</p>
                <p className="text-3xl font-bold text-primary-foreground">$6,000</p>
              </div>
              <div className="bg-primary-foreground/5 rounded-xl p-5 border border-primary-foreground/10">
                <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-1">Annual revenue</p>
                <p className="text-3xl font-bold text-primary-foreground">$72,000</p>
              </div>
              <div className="bg-accent/10 rounded-xl p-5 border border-accent/20">
                <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-1">Return on investment</p>
                <p className="text-4xl font-bold text-accent">1,100%</p>
                <p className="text-sm text-primary-foreground/50 mt-1">ROI on ad spend</p>
              </div>
            </div>

            <a href="#get-demo" className="mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:scale-[1.01] transition-all text-sm shadow-lg shadow-accent/20">
              Check If You Qualify
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;
