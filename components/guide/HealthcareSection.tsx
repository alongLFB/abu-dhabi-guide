"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HealthcareSection() {
  const { messages } = useLanguage();

  return (
    <section id="healthcare" className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🏥 {messages.features.healthcare.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">
              {messages.features.healthcare.insurance}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {messages.features.healthcare.insuranceItems.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              {messages.features.healthcare.hospitals}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {messages.features.healthcare.hospitalItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
