"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Features() {
  const { messages } = useLanguage();

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {messages.features.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {messages.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Living Guide Categories */}
          <FeatureCategory
            title={messages.features.banking.title}
            icon="🏦"
            items={messages.features.banking.items}
          />

          <FeatureCategory
            title={messages.features.housing.title}
            icon="🏠"
            items={[
              ...messages.features.housing.areas,
              ...messages.features.housing.process,
            ]}
          />

          <FeatureCategory
            title={messages.features.transport.title}
            icon="🚌"
            items={[
              ...messages.features.transport.publicItems,
              ...messages.features.transport.taxiItems,
            ]}
          />

          <FeatureCategory
            title={messages.features.healthcare.title}
            icon="🏥"
            items={[
              ...messages.features.healthcare.insuranceItems,
              ...messages.features.healthcare.hospitalItems,
            ]}
          />

          <FeatureCategory
            title={messages.features.legal.title}
            icon="⚖️"
            items={[
              ...messages.features.legal.lawItems,
              ...messages.features.legal.culturalItems,
            ]}
          />

          <FeatureCategory
            title={messages.features.tools.title}
            icon="🛠️"
            items={messages.features.tools.items}
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
