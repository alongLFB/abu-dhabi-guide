import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export default function TransportSection() {
  return (
    <section id="transport" className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🚌 Transportation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Public Transport</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Hafilat Card for buses</li>
              <li>Bus routes connect major areas</li>
              <li>Water taxi services available</li>
              <li>Future metro system planned</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Taxi Services</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>ADTC official taxis</li>
              <li>Uber and Careem available</li>
              <li>Airport transfers</li>
              <li>24/7 availability</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
