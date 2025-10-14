import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-4">
        <div>
          <h3 className="text-base font-semibold text-secondary-600">
            LiveBoost PH
          </h3>
          <p className="mt-2 text-sm text-gray-900">
            Your live selling partner for Shopee, Lazada & TikTok Shop.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Links</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-secondary-600">Home</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-secondary-600">Pricing</Link>
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
                className="hover:text-secondary-600"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/liveboostph"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-600"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://tiktok.com/@liveboostph"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-600"
              >
                TikTok
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-10 text-xs text-gray-600">
        © {new Date().getFullYear()} LiveBoost PH. All rights reserved.
      </div>
    </footer>
  );
}