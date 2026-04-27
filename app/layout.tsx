import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise — Upskill Your Workforce at Scale",
  description:
    "India's most trusted enterprise learning platform. Co-designed with IITs & IIMs. Real-time analytics, 500+ programs, 96% completion rate.",
  keywords: "enterprise learning, corporate training, upskilling, IIT, IIM, data science, product management",
  openGraph: {
    title: "Accredian Enterprise — Upskill Your Workforce at Scale",
    description: "Build the Skills Your Enterprise Needs to Win",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
