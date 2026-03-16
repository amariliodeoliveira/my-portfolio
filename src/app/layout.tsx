import "./globals.css";

import { Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import { baseMetadata } from "@/lib/metadata";

export const metadata: Metadata = baseMetadata;

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        <Header />
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
