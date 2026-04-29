import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Essential Counsel",
    tag: "The Foundation",
    price: "$1,500",
    period: "/month",
    features: [
      "Monthly 1:1 strategy sessions",
      "Contract review (up to 2/mo)",
      "Foundational IP guidance",
      "Member resource library access",
    ],
    cta: "Apply Today",
    highlight: false,
  },
  {
    name: "Professional Counsel",
    tag: "Most Chosen",
    price: "$2,750",
    period: "/month",
    features: [
      "Bi-weekly 1:1 strategy sessions",
      "Unlimited contract review",
      "Trademark monitoring & filings",
      "Priority support & messaging",
      "Quarterly business reviews",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "Executive Counsel",
    tag: "The Inner Circle",
    price: "$5,500",
    period: "/month",
    features: [
      "Weekly high-touch coaching",
      "Fractional General Counsel",
      "Deal negotiation support",
      "On-demand legal access",
      "Bespoke legal strategy roadmap",
    ],
    cta: "Go All In",
    highlight: false,
  },
];

export const Membership = () => {
  return (
    <section id="membership" className="py-24 bg-gradient-cream">
      <div className="container-tight">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">AOPC Counsel Membership</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            One <span className="italic text-accent">Firm.</span> Three{" "}
            <span className="italic text-accent">Tiers.</span><br />
            Built To Grow With You.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                t.highlight
                  ? "bg-primary text-foreground-foreground border-accent shadow-elegant scale-[1.03]"
                  : "bg-card text-card-foreground border-border shadow-soft"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Chosen
                </div>
              )}
              <p className={`eyebrow mb-3 ${t.highlight ? "text-accent" : ""}`}>{t.tag}</p>
              <h3 className={`font-serif text-3xl mb-4 ${t.highlight ? "text-accent" : "text-foreground"}`}>
                {t.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className={`text-5xl font-serif ${t.highlight ? "text-foreground-foreground" : "text-foreground"}`}>{t.price}</span>
                <span className={`text-sm ${t.highlight ? "text-foreground-foreground/70" : "text-muted-foreground"}`}>{t.period}</span>
              </div>
              <ul className="space-y-3 mb-10">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className={`h-5 w-5 shrink-0 ${t.highlight ? "text-accent" : "text-foreground"}`} />
                    <span className={t.highlight ? "text-foreground-foreground/90" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={t.highlight ? "gold" : "outlineDark"}
                className="w-full"
                asChild
              >
                <a href="#contact">{t.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
