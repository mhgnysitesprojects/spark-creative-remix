import contract from "@/assets/contract-signing.jpg";

const steps = [
  { title: "Clarify Your Goals", body: "Identify what you want to achieve — from royalties to brand deals — and create a clear legal roadmap." },
  { title: "Protect Your Work", body: "Understand contracts, copyrights, and ownership so your intellectual property is legally safeguarded." },
  { title: "Build Your Systems", body: "Structure agreements that let you monetize consistently and scale your business into long-term legacy." },
  { title: "Ongoing Counsel", body: "Tap into templates, workshops, and a trusted advisor for guidance, accountability, and protection." },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-cream">
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4">How AOPC Works</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground">
            Your Legacy Deserves <span className="italic text-accent">Structure</span>,{" "}
            <span className="italic text-accent">Strategy</span>, and{" "}
            <span className="italic text-accent">Support</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={contract}
            alt="Signing legal contract"
            width={1280}
            height={1280}
            loading="lazy"
            className="rounded-2xl shadow-elegant w-full h-[520px] object-cover"
          />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-5">
                <div className="shrink-0 h-12 w-12 rounded-full border-2 border-accent bg-background flex items-center justify-center font-serif text-accent text-lg">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">{s.title}</h3>
                  <p className="text-foreground/75 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
