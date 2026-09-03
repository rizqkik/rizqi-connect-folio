// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Muhammad Rizqi Fauzan — Network Engineer × AI/IoT Specialist",
  description:
    "Portfolio of Muhammad Rizqi Fauzan — Telecommunication Engineer from PENS with expertise in Network Engineering, AI/ML, IoT, and Robotics. Fresh Graduate 2026.",
  keywords: [
    "Network Engineer",
    "AI Engineer",
    "IoT Specialist",
    "Robotics",
    "Telecommunication",
    "PENS",
    "Fresh Graduate",
  ],
  authors: [{ name: "Muhammad Rizqi Fauzan" }],
  openGraph: {
    title: "Muhammad Rizqi Fauzan — Network Engineer × AI/IoT Specialist",
    description:
      "Telecommunication Engineer with cross-domain expertise in AI, IoT, and Robotics. Fresh Graduate from PENS 2026.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
