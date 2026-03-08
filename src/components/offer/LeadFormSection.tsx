import { useState } from "react";
import { ArrowRight, Shield, Clock, Zap, ChevronLeft } from "lucide-react";

const websiteStatusOptions = [
  "Yes, but it's outdated",
  "Yes, but I built it myself",
  "No, I don't have one yet",
];

const biggestFrustrationOptions = [
  "I'm not getting enough enquiries",
  "My site looks unprofessional / outdated",
  "I don't trust my current website to win jobs",
  "I need a site that actually converts visitors",
];

const marketingSituationOptions = [
  "I do it myself",
  "I work with an agency",
  "I'm not currently doing any marketing",
];

const LeadFormSection = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    websiteStatus: "",
    frustration: "",
    marketingSituation: "",
    fullName: "",
    email: "",
    businessName: "",
    websiteUrl: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsSubmitting(true);
      try {
        const submitData = new FormData();
        submitData.append("Full Name", formData.fullName);
        submitData.append("Email", formData.email);
        submitData.append("Business Name", formData.businessName);
        submitData.append("Website Status", formData.websiteStatus);
        submitData.append("Biggest Frustration", formData.frustration);
        submitData.append("Marketing Situation", formData.marketingSituation);
        if (formData.websiteUrl) {
          submitData.append("Website URL", formData.websiteUrl);
        }
        submitData.append("_subject", "New Free Demo Application");
        submitData.append("_cc", "logan@emporom.org");
        submitData.append("_captcha", "false");
        submitData.append("_template", "table");

        await fetch("https://formsubmit.co/ajax/samuelhowell247@gmail.com", {
          method: "POST",
          body: submitData,
        });

        // Fire Meta Pixel lead event
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "FormSubmission", {
            content_name: "Free Website Demo Application",
            content_category: "Lead Form",
          });
        }

        setSubmitted(true);
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all";
  const selectClass = "w-full px-4 py-3.5 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all appearance-none cursor-pointer";
  const labelClass = "block text-sm font-medium mb-2 text-primary-foreground/70";

  return (
    <section id="get-demo" className="px-6 py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-primary-foreground/20 text-sm text-primary-foreground/60 mb-6">
            ✦ Apply For Your Free Demo
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4 text-balance">
            See if you qualify.
          </h2>
          <p className="text-lg text-primary-foreground/50 max-w-xl mx-auto">
            We only take on a limited number of projects each month. Answer a few quick questions to see if we're a fit.
          </p>
        </div>

        {!submitted ? (
          <div>
            {/* Step indicator */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${step === 1 ? 'bg-accent text-accent-foreground' : 'bg-primary-foreground/10 text-primary-foreground/50'}`}>
                <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-xs">1</span>
                Pre-Qualify
              </div>
              <div className="w-8 h-px bg-primary-foreground/20" />
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${step === 2 ? 'bg-accent text-accent-foreground' : 'bg-primary-foreground/10 text-primary-foreground/50'}`}>
                <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-xs">2</span>
                Contact Details
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 md:p-12 space-y-6">
              {step === 1 ? (
                <>
                  <div>
                    <label htmlFor="websiteStatus" className={labelClass}>Do you currently have a website? *</label>
                    <select id="websiteStatus" name="websiteStatus" required value={formData.websiteStatus} onChange={handleChange} className={selectClass}>
                      <option value="" disabled className="text-foreground bg-background">Select one...</option>
                      {websiteStatusOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-foreground bg-background">{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="frustration" className={labelClass}>What's your biggest frustration right now? *</label>
                    <select id="frustration" name="frustration" required value={formData.frustration} onChange={handleChange} className={selectClass}>
                      <option value="" disabled className="text-foreground bg-background">Select one...</option>
                      {biggestFrustrationOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-foreground bg-background">{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="marketingSituation" className={labelClass}>Current marketing situation *</label>
                    <select id="marketingSituation" name="marketingSituation" required value={formData.marketingSituation} onChange={handleChange} className={selectClass}>
                      <option value="" disabled className="text-foreground bg-background">Select one...</option>
                      {marketingSituationOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-foreground bg-background">{opt}</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="group w-full inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-5 rounded-xl text-lg font-bold hover:scale-[1.01] transition-all duration-300 shadow-2xl shadow-accent/20">
                    Continue
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className={labelClass}>Full Name *</label>
                      <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="e.g. John Smith" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@business.co.nz" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="businessName" className={labelClass}>Business Name *</label>
                    <input type="text" id="businessName" name="businessName" required value={formData.businessName} onChange={handleChange} placeholder="e.g. Smith Plumbing" className={inputClass} />
                  </div>
                  {formData.websiteStatus && formData.websiteStatus !== "No, I don't have one yet" && (
                    <div>
                      <label htmlFor="websiteUrl" className={labelClass}>Current Website URL</label>
                      <input type="url" id="websiteUrl" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} placeholder="e.g. www.smithplumbing.co.nz" className={inputClass} />
                    </div>
                  )}
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 px-6 py-5 rounded-xl font-medium text-primary-foreground/80 hover:bg-primary-foreground/5 transition-colors">
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    <button type="submit" disabled={isSubmitting} className="group flex-1 inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-5 rounded-xl text-lg font-bold hover:scale-[1.01] transition-all duration-300 shadow-2xl shadow-accent/20 disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                      {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </>
              )}
            </form>
            
            <div className="flex flex-wrap items-center justify-center gap-8 mt-8 text-sm text-primary-foreground/40">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> No spam, ever</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 48hr response</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> 100% free if accepted</span>
            </div>
          </div>
        ) : (
          <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-accent">✓</span>
            </div>
            <h3 className="text-3xl mb-3">Application received.</h3>
            <p className="text-primary-foreground/60 text-lg max-w-md mx-auto">
              We'll review your application and get back to you within 48 hours. If you're a fit, we'll start building your free demo right away.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadFormSection;
