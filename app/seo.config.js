export const defaultSEOConfig = {
  defaultTitle: "Peta Finansial - Portal Edukasi Finansial",
  titleTemplate: "%s | Peta Finansial",
  description:
    "Peta Finansial adalah kompas andalmu dalam menjelajahi dunia keuangan. Temukan panduan terlengkap dan terpercaya tentang investasi, menabung, mengelola utang, hingga tips keuangan pribadi agar kamu bisa mencapai kebebasan finansial di Indonesia.",
  canonical: "https://gleam.web.id",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://gleam.web.id",
    siteName: "Peta Finansial",
    title: "Peta Finansial - Portal Edukasi Finansial",
    description:
      "Peta Finansial adalah kompas andalmu dalam menjelajahi dunia keuangan. Temukan panduan terlengkap dan terpercaya tentang investasi, menabung, mengelola utang, hingga tips keuangan pribadi agar kamu bisa mencapai kebebasan finansial di Indonesia.",
    images: [
      {
        url: "https://gleam.web.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Peta Finansial - Portal Edukasi Finansial",
        type: "image/jpeg",
      },
    ],
    profile: {
      firstName: "Peta",
      lastName: "Finansial",
    },
  },
  facebook: {
    appId: "your-fb-app-id", // Replace with your Facebook App ID if you have one
  },
  twitter: {
    handle: "@petafinansial",
    site: "@petafinansial",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
    {
      name: "application-name",
      content: "Peta Finansial",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "Peta Finansial",
    },
    {
      name: "msapplication-TileColor",
      content: "#ffffff",
    },
    {
      property: "og:site_name",
      content: "Peta Finansial",
    },
    {
      name: "robots",
      content: "index,follow",
    },
    {
      name: "googlebot",
      content: "index,follow",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};
