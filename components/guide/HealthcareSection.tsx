import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export default function HealthcareSection() {
  return (
    <section id="healthcare" className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🏥 Healthcare
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Health Insurance</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Mandatory health insurance required</li>
              <li>Basic coverage through Thiqa</li>
              <li>Enhanced coverage available</li>
              <li>Coverage for family members</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Major Hospitals</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Sheikh Khalifa Medical City</li>
              <li>Cleveland Clinic Abu Dhabi</li>
              <li>Mediclinic City Hospital</li>
              <li>NMC Royal Hospital</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
