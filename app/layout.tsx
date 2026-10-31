import type { Metadata } from "next";
import "./globals.css";
import { media, siteConfig } from "@/config/site";

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase,
  title: "360° Photo Booth Hire Johannesburg | SpinJozi",
  description: siteConfig.description,
  openGraph: { title: "360° Photo Booth Hire Johannesburg | SpinJozi", description: siteConfig.description, type: "website", locale: "en_ZA", siteName: "SpinJozi", images: [{ url: media.openGraph.src, width: media.openGraph.width, height: media.openGraph.height, alt: media.openGraph.alt }] },
  twitter: { card: "summary_large_image", title: "360° Photo Booth Hire Johannesburg | SpinJozi", description: siteConfig.description, images: [media.openGraph.src] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-ZA"><body>{children}</body></html>;
}
