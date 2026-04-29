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
          <p className="inline-block px-5 py-2 mb-8 rounded-full border border-accent/40 text-accent text-sm">
            Legal & Business Strategy for <span className="text-accent font-semibold">Tech & Media Companies</span>
          </p>
          <p className="text-primary-foreground/70 text-xl mb-4">Legally people think knowledge is power…</p>
          <h1 className="text-primary-foreground text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.95] tracking-tight mb-10">
            Only Applied <span className="text-accent block md:inline">Knowledge</span> Is Power
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Protecting your business, creativity, and intellectual property to build a lasting legacy.
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
