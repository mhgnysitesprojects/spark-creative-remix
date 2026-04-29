import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-primary">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/95" />
      <div className="absolute inset-0 bg-primary/40" />

      {/* Decorative gold orb */}
      <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-primary-glow/30 blur-3xl pointer-events-none" />

      <div className="container-tight relative z-10 max-w-4xl mx-auto text-center pt-32 pb-20">
        <div>
          <p className="eyebrow mb-6">Welcome to Amy Oraefo, P.C.</p>
          <h1 className="text-primary-foreground text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
            Only <span className="italic text-accent">Applied Knowledge</span> Is{" "}
            <span className="italic text-accent">Power</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Legal & business strategy for creatives, tech & media companies, athletes,
            startups, and content creators. Protecting your business, creativity, and
            intellectual property to build a lasting legacy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://calendly.com/aopclawfirm/consult-with-attorney-amy-oraefo"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-8 text-primary-foreground/60 text-sm justify-center">
            <div>
              <div className="text-3xl text-accent font-serif">10+</div>
              <div className="uppercase tracking-widest text-xs">Years of Experience</div>
            </div>
            <div className="h-12 w-px bg-accent/30" />
            <div>
              <div className="text-3xl text-accent font-serif">7-Fig</div>
              <div className="uppercase tracking-widest text-xs">Deals Negotiated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
