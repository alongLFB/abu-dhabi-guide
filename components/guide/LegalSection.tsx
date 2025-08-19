import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export default function LegalSection() {
  return (
    <section id="legal" className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ⚖️ Legal & Cultural Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Important Laws</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Respect local customs and traditions</li>
              <li>Modest dress code in public areas</li>
              <li>Zero tolerance for alcohol and driving</li>
              <li>No public displays of affection</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Cultural Considerations</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Ramadan observance guidelines</li>
              <li>Friday as holy day</li>
              <li>Arabic is the official language</li>
              <li>Respect for Islamic traditions</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
