"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { Input } from "@/components/ui";
import { Button } from "@/components/ui";

export default function CostCalculatorPage() {
  type ExpenseKey =
    | "housing"
    | "food"
    | "transportation"
    | "utilities"
    | "healthcare"
    | "entertainment"
    | "miscellaneous";

  const [expenses, setExpenses] = useState<Record<ExpenseKey, number>>({
    housing: 4000,
    food: 1200,
    transportation: 600,
    utilities: 400,
    healthcare: 300,
    entertainment: 800,
    miscellaneous: 500,
  });

  interface Category {
    key: ExpenseKey;
    name: string;
    icon: string;
    description: string;
    examples: string[];
  }

  const categories: Category[] = [
    {
      key: "housing",
      name: "Housing & Rent",
      icon: "🏠",
      description: "Rent, utilities, internet",
      examples: [
        "Studio: 2,500-4,000 AED",
        "1BR: 3,500-6,000 AED",
        "2BR: 5,000-10,000 AED",
      ],
    },
    {
      key: "food",
      name: "Food & Groceries",
      icon: "🍽️",
      description: "Groceries, dining out, beverages",
      examples: [
        "Basic groceries: 800-1,200 AED",
        "Dining out: 400-800 AED",
        "Coffee/drinks: 200-400 AED",
      ],
    },
    {
      key: "transportation",
      name: "Transportation",
      icon: "🚗",
      description: "Public transport, taxi, car expenses",
      examples: [
        "Public transport: 150-300 AED",
        "Taxi/Careem: 300-600 AED",
        "Car payment: 1,000-2,000 AED",
      ],
    },
    {
      key: "utilities",
      name: "Utilities",
      icon: "💡",
      description: "Electricity, water, gas, phone",
      examples: [
        "DEWA bill: 200-500 AED",
        "Mobile plan: 100-200 AED",
        "Internet: 300-400 AED",
      ],
    },
    {
      key: "healthcare",
      name: "Healthcare",
      icon: "🏥",
      description: "Insurance, medical expenses",
      examples: [
        "Insurance: 200-400 AED",
        "Pharmacy: 50-150 AED",
        "Doctor visits: 200-500 AED",
      ],
    },
    {
      key: "entertainment",
      name: "Entertainment",
      icon: "🎬",
      description: "Movies, sports, hobbies, shopping",
      examples: [
        "Cinema: 40-60 AED",
        "Gym: 200-400 AED",
        "Shopping: 300-800 AED",
      ],
    },
    {
      key: "miscellaneous",
      name: "Miscellaneous",
      icon: "📦",
      description: "Personal items, gifts, emergencies",
      examples: [
        "Personal care: 200-400 AED",
        "Clothing: 200-600 AED",
        "Emergency fund: 300-500 AED",
      ],
    },
  ];

  const totalExpenses = Object.values(expenses).reduce(
    (sum, amount) => sum + amount,
    0
  );

  const updateExpense = (category: ExpenseKey, value: string) => {
    setExpenses((prev) => ({
      ...prev,
      [category]: Math.max(0, parseInt(value) || 0),
    }));
  };

  const resetToDefaults = () => {
    setExpenses({
      housing: 4000,
      food: 1200,
      transportation: 600,
      utilities: 400,
      healthcare: 300,
      entertainment: 800,
      miscellaneous: 500,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text text-center">
            Cost of Living Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Plan your monthly budget for living in Abu Dhabi. Adjust the amounts
            based on your lifestyle and preferences.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator */}
            <div className="lg:col-span-2 space-y-6">
              {categories.map((category) => (
                <Card key={category.key}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{category.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                          {category.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {category.description}
                        </p>

                        {/* Examples */}
                        <div className="mb-4">
                          <details className="group">
                            <summary className="text-sm text-desert-gold-600 cursor-pointer hover:text-desert-gold-700">
                              View typical costs
                            </summary>
                            <ul className="mt-2 text-sm text-gray-500 dark:text-gray-400 space-y-1">
                              {category.examples.map((example, index) => (
                                <li key={index} className="ml-4">
                                  • {example}
                                </li>
                              ))}
                            </ul>
                          </details>
                        </div>

                        {/* Input */}
                        <div className="flex items-center space-x-3">
                          <Input
                            type="number"
                            value={expenses[category.key]}
                            onChange={(e) =>
                              updateExpense(category.key, e.target.value)
                            }
                            className="flex-1"
                            placeholder="0"
                          />
                          <span className="text-gray-500 dark:text-gray-400 font-medium">
                            AED/month
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="text-center">
                <Button
                  onClick={resetToDefaults}
                  variant="secondary"
                  className="px-6 py-3"
                >
                  Reset to Typical Values
                </Button>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <Card className="bg-gradient-to-br from-desert-gold-50 to-ocean-blue-50 dark:from-gray-800 dark:to-gray-700 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      Monthly Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4 mb-6">
                      {categories.map((category) => (
                        <div
                          key={category.key}
                          className="flex justify-between items-center"
                        >
                          <span className="text-gray-600 dark:text-gray-300">
                            {category.icon} {category.name}
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {expenses[category.key].toLocaleString()} AED
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-300 dark:border-gray-600 pt-4">
                      <div className="flex justify-between items-center text-xl font-bold">
                        <span className="text-gray-900 dark:text-white">
                          Total:
                        </span>
                        <span className="text-desert-gold-600 dark:text-desert-gold-500">
                          {totalExpenses.toLocaleString()} AED
                        </span>
                      </div>
                    </div>

                    {/* Conversions */}
                    <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex justify-between">
                        <span>In USD:</span>
                        <span>${(totalExpenses * 0.27).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>In EUR:</span>
                        <span>€{(totalExpenses * 0.25).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>In CNY:</span>
                        <span>¥{(totalExpenses * 1.97).toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                        💡 Budget Tips
                      </h4>
                      <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                        <li>• Housing should be ≤40% of income</li>
                        <li>• Save 20% for emergencies</li>
                        <li>• Compare prices at different areas</li>
                        <li>• Use public transport to save costs</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
