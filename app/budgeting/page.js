import ArticleCard from "../../components/ArticleCard";
import Script from "next/script";

// Mock data for budgeting articles
const budgetingArticles = [
  {
    id: "cara-membuat-anggaran-bulanan-yang-efektif",
    title: "Cara Membuat Anggaran Bulanan yang Efektif",
    category: "Budgeting",
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "15 Maret 2024",
    excerpt:
      "Pelajari langkah-langkah praktis untuk membuat anggaran bulanan yang efektif dan sesuai dengan kebutuhan Anda.",
  },
  {
    id: "budgeting-2",
    title: "Tips Mengatur Keuangan untuk Keluarga Muda",
    category: "Budgeting",
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "14 Maret 2024",
    excerpt:
      "Strategi mengatur keuangan untuk keluarga muda yang baru memulai perjalanan finansial mereka.",
  },
  {
    id: "budgeting-3",
    title: "Metode 50/30/20: Cara Sederhana Mengatur Anggaran",
    category: "Budgeting",
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "13 Maret 2024",
    excerpt:
      "Kenali metode 50/30/20 untuk mengatur anggaran dengan lebih efektif dan seimbang.",
  },
];

export const metadata = {
  title: "Budgeting | Peta Finansial",
  description:
    "Tips dan panduan lengkap tentang cara membuat dan mengelola anggaran keuangan yang efektif.",
  openGraph: {
    title: "Budgeting | Peta Finansial",
    description:
      "Tips dan panduan lengkap tentang cara membuat dan mengelola anggaran keuangan yang efektif.",
    url: "https://gleam.web.id/budgeting",
    siteName: "Peta Finansial",
    locale: "id_ID",
    type: "website",
  },
};

export default function BudgetingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Script
        id="budgeting-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Budgeting",
            description:
              "Tips dan panduan lengkap tentang cara membuat dan mengelola anggaran keuangan yang efektif.",
            url: "https://gleam.web.id/budgeting",
            hasPart: budgetingArticles.map((article) => ({
              "@type": "Article",
              headline: article.title,
              description: article.excerpt,
              image: article.image,
              datePublished: article.date,
              url: `https://gleam.web.id/article/${article.id}`,
            })),
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Beranda",
                  item: "https://gleam.web.id",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Budgeting",
                  item: "https://gleam.web.id/budgeting",
                },
              ],
            },
          }),
        }}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Budgeting</h1>

        {/* Featured Article */}
        <div className="mb-12">
          <ArticleCard article={budgetingArticles[0]} isFeatured={true} />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {budgetingArticles.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
}
