import type { Metadata } from "next";
import { DM_Sans, Outfit, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
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
      className={`${dmSans.variable} ${outfit.variable} ${libreBaskerville.variable}`}
    >
      <body className="bg-navy text-off-white antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
