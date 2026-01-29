import { describe, expect, it } from "vitest";
import { parseResourceMarkdown } from "./resourceParsing";

describe("parseResourceMarkdown", () => {
  it("parses required frontmatter and content", () => {
    const input = `---
title: "Hello"
description: "World"
date: "2026-01-01"
tags: ["a", "b"]
published: true
---

# Heading

Body.`;

    const out = parseResourceMarkdown(input);
    expect(out.frontmatter.title).toBe("Hello");
    expect(out.frontmatter.description).toBe("World");
    expect(out.frontmatter.date).toBe("2026-01-01");
    expect(out.frontmatter.tags).toEqual(["a", "b"]);
    expect(out.frontmatter.published).toBe(true);
    expect(out.markdown).toContain("# Heading");
  });

  it("defaults published to true", () => {
    const input = `---
title: "Hello"
description: "World"
date: "2026-01-01"
---

Body.`;

    const out = parseResourceMarkdown(input);
    expect(out.frontmatter.published).toBe(true);
  });

  it("throws when required fields are missing", () => {
    const input = `---
title: "Hello"
---

Body.`;
    expect(() => parseResourceMarkdown(input)).toThrow();
  });
});

