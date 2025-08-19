import GuideHeader from '@/components/guide/GuideHeader';
import BankingSection from '@/components/guide/BankingSection';
import HousingSection from '@/components/guide/HousingSection';
import TransportSection from '@/components/guide/TransportSection';
import HealthcareSection from '@/components/guide/HealthcareSection';
import LegalSection from '@/components/guide/LegalSection';

export default function LivingGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <GuideHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center">
            Living Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Everything you need to know to settle in Abu Dhabi comfortably and confidently.
          </p>
          
          <div className="space-y-16">
            <BankingSection />
            <HousingSection />
            <TransportSection />
            <HealthcareSection />
            <LegalSection />
          </div>
        </div>
      </main>
    </div>
  );
}
