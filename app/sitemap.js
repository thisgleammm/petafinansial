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
      id: "cara-membuat-anggaran-bulanan-yang-efektif",
      title: "Cara Membuat Anggaran Bulanan yang Efektif",
      date: "2024-03-15",
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
    // Financial Basics Articles
    {
      id: "investasi-reksadana-untuk-mahasiswa",
      title: "Investasi Reksadana untuk Mahasiswa: Mulai dari Rp100 Ribu",
      date: "2025-06-14",
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
