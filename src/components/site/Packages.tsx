import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const packages = [
  { title: "Independent Music Artist Ownership Bundle", price: "$147", tag: "Music" },
  { title: "Sustainable Music Career & Growth Bundle", price: "$127", tag: "Music" },
  { title: "Record Deal Checklist & Protection Bundle", price: "$247", tag: "Music" },
  { title: "Creator Monetization & Network Strategy", price: "$197", tag: "Creators" },
  { title: "Podcast Deal & Monetization Blueprint", price: "$247", tag: "Podcast" },
  { title: "Legal 101 for Every Creative", price: "$600", tag: "Legal" },
  { title: "Legal Essentials for Music", price: "$295", tag: "Legal" },
  { title: "Creators & Innovators Trademark Package", price: "$3,750", tag: "Trademark" },
];

export const Packages = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container-tight relative">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow mb-4">Master the Business of Your Craft</p>
          <h2 className="text-4xl md:text-5xl mb-4">
            Essential <span className="italic text-accent">packages & bundles</span> to protect your work and scale your career.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((p) => (
            <a
              key={p.title}
              href="#contact"
              className="group flex flex-col justify-between p-6 rounded-2xl border border-accent/20 bg-primary-foreground/[0.04] hover:border-accent hover:bg-primary-foreground/[0.08] transition-all duration-300"
            >
              <div>
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-accent border border-accent/40 px-2 py-1 rounded-full mb-5">
                  {p.tag}
                </span>
                <h3 className="font-serif text-xl text-primary-foreground leading-snug mb-6">{p.title}</h3>
              </div>
              <div className="flex items-end justify-between">
                <span className="font-serif text-3xl text-accent">{p.price}</span>
                <ArrowUpRight className="h-5 w-5 text-accent/70 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Stay Connected With Our Community</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
