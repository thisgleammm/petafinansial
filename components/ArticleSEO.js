"use client";

import { NextSeo } from "next-seo";

export default function ArticleSEO({ article, isNotFound }) {
  if (isNotFound) {
    return (
      <NextSeo
        title="Artikel Tidak Ditemukan"
        description="Maaf, artikel yang Anda cari tidak dapat ditemukan."
        noindex={true}
        nofollow={true}
      />
    );
  }

  const articleSEO = {
    title: article.title,
    description: article.excerpt,
    canonical: `https://gleam.web.id/article/${article.id}`,
    openGraph: {
      type: "article",
      locale: "id_ID",
      url: `https://gleam.web.id/article/${article.id}`,
      title: article.title,
      description: article.excerpt,
      site_name: "Peta Finansial",
      article: {
        publishedTime: article.date,
        modifiedTime: article.date,
        authors: ["Peta Finansial Team"],
        tags: [article.category, "finansial", "edukasi", "keuangan"],
        section: article.category,
      },
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      handle: "@petafinansial",
      site: "@petafinansial",
      cardType: "summary_large_image",
    },
    facebook: {
      appId: "your-fb-app-id", // Replace with your Facebook App ID if you have one
    },
    additionalMetaTags: [
      {
        property: "article:author",
        content: "https://gleam.web.id/about",
      },
      {
        property: "article:publisher",
        content: "https://gleam.web.id",
      },
      {
        name: "twitter:title",
        content: article.title,
      },
      {
        name: "twitter:description",
        content: article.excerpt,
      },
      {
        name: "twitter:image",
        content: article.image,
      },
      {
        name: "twitter:image:alt",
        content: article.title,
      },
      {
        property: "og:article:published_time",
        content: article.date,
      },
      {
        property: "og:article:modified_time",
        content: article.date,
      },
      {
        property: "og:article:author",
        content: "Peta Finansial Team",
      },
      {
        property: "og:article:section",
        content: article.category,
      },
    ],
  };

  return <NextSeo {...articleSEO} />;
}
