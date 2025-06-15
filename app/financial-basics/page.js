import ArticleCard from "../../components/ArticleCard";

const financialBasicsArticles = [
  {
    id: "investasi-reksadana-untuk-mahasiswa",
    title: "Investasi Reksadana untuk Mahasiswa: Mulai dari Rp100 Ribu",
    category: "Financial Basics",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60",
    date: "15 Juni 2025",
    excerpt:
      "Panduan lengkap memulai investasi reksadana untuk mahasiswa dengan modal minimal. Pelajari cara memilih reksadana yang tepat dan strategi investasi jangka panjang.",
  },
  {
    id: "cuan-dari-awal-cara-mengelola-gaji-pertama-dengan-bijak",
    title: "Cuan dari Awal: Cara Mengelola Gaji Pertama dengan Bijak",
    category: "Financial Basics",
    image:
      "https://plus.unsplash.com/premium_photo-1682104376701-d834c2b7aaf2?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "15 Juni 2025",
    excerpt:
      "Memberi pemahaman bahwa cara mengelola gaji pertama menentukan fondasi keuangan jangka panjang.",
  },
  {
    id: "mindful-spending-belanja-tanpa-penyesalan-di-era-digital",
    title: "Mindful Spending: Belanja Tanpa Penyesalan di Era Digital",
    category: "Financial Basics",
    image:
      "https://images.unsplash.com/photo-1650821414390-276561abd95a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "15 Juni 2025",
    excerpt:
      "Mengajak pembaca untuk tetap menikmati gaya hidup tanpa mengorbankan kondisi keuangan, lewat pengeluaran yang penuh kesadaran.",
  },
];

export default function FinancialBasicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Financial Basics
        </h1>

        {/* Featured Article */}
        <div className="mb-12">
          <ArticleCard article={financialBasicsArticles[0]} isFeatured={true} />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {financialBasicsArticles.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
}
