import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LiveBoost PH — Your Live Selling Partner",
  description:
    "Professional live sellers for your Shopee, Lazada & TikTok Shop business.",
  metadataBase: new URL("https://liveboostph.com"),
  openGraph: {
    title: "LiveBoost PH",
    description:
      "Professional live sellers for Shopee, Lazada & TikTok Shop.",
    url: "https://liveboostph.com",
    siteName: "LiveBoost PH",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "LiveBoost PH",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveBoost PH",
    description:
      "Professional live sellers for Shopee, Lazada & TikTok Shop.",
    images: ["/vercel.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <div className="min-h-[60vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
