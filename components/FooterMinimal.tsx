import Link from "next/link";

export default function FooterMinimal() {
  return (
    <footer className="w-full bg-[#060F1D] border-t border-[rgba(200,164,90,0.08)]">
      {/* Main footer content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-[56px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] md:gap-[32px]">

          {/* Brand column */}
          <div className="flex flex-col">
            <div className="font-libre-baskerville text-gold text-[18px] tracking-[0.22em] mb-[12px] font-bold">
              UMELIA
            </div>
            <p className="text-[#3A4A5C] text-[13px] font-inter leading-[1.65] max-w-[240px]">
              Bodrum'daki işletmelere yapay zeka destekli otomasyon çözümleri.
            </p>
          </div>

          {/* Solutions column */}
          <div className="flex flex-col">
            <span className="text-[#3A4A5C] text-[11px] font-plus-jakarta font-semibold uppercase tracking-[0.18em] mb-[16px]">
              Çözümler
            </span>
            <nav className="flex flex-col gap-[10px]">
              <Link href="/otel" className="text-[#4A5A6C] text-[13px] font-inter hover:text-gold transition-colors duration-200">
                VIP Otel Asistanı
              </Link>
              <Link href="/rezervasyon" className="text-[#4A5A6C] text-[13px] font-inter hover:text-gold transition-colors duration-200">
                Rezervasyon Asistanı
              </Link>
              <Link href="/restoran" className="text-[#4A5A6C] text-[13px] font-inter hover:text-gold transition-colors duration-200">
                QR Sipariş Sistemi
              </Link>
            </nav>
          </div>

          {/* Contact column */}
          <div className="flex flex-col">
            <span className="text-[#3A4A5C] text-[11px] font-plus-jakarta font-semibold uppercase tracking-[0.18em] mb-[16px]">
              İletişim
            </span>
            <div className="flex flex-col gap-[10px]">
              <Link
                href="https://wa.me/905316745900"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A5A6C] text-[13px] font-inter hover:text-gold transition-colors duration-200"
              >
                WhatsApp
              </Link>
              <Link
                href="tel:+905316745900"
                className="text-[#4A5A6C] text-[13px] font-inter hover:text-gold transition-colors duration-200"
              >
                +90 531 674 59 00
              </Link>
              <span className="text-[#3A4A5C] text-[13px] font-inter">
                Bodrum, Türkiye
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.04)] py-[20px] px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-[8px]">
          <span className="text-[#2A3A4C] text-[12px] font-inter">
            © 2026 UMELIA — Tüm hakları saklıdır.
          </span>
          <div className="flex items-center gap-[20px]">
            <Link href="#" className="text-[#2A3A4C] text-[12px] font-inter hover:text-[#4A5A6C] transition-colors duration-200">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="text-[#2A3A4C] text-[12px] font-inter hover:text-[#4A5A6C] transition-colors duration-200">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
