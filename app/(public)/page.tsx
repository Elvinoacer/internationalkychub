import { FeaturedAccountsSection } from "../components/landing/FeaturedAccountsSection";
import { FeatureSection } from "../components/landing/FeatureSection";
import { HeroSection } from "../components/landing/HeroSection";
import { HowItWorksSection } from "../components/landing/HowItWorksSection";
import { TestimonialsSection } from "../components/landing/TestimonialsSection";

export default function KYCWebsite() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <main className="flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <HeroSection />
          <FeatureSection />
          <HowItWorksSection />
          <FeaturedAccountsSection />
          <TestimonialsSection />
        </div>
      </main>
    </div>
  );
}
