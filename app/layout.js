import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Backlinks from "../components/Backlinks";
import ClientBreadcrumbs from "../components/BreadcrumbsClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Peta Finansial - Portal Edukasi Finansial",
    template: "%s | Peta Finansial",
  },
  description:
    "Peta Finansial adalah kompas andalmu dalam menjelajahi dunia keuangan. Temukan panduan terlengkap dan terpercaya tentang investasi, menabung, mengelola utang, hingga tips keuangan pribadi agar kamu bisa mencapai kebebasan finansial di Indonesia.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <ClientBreadcrumbs />
        <main className="min-h-screen">{children}</main>
        <Backlinks />
        <Footer />
      </body>
    </html>
  );
}
