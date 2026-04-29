import { Music, Mic, Code2, Trophy, UtensilsCrossed, Rocket } from "lucide-react";

const clients = [
  { icon: Music, label: "Recording artists, producers, labels & publishers" },
  { icon: Mic, label: "Podcasters, YouTubers & digital creators" },
  { icon: Code2, label: "SaaS startups, media platforms & tech companies" },
  { icon: Trophy, label: "Athletes & sports professionals" },
  { icon: UtensilsCrossed, label: "Restaurants & lifestyle, experience-based brands" },
  { icon: Rocket, label: "Founders, entrepreneurs & emerging brands" },
];

export const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-gradient-cream">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Our Clients</p>
          <h2 className="text-4xl md:text-5xl text-foreground">
            Who We <span className="italic text-accent">Represent</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-soft hover:border-accent/40 transition-all duration-300"
            >
              <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/5 flex items-center justify-center text-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-foreground/85 leading-snug pt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
