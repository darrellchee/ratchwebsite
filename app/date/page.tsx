import Navbar from "@/components/Navbar";
import DateHero from "@/components/DateHero";
import CompareShowcase from "@/components/CompareShowcase";
import PremiumFeatures from "@/components/PremiumFeatures";
import SubscriptionTiers from "@/components/SubscriptionTiers";
import Footer from "@/components/Footer";

export default function DatePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <DateHero />
      <CompareShowcase />
      <PremiumFeatures />
      <SubscriptionTiers />
      <Footer />
    </main>
  );
}
