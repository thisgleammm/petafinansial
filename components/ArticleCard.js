"use client";

import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article, isFeatured = false }) {
  const cardClasses = isFeatured
    ? "bg-white rounded-lg shadow-lg overflow-hidden"
    : "bg-white rounded-lg shadow-md overflow-hidden";

  const imageHeight = isFeatured ? "h-96" : "h-48";
  const contentPadding = isFeatured ? "p-6" : "p-4";
  const titleSize = isFeatured ? "text-2xl" : "text-xl";

  return (
    <div className={cardClasses}>
      <div className={`relative ${imageHeight}`}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes={
            isFeatured
              ? "100vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          priority={isFeatured}
        />
      </div>
      <div className={contentPadding}>
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
          {article.category}
        </span>
        <Link href={`/article/${article.id}`}>
          <h3
            className={`font-bold text-gray-900 mb-2 ${titleSize} hover:text-blue-600 transition-colors`}
          >
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
        <p className="text-sm text-gray-500">{article.date}</p>
      </div>
    </div>
  );
}
