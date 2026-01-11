import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type FieldOption = {
  label: string;
  value: string;
};

type StepField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "textarea" | "choice" | "select" | "checkboxes";
  placeholder?: string;
  options?: FieldOption[];
};

type StepDefinition = {
  title: string;
  description: string;
  fields: StepField[];
};

const currentMRROptions: FieldOption[] = [
  { label: "Under $5k", value: "Under $5k" },
  { label: "$5k - $15k", value: "$5k - $15k" },
  { label: "$15k - $50k", value: "$15k - $50k" },
  { label: "Over $50k", value: "Over $50k" },
];

const budgetOptions: FieldOption[] = [
  { label: "Under $5k", value: "Under $5k" },
  { label: "$5k - $10k", value: "$5k - $10k" },
  { label: "$10k - $25k", value: "$10k - $25k" },
  { label: "Over $25k", value: "Over $25k" },
];

const growthOptions: FieldOption[] = [
  { label: "Scale recurring revenue", value: "Scale recurring revenue" },
  { label: "Launch new product/service", value: "Launch new product/service" },
  { label: "Improve conversion rates", value: "Improve conversion rates" },
  { label: "Refine positioning", value: "Refine positioning" },
];

const timelineOptions: FieldOption[] = [
  { label: "ASAP (next 30 days)", value: "ASAP (next 30 days)" },
  { label: "Next 30-60 days", value: "Next 30-60 days" },
  { label: "Next quarter", value: "Next quarter" },
  { label: "Later this year", value: "Later this year" },
];

const holdingBackOptions: FieldOption[] = [
  { label: "Budget is tight", value: "Budget is tight" },
  { label: "Need more qualified traffic", value: "Need more qualified traffic" },
  { label: "Team is stretched", value: "Team is stretched" },
  { label: "Awaiting internal alignment", value: "Awaiting internal alignment" },
];

const productOfferingOptions: FieldOption[] = [
  { label: "Direct-to-consumer product marketing", value: "Direct-to-consumer product marketing" },
  { label: "Retail expansion & in-store launches", value: "Retail expansion & in-store launches" },
  { label: "Product storytelling & positioning", value: "Product storytelling & positioning" },
  { label: "Subscription & membership programs", value: "Subscription & membership programs" },
];

const serviceOfferingOptions: FieldOption[] = [
  { label: "Lead generation for professional services", value: "Lead generation for professional services" },
  { label: "Performance marketing for SaaS/tech services", value: "Performance marketing for SaaS/tech services" },
  { label: "Customer acquisition for high-touch retainer work", value: "Customer acquisition for high-touch retainer work" },
  { label: "Reputation & thought leadership services", value: "Reputation & thought leadership services" },
];

