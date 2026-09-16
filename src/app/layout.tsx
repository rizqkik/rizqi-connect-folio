import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Rizqi Fauzan — Engineer & Business Strategist",
  description:
    "Telecommunication Engineer, Network Specialist, and AI/IoT innovator with entrepreneurial experience. Bridging technical excellence and business strategy.",
  keywords: [
    "Telecommunication Engineer",
    "Network Engineer",
    "AI Engineer",
    "IoT Specialist",
    "Business Strategist",
    "Startup Founder",
    "PENS",
    "SD-WAN",
    "Robotics",
    "Embedded Systems",
  ],
  authors: [{ name: "Muhammad Rizqi Fauzan" }],
  openGraph: {
    title: "Muhammad Rizqi Fauzan — Engineer & Business Strategist",
    description:
      "Telecommunication Engineer bridging network infrastructure, AI/IoT systems, and technology business strategy.",
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
      <body
        className={`${geist.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
