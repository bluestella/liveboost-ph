"use client";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { siteConfig } from "@/site.config";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#070A12] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <Rocket className="h-6 w-6 text-white" aria-hidden />
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">
                {siteConfig.siteName}
              </span>
            </div>
            <p className="text-white/70 text-base leading-relaxed max-w-md">
              Professional live selling teams for Shopee, Lazada, and TikTok Shop.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-3">
              {siteConfig.socialMedia.facebook && (
                <li>
                  <a href={siteConfig.socialMedia.facebook} className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                    Facebook
                  </a>
                </li>
              )}
              {siteConfig.socialMedia.instagram && (
                <li>
                  <a href={siteConfig.socialMedia.instagram} className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                    Instagram
                  </a>
                </li>
              )}
              {siteConfig.socialMedia.tiktok && (
                <li>
                  <a href={siteConfig.socialMedia.tiktok} className="text-white/70 hover:text-white transition-colors" aria-label="TikTok">
                    TikTok
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-white/50 text-sm">© {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
