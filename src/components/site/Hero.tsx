import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-attorney.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Decorative gold orb */}
      <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-primary-glow/30 blur-3xl pointer-events-none" />

      <div className="container-tight relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-32 pb-20">
        <div>
          <p className="eyebrow mb-6">Welcome to Amy Oraefo, P.C.</p>
          <h1 className="text-primary-foreground text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
            Your All-Access Counsel to{" "}
            <span className="italic text-accent">Protect, Negotiate,</span> and{" "}
            <span className="italic text-accent">Scale</span> Your Legacy
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-xl mb-10 leading-relaxed">
            You have the talent. You have the vision. What you've been missing is the legal
            structure. AOPC helps creatives, athletes, founders, and tech companies turn their
            work into a protected, lasting legacy — without confusion, contracts gone wrong, or
            missed opportunities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="gap-2">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-8 text-primary-foreground/60 text-sm">
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

        <div className="relative">
          <div className="absolute inset-0 -m-4 border border-accent/30 rounded-2xl translate-x-4 translate-y-4" />
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img src={hero} alt="Amy Oraefo, attorney" width={1536} height={1280} className="w-full h-[600px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <div className="eyebrow text-accent mb-1">Attorney At Law</div>
              <div className="font-serif text-2xl">Amy Oraefo, Esq.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
