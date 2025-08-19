import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export default function BankingSection() {
  return (
    <section id="banking" className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🏦 Banking & Finance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Opening a Bank Account</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Emirates ID required</li>
              <li>Salary certificate from employer</li>
              <li>Passport copy and visa</li>
              <li>Minimum salary requirement varies by bank</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Popular Banks</h4>
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
