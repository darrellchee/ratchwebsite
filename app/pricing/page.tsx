"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PricingHero from "@/components/PricingHero";
import PricingTiers from "@/components/PricingTiers";
import PricingComparison from "@/components/PricingComparison";
import PricingFAQ from "@/components/PricingFAQ";
import Footer from "@/components/Footer";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--ratch-cream)" }}>
      <Navbar />
      <PricingHero isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      <PricingTiers isAnnual={isAnnual} />
      <PricingComparison />
      <PricingFAQ />
      <Footer />
    </main>
  );
}
