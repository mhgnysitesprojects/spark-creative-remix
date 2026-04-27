import { FileSignature, Stamp, Coins, Building2, Briefcase, Trophy } from "lucide-react";

const services = [
  {
    icon: FileSignature,
    title: "Contract Review & Deal Negotiation",
    body: "We draft, review, and negotiate contracts for record and music publishing deals, sync licensing, podcast production, software development, brand sponsorships, and influencer marketing.",
  },
  {
    icon: Stamp,
    title: "Copyright & Trademark Registration",
    body: "Protect your intellectual property. We register and maintain copyrights and trademarks for brand names, songs, podcasts, speakers, and digital products.",
  },
  {
    icon: Coins,
    title: "IP Licensing & Monetization",
    body: "We help creators and businesses protect and monetize their intellectual property through copyright, trademark, and licensing strategy.",
  },
  {
    icon: Building2,
    title: "Business Formation & Strategy",
    body: "From entity setup to ensuring the right agreements are in place, we help creatives, founders, athletes, and entrepreneurs build legal foundations for long-term growth.",
  },
  {
    icon: Briefcase,
    title: "Fractional General Counsel",
    body: "Get on-demand legal support for your growing business — without the overhead of a full-time lawyer in-house.",
  },
  {
    icon: Trophy,
    title: "Entertainment & Sports Law",
    body: "Specialized counsel for recording artists, producers, athletes, and talent navigating complex deals, endorsements, and industry-specific challenges.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 bg-accent/5 blur-3xl rounded-full" />
      <div className="container-tight relative">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Built to help you <span className="italic text-accent">monetize</span> smarter,{" "}
            <span className="italic text-accent">negotiate</span> bigger, and{" "}
            <span className="italic text-accent">build</span> real legal freedom.
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Our core legal services are designed for the modern creative economy — pragmatic,
            strategic, and built around your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl border border-accent/20 bg-primary-foreground/[0.03] backdrop-blur-sm hover:border-accent/60 hover:bg-primary-foreground/[0.06] transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-accent">{title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
