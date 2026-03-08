const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    description: "Fill out a quick form with your business name, website URL, and contact details. That's it — takes 30 seconds.",
    accent: "30 sec",
  },
  {
    number: "02",
    title: "We rebuild your homepage",
    description: "Our team creates a live, conversion-focused redesign of your homepage — tailored to your brand, your industry, and your customers.",
    accent: "Custom built",
  },
  {
    number: "03",
    title: "Watch your walkthrough",
    description: "We send you a personalised video walkthrough explaining every change we made and why it'll bring you more leads.",
    accent: "48 hours",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="px-6 py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-foreground/10 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary-foreground/10 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary-foreground/10 to-transparent" />
      </div>
      
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-primary-foreground/20 text-sm text-primary-foreground/60 mb-6">
            ✦ How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 text-balance">
            From enquiry to live demo
            <br />
            in 48 hours.
          </h2>
          <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">
            No meetings. No sales calls. We do the work first — then you decide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className={`relative p-10 ${i < steps.length - 1 ? 'md:border-r border-primary-foreground/10' : ''}`}>
              <div className="flex items-center justify-between mb-8">
                <span className="text-6xl font-serif text-primary-foreground/10 font-bold">
                  {step.number}
                </span>
                <span className="text-xs font-mono tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
                  {step.accent}
                </span>
              </div>
              <h3 className="text-2xl font-sans font-bold mb-3">{step.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
