import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kevinli.dev"),
  title: "Kevin Li | Full-Stack Software Engineer",
  description:
    "Kevin Li is a full-stack software engineer building reliable public-sector web applications with React, Next.js, Node.js, C#, and SQL.",
  openGraph: {
    title: "Kevin Li | Full-Stack Software Engineer",
    description:
      "Portfolio, experience, projects, and contact information for Kevin Li.",
    url: "https://kevinli.dev",
    siteName: "Kevin Li",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kevin Li | Full-Stack Software Engineer",
    description:
      "Portfolio, experience, projects, and contact information for Kevin Li.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
