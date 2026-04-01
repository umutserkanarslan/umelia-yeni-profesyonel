'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section
      id="iletisim"
      className="bg-navy noise-bg py-28 md:py-32 lg:py-36 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
          <div className="h-[400px] w-[600px] rounded-full bg-gold/[0.06] blur-[100px]" />
        </div>
      </div>

      <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3 }}
          className="will-change-transform"
        >
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-white text-[34px] md:text-[42px] lg:text-[48px] leading-[1.15] mb-5 tracking-tight">
            14 Gün Ücretsiz Deneyin,<br />
            <span className="text-gold block mt-2 font-bold">Farkı Görün</span>
          </h2>
          <p className="text-[#a1a1aa] text-[15px] md:text-base mb-12 leading-[1.6] max-w-[500px] mx-auto">
            Ücretsiz demo ile sistemi test edin. Ekibiniz daha mutlu,<br className="hidden md:block"/>misafirleriniz daha memnun.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 will-change-transform"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <a
            href="https://wa.me/905316745900"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#C8A45A] text-[#111] font-[family-name:var(--font-heading)] font-semibold text-[15px] px-8 h-14 rounded-xl hover:scale-[1.02] transition-all w-full sm:w-[220px]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            Ücretsiz Deneyin
          </a>
          <a
            href="tel:+905316745900"
            className="flex items-center justify-center gap-2.5 border border-white/10 bg-[#161b22]/50 text-white font-[family-name:var(--font-heading)] font-semibold text-[15px] px-8 h-14 rounded-xl hover:bg-white/5 transition-all w-full sm:w-[220px]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Hemen Arayın
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 will-change-transform"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {[
            { icon: '🔒', text: 'KVKK Uyumlu' },
            { icon: '⚡', text: '3-5 Günde Hazır' },
            { icon: '🎯', text: '14 gün ücretsiz' },
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-[#a1a1aa] font-medium text-[14px] md:text-[15px]">
              <span className="text-lg leading-none">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
