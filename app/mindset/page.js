import Image from "next/image";

const mindsetArticles = [
  {
    id: 1,
    title: "Membangun Pola Pikir Kaya yang Sehat",
    category: "Mindset",
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "15 Maret 2024",
    excerpt:
      "Pelajari cara membangun pola pikir yang sehat tentang uang dan kekayaan untuk kesuksesan finansial jangka panjang.",
  },
  {
    id: 2,
    title: "Mengatasi Kecemasan Finansial",
    category: "Mindset",
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "14 Maret 2024",
    excerpt:
      "Strategi praktis untuk mengatasi kecemasan terkait keuangan dan membangun hubungan yang lebih sehat dengan uang.",
  },
  {
    id: 3,
    title: "Kebiasaan Finansial Orang Sukses",
    category: "Mindset",
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "13 Maret 2024",
    excerpt:
      "Temukan kebiasaan finansial yang dimiliki oleh orang-orang sukses dan cara menerapkannya dalam kehidupan Anda.",
  },
];

export default function MindsetPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mindset</h1>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <Image
                src={mindsetArticles[0].image}
                alt={mindsetArticles[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                {mindsetArticles[0].category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {mindsetArticles[0].title}
              </h2>
              <p className="text-gray-600 mb-4">{mindsetArticles[0].excerpt}</p>
              <p className="text-sm text-gray-500">{mindsetArticles[0].date}</p>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mindsetArticles.slice(1).map((article) => (
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
