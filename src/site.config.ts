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
    "Professional live selling teams for Shopee, Lazada & TikTok Shop.",
  siteUrl: "https://liveboostph.com",
  logo: "/logo.svg",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Apply", href: "/apply" },
  ] as NavigationItem[],
  socialMedia: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  } as SocialLinks,
}
