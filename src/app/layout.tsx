import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Asher Javaid | Product & Analytics",
    template: "%s | Asher Javaid",
  },
  description:
    "Product and analytics work spanning customer discovery, applied AI, and data-driven decision-making.",
  keywords: [
    "product management",
    "product analytics",
    "business analytics",
    "applied AI",
    "data science",
  ],
  authors: [{ name: "Asher Javaid" }],
  creator: "Asher Javaid",
  openGraph: {
    type: "website",
    title: "Asher Javaid | Product & Analytics",
    description:
      "Selected product and analytics work across customer discovery, applied AI, and data-driven decision-making.",
    url: "/",
    siteName: "Asher Javaid Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asher Javaid | Product & Analytics",
    description:
      "Selected product and analytics work across customer discovery, applied AI, and data-driven decision-making.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
