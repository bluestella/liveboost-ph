export type NavigationItem = {
  label: string
  href: string
}

export type SocialLinks = {
  facebook?: string
  instagram?: string
  tiktok?: string
}

export const siteConfig = {
  siteName: "LiveBoost PH",
  siteDescription:
    "Professional hosts for Shopee, Lazada & TikTok Shop. No hiring hassles, just results.",
  siteUrl: "https://liveboostph.com",
  logo: "/logo.svg",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ] as NavigationItem[],
  socialMedia: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  } as SocialLinks,
}
