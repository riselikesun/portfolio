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
  description: "Suraj Sharma — Staff Full Stack Engineer & Team Lead. Experienced in scaling web applications to 50M+ users, building Agentic AI workflows, and modern cloud architectures.",
};

import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={cn("font-sans dark", figtree.variable)}>
      <GoogleTagManager gtmId={config.googleTagID} />
      <body className={inter.className}>
        <TooltipProvider delayDuration={200}>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
