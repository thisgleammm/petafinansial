"use client";

import { DefaultSeo } from "next-seo";
import { defaultSEOConfig } from "../app/seo.config";

export default function SEO() {
  return <DefaultSeo {...defaultSEOConfig} />;
}
