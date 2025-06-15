import ArticleCard from "../../components/ArticleCard";
import Script from "next/script";

// Mock data for budgeting articles
const budgetingArticles = [
  {
    id: "cara-membuat-anggaran-bulanan-yang-efektif-di-tengah-krisis-ekonomi-pentingnya-budgeting",
    title:
      "Cara Membuat Anggaran Bulanan yang Efektif di Tengah Krisis Ekonomi: Pentingnya Budgeting",
    category: "Budgeting",
    image:
      "https://plus.unsplash.com/premium_photo-1725404428224-664f5f0217b3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "15 Juni 2025",
    excerpt:
      "Pendahuluan tentang situasi ekonomi global saat ini dan dampaknya pada keuangan pribadi",
  },
  {
    id: "50-30-20-metode-budgeting-untuk-pengelolaan-keuangan",
    title: "50/30/20: Metode Budgeting untuk Pengelolaan Keuangan",
    category: "Budgeting",
    image:
      "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "15 Juni 2025",
    excerpt: "Bagaimana teknologi telah mengubah cara kita mengelola keuangan",
  },
  {
    id: "budgeting-untuk-keluarga-muda-membangun-stabilitas-finansial-dari-awal",
    title:
      "Budgeting untuk Keluarga Muda: Membangun Stabilitas Finansial dari Awal",
    category: "Budgeting",
    image:
      "https://plus.unsplash.com/premium_photo-1691872437533-e35b3d1f7cbe?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "15 Juni 2025",
    excerpt: "Rencana Anggaran Bulanan Keluarga Muda",
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
