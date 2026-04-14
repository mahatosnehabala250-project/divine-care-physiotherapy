import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divine Care Physiotherapy | Acupuncture & Hijama Centre - Jamshedpur",
  description: "Kya aapko chronic pain se azaadi chahiye? Divine Care Physiotherapy, Acupuncture & Hijama Centre - Dr. Vikas Kr. Sahu. 500+ successful treatments. Book appointment now!",
  keywords: ["physiotherapy", "acupuncture", "hijama", "cupping", "knee pain", "back pain", "neck pain", "stroke rehab", "Jamshedpur", "Sakchi"],
  authors: [{ name: "Dr. Vikas Kr. Sahu" }],
  icons: {
    icon: "/images/logo-design.png",
  },
  openGraph: {
    title: "Divine Care Physiotherapy | Acupuncture & Hijama Centre",
    description: "Pain-free life is possible. Expert physiotherapy, acupuncture & hijama treatments in Jamshedpur.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
