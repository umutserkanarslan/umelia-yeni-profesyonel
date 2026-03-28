import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UMELIA — Automate. Optimize. Elevate.",
  description:
    "Bodrum'daki işletmelere yapay zeka destekli otomasyon çözümleri. Otel AI asistanı, WhatsApp rezervasyon botu, QR sipariş sistemi.",
  openGraph: {
    title: "UMELIA — Automate. Optimize. Elevate.",
    description: "Bodrum'un işletmelerine güç veren otomasyon çözümleri.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${plusJakartaSans.variable} ${playfair.variable} ${libreBaskerville.variable}`}
    >
      <body className="bg-navy text-off-white antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
