import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Klova - AI for Coordination-Heavy Operations",
  description:
    "Not sure where AI fits in your business? Klova helps teams automate coordination across supply chain, finance, HR, and other operational workflows.",
  keywords: [
    "AI operations",
    "workflow automation",
    "supply chain automation",
    "finance automation",
    "HR automation",
    "operational coordination",
    "business process automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
