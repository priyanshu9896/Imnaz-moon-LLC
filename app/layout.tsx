import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IMNAZ MOON TECHNICAL SERVICES L.L.C — Coming Soon",
  description:
    "Our new digital experience is currently being crafted. IMNAZ MOON TECHNICAL SERVICES L.L.C — Dubai, UAE.",
  robots: "index, follow",
};

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-dvh bg-[#F8FAFC] text-[#0F172A] selection:bg-[#CFE8AE]/60 selection:text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
