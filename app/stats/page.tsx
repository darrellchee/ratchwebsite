import Navbar from "@/components/Navbar";
import StatsHero from "@/components/StatsHero";
import StatsOverview from "@/components/StatsOverview";
import StatsAnalytics from "@/components/StatsAnalytics";
import StatsDemographics from "@/components/StatsDemographics";
import StatsPhotoPerformance from "@/components/StatsPhotoPerformance";
import StatsRatingLogs from "@/components/StatsRatingLogs";
import StatsTierComparison from "@/components/StatsTierComparison";
import Footer from "@/components/Footer";

export default function StatsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <StatsHero />
      <StatsOverview />
      <StatsAnalytics />
      <StatsDemographics />
      <StatsPhotoPerformance />
      <StatsRatingLogs />
      <StatsTierComparison />
      <Footer />
    </main>
  );
}
