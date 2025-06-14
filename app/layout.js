import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Backlinks from "../components/Backlinks";
import ClientBreadcrumbs from "../components/BreadcrumbsClient";
import SEO from "../components/SEO";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <SEO />
        <Navbar />
        <ClientBreadcrumbs />
        <main className="min-h-screen">{children}</main>
        <Backlinks />
        <Footer />
      </body>
    </html>
  );
}
