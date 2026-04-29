import creativePackage from "@/assets/creative-package.png";

export const CreativePackage = () => {
  return (
    <section id="creative-package" className="py-24 bg-background">
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="eyebrow mb-4">Creative Package</p>
          <h2 className="text-4xl md:text-5xl text-primary">
            Built for Creatives Ready to Turn Talent Into Real{" "}
            <span className="italic text-accent">Opportunity</span>
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-elegant border border-border">
          <img
            src={creativePackage}
            alt="Creative Package overview — Potential to Power, Confusion to Clarity, Hustle to Sustainable Income"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
