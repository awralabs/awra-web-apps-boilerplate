import { siteBasePath } from "@/lib/constants";

export default async function sitemap() {
  const currentDate = new Date();
  const possibleSlugs = ["about-us", "careers", "marketplace", "services"];

  const sitemapEntries = [
    {
      url: siteBasePath,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    ...possibleSlugs.map((slug) => ({
      url: `${siteBasePath}/${slug}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    })),
  ];

  return sitemapEntries;
}
