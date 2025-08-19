export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive guides, practical tools, and community support for
            your life in Abu Dhabi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Living Guide Categories */}
          <FeatureCategory
            title="Banking & Finance"
            icon="🏦"
            items={[
              "Bank account opening",
              "Payment methods",
              "Mobile banking",
              "Financial services",
            ]}
          />

          <FeatureCategory
            title="Housing & Rent"
            icon="🏠"
            items={[
              "Rental platforms",
              "Contract guidance",
              "Popular areas",
              "Moving tips",
            ]}
          />

          <FeatureCategory
            title="Transportation"
            icon="🚌"
            items={[
              "Public transport",
              "Hafilat card",
              "Taxi services",
              "Car rental",
            ]}
          />

          <FeatureCategory
            title="Healthcare"
            icon="🏥"
            items={[
              "Medical insurance",
              "Hospital listings",
              "Emergency contacts",
              "Pharmacy locations",
            ]}
          />

          <FeatureCategory
            title="Legal & Culture"
            icon="⚖️"
            items={[
              "Local laws",
              "Cultural norms",
              "Dress codes",
              "Religious guidelines",
            ]}
          />

          <FeatureCategory
            title="Practical Tools"
            icon="🛠️"
            items={[
              "Cost calculator",
              "Currency converter",
              "Weather updates",
              "Visa reminders",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCategoryProps {
  title: string;
  icon: string;
  items: string[];
}

function FeatureCategory({ title, icon, items }: FeatureCategoryProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map((item: string, index: number) => (
          <li
            key={index}
            className="flex items-center text-gray-600 dark:text-gray-300"
          >
            <span className="w-2 h-2 bg-desert-gold-600 rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
