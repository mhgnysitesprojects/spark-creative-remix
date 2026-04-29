import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { CreativePackage } from "@/components/site/CreativePackage";
import { InnovatorPackage } from "@/components/site/InnovatorPackage";
import { Membership } from "@/components/site/Membership";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Clients } from "@/components/site/Clients";
import { Values } from "@/components/site/Values";
import { Packages } from "@/components/site/Packages";
import { Testimonials } from "@/components/site/Testimonials";
import { HowItWorks } from "@/components/site/HowItWorks";
import { CreativePassportWorks } from "@/components/site/CreativePassportWorks";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CreativePackage />
      <InnovatorPackage />
      <Membership />
      <About />
      <Services />
      <Clients />
      <Values />
      <Packages />
      <Testimonials />
      <HowItWorks />
      <CreativePassportWorks />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
