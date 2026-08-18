import type { Metadata } from "next";
import { Inter, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import config from './config';
import { GoogleTagManager } from '@next/third-parties/google'

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suraj Sharma | Software engineer",
  description: "A innovative person who uses his creativity to do a lot with very little he has",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={cn("font-sans", figtree.variable)}>
      <GoogleTagManager gtmId={config.googleTagID} />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
