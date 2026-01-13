import Navbar from "@/components/Navbar";
import SupportHero from "@/components/SupportHero";
import SupportNav from "@/components/SupportNav";
import SupportContent from "@/components/SupportContent";
import Footer from "@/components/Footer";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <SupportHero />
      
      {/* Two-column layout on desktop */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="flex gap-8">
          {/* Sticky Navigation Sidebar */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <SupportNav />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <SupportContent />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <SupportNav />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
