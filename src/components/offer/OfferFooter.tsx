import { ArrowRight } from "lucide-react";
import emporomLogo from "@/assets/emporom-logo.png";

const OfferFooter = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="px-6 py-28 bg-primary text-primary-foreground relative">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-foreground/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary-foreground/5" />
        <div className="absolute bottom-0 right-20 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-sm uppercase tracking-widest text-primary-foreground/40 mb-6 font-semibold">Ready to grow?</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 font-serif">
            Stop losing leads
            <br />
            to a bad website.
          </h2>
          <p className="text-lg text-primary-foreground/50 mb-10 max-w-xl mx-auto">
            Let us show you what's possible — for free.
          </p>
          <a
            href="#get-demo"
            className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-xl text-lg font-bold hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-accent/30"
          >
            Get Your Free Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 py-6 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={emporomLogo} alt="Emporom Media" className="h-5" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Emporom Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default OfferFooter;