const intakeSteps: StepDefinition[] = [
  {
    title: "Who should we be talking to?",
    description: "Give us the contact details so we can circle back with the right person.",
    fields: [
      { name: "fullName", label: "Full name", placeholder: "John Doe" },
      { name: "email", label: "Email address", type: "email", placeholder: "john@business.com" },
      { name: "phone", label: "Phone number", type: "tel", placeholder: "+64 21 123 4567" },
      { name: "businessName", label: "Business name", placeholder: "Sample Ltd." },
    ],
  },
    {
      title: "Tell us about the business",
      description: "Share whether you sell a product or a service and what you’re already moving.",
      fields: [
      {
        name: "businessType",
        label: "Business type",
        type: "choice",
        options: [
          { label: "Product business", value: "Product business" },
          { label: "Service business", value: "Service business" },
        ],
      },
      {
        name: "offering",
        label: "Primary offering or product focus",
        type: "select",
        options: [{ label: "Choose focus", value: "" }],
      },
      {
        name: "currentMRR",
        label: "Current recurring revenue (monthly)",
        type: "select",
        options: currentMRROptions,
      },
    ],
  },
  {
    title: "Readiness & goals",
    description: "Help us understand your budget, timeline, and what winning looks like.",
    fields: [
      {
        name: "marketingBudget",
        label: "Monthly marketing budget you’re prepared to deploy",
        type: "select",
        options: [{ label: "Choose budget", value: "" }, ...budgetOptions],
      },
      {
        name: "growthFocus",
        label: "Main growth objective right now",
        type: "select",
        options: [{ label: "Select objective", value: "" }, ...growthOptions],
      },
      {
        name: "timeline",
        label: "Ideal start timeline",
        type: "select",
        options: [{ label: "Select timeline", value: "" }, ...timelineOptions],
      },
      {
        name: "additionalInfo",
        label: "Anything else you want the team to know?",
        type: "textarea",
        placeholder: "Share what success looks like so we can align on the right scope.",
      },
    ],
  },
  {
    title: "Roadblocks & referrals",
    description: "Tell us what’s holding you back and how you found us.",
    fields: [
      {
        name: "holdingBack",
        label: "What's holding you back?",
        type: "choice",
        options: holdingBackOptions,
      },
      {
        name: "challenges",
        label: "Select all challenges that apply",
        type: "checkboxes",
        options: [
          { label: "Not enough traffic", value: "Not enough traffic" },
          { label: "Traffic isn't converting", value: "Traffic isn't converting" },
          { label: "Unclear product or pricing", value: "Unclear product or pricing" },
          { label: "Fulfilment or ops can't scale", value: "Fulfilment or ops can't scale" },
        ],
      },
      {
        name: "hearAbout",
        label: "Where did you hear about us?",
        type: "select",
        options: [
          { label: "Choose source", value: "" },
          { label: "Google", value: "Google" },
          { label: "Instagram", value: "Instagram" },
          { label: "Referral", value: "Referral" },
          { label: "Podcast", value: "Podcast" },
          { label: "Other", value: "Other" },
        ],
      },
    ],
  },
];

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  businessName: "",
  businessType: "",
  offering: "",
  currentMRR: "Under $5k",
  marketingBudget: "",
  growthFocus: "",
  timeline: "",
  additionalInfo: "",
  holdingBack: "",
  challenges: [],
  hearAbout: "",
};

type FormData = typeof initialFormData;

const requiredFieldsPerStep: Record<number, string[]> = {
  0: ["fullName", "email", "businessName"],
  1: ["businessType", "offering", "currentMRR"],
  2: ["marketingBudget", "growthFocus", "timeline"],
  3: ["holdingBack", "hearAbout"],
};

const selectArrow =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'><path d='M2 4.5 6 8.5 10 4.5' stroke='%23f97316' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>";

  const selectClassName =
    "w-full appearance-none rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200";

const selectStyle = {
  backgroundImage: `url('${selectArrow}')`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 1rem center",
  backgroundSize: "1rem",
};

