import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export default function GuideHeader() {
  return (
    <section className="py-12 bg-gradient-to-r from-desert-gold-50 to-ocean-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">
              🏛️ Living Guide Navigation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              Comprehensive information to help you settle in Abu Dhabi
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
