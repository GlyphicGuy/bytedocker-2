import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import BackgroundAccents from "@/components/BackgroundAccents";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Bytedocker Talent | Pre-Vetted Remote Engineers for Funded Startups",
  description: "Hire top 1% Indian developers matched to your startup within 18 hours. No hiring chaos. No long interviews. No guesswork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased bg-slate-50">
        <div className="relative min-h-screen">
          <BackgroundAccents />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}

