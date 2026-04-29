import { Button } from "@/components/ui/button";
import { Hand, Target, HandCoins } from "lucide-react";

const cards = [
  {
    icon: Hand,
    title: "Potential to Power",
    body: "We help you turn raw creativity into real leverage so you're not overlooked, underpaid, or stuck waiting for permission.",
    highlight: true,
  },
  {
    icon: Target,
    title: "Confusion to Clarity",
    body: "We break down the checkpoints so you understand exactly where you are, what you need, and how to move forward with confidence.",
    highlight: false,
  },
  {
    icon: HandCoins,
    title: "Hustle to Sustainable Income",
    body: "This isn't about chasing quick wins. It's about building systems, positioning, and long-term strategies that support you and your growth.",
    highlight: false,
  },
];

export const CreativePackage = () => {
  return (
    <section id="creative-package" className="py-24 bg-background">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="eyebrow mb-6">Creative Passport Is</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
              Built for Creatives Ready to Turn Talent Into Real{" "}
              <span className="italic text-accent">Opportunity</span> and{" "}
              <span className="italic text-accent">Sustainable Income</span>
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-foreground/80 leading-relaxed mb-5">
              Creative Passport is built for musicians, music producers, podcasters,
              content creators, and creative entrepreneurs who know their creativity is
              meant to do more. More income. More freedom. More impact. Whether you're
              navigating your first deal or positioning yourself for global, 6, 7, and 8
              figure opportunities, this platform gives you the structure, strategy, and
              support to move from potential to power without guessing, hustling blindly,
              or leaving money on the table.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              This is your passport to more: more clarity, more confidence, and more
              control over how your creativity shows up in the world.
            </p>
            <div>
              <Button variant="gold" size="lg" asChild>
                <a href="#contact">Join Our Global Community</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, body, highlight }) => (
            <div
              key={title}
              className={`rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                highlight
                  ? "bg-primary text-foreground-foreground border-primary shadow-elegant"
                  : "bg-card text-card-foreground border-border shadow-soft"
              }`}
            >
              <div
                className={`h-14 w-14 rounded-xl flex items-center justify-center mb-8 ${
                  highlight ? "bg-primary-foreground/10 text-accent" : "bg-primary/5 text-foreground"
                }`}
              >
                <Icon className="h-7 w-7" />
              </div>
              <h3
                className={`font-serif text-2xl uppercase tracking-wide mb-4 leading-tight ${
                  highlight ? "text-foreground-foreground" : "text-foreground"
                }`}
              >
                {title}
              </h3>
              <p className={highlight ? "text-foreground-foreground/80" : "text-foreground/75"}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
