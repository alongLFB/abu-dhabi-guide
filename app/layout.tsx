import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Abu Dhabi Newcomer Guide | 阿布扎比新手指南</title>
        <meta
          name="description"
          content="Your complete guide to living, working, and studying in Abu Dhabi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Abu Dhabi, UAE, newcomer guide, living guide, expat, student"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
