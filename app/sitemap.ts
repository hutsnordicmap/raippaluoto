import type { MetadataRoute } from "next";
import { allGuides } from "@/app/content/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-23");
  return [
    {
      url: "https://raippaluoto.fi/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...allGuides().map((guide) => ({
      url: `https://raippaluoto.fi${guide.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: guide.path.split("/").length > 2 ? 0.6 : 0.8,
    })),
  ];
}
