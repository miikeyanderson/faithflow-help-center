import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "Faithflow Help Center",
  description: "Get help with Faithflow - Support, Documentation, and Resources",
  icons: {
    icon: '/favicon.svg',
  },
  themeColor: '#4867D2',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-white dark:bg-[#121F25]">{children}</main>
      </body>
    </html>
  );
}
