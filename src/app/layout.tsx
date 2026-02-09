import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import TransitionLoader from "@/components/transition-loader";
import GridPattern from "@/components/magicui/grid-pattern";
import Contact from "@/components/sections/contact";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/sections";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import { IconCloudDemo } from "@/components/iconsion";

export const metadata: Metadata = {
  metadataBase: new URL("https://luis.outframe.dev"),
  title: {
    default: "Luis Roberto | Portfolio",
    template: "%s | Luis Roberto",
  },
  description: "Web Developer focused on Frontend.",
  openGraph: {
    title: "Luis Roberto",
    description: "Web Developer focused on Frontend.",
    url: "https://luis.outframe.dev",
    siteName: "Luis Roberto | Portfolio",
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "Luis Roberto",
    card: "summary_large_image",
    description: "Desenvolvedor Web com foco no Frontend.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body className={GeistSans.className}>
        <Analytics />
        <meta
          name="google-site-verification"
          content="AHQNt5ZuY1itK3Ym_jOkopc1zxlYuI4VtTCipaI25wY"
        />
        <TransitionLoader />
        <Toaster />
        <Navbar />

        <GridPattern className="[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  ); 
}
