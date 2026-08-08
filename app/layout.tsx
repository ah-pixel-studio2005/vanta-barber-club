import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vanta-barber-club.sites.openai.com"),
  title: "Vanta Barber Club — Premium Barbershop in Lima",
  description: "Precision cuts, timeless style and a premium grooming experience in Miraflores, Lima. A concept website by AHPixel Studio.",
  keywords: ["barbershop Lima", "barber Miraflores", "men's grooming", "Vanta Barber Club"],
  openGraph: {
    title: "Vanta Barber Club — More Than a Haircut. A Standard.",
    description: "Premium cuts, beard grooming and a considered barbering experience in Lima.",
    type: "website",
    locale: "en_US",
    siteName: "Vanta Barber Club",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vanta Barber Club — concept website" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanta Barber Club",
    description: "More Than a Haircut. A Standard.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

