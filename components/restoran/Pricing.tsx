"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="fiyatlandirma" className="bg-off-white py-28 md:py-32 lg:py-36 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3 }}
            className="text-navy font-[family-name:var(--font-heading)] font-extrabold text-3xl md:text-[40px] mb-4 will-change-transform"
          >
            Şeffaf Fiyatlandırma
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-muted text-lg md:text-[18px] max-w-[500px] mx-auto will-change-transform"
          >
            Gizli maliyet yok. Ne alacağınızı biliyorsunuz.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 md:gap-6 lg:gap-8 max-w-[900px] mx-auto">
          {/* Card 1 - Başlangıç */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-1/2 bg-white rounded-[24px] p-8 md:p-10 border border-border-warm shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow flex flex-col will-change-transform"
          >
            <h3 className="text-navy font-[family-name:var(--font-heading)] font-extrabold text-[24px] mb-4">Başlangıç</h3>
            <div className="mb-2 flex items-baseline">
              <span className="text-navy font-black text-[28px] mr-1">₺</span>
              <span className="text-navy font-black text-[44px] leading-tight">13.999</span>
              <span className="text-muted text-lg font-medium ml-1">/ay</span>
            </div>
            <p className="text-muted text-[14px] font-semibold mb-8 pb-8 border-b border-border-warm">
              + ₺13.999 kurulum bedeli (tek seferlik)
            </p>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                "QR kod sipariş sistemi",
                "20 masaya kadar",
                "Dinamik menü entegrasyonu",
                "Mutfak anlık bildirimi",
                "Müşteriye WhatsApp onay",
                "Hafta içi destek"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal text-white">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 6l2.5 2.5L9.5 4" />
                    </svg>
                  </span>
                  <span className="text-body-text font-medium text-[16px]">{item}</span>
                </li>
              ))}
            </ul>

            <a href="https://wa.me/905316745900" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl border-2 border-navy text-navy font-bold text-lg hover:bg-navy hover:text-white transition-colors text-center inline-block">
              14 Gün Ücretsiz Başlayın
            </a>
          </motion.div>

          {/* Card 2 - Profesyonel (Recommended) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full md:w-1/2 bg-white rounded-[24px] p-8 md:p-10 border-2 border-gold shadow-[0_20px_60px_rgba(200,164,90,0.15)] relative md:-translate-y-4 flex flex-col overflow-hidden will-change-transform"
          >
            {/* Top gold gradient */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gold/[0.10] to-transparent pointer-events-none" />
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gold text-navy text-[12px] font-bold px-5 py-2 rounded-b-[6px] uppercase tracking-wider shadow-sm">
              Tavsiye Edilen
            </div>

            <h3 className="text-navy font-[family-name:var(--font-heading)] font-extrabold text-[24px] mb-4 mt-2">Profesyonel</h3>
            <div className="mb-2 flex items-baseline">
              <span className="text-navy font-black text-[28px] mr-1">₺</span>
              <span className="text-navy font-black text-[44px] leading-tight">16.999</span>
              <span className="text-muted text-lg font-medium ml-1">/ay</span>
            </div>
            <p className="text-muted text-[14px] font-semibold mb-8 pb-8 border-b border-border-warm">
              + ₺13.999 kurulum bedeli (tek seferlik)
            </p>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                "QR kod sipariş sistemi",
                "Sınırsız masa",
                "Dinamik menü entegrasyonu",
                "Hazır → garson bildirim akışı",
                "Günlük otomatik ciro raporu",
                "Stok uyarı bildirimi",
                "Özel menü kategorileri",
                "Aylık performans raporu",
                "7/24 öncelikli destek"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal text-white">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 6l2.5 2.5L9.5 4" />
                    </svg>
                  </span>
                  <span className="text-body-text font-medium text-[16px]">{item}</span>
                </li>
              ))}
            </ul>

            <a href="https://wa.me/905316745900" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-gold text-navy font-extrabold text-lg hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(200,164,90,0.3)] transition-all text-center inline-block">
              14 Gün Ücretsiz Başlayın
            </a>
          </motion.div>
        </div>

        {/* Free trial badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-12 flex justify-center will-change-transform"
        >
          <div className="inline-flex items-center gap-2 rounded-[6px] border-l-[3px] border-teal bg-teal/[0.08] px-6 py-2.5 text-sm font-medium text-teal">
            ✨ Beğenmezseniz iptal edin. Ödeme yok
          </div>
        </motion.div>
      </div>
    </section>
  );
}
