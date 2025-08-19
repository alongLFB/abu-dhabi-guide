import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export default function HousingSection() {
  return (
    <section id="housing" className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🏠 Housing & Accommodation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Popular Areas</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Downtown Abu Dhabi</li>
              <li>Saadiyat Island</li>
              <li>Al Reem Island</li>
              <li>Khalifa City</li>
              <li>Al Raha Beach</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Rental Process</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Security deposit (usually 10% of annual rent)</li>
              <li>Real estate commission (2-5%)</li>
              <li>ADDC (electricity) connection</li>
              <li>Internet and cable setup</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
