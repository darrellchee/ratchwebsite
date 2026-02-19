"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PricingHero from "@/components/PricingHero";
import PricingTiers from "@/components/PricingTiers";
import PricingComparison from "@/components/PricingComparison";
import PricingFAQ from "@/components/PricingFAQ";
import Footer from "@/components/Footer";

export type BillingPeriod = "weekly" | "monthly" | "quarterly" | "annually";

export default function PricingPage() {
  const [period, setPeriod] = useState<BillingPeriod>("weekly");

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--ratch-cream)" }}>
      <Navbar />
      <PricingHero period={period} setPeriod={setPeriod} />
      <PricingTiers period={period} />
      <PricingComparison />
      <PricingFAQ />
      <Footer />
    </main>
  );
}
