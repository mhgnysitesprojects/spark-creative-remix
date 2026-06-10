import amyBridge from "@/assets/amy-bridge.jpeg.asset.json";
import amyYellow from "@/assets/amy-yellow.png.asset.json";
import amyChair from "@/assets/amy-chair.jpg.asset.json";
import amyDubai from "@/assets/amy-dubai.jpeg.asset.json";

const shots = [
  { src: amyDubai.url, alt: "Amy Oraefo in Dubai", span: "lg:col-span-5 lg:row-span-2", h: "h-[640px]" },
  { src: amyYellow.url, alt: "Amy Oraefo portrait", span: "lg:col-span-4", h: "h-[310px]" },
  { src: amyBridge.url, alt: "Amy Oraefo riverside", span: "lg:col-span-3", h: "h-[310px]" },
  { src: amyChair.url, alt: "Amy Oraefo seated", span: "lg:col-span-7", h: "h-[320px]" },
];

export const Portrait = () => {
  return (
    <section className="relative py-28 bg-background overflow-hidden">
      {/* atmospheric blobs */}
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-primary-glow/20 blur-3xl pointer-events-none" />

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Meet The Attorney</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-foreground font-extrabold uppercase leading-[0.95] tracking-tight">
              Presence. <span className="italic text-accent font-serif normal-case font-normal">Precision.</span> Power.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-foreground/75 leading-relaxed">
              From boardrooms to global stages — Amy Oraefo brings poise, strategy, and
              unmatched advocacy to every client she represents. A modern attorney for
              modern creators, founders, and visionaries.
            </p>
          </div>
        </div>

        {/* editorial mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {shots.map((s, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-accent/15 shadow-elegant ${s.span} ${s.h}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                <span className="font-serif italic text-accent text-sm tracking-widest uppercase">
                  0{i + 1} / Oraefo
                </span>
                <span className="h-px w-12 bg-accent/60" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
