import Navbar from "@/components/Navbar";
import LeaderboardHero from "@/components/LeaderboardHero";
import LeagueShowcase from "@/components/LeagueShowcase";
import LadderDemo from "@/components/LadderDemo";
import GlobalLeaderboardPreview from "@/components/GlobalLeaderboardPreview";
import PrivacyFeatures from "@/components/PrivacyFeatures";
import LeaderboardTiers from "@/components/LeaderboardTiers";
import Footer from "@/components/Footer";

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <LeaderboardHero />
      <LeagueShowcase />
      <LadderDemo />
      <GlobalLeaderboardPreview />
      <PrivacyFeatures />
      <LeaderboardTiers />
      <Footer />
    </main>
  );
}
