import "server-only";

import fs from "node:fs";
import path from "node:path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

import { parseResourceMarkdown, type ResourceFrontmatter } from "@/lib/resourceParsing";

export type ResourceListItem = ResourceFrontmatter & {
  slug: string;
};

export type ResourceDetail = ResourceFrontmatter & {
  slug: string;
  contentHtml: string;
};

function resourcesDir(): string {
  return path.join(process.cwd(), "content", "resources");
}

function resourceFilePath(slug: string): string {
  return path.join(resourcesDir(), `${slug}.md`);
}

export function getAllResourceSlugs(): string[] {
  const dir = resourcesDir();
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllResources(): ResourceListItem[] {
  const slugs = getAllResourceSlugs();
  const items = slugs
    .map((slug) => {
      const file = fs.readFileSync(resourceFilePath(slug), "utf8");
      const { frontmatter } = parseResourceMarkdown(file);
      return { slug, ...frontmatter };
    })
    .filter((r) => r.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return items;
}

export async function getResourceBySlug(slug: string): Promise<ResourceDetail | null> {
  const fullPath = resourceFilePath(slug);
  if (!fs.existsSync(fullPath)) return null;

  const file = fs.readFileSync(fullPath, "utf8");
  const { frontmatter, markdown } = parseResourceMarkdown(file);
  if (frontmatter.published === false) return null;

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeStringify)
    .process(markdown);

  return {
    slug,
    ...frontmatter,
    contentHtml: String(processed),
  };
}
