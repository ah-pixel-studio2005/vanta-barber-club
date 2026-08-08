import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vanta-barber-club-concept.sites.openai.com"),
  title: "Vanta Barber Club | Premium Barber Experience",
  description: "A premium barbershop concept focused on precision cuts, timeless style and a refined grooming experience.",
  keywords: ["barbershop concept", "premium barber experience", "barber Miraflores", "men's grooming", "Vanta Barber Club", "AHPixel Studio"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Vanta Barber Club | Premium Barber Experience",
    description: "Precision cuts, timeless style and a refined grooming experience. A concept website by AHPixel Studio.",
    type: "website",
    locale: "en_US",
    siteName: "Vanta Barber Club",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vanta Barber Club — concept website by AHPixel Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanta Barber Club | Premium Barber Experience",
    description: "A premium barbershop concept focused on precision cuts, timeless style and refined grooming.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#090909",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
