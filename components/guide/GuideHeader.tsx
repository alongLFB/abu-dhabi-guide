"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GuideHeader() {
  const { messages } = useLanguage();

  return (
    <section className="py-12 bg-gradient-to-r from-desert-gold-50 to-ocean-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">
              🏛️ {messages.navigation.livingGuide}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              {messages.home.features.livingGuide.description}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
