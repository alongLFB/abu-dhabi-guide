"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LegalSection() {
  const { messages } = useLanguage();

  return (
    <section id="legal" className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ⚖️ {messages.features.legal.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">
              {messages.features.legal.laws}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {messages.features.legal.lawItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              {messages.features.legal.cultural}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {messages.features.legal.culturalItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
