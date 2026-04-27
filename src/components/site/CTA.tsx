import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
      <div className="container-tight relative text-center max-w-3xl">
        <p className="eyebrow mb-6">The AOPC Experience</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          You Don't <span className="italic text-accent">Have to Do</span> This Alone
        </h2>
        <p className="text-primary-foreground/75 text-lg mb-10 leading-relaxed">
          You already have the talent — now it's time to build the legal systems to match it.
          AOPC gives you the roadmap, legal clarity, and trusted counsel to protect your work,
          grow your income, and scale your creative business with confidence. Stop guessing.
          Start moving like the professional you were meant to be.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="https://calendly.com/aopclawfirm/consult-with-attorney-amy-oraefo" target="_blank" rel="noreferrer" className="gap-2">
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outlineLight" size="xl" asChild>
            <a href="mailto:admin@aopclawfirm.com">Email the Firm</a>
          </Button>
        </div>
        <p className="mt-10 text-primary-foreground/50 text-sm">
          Whether you're reviewing your first record deal, protecting your podcast name,
          launching a SaaS platform, or preparing for investor negotiations — Amy Oraefo, P.C.
          is ready to support your next big move.
        </p>
      </div>
    </section>
  );
};
