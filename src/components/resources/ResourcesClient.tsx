"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { ResourceListItem } from "@/lib/resources";

type Props = {
  resources: ResourceListItem[];
};

function toTagKey(tag: string): string {
  return tag.trim().toLowerCase();
}

export default function ResourcesClient({ resources }: Props) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const r of resources) {
      for (const t of r.tags ?? []) {
        const key = toTagKey(t);
        counts.set(key, (counts.get(key) ?? 0) + 1);
      }
    }
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([key]) => key);
  }, [resources]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return resources.filter((r) => {
      const matchesQuery =
        q.length === 0 ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q);

      const matchesTag =
        !activeTag || (r.tags ?? []).some((t) => toTagKey(t) === activeTag);

      return matchesQuery && matchesTag;
    });
  }, [resources, query, activeTag]);

  return (
    <div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
              <Search className="h-5 w-5 text-white/70" aria-hidden />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search resources"
              className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white/40"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                !activeTag
                  ? "bg-white text-[#0B0F1A] border-white"
                  : "bg-transparent text-white/70 border-white/10 hover:bg-white/10"
              }`}
            >
              All
            </button>
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTag(t === activeTag ? null : t)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  activeTag === t
                    ? "bg-white text-[#0B0F1A] border-white"
                    : "bg-transparent text-white/70 border-white/10 hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <Link
            key={r.slug}
            href={`/resources/${r.slug}`}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
          >
            <div className="text-xs font-semibold tracking-widest text-white/50">
              {new Date(r.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </div>
            <div className="mt-2 text-lg font-semibold text-white group-hover:text-white transition-colors">
              {r.title}
            </div>
            <div className="mt-2 text-sm text-white/70">
              {r.description}
            </div>
            {(r.tags ?? []).length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {(r.tags ?? []).slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-white/70">
          No resources match your search.
        </div>
      )}
    </div>
  );
}
