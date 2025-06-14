export default async function sitemap() {
  const baseUrl = "http://gleam.web.id";

  // Static routes
  const routes = [
    "",
    "/budgeting",
    "/saving",
    "/mindset",
    "/lifestyle-money",
    "/financial-basics",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));

  // Article routes
  const articleRoutes = [
    // Budgeting Articles
    {
      id: "cara-membuat-anggaran-bulanan-yang-efektif-di-tengah-krisis-ekonomi-pentingnya-budgeting",
      title:
        "Cara Membuat Anggaran Bulanan yang Efektif di Tengah Krisis Ekonomi: Pentingnya Budgeting",
      date: "2025-06-15",
    },
    {
      id: "50-30-20-metode-budgeting-untuk-pengelolaan-keuangan",
      title: "50/30/20: Metode Budgeting untuk Pengelolaan Keuangan",
      date: "2025-06-15",
    },
    {
      id: "budgeting-untuk-keluarga-muda-membangun-stabilitas-finansial-dari-awal",
      title:
        "Budgeting untuk Keluarga Muda: Membangun Stabilitas Finansial dari Awal",
      date: "2025-06-15",
    },
    // Saving Articles
    {
      id: "50-30-20-metode-menabung-yang-bikin-keuanganmu-terstruktur",
      title: "50/30/20: Metode Menabung yang Bikin Keuanganmu Terstruktur",
      date: "2025-06-14",
    },
    {
      id: "menabung-dengan-tantangan-harian",
      title: "Gamify Your Savings: Menabung Seru dengan Tantangan Harian!",
      date: "2025-06-14",
    },
    {
      id: "tips-finansial-cerdas-untuk-gen-z",
      title: "Menabung Anti Mainstream: Tips Finansial Cerdas untuk Gen Z",
      date: "2025-06-14",
    },
    // Mindset Articles
    // Lifestyle Money Articles
    {
      id: "mending-olahraga-atau-cari-relasi-padel-santai-dulu-gak-sih",
      title: `Mending Olahraga atau Cari Relasi? Padel: "Santai Dulu Gak Sih?"`,
      date: "2025-06-15",
    },
    {
      id: "sering-have-fun-tapi-dompet-tetap-slayy",
      title: `Sering Have Fun, tapi Dompet Tetap Slayy!!`,
      date: "2025-06-15",
    },
    // Financial Basics Articles
    {
      id: "investasi-reksadana-untuk-mahasiswa",
      title: "Investasi Reksadana untuk Mahasiswa: Mulai dari Rp100 Ribu",
      date: "2025-06-14",
    },
    {
      id: "cuan-dari-awal-cara-mengelola-gaji-pertama-dengan-bijak",
      title: "Cuan dari Awal: Cara Mengelola Gaji Pertama dengan Bijak",
      date: "2025-06-15",
    },
    {
      id: "mindful-spending-belanja-tanpa-penyesalan-di-era-digital",
      title: "Mindful Spending: Belanja Tanpa Penyesalan di Era Digital",
      date: "2025-06-15",
    },
    // Add more articles here
  ].map((article) => ({
    url: `${baseUrl}/article/${article.id}`,
    lastModified: article.date,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...routes, ...articleRoutes];
}
