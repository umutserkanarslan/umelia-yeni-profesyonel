'use client'

import { motion } from 'framer-motion'

const CheckIcon = () => (
  <div className="shrink-0 w-5 h-5 rounded-full bg-teal flex items-center justify-center">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  </div>
)

export default function Pricing() {
  return (
    <section id="fiyatlandirma" className="bg-off-white py-28 md:py-32 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-16 will-change-transform"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-navy text-3xl lg:text-[36px] mb-4">
            Şeffaf Fiyatlandırma
          </h2>
          <p className="text-muted text-lg">
            Gizli maliyet yok. Ne alacağınızı biliyorsunuz.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {/* Card 1 — Başlangıç */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-[20px] border border-border-warm shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 will-change-transform"
          >
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-navy text-[22px] mb-6">Başlangıç</h3>

            <div className="mb-2">
              <span className="text-navy text-[28px] font-[family-name:var(--font-body)]">₺</span>
              <span className="font-[family-name:var(--font-heading)] font-extrabold text-navy text-[44px] leading-none">7.999</span>
              <span className="text-muted text-sm ml-1">/ay</span>
            </div>
            <p className="text-muted text-sm mb-6">+ ₺7.999 kurulum bedeli (tek seferlik)</p>

            <div className="border-t border-border-warm pt-6 space-y-3.5 mb-8">
              {[
                'WhatsApp Rezervasyon Botu',
                'Çoklu dil desteği',
                'Otomatik kayıt entegrasyonu',
                'Anlık bildirim',
                'Temel onay akışı',
                'Hafta içi destek',
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-body-text text-[15px]">{feat}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/905316745900"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border-2 border-navy text-navy font-[family-name:var(--font-heading)] font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-navy hover:text-white transition-all duration-300"
            >
              14 Gün Ücretsiz Başlayın
            </a>
          </motion.div>

          {/* Card 2 — Profesyonel (Recommended) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="bg-white rounded-[20px] border-2 border-gold shadow-[0_12px_48px_rgba(0,0,0,0.1)] p-8 relative -translate-y-0 md:-translate-y-3 will-change-transform"
            style={{
              background: 'linear-gradient(to bottom, rgba(200,164,90,0.06) 0%, transparent 30%), white',
            }}
          >
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy font-[family-name:var(--font-heading)] font-bold text-xs px-5 py-1.5 rounded-[6px] shadow-md">
              Tavsiye Edilen
            </div>

            <h3 className="font-[family-name:var(--font-heading)] font-bold text-navy text-[22px] mb-6 mt-2">Profesyonel</h3>

            <div className="mb-2">
              <span className="text-navy text-[28px] font-[family-name:var(--font-body)]">₺</span>
              <span className="font-[family-name:var(--font-heading)] font-extrabold text-navy text-[44px] leading-none">9.999</span>
              <span className="text-muted text-sm ml-1">/ay</span>
            </div>
            <p className="text-muted text-sm mb-6">+ ₺7.999 kurulum bedeli (tek seferlik)</p>

            <div className="border-t border-border-warm pt-6 space-y-3.5 mb-8">
              {[
                'Çoklu dil desteği',
                'Konuşma hafızası',
                'Doğal tarih yorumlama',
                'Eksik bilgi kontrolü',
                'Müşteri profili ve geçmiş',
                'Aylık performans raporu',
                '7/24 öncelikli destek',
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-body-text text-[15px]">{feat}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/905316745900"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gold text-navy font-[family-name:var(--font-heading)] font-bold text-[15px] px-6 py-4 rounded-xl hover:shadow-[0_8px_28px_rgba(200,164,90,0.18)] hover:-translate-y-[2px] hover:scale-[1.02] transition-all duration-300"
            >
              14 Gün Ücretsiz Başlayın
            </a>
          </motion.div>
        </div>

        {/* Trial badge */}
        <motion.div
          className="mt-10 flex justify-center will-change-transform"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <div className="inline-flex items-center gap-2 bg-teal/[0.08] border-l-[3px] border-teal text-teal text-sm font-medium px-5 py-2.5 rounded-r-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            ✨ Beğenmezseniz iptal edin. Ödeme yok
          </div>
        </motion.div>
      </div>
    </section>
  )
}
