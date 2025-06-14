import ArticleCard from "../../components/ArticleCard";

const savingArticles = [
  {
    id: "50-30-20-metode-menabung-yang-bikin-keuanganmu-terstruktur",
    title: "50/30/20: Metode Menabung yang Bikin Keuanganmu Terstruktur",
    category: "Saving",
    image:
      "https://plus.unsplash.com/premium_photo-1678824564316-9ea613a98a42?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "14 Juni 2025",
    excerpt: `"Uang adalah pelayan yang sangat baik, tetapi tuan yang buruk." – Francis Bacon`,
  },
  {
    id: "menabung-dengan-tantangan-harian",
    title: "Gamify Your Savings: Menabung Seru dengan Tantangan Harian!",
    category: "Saving",
    image:
      "https://images.unsplash.com/photo-1641134301517-a2a338aba1cf?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "14 Juni 2025",
    excerpt: `Bikin Aktivitas Menabung Jadi Lebih Seru dan Konsisten Lewat Gamification Finansial`,
  },
  {
    id: "tips-finansial-cerdas-untuk-gen-z",
    title: "Menabung Anti Mainstream: Tips Finansial Cerdas untuk Gen Z",
    category: "Saving",
    image:
      "https://images.unsplash.com/photo-1597699401213-82936bb3ec7c?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "14 Juni 2025",
    excerpt: `Cara Menabung Gaya Baru yang Lebih Relevan, Kreatif, dan Cocok untuk Anak Muda`,
  },
  // {
  //   id: 2,
  //   title: "Cara Memulai Dana Darurat",
  //   category: "Saving",
  //   image:
  //     "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   date: "14 Maret 2024",
  //   excerpt:
  //     "Panduan lengkap untuk membangun dana darurat yang aman dan mencukupi kebutuhan Anda.",
  // },
  // {
  //   id: 3,
  //   title: "Investasi vs Tabungan: Mana yang Lebih Baik?",
  //   category: "Saving",
  //   image:
  //     "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   date: "13 Maret 2024",
  //   excerpt:
  //     "Perbandingan mendalam antara investasi dan tabungan untuk membantu Anda membuat keputusan finansial yang tepat.",
  // },
];

export default function SavingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Saving</h1>

        {/* Featured Article */}
        <div className="mb-12">
          <ArticleCard article={savingArticles[0]} isFeatured={true} />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savingArticles.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
}
