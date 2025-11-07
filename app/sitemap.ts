import type { MetadataRoute } from "next";

const baseUrl = "https://www.growain.com";

const routes: string[] = [
  "/",
  "/about",
  "/solutions",
  "/services",
  "/services/local-presence",
  "/services/seo-content",
  "/services/social-media",
  "/book-demo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changefreq: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
