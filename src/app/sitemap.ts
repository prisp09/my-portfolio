import type { MetadataRoute } from "next";
import { seo } from "@/constants/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${seo.siteUrl}/`, changeFrequency: "monthly", priority: 1 }];
}
