export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private", "/api", "/*.json", "/*.xml"],
      },
    ],
    sitemap: "https://gleam.web.id/sitemap.xml",
    host: "https://gleam.web.id",
  };
}
