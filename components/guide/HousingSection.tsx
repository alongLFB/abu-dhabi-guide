"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HousingSection() {
  const { messages } = useLanguage();

  return (
    <section id="housing" className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🏠 {messages.features.housing.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">
              {messages.features.housing.popularAreas}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {messages.features.housing.areas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              {messages.features.housing.rentalProcess}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {messages.features.housing.process.map((process, index) => (
                <li key={index}>{process}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