const WorkWithUs = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const currentStep = intakeSteps[stepIndex];

  type FormFieldEvent = ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;

  const handleChange =
    (field: string) =>
    (event: FormFieldEvent) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
      if (error) setError(null);
    };

  const handleChoice = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const handleCheckboxToggle = (value: string) => {
    setFormData((prev) => {
      const challengeSet = prev.challenges.includes(value)
        ? prev.challenges.filter((item) => item !== value)
        : [...prev.challenges, value];
      return { ...prev, challenges: challengeSet };
    });
    if (error) setError(null);
  };

  const fieldLabel = (step: StepDefinition, name: string) =>
    step.fields.find((field) => field.name === name)?.label ?? name;

  const validateStep = (index: number) => {
    const required = requiredFieldsPerStep[index];
    if (!required) return true;
    let missing = required.filter((field) => {
      const value = formData[field as keyof FormData];
      if (Array.isArray(value)) {
        return value.length === 0;
      }
      return !value || (typeof value === "string" && value.trim() === "");
    });

    if (missing.length > 0 && formRef.current) {
      missing = missing.filter((field) => {
        const element = formRef.current?.elements.namedItem(
          field,
        ) as HTMLInputElement | HTMLSelectElement | null;
        if (element) {
          const elementValue = element.value?.trim();
          if (elementValue) {
            return false;
          }
        }
        return true;
      });
    }

    if (missing.length === 0) {
      setError(null);
      return true;
    }

    const formatField = (label: string) =>
      label.charAt(0).toLowerCase() + label.slice(1);
    const labels = missing.map((field) =>
      formatField(fieldLabel(intakeSteps[index], field)),
    );
    setError(`Please answer ${labels.join(" and ")} before moving on.`);
    return false;
  };

  const handleNext = () => {
    if (!validateStep(stepIndex)) {
      return;
    }
    setStepIndex((prev) => prev + 1);
  };

  const scoreMap = (
    value: string,
    mapping: Record<string, number>,
  ) => mapping[value] ?? 0;

  const computeLeadRating = (data: FormData) => {
    const mrrScore = scoreMap(data.currentMRR, {
      "Over $50k": 2,
      "$15k - $50k": 1.5,
      "$5k - $15k": 1,
      "Under $5k": 0.5,
    });
    const budgetScore = scoreMap(data.marketingBudget, {
      "Over $25k": 1.5,
      "$10k - $25k": 1.2,
      "$5k - $10k": 0.8,
      "Under $5k": 0.4,
    });
    const timelineScore = scoreMap(data.timeline, {
      "ASAP (next 30 days)": 1.5,
      "Next 30-60 days": 1.1,
      "Next quarter": 0.8,
      "Later this year": 0.3,
    });
    const growthScore = scoreMap(data.growthFocus, {
      "Scale recurring revenue": 0.6,
      "Launch new product/service": 0.4,
      "Improve conversion rates": 0.5,
      "Refine positioning": 0.3,
      "": 0,
    });
    const holdbackPenalty = data.holdingBack ? -0.3 : 0;
    const challengePenalty = (data.challenges.length || 0) * -0.1;

    const raw = 2 + mrrScore + budgetScore + timelineScore + growthScore + holdbackPenalty + challengePenalty;
    const bounded = Math.min(5, Math.max(1, raw));
    return parseFloat(bounded.toFixed(1));
  };

  const submitForm = async () => {
    setError(null);
    setIsSubmitting(true);
    try {
      const payloadData = {
        ...formData,
        currentMRR: formData.currentMRR || currentMRROptions[0].value,
      };
      const rating = computeLeadRating(payloadData);
      const payload = {
        ...payloadData,
        challenges: payloadData.challenges.join(", "),
        _subject: `(Emporom) New (${rating}/5 rating) Inbound Lead!`,
        _template: "table",
      };
      const response = await fetch("https://formsubmit.co/ajax/samuelhowell247@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network error");
      }

      setSubmitted(true);
    } catch (err) {
      setError("We couldn't send your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateStep(stepIndex)) {
      return;
    }
    if (stepIndex === intakeSteps.length - 1) {
      await submitForm();
    } else {
      handleNext();
    }
  };

  const handleBack = () => {
    if (submitted) {
      setSubmitted(false);
    }
    setError(null);
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const applicantName = formData.fullName?.split(" ")[0] || "Sam";
  const progressPercent = Math.round(
    (Math.min(stepIndex + 1, intakeSteps.length) / intakeSteps.length) * 100,
  );

  return (
    <section className="w-full px-0 py-8 text-foreground">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Work with us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Help us understand your readiness
        </h2>
        <p className="text-lg text-muted-foreground mt-2">
          We ask a few targeted questions so we can match you with the right onboarding
          path. Each step is short, honest, and keeps the conversation moving.
        </p>

        <div className="mt-10 rounded-3xl border border-border bg-card/70 p-8 shadow-lg">
          <div className="mb-6 space-y-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Step {Math.min(stepIndex + 1, intakeSteps.length)} of {intakeSteps.length}
                </p>
                <h3 className="text-xl font-semibold">{currentStep.title}</h3>
              </div>
              <span className="text-xs text-muted-foreground">
                {progressPercent}% complete
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted/30">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {currentStep.description}
            </p>
          </div>

          {submitted ? (
            <div className="space-y-4 text-center">
              <p className="text-lg font-bold">Application Received!</p>
              <p className="text-lg font-medium">
                Thanks for applying, {applicantName}! We'll review your application and reach out within 24-48 hours.
              </p>
              <div className="flex justify-center">
                <Button asChild variant="default" size="lg">
                  <Link to="/">Return to home</Link>
                </Button>
              </div>
            </div>
          ) : (
          <form ref={formRef} className="space-y-6" onSubmit={handleFormSubmit}>
              {error && (
                <p className="text-sm text-destructive">
                  {error}
                </p>
              )}
              {currentStep.fields.map((field) => {
                  if (field.type === "choice" && field.options) {
                    return (
                      <div key={field.name} className="space-y-3">
                        <label className="text-sm font-semibold">{field.label}</label>
                        <div className="grid grid-cols-2 gap-3">
                          {field.options.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleChoice(field.name, option.value)}
                              className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                                formData[field.name as keyof FormData] === option.value
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-border bg-card text-foreground"
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  if (field.type === "textarea") {
                    return (
                      <label key={field.name} className="block space-y-2">
                        <span className="text-sm font-semibold">{field.label}</span>
                        <textarea
                          name={field.name}
                          id={field.name}
                          value={formData[field.name as keyof FormData]}
                          onChange={handleChange(field.name)}
                          placeholder={field.placeholder}
                          className="w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          rows={field.name === "holdingBack" ? 5 : 4}
                        />
                      </label>
                    );
                  }

                  if (field.type === "checkboxes" && field.options) {
                    return (
                      <fieldset key={field.name} className="space-y-3">
                        <legend className="text-sm font-semibold">{field.label}</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {field.options.map((option) => (
                            <label
                              key={option.value}
                              className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                                formData.challenges.includes(option.value)
                                  ? "border-primary bg-primary/10 text-foreground"
                                  : "border-border bg-card text-foreground"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.challenges.includes(option.value)}
                                onChange={() => handleCheckboxToggle(option.value)}
                                className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                              />
                              {option.label}
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    );
                  }

                  if (field.type === "select" && field.options) {
                    return (
              <label key={field.name} className="block space-y-2">
                <span className="text-sm font-semibold">
                  {field.name === "offering"
                    ? formData.businessType === "Service business"
                      ? "Primary service focus"
                      : formData.businessType === "Product business"
                        ? "Primary product focus"
                        : field.label
                    : field.label}
                </span>
                <select
                  name={field.name}
                  id={field.name}
                  value={formData[field.name as keyof FormData]}
                  onChange={handleChange(field.name)}
                  className={selectClassName}
                  style={selectStyle}
                >
                  {(
                    field.name === "offering"
                      ? [
                          { label: "Choose focus", value: "" },
                          ...(formData.businessType === "Service business"
                            ? serviceOfferingOptions
                            : formData.businessType === "Product business"
                              ? productOfferingOptions
                              : []),
                        ]
                      : field.options
                  ).map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
                    );
                  }

                  return (
                    <label key={field.name} className="block space-y-2">
                      <span className="text-sm font-semibold">{field.label}</span>
                      <input
                        name={field.name}
                        id={field.name}
                        type={field.type ?? "text"}
                        value={formData[field.name as keyof FormData]}
                        onChange={handleChange(field.name)}
                        placeholder={field.placeholder}
                        className="w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </label>
                  );
                })}

              <div className="flex items-center justify-between gap-3">
                {stepIndex > 0 ? (
                  <Button variant="outline" size="default" type="button" onClick={handleBack}>
                    Back
                  </Button>
                ) : (
                  <Button asChild variant="outline" size="default">
                    <Link to="/">Home</Link>
                  </Button>
                )}
                <div className="flex-1 flex justify-end">
                  <Button
                    variant="default"
                    size="default"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : stepIndex === intakeSteps.length - 1
                        ? "Submit answers"
                        : "Next question"}
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
