import "./globals.css";

import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import Header from "@/components/layout/Header";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amarilio de Oliveira",
  description: "Software Developer | Next.js | React | Typescript",
  authors: [{ name: "Amarilio de Oliveira" }],
  keywords: [
    "Software",
    "Developer",
    "Next.js",
    "React",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Tailwind CSS",
  ],
};

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
      </body>
    </html>
  );
}
