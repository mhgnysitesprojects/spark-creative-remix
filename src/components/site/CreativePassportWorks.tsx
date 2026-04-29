const steps = [
  {
    number: "1",
    title: "Clarify Your Goals",
    body: "Identify what you want to achieve from royalties to brand deals and create a clear roadmap.",
    href: "#creative-package",
  },
  {
    number: "2",
    title: "Protect Your Work",
    body: "Understand contracts, copyrights, and ownership so your work is legally safeguarded.",
    href: "#services",
  },
  {
    number: "3",
    title: "Build Your Systems",
    body: "Monetize consistently and scale your creative business into long-term income.",
    href: "#packages",
  },
  {
    number: "4",
    title: "Support Community",
    body: "Tap into templates, workshops, and a global network of creatives for guidance and accountability.",
    href: "#membership",
  },
];

export const CreativePassportWorks = () => {
  return (
    <section
      id="how-creative-passport-works"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(190 60% 25%) 0%, hsl(170 35% 38%) 50%, hsl(40 55% 65%) 100%)",
      }}
    >
      <div className="container-tight relative">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="uppercase tracking-[0.3em] text-xs font-medium mb-6 text-accent-foreground/90" style={{ color: "hsl(28 70% 65%)" }}>
            How Creative Passport Works
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white">
            Your Creativity Deserves
            <br />
            <span style={{ color: "hsl(28 70% 65%)" }}>Structure</span>
            <span className="text-white">, </span>
            <span style={{ color: "hsl(28 70% 65%)" }}>Strategy</span>
            <span className="text-white">, And </span>
            <span style={{ color: "hsl(28 70% 65%)" }}>Support</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((s) => (
            <a
              key={s.number}
              href={s.href}
              className="group flex flex-col items-center text-center px-4 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div
                className="h-24 w-24 rounded-full border-[3px] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ borderColor: "hsl(28 70% 65%)" }}
              >
                <span
                  className="text-4xl font-light"
                  style={{ color: "hsl(28 70% 65%)", fontFamily: "Georgia, serif" }}
                >
                  {s.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                {s.title}
              </h3>
              <p className="text-white/85 text-sm leading-relaxed max-w-[240px]">
                {s.body}
              </p>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-slate-900 font-semibold tracking-[0.2em] text-sm uppercase rounded-sm shadow-lg hover:bg-white/90 transition-all duration-300 hover:scale-[1.02]"
          >
            Join the Free Community
          </a>
        </div>
      </div>
    </section>
  );
};
