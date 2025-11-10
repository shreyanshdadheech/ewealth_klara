'use client';

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ValueProposition from "@/components/ValueProposition";
import ChangeProcess from "@/components/ChangeProcess";
import PartnerShowcase from "@/components/PartnerShowcase";
import TrustSection from "@/components/TrustSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <ValueProposition />
      <ChangeProcess />
      <PartnerShowcase />
      <TrustSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
