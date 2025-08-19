export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center">
            Practical Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Interactive tools to help you manage your life in Abu Dhabi more
            efficiently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ToolCard
              title="Cost of Living Calculator"
              description="Estimate your monthly expenses in Abu Dhabi"
              icon="💰"
              href="/tools/cost-calculator"
            />

            <ToolCard
              title="Currency Converter"
              description="Convert AED to your home currency"
              icon="💱"
              href="/tools/currency-converter"
            />

            <ToolCard
              title="Weather & Air Quality"
              description="Real-time weather and air quality information"
              icon="🌤️"
              href="/tools/weather"
            />

            <ToolCard
              title="Visa Reminder"
              description="Never miss your visa renewal date"
              icon="📋"
              href="/tools/visa-reminder"
            />

            <ToolCard
              title="Transit Guide"
              description="Public transport routes and schedules"
              icon="🚌"
              href="/tools/transit"
            />

            <ToolCard
              title="Emergency Contacts"
              description="Important phone numbers and addresses"
              icon="🚨"
              href="/tools/emergency"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

function ToolCard({ title, description, icon, href }: ToolCardProps) {
  return (
    <a
      href={href}
      className="block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-desert-gold-300 transition-all duration-200 group"
    >
      <div className="flex items-start space-x-4">
        <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-desert-gold-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          <div className="mt-4 flex items-center text-desert-gold-600 font-medium">
            <span>Launch Tool</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}
