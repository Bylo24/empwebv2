import { AlertTriangle, TrendingDown, Clock } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "No clear call-to-action",
    description: "Visitors land on your site and have no idea what to do next. They leave. You lose the job.",
    stat: "88%",
    statLabel: "of visitors leave sites with unclear CTAs",
  },
  {
    icon: Clock,
    title: "Slow & outdated design",
    description: "A website that looks like it was built in 2015 tells customers you're not serious. First impressions matter.",
    stat: "3s",
    statLabel: "is all it takes to form a first impression",
  },
  {
    icon: AlertTriangle,
    title: "Not built for mobile",
    description: "Over 70% of your traffic is mobile. If your site doesn't load fast on a phone, you're invisible.",
    stat: "70%",
    statLabel: "of traffic comes from mobile devices",
  },
];

const ProblemSection = () => {
  return (
    <section className="px-6 py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="section-badge mb-6">✦ The Problem</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 text-balance">
            Your website is costing
            <br />
            you jobs.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most service business websites aren't designed to generate leads. They're online brochures — and brochures don't ring your phone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-4xl font-serif font-bold text-accent">{problem.stat}</span>
              </div>
              <h3 className="text-xl font-sans font-bold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{problem.description}</p>
              <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">{problem.statLabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
