import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideView } from "@/app/components/GuideView";
import { allGuides, getGuide } from "@/app/content/guides";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return allGuides().map((guide) => ({
    slug: guide.path.slice(1).split("/"),
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Not found" };

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: guide.path },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: guide.path,
      locale: "en_GB",
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuideView guide={guide} />;
}
