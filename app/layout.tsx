import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Bytedocker Talent | Pre-Vetted Remote Engineers for Funded Startups",
  description: "Hire top 5% Indian developers matched to your startup within 48 hours. No hiring chaos. No long interviews. No guesswork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased bg-slate-50">
        {children}
      </body>
    </html>
  );
}

