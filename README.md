LiveBoost PH — Website

Production-ready Next.js App Router site for LiveBoost PH with Tailwind CSS, React Hook Form + Zod validation, and Resend email integration.

## Tech Stack
- `next` 15 (App Router, TypeScript)
- `tailwindcss` 4
- `react-hook-form` + `zod`
- `resend` (emails)
- `lucide-react` (icons)

## Getting Started
1) Install dependencies
```bash
npm ci
```

2) Create `.env.local`
```env
ADMIN_EMAIL=your-email@example.com
FROM_EMAIL=hello@liveboostph.com
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXXXXX
```

3) Run the dev server
```bash
npm run dev
```
Open `http://localhost:3000`.

## File Structure
```
/app
  /layout.tsx           // global layout and SEO metadata
  /page.tsx             // homepage
  /pricing/page.tsx     // pricing page (App Router)
  /api/subscribe/route.ts // POST email subscribe API
/components
  /Navbar.tsx
  /Footer.tsx
  /EmailCapture.tsx
  /PricingCard.tsx
  /Container.tsx
  /ui/Button.tsx
/lib
  /email.ts             // Resend email helpers
```

## Email Subscribe API
- Endpoint: `POST /api/subscribe`
- Body: `{ email: string, source?: string }`
- Validation: Zod
- Actions: Sends admin notification and a welcome email via Resend.

## Deployment (Vercel)
1) Push your repo to GitHub.
2) Import on Vercel.
3) Set Environment Variables in Vercel Project Settings:
   - `ADMIN_EMAIL`
   - `FROM_EMAIL`
   - `RESEND_API_KEY`
4) Deploy.

## Notes
- Tailwind tokens are defined in `app/globals.css` and used via CSS variables for brand colors.
- Pages are fully responsive and accessible (keyboard focus rings, ARIA labels).
- If emails are not configured, the app gracefully skips sending and still responds success.
