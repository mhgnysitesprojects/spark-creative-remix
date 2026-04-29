import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Attorney Oraefo reviewed my record deal and caught several unfavorable clauses I would have completely missed. Her knowledge of the music industry is unmatched. She saved me from a terrible deal.",
    name: "Marcus T.",
    role: "Recording Artist",
    initial: "M",
  },
  {
    quote: "Amy helped us structure our company from the ground up — formation, operating agreements, IP protection. Her legal strategy gave us the confidence to pitch to investors and close our first round.",
    name: "Brianna K.",
    role: "Tech Startup Founder",
    initial: "B",
  },
  {
    quote: "I needed someone who understood the sports world and could protect my brand. Amy and her team handled my trademark filings and endorsement contracts with precision. Highly recommend.",
    name: "DeAndre W.",
    role: "Professional Athlete",
    initial: "D",
  },
  {
    quote: "From trademarking my podcast name to negotiating sponsorship deals, AOPC has been incredible. They communicate clearly and their flat-fee structure made budgeting so much easier.",
    name: "Jasmine L.",
    role: "Podcast Host & Content Creator",
    initial: "J",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Client Stories</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground">
            Trusted by <span className="italic text-accent">Creatives, Founders</span> & <span className="italic text-accent">Global Brands</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <blockquote className="font-serif text-xl text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-4 pt-5 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-gradient-gold text-foreground flex items-center justify-center font-serif text-xl">
                  {t.initial}
                </div>
                <div>
                  <div className="font-medium text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
