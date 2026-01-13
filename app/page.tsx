import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CompareShowcase from "@/components/CompareShowcase";
import LeaguePreview from "@/components/LeaguePreview";
import StatsTeaser from "@/components/StatsTeaser";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--ratch-cream)" }}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <CompareShowcase />
      <LeaguePreview />
      <StatsTeaser />
      <FinalCTA />
      <Footer />
    </main>
  );
}
