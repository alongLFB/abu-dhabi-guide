"use client";

import { useState, useEffect } from "react";

export default function CurrencyConverterPage() {
  const [amount, setAmount] = useState("100");
  const [fromCurrency, setFromCurrency] = useState("AED");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const currencies = [
    { code: "AED", name: "UAE Dirham", flag: "🇦🇪" },
    { code: "USD", name: "US Dollar", flag: "🇺🇸" },
    { code: "EUR", name: "Euro", flag: "🇪🇺" },
    { code: "GBP", name: "British Pound", flag: "🇬🇧" },
    { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳" },
    { code: "INR", name: "Indian Rupee", flag: "🇮🇳" },
    { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
    { code: "SAR", name: "Saudi Riyal", flag: "🇸🇦" },
  ];

  const convertCurrency = async () => {
    if (!amount || parseFloat(amount) <= 0) return;

    setLoading(true);
    try {
      // Mock conversion rates (in real app, use actual API)
      const mockRates: Record<string, number> = {
        "AED-USD": 0.27,
        "AED-EUR": 0.25,
        "AED-GBP": 0.22,
        "AED-CNY": 1.97,
        "AED-INR": 22.8,
        "AED-JPY": 40.5,
        "AED-SAR": 1.02,
        "USD-AED": 3.67,
        "EUR-AED": 4.0,
        "GBP-AED": 4.6,
        "CNY-AED": 0.51,
        "INR-AED": 0.044,
        "JPY-AED": 0.024,
        "SAR-AED": 0.98,
      };

      const rateKey = `${fromCurrency}-${toCurrency}`;
      const rate = mockRates[rateKey] || 1;
      const convertedAmount = (parseFloat(amount) * rate).toFixed(2);

      setResult(convertedAmount);
    } catch (error) {
      console.error("Conversion failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text text-center">
            Currency Converter
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center">
            Convert between UAE Dirham and major world currencies
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-desert-gold-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-lg"
                placeholder="Enter amount"
              />
            </div>

            {/* Currency Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  From
                </label>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-desert-gold-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.flag} {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  To
                </label>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-desert-gold-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.flag} {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Swap Button */}
            <div className="text-center mb-8">
              <button
                onClick={() => {
                  setFromCurrency(toCurrency);
                  setToCurrency(fromCurrency);
                }}
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </button>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-r from-desert-gold-50 to-ocean-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6 text-center">
              {loading ? (
                <div className="text-xl text-gray-600 dark:text-gray-300">
                  Converting...
                </div>
              ) : result ? (
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {currencies.find((c) => c.code === toCurrency)?.flag}{" "}
                    {result} {toCurrency}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {currencies.find((c) => c.code === fromCurrency)?.flag}{" "}
                    {amount} {fromCurrency} =
                  </div>
                </div>
              ) : (
                <div className="text-xl text-gray-600 dark:text-gray-300">
                  Enter an amount to convert
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
              <p>
                * Exchange rates are for reference only and may not reflect
                real-time market rates
              </p>
            </div>
          </div>

          {/* Quick Conversion Table */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Reference (1 AED =)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {currencies
                .filter((c) => c.code !== "AED")
                .map((currency) => (
                  <div
                    key={currency.code}
                    className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="text-lg mb-1">{currency.flag}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {currency.code}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      ≈ 0.27
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
