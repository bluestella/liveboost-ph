# Liveboost PH Redesign — Page Design Specification (Desktop-first)

## Global Styles (applies to all pages)
- Design intent: “modern fintech” (high contrast, generous whitespace, crisp typography, subtle gradients), inspired by pipe.com.
- Layout system: 12-column CSS Grid for page frames + Flexbox for component internals.
- Max content width: 1200–1280px; page padding: 24–32px desktop.
- Type scale (example): H1 52/60, H2 36/44, H3 24/32, Body 16/26, Small 14/22.
- Color tokens (example):
  - Background: #0B0F1A (near-black) + white surface cards (#FFFFFF) as needed
  - Primary text: #F5F7FF on dark; #0B0F1A on light surfaces
  - Accent: electric blue (#4C6FFF) and mint/teal (#35D0BA) used sparingly
  - Borders: subtle translucent white/black depending on theme
- Buttons:
  - Primary: solid accent, high contrast, 10–12px radius, hover = slightly brighter + raise shadow
  - Secondary: outline / ghost, hover = tinted background
- Links: underlined on hover; always accessible contrast.
- Motion: 150–250ms transitions for hover/focus; avoid heavy animations.

## Page: Home
### Meta Information
- Title: “Liveboost PH — [Primary Value Proposition]”
- Description: 140–160 chars summarizing what you do and who it’s for.
- Open Graph: og:title, og:description, og:image, og:type=website.

### Page Structure
Stacked sections with strong above-the-fold clarity:
1) Top Nav
2) Hero
3) Value Props
4) Social Proof
5) How It Works
6) CTA Band
7) Footer

### Sections & Components
- Top Navigation (sticky, minimal)
  - Left: wordmark/logo
  - Center/right: links (Home, Resources)
  - Right: Primary CTA button “Apply”
- Hero (2-column)
  - Left: H1 value statement + 1–2 sentence support + primary CTA + secondary CTA (“View resources”)
  - Right: abstract fintech illustration / product visual (non-literal ok)
  - Include micro-trust line under CTAs (e.g., response time, who it’s for)
- Value Props (grid of 3–5 cards)
  - Each card: short heading + 1–2 lines; optional icon
- Social Proof (logo strip + optional testimonial)
  - Logo strip with consistent monochrome treatment
- How It Works (stepper)
  - 3–4 steps with concise copy; end with inline CTA
- CTA Band (full-width, high-contrast)
  - Re-state value + single prominent CTA
- Footer
  - Columns: company, resources, contact
  - Include legal text + basic info

## Page: Resources
### Meta Information
- Title: “Resources — Liveboost PH”
- Description: “Insights and guides on [domain] from Liveboost PH.”
- Open Graph: dedicated OG image for section.

### Page Structure
Header + controls + content list:
- Section header
- Filter/search row
- Post card grid/list

### Sections & Components
- Section Header
  - H1 “Resources” + short description
- Filtering/Search
  - Search input (title search)
  - Tag chips (top tags)
  - Sort (Newest first default)
- Post List
  - Cards in 2–3 column grid (desktop)
  - Each card: title, description, date, tags
  - Card click navigates to detail page

## Page: Resource Detail
### Meta Information
- Title/Description from markdown frontmatter
- Open Graph from frontmatter (ogImage)

### Page Structure
Content-centric reading layout:
- Breadcrumbs
- Title block
- Article content
- End-of-article CTA

### Sections & Components
- Breadcrumbs
  - “Resources / {Post Title}”
- Title Block
  - H1 + description + metadata row (date, tags)
- Markdown Renderer
  - Typography rules for headings, lists, blockquotes
  - Image styling: max-width 100%, rounded corners, captions optional
- End CTA
  - Compact card: “Ready to talk?” + button to Apply

## Page: Apply / Contact
### Meta Information
- Title: “Apply — Liveboost PH”
- Description: “Tell us about your business and we’ll follow up.”

### Page Structure
Single-column form with supportive sidebar (desktop):
- Left: form
- Right: trust points + what happens next

### Sections & Components
- Form
  - Required: Full name, Work email, Company
  - Optional: Website, Message
  - Hidden capture: source_page + UTM if present
  - Inline validation + disabled submit while loading
- Submission States
  - Success: confirmation headline + expectation-setting copy
  - Error: clear message + retry
- Trust Sidebar
  - “What happens next” (3 bullets)
  - Security/privacy note (short)
