const values = [
  {
    title: "Integrity & Trust",
    body: "Our reputation is built on honesty, transparency, and ethical excellence. We act as trusted advisors, providing clear legal guidance and unwavering support so our clients can focus on their craft with confidence.",
  },
  {
    title: "Advocacy & Protection",
    body: "We negotiate fiercely and safeguard our clients' intellectual property, contracts, and business interests — ensuring they receive fair, transparent, and enforceable agreements in an evolving entertainment landscape.",
  },
  {
    title: "Client-First Commitment",
    body: "Every client relationship is built on personalized attention, responsiveness, and commitment to their vision. We measure our success by their growth, security, and ability to thrive in their respective industries.",
  },
];

export const Values = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">What Drives Us</p>
          <h2 className="text-4xl md:text-5xl text-primary">
            Our <span className="italic text-accent">Values</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={v.title} className="relative p-8 bg-card rounded-2xl border border-border">
              <div className="absolute -top-4 left-8 h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center font-serif text-lg text-primary shadow-gold">
                {i + 1}
              </div>
              <h3 className="font-serif text-2xl text-primary mb-4 mt-3">{v.title}</h3>
              <p className="text-foreground/75 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
