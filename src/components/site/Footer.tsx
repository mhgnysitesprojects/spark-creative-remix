import { Instagram, Mail, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-foreground-foreground border-t border-accent/20">
      <div className="container-tight py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="bg-background rounded-lg px-4 py-3 inline-block mb-4 shadow-soft">
            <img src={logo} alt="Amy Oraefo, P.C. — A Boutique Law Firm" className="h-10 w-auto" />
          </div>
          <p className="text-foreground-foreground/60 text-sm leading-relaxed">
            Protecting your business, creativity, and intellectual property to build a lasting legacy.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-accent text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-foreground-foreground/70">
            <li><a href="#about" className="hover:text-accent">About</a></li>
            <li><a href="#services" className="hover:text-accent">Services</a></li>
            <li><a href="#clients" className="hover:text-accent">Who We Represent</a></li>
            <li><a href="#testimonials" className="hover:text-accent">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-accent text-lg mb-4">Membership</h4>
          <ul className="space-y-2 text-sm text-foreground-foreground/70">
            <li><a href="#membership" className="hover:text-accent">Essential Counsel</a></li>
            <li><a href="#membership" className="hover:text-accent">Professional Counsel</a></li>
            <li><a href="#membership" className="hover:text-accent">Executive Counsel</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-accent text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-foreground-foreground/70">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /><a href="mailto:admin@aopclawfirm.com" className="hover:text-accent">admin@aopclawfirm.com</a></li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-accent" /><a href="https://instagram.com/AmyOSaidSo" target="_blank" rel="noreferrer" className="hover:text-accent">@AmyOSaidSo</a></li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4 text-accent" /><a href="https://www.aopclawfirm.com" target="_blank" rel="noreferrer" className="hover:text-accent">aopclawfirm.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-accent/15">
        <div className="container-tight py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-foreground-foreground/50">
          <p>© {new Date().getFullYear()} Amy Oraefo, P.C. — All Rights Reserved.</p>
          <p className="max-w-2xl text-center md:text-right">
            Disclaimer: Information on this website is for general educational purposes only and
            does not create an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
};
