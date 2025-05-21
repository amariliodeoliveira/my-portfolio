import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amarilio de Oliveira",
  description: "Welcome to my portfolio! Feel free to explore my work and get in touch.",
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
