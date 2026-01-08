import "./globals.css";

import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import Header from "@/components/layout/Header";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amarilio.tech/"),
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
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Amarilio de Oliveira",
    description: "Software Developer | Next.js | React | Typescript",
    url: "https://amarilio.tech/",
    siteName: "Amarilio de Oliveira",
    images: [
      {
        url: "/img/profile-oficial.jpeg",
        width: 1200,
        height: 630,
        alt: "Amarilio de Oliveira - Software Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarilio de Oliveira",
    description: "Software Developer | Next.js | React | Typescript",
    images: ["/img/profile-oficial.jpeg"],
    creator: "@AmarilioAlencar",
  },
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
      </body>
    </html>
  );
}
