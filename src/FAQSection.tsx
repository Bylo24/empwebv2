import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this actually free?",
    answer: "Yes. We build a live homepage demo for your business at no cost. There's no hidden fees, no contracts, and no obligation to buy anything.",
  },
  {
    question: "Why would you do this for free?",
    answer: "Because showing is better than telling. We want to demonstrate what a conversion-focused website can do for your business. If you love it, we can talk about next steps. If not, you keep the insights.",
  },
  {
    question: "How long does it take?",
    answer: "You'll receive your live demo and personalised video walkthrough within 48 hours of submitting your details.",
  },
  {
    question: "What happens after I see the demo?",
    answer: "That's entirely up to you. If you want to go live with the new site, we'll discuss a simple plan. If you want to pair it with Google or Meta Ads to generate leads, we can set that up too. No pressure either way.",
  },
  {
    question: "Do I need to have an existing website?",
    answer: "Not at all. Whether you've built one yourself, have an outdated site, or don't have one yet — we'll create a demo tailored to your business either way.",
  },
  {
    question: "What if I'm not getting enough enquiries from my current site?",
    answer: "That's exactly who this is for. Most service business websites look fine but aren't built to convert visitors into leads. We redesign with conversions as the priority.",
  },
  {
    question: "Who is this for?",
    answer: "NZ service businesses — tradies, clinics, real estate agents, fitness studios, cleaning companies — anyone whose website should be generating leads but isn't.",
  },
  {
    question: "Will you try to sell me something?",
    answer: "We'll show you the opportunity. If there's a clear way we can help you grow, we'll present it. But we never do hard sells — the work speaks for itself.",
  },
];

const FAQSection = () => {
  return (
    <section className="px-6 py-28">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-badge mb-6">✦ FAQ</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">
            Questions?
            <br />
            Answers.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-foreground/20 transition-colors"
            >
              <AccordionTrigger className="text-left text-base font-semibold font-sans hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;