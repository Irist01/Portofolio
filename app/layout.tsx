import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { profile } from "@/content/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Di Vercel URL produksi datang dari env; lokal pakai localhost.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const title = `${profile.fullName} — ${profile.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.intro,
  openGraph: {
    type: "website",
    url: "/",
    title,
    description: profile.intro,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
