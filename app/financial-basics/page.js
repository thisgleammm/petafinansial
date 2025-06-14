import Image from "next/image";

const financialBasicsArticles = [
  {
    id: 1,
    title: "Memahami Dasar-dasar Keuangan Pribadi",
    category: "Financial Basics",
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "15 Maret 2024",
    excerpt:
      "Panduan lengkap untuk memahami konsep dasar keuangan pribadi dan cara mengelolanya dengan baik.",
  },
  {
    id: 2,
    title: "Cara Membaca Laporan Keuangan",
    category: "Financial Basics",
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "14 Maret 2024",
    excerpt:
      "Pelajari cara membaca dan memahami laporan keuangan untuk pengambilan keputusan yang lebih baik.",
  },
  {
    id: 3,
    title: "Mengenal Instrumen Investasi Dasar",
    category: "Financial Basics",
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "13 Maret 2024",
    excerpt:
      "Pengenalan berbagai instrumen investasi dasar dan cara memilih yang sesuai dengan profil risiko Anda.",
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <Image
                src={financialBasicsArticles[0].image}
                alt={financialBasicsArticles[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                {financialBasicsArticles[0].category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {financialBasicsArticles[0].title}
              </h2>
              <p className="text-gray-600 mb-4">
                {financialBasicsArticles[0].excerpt}
              </p>
              <p className="text-sm text-gray-500">
                {financialBasicsArticles[0].date}
              </p>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {financialBasicsArticles.slice(1).map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
