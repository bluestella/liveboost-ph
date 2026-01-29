import matter from "gray-matter";

export type ResourceFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  ogImage?: string;
  published?: boolean;
};

export function parseResourceMarkdown(input: string): {
  frontmatter: ResourceFrontmatter;
  markdown: string;
} {
  const parsed = matter(input);
  const data = parsed.data as Partial<ResourceFrontmatter>;

  if (!data.title || !data.description || !data.date) {
    throw new Error("Resource frontmatter must include title, description, and date");
  }

  return {
    frontmatter: {
      title: data.title,
      description: data.description,
      date: data.date,
      tags: Array.isArray(data.tags) ? data.tags : undefined,
      ogImage: typeof data.ogImage === "string" ? data.ogImage : undefined,
      published: typeof data.published === "boolean" ? data.published : true,
    },
    markdown: parsed.content,
  };
}

