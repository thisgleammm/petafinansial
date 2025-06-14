import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Backlinks from "../components/Backlinks";
import Breadcrumbs from "../components/Breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peta Finansial - Portal Edukasi Finansial",
  description: "Portal edukasi finansial terkini dan terpercaya di Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <Breadcrumbs />
        <main className="min-h-screen">{children}</main>
        <Backlinks />
        <Footer />
      </body>
    </html>
  );
}
