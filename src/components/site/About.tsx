import { Button } from "@/components/ui/button";
import office from "@/assets/office-bg.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4">AOPC Is</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
            Built for Creatives, Founders & Athletes Ready to Turn{" "}
            <span className="italic text-accent">Talent</span> Into Real{" "}
            <span className="italic text-accent">Legacy</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={office}
              alt="Boutique law firm office"
              width={1920}
              height={1080}
              loading="lazy"
              className="rounded-2xl shadow-elegant w-full h-[480px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-gold max-w-[220px] hidden md:block">
              <div className="font-serif text-4xl mb-1">A</div>
              <div className="text-sm leading-snug">Personalized strategy. Predictable, flat-fee pricing.</div>
            </div>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              AOPC is built for musicians, producers, podcasters, content creators, founders,
              athletes, and creative entrepreneurs who know their work is meant to do more.
              More income. More protection. More leverage.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mb-10">
              Whether you're navigating your first record deal or positioning yourself for
              global, 7- and 8-figure opportunities, AOPC provides the legal structure,
              strategy, and support to move from potential to power — without guessing or
              leaving money on the table.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {[
                ["Personalized strategy", "for music, media, tech, sports & lifestyle brands"],
                ["Plain-language counsel", "fast turnaround, effective communication"],
                ["Flat-fee pricing", "predictable cost for contracts and filings"],
                ["Industry expertise", "10+ years across entertainment, IP & startups"],
              ].map(([title, body]) => (
                <div key={title} className="border-l-2 border-accent pl-4">
                  <div className="font-serif text-lg text-primary">{title}</div>
                  <div className="text-sm text-muted-foreground">{body}</div>
                </div>
              ))}
            </div>

            <Button variant="gold" size="lg" asChild>
              <a href="#contact">Schedule a Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
