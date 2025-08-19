// Cloudflare Worker for handling API requests
// Deploy this to Cloudflare Workers

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Enable CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      if (pathname === '/api/weather') {
        return handleWeatherRequest(request, env, corsHeaders);
      }
      
      if (pathname === '/api/currency') {
        return handleCurrencyRequest(request, env, corsHeaders);
      }
      
      if (pathname === '/api/visa-reminder') {
        return handleVisaReminderRequest(request, env, corsHeaders);
      }

      return new Response('Not Found', { 
        status: 404,
        headers: corsHeaders 
      });

    } catch (error) {
      return new Response(JSON.stringify({ 
        error: 'Internal Server Error',
        message: error.message 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }
  }
};

async function handleWeatherRequest(request, env, corsHeaders) {
  try {
    // Mock weather data for Abu Dhabi
    const weatherData = {
      location: 'Abu Dhabi, UAE',
      temperature: 32,
      condition: 'Sunny',
      humidity: 65,
      windSpeed: 12,
      airQuality: {
        index: 42,
        status: 'Good'
      },
      forecast: [
        { day: 'Today', high: 35, low: 28, condition: 'Sunny' },
        { day: 'Tomorrow', high: 34, low: 27, condition: 'Partly Cloudy' },
        { day: 'Day 3', high: 33, low: 26, condition: 'Sunny' }
      ]
    };

    return new Response(JSON.stringify(weatherData), {
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  } catch (error) {
    throw new Error('Weather API failed');
  }
}

async function handleCurrencyRequest(request, env, corsHeaders) {
  try {
    // Mock exchange rates (in production, fetch from real API)
    const exchangeRates = {
      AED: {
        USD: 0.2723,
        EUR: 0.2505,
        GBP: 0.2189,
        CNY: 1.9734,
        INR: 22.73,
        JPY: 40.85,
        SAR: 1.0212
      },
      USD: {
        AED: 3.6729,
        EUR: 0.9200,
        GBP: 0.8039,
        CNY: 7.2467,
        INR: 83.48,
        JPY: 150.12,
        SAR: 3.7507
      }
      // Add more currency pairs as needed
    };

    const url = new URL(request.url);
    const from = url.searchParams.get('from') || 'AED';
    const to = url.searchParams.get('to') || 'USD';
    const amount = parseFloat(url.searchParams.get('amount')) || 1;

    const rate = exchangeRates[from]?.[to] || 1;
    const convertedAmount = (amount * rate).toFixed(4);

    return new Response(JSON.stringify({
      from,
      to,
      amount,
      rate,
      convertedAmount,
      timestamp: new Date().toISOString()
    }), {
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  } catch (error) {
    throw new Error('Currency API failed');
  }
}

async function handleVisaReminderRequest(request, env, corsHeaders) {
  if (request.method === 'POST') {
    try {
      const data = await request.json();
      const { email, visaExpiryDate, reminderDays } = data;

      // In production, store in Cloudflare KV or D1
      // For now, just return success
      const reminderId = generateId();
      
      return new Response(JSON.stringify({
        success: true,
        reminderId,
        message: 'Visa reminder set successfully',
        reminderDate: calculateReminderDate(visaExpiryDate, reminderDays)
      }), {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    } catch (error) {
      throw new Error('Visa reminder setup failed');
    }
  }

  if (request.method === 'GET') {
    // Return user's reminders (mock data)
    const reminders = [
      {
        id: '1',
        visaType: 'Residence Visa',
        expiryDate: '2024-12-15',
        reminderDate: '2024-11-15',
        status: 'active'
      }
    ];

    return new Response(JSON.stringify(reminders), {
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  }
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function calculateReminderDate(expiryDate, reminderDays) {
  const expiry = new Date(expiryDate);
  const reminder = new Date(expiry);
  reminder.setDate(expiry.getDate() - reminderDays);
  return reminder.toISOString().split('T')[0];
}
