import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import config from './config';
import { GoogleTagManager } from '@next/third-parties/google'
import SmoothScroll from './components/smooth-scroll';

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(config.siteURL),
  title: "Suraj Sharma | Software engineer",
  description: "Suraj Sharma — Staff Full Stack Engineer & Team Lead. Experienced in scaling web applications to 50M+ users, building Agentic AI workflows, and modern cloud architectures.",
  keywords: [
    "Suraj Sharma",
    "Software Engineer",
    "Full Stack Developer",
    "Staff Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Agentic AI",
    "Cloud Architecture",
    "riselikesun",
    "rise like sun"
  ],
  authors: [{ name: "Suraj Sharma", url: config.siteURL }],
  creator: "Suraj Sharma",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Hey! I'm Suraj Sharma 👋",
    description: "I'm a Staff Full Stack Engineer. I love building scalable products and tinkering with AI. Let's grab a virtual coffee and chat about tech!",
    url: config.siteURL,
    siteName: "Suraj Sharma Portfolio",
    images: [
      {
        url: `${config.blobBaseUrl}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Suraj Sharma Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey! I'm Suraj Sharma 👋",
    description: "I'm a Staff Full Stack Engineer. I love building scalable products and tinkering with AI. Let's grab a virtual coffee and chat about tech!",
    images: [`${config.blobBaseUrl}/og-image.webp`],
    creator: "@riselikesun",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

import { TooltipProvider } from "@riselikesun/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={cn("font-sans dark", interHeading.variable, inter.variable)}>
      <GoogleTagManager gtmId={config.googleTagID} />
      <body>
        <TooltipProvider delayDuration={200}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </TooltipProvider>
      </body>
    </html>
  );
}
