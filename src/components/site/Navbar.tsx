import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Who We Represent", href: "#clients" },
  { label: "Membership", href: "#membership" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 inset-x-0 z-40">
      <div className="container-tight flex items-center justify-between py-6">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-full border border-accent/60 flex items-center justify-center text-accent font-serif text-xl">A</div>
          <div className="leading-tight">
            <div className="text-accent font-serif text-lg">Amy Oraefo, P.C.</div>
            <div className="text-accent/70 text-[10px] uppercase tracking-[0.3em]">A Boutique Law Firm</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Book Consultation</a>
          </Button>
        </div>
        <button className="lg:hidden text-accent" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-accent/20">
          <div className="container-tight py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-primary-foreground/90 hover:text-accent">
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild className="mt-2 w-full">
              <a href="#contact">Book Consultation</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
