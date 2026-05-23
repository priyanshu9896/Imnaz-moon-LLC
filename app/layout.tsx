import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IMNAZ MOON TECHNICAL SERVICES | Coming Soon",
  description: "Building Excellence Across Technical Services. We're creating a modern experience to better showcase our technical services and solutions.",
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#0F172A] text-white selection:bg-[#C8A96B] selection:text-[#0F172A]">{children}</body>
    </html>
  );
}
