import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const V1LandingPromo = () => {
  const highlights = [
    "Conversion-focused homepage hero, problem, and CTA sections",
    "Step-by-step \"How it Works\" narrative with ROI proof",
    "Live lead form demo so you can test the flow before committing",
  ];

  return (
    <section className="px-6 py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-10 items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">V1 Web Landing</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Preview the full /v1weblanding experience that earned clients bigger pipelines.
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-xl">
            The dedicated offer page walks through how we build growth engines—hero, problem, delivery,
            CTA, FAQ, and a lead form you can interact with before applying. It is our most conversion
            focused funnel, so linking to it from the homepage keeps the momentum seamless.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div key={item} className="border border-white/10 rounded-2xl p-4 text-sm text-slate-200 bg-white/5">
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
              <Link to="/v1weblanding" className="flex items-center gap-2">
                View the Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Link
              to="/work-with-us"
              className="px-6 py-3 rounded-full border border-white/30 text-sm font-semibold text-white/80 hover:text-white transition"
            >
              Apply After Exploring
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40">
          <p className="text-sm uppercase tracking-[0.5em] text-slate-400 mb-4">Fast insight</p>
          <p className="text-5xl font-bold text-white">Real demos</p>
          <p className="mt-6 text-sm text-slate-300">
            The V1 page pairs interactive copy with an ROI calculator and FAQ before guiding towards the
            lead form—so you get a conversion-ready feel before the phone call.
          </p>
          <p className="mt-6 text-xs text-slate-500">
            Open for a limited number of businesses each month, like the V1 hero states.
          </p>
        </div>
      </div>
    </section>
  );
};

export default V1LandingPromo;
