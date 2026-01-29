"use client";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { siteConfig } from "@/site.config";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-orange-600/10"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                <Rocket className="h-6 w-6 text-white" aria-hidden />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {siteConfig.siteName}
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Elevating your brand with professional live selling that converts viewers into customers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
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
                  <a href={siteConfig.socialMedia.facebook} className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                    Facebook
                  </a>
                </li>
              )}
              {siteConfig.socialMedia.instagram && (
                <li>
                  <a href={siteConfig.socialMedia.instagram} className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                    Instagram
                  </a>
                </li>
              )}
              {siteConfig.socialMedia.tiktok && (
                <li>
                  <a href={siteConfig.socialMedia.tiktok} className="text-gray-300 hover:text-white transition-colors" aria-label="TikTok">
                    TikTok
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center text-gray-400">© {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
