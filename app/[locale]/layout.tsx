/// <reference types="react" />
/// <reference types="react-dom" />

import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = require(`../../../messages/${locale}.json`);
  } catch (error) {
    console.error('Failed to load messages:', error);
    messages = require('../../../messages/en.json');
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
