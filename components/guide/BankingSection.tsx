"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BankingSection() {
  const { messages } = useLanguage();

  return (
    <section id="banking" className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🏦 {messages.features.banking.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">
              {messages.features.banking.openAccount}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {messages.features.banking.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              {messages.features.banking.popularBanks}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Emirates NBD</li>
              <li>ADCB (Abu Dhabi Commercial Bank)</li>
              <li>HSBC</li>
              <li>CBD (Commercial Bank of Dubai)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
