import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MarkdownContent from "@/components/MarkdownContent";
import { getAllResourceSlugs, getResourceBySlug } from "@/lib/resources";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllResourceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const resource = await getResourceBySlug(slug);
  if (!resource) return {};

  return {
    title: `${resource.title} — LiveBoost PH`,
    description: resource.description,
    openGraph: {
      title: resource.title,
      description: resource.description,
      type: "article",
      images: resource.ogImage ? [resource.ogImage] : undefined,
    },
  };
}

export default async function ResourceDetailPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const resource = await getResourceBySlug(slug);
  if (!resource) notFound();

  return (
    <div>
      <section className="border-b border-white/10 bg-[#070A12]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Resources
          </Link>
          <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-white max-w-3xl">
            {resource.title}
          </h1>
          <p className="mt-3 text-white/70 max-w-3xl">{resource.description}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/60">
            <span>
              {new Date(resource.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
            </span>
            {(resource.tags ?? []).length > 0 && (
              <div className="flex flex-wrap gap-2">
                {(resource.tags ?? []).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <MarkdownContent html={resource.contentHtml} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-white">Ready to talk?</div>
            <div className="mt-1 text-sm text-white/70">
              Share your details and we’ll follow up with next steps.
            </div>
          </div>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#4C6FFF] to-[#35D0BA] px-6 py-3 font-semibold text-[#0B0F1A] hover:opacity-95 transition-opacity"
          >
            Apply
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}

