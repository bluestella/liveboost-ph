import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-4">
        <div>
          <h3 className="text-base font-semibold text-[var(--color-secondary)]">
            LiveBoost PH
          </h3>
          <p className="mt-2 text-sm text-[var(--color-text)]">
            Your live selling partner for Shopee, Lazada & TikTok Shop.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Links</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[var(--color-secondary)]">Home</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-[var(--color-secondary)]">Pricing</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <p className="mt-2 text-sm">
            Email: <a href="mailto:contact@liveboostph.com" className="underline">contact@liveboostph.com</a>
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Follow</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link
                href="https://facebook.com/liveboostph"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-secondary)]"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/liveboostph"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-secondary)]"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://tiktok.com/@liveboostph"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-secondary)]"
              >
                TikTok
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-10 text-xs text-black/60">
        © {new Date().getFullYear()} LiveBoost PH. All rights reserved.
      </div>
    </footer>
  );
}