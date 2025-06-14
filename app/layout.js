import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Backlinks from "../components/Backlinks";
import ClientBreadcrumbs from "../components/BreadcrumbsClient";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: {
    default: "Peta Finansial - Portal Edukasi Finansial",
    template: "%s | Peta Finansial",
  },
  description:
    "Peta Finansial: Kompas andalmu menjelajahi dunia keuangan. Temukan panduan terlengkap dan terpercaya tentang investasi, menabung, mengelola utang, serta tips keuangan pribadi. Raih kebebasan finansialmu di Indonesia!",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://gleam.web.id",
    siteName: "Peta Finansial",
    title: "Peta Finansial - Portal Edukasi Finansial",
    description:
      "Peta Finansial adalah kompas andalmu dalam menjelajahi dunia keuangan.",
    images: [
      {
        url: "https://gleam.web.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Peta Finansial - Portal Edukasi Finansial",
      },
    ],
  },
  metadataBase: new URL("https://gleam.web.id"),
  alternates: {
    canonical: "/",
  },
  other: {
    "google-site-verification": "2QT9y5x0MAQqQhBlipDRgH6O26mrI-uQu-FNjkQ8ytI", // Ganti dengan kode verifikasi dari Google Search Console
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Add preconnect links
const preconnectDomains = [
  "https://images.pexels.com",
  "https://images.unsplash.com",
  "https://plus.unsplash.com",
  "https://cdn.rri.co.id",
  "https://blogimage.vantagecircle.com",
  "https://www.capnote.com",
  "https://fonts.googleapis.com",
  "https://fonts.gstatic.com",
];

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {preconnectDomains.map((domain, index) => (
          <React.Fragment key={`preconnect-group-${index}`}>
            <link rel="preconnect" href={domain} crossOrigin="anonymous" />
            <link rel="dns-prefetch" href={domain} />
          </React.Fragment>
        ))}
      </head>
      <body className={inter.className}>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Peta Finansial",
              url: "https://gleam.web.id",
              logo: "https://gleam.web.id/og-image.jpg",
              sameAs: [
                "https://facebook.com/petafinansial",
                "https://twitter.com/petafinansial",
                "https://instagram.com/petafinansial",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@petafinansial.com",
                contactType: "customer service",
              },
              description:
                "Portal edukasi finansial untuk generasi muda Indonesia. Temukan panduan lengkap tentang investasi, menabung, dan mengelola keuangan.",
            }),
          }}
        />
        <Navbar />
        <ClientBreadcrumbs />
        <main className="min-h-screen">{children}</main>
        <Backlinks />
        <Footer />
      </body>
    </html>
  );
}
