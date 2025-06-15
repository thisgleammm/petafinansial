import ArticleCard from "../../components/ArticleCard";

const lifestyleMoneyArticles = [
  {
    id: "mending-olahraga-atau-cari-relasi-padel-santai-dulu-gak-sih",
    title: `Mending Olahraga atau Cari Relasi? Padel: "Santai Dulu Gak Sih?"`,
    category: "Lifestyle & Money",
    image:
      "https://images.unsplash.com/photo-1673253408728-134f84f9279c?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "15 Juni 2025",
    excerpt:
      "Mengajak pembaca untuk tetap menikmati gaya hidup tanpa mengorbankan kondisi keuangan, lewat pengeluaran yang penuh kesadaran.",
  },
  {
    id: "sering-have-fun-tapi-dompet-tetap-slayy",
    title: `Sering Have Fun, tapi Dompet Tetap Slayy!!`,
    category: "Lifestyle & Money",
    image:
      "https://images.unsplash.com/photo-1495837174058-628aafc7d610?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "15 Juni 2025",
    excerpt:
      "Mengajak pembaca untuk tetap menikmati gaya hidup tanpa mengorbankan kondisi keuangan, lewat pengeluaran yang penuh kesadaran.",
  },
];

export default function LifestyleMoneyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Lifestyle & Money
        </h1>

        {/* Featured Article */}
        <div className="mb-12">
          <ArticleCard article={lifestyleMoneyArticles[0]} isFeatured={true} />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifestyleMoneyArticles.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
}
