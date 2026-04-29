import { Button } from "@/components/ui/button";
import { Check, Clock, FileText, Mail } from "lucide-react";

const services = [
  {
    name: "Trademark Search & Legal Opinion Letter",
    desc: "A detailed federal, state, and common law search to assess trademark availability, followed by a written legal opinion from our attorney.",
    fee: "$1,950",
  },
  {
    name: "USPTO Filing Fee (per class)",
    desc: "Government filing fee charged by the USPTO per class of goods or services.",
    fee: "$350",
  },
  {
    name: "Trademark Application Preparation & Filing",
    desc: "Drafting description of goods/services, reviewing specimens, and submitting your trademark application to the USPTO.",
    fee: "$1,450",
  },
];

const receive = [
  "Comprehensive Trademark Search Report",
  "Legal opinion on registrability",
  "Attorney-prepared and filed USPTO application",
  "Direct communication and status updates from our team",
  "Strategic brand protection guidance",
];

export const InnovatorPackage = () => {
  return (
    <section id="innovator-package" className="py-24 bg-gradient-cream">
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4">Creators & Innovators</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
            Trademark <span className="italic text-accent">Package</span>
          </h2>
          <p className="text-lg text-foreground/75 italic">
            Protecting your brand from idea to registration.
          </p>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            Our comprehensive trademark package is designed for entrepreneurs, creatives,
            and innovators ready to legally secure their brand identity. Includes a full
            trademark search, legal opinion, and application filing with the USPTO.
          </p>
        </div>

        {/* Services table */}
        <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden mb-12">
          <div className="grid grid-cols-12 bg-primary text-primary-foreground px-6 py-4 text-xs uppercase tracking-widest font-semibold">
            <div className="col-span-4">Service</div>
            <div className="col-span-6">Description</div>
            <div className="col-span-2 text-right">Fee</div>
          </div>
          {services.map((s) => (
            <div
              key={s.name}
              className="grid grid-cols-1 md:grid-cols-12 px-6 py-5 border-t border-border gap-2 md:gap-4"
            >
              <div className="md:col-span-4 font-serif text-lg text-primary">{s.name}</div>
              <div className="md:col-span-6 text-sm text-foreground/75 leading-relaxed">{s.desc}</div>
              <div className="md:col-span-2 md:text-right font-serif text-2xl text-accent">{s.fee}</div>
            </div>
          ))}
          <div className="bg-primary/5 px-6 py-5 border-t border-border flex items-center justify-between">
            <span className="font-serif text-xl text-primary">Total (1 class)</span>
            <span className="font-serif text-3xl text-accent">$3,750</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* What You Receive */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-accent" />
              <h3 className="font-serif text-2xl text-primary">What You Receive</h3>
            </div>
            <ul className="space-y-3">
              {receive.map((r) => (
                <li key={r} className="flex gap-3 text-foreground/80">
                  <Check className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline + Additional Classes */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-accent" />
                <h3 className="font-serif text-2xl text-primary">Timeline</h3>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <Check className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Search & Opinion Delivery: 7–10 business days</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Filing: Upon approval of search results</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-elegant">
              <p className="eyebrow text-accent mb-3">Additional Classes</p>
              <div className="font-serif text-3xl mb-2">
                <span className="text-accent">$1,350</span> per additional class
              </div>
              <p className="text-primary-foreground/75 text-sm">
                Add-on for each additional class within the same application — includes
                the $350 USPTO filing fee and attorney fee.
              </p>
            </div>
          </div>
        </div>

        {/* Ready to begin */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="font-serif text-3xl text-primary mb-4">Ready to Begin?</h3>
          <p className="text-foreground/75 mb-8">
            We'll send an Engagement Letter confirming the scope of services and a
            Payment Link to initiate your trademark filing.
          </p>
          <Button variant="gold" size="xl" asChild>
            <a href="mailto:admin@aopclawfirm.com" className="gap-2">
              <Mail className="h-4 w-4" /> admin@aopclawfirm.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
