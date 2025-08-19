import { Button } from "@/components/ui";
import { Card, CardContent } from "@/components/ui";

export default function Hero() {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-desert-gold-50 via-white to-ocean-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Abu Dhabi Newcomer Guide
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            阿布扎比新手指南
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your complete guide to living, working, and studying in Abu Dhabi.
            From opening bank accounts to finding the best restaurants - we have
            got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon="🏠"
            title="Living Guide"
            description="Essential information for daily life in Abu Dhabi"
          />
          <FeatureCard
            icon="🛠️"
            title="Practical Tools"
            description="Calculators, converters, and interactive utilities"
          />
          <FeatureCard
            icon="🏛️"
            title="Tourism Info"
            description="Must-visit places and cultural insights"
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
