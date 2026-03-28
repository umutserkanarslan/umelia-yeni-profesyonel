'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        <path d="M8 6h0M16 18h0" fill="#2A9D8F"/>
      </svg>
    ),
    title: 'Çoklu Dil, Otomatik Algılama',
    desc: 'Müşteri hangi dilde yazarsa yazsın, AI kendi dilinde yanıt verir. Türkçe, İngilizce, Rusça, Almanca, Arapça ve çok daha fazlası.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <circle cx="12" cy="15" r="2" fill="#2A9D8F" opacity="0.3"/>
      </svg>
    ),
    title: 'Doğal Tarih Anlama',
    desc: "Müşteri 'yarın', 'cumartesi' veya '15 Mart' yazdığında AI otomatik olarak doğru tarihe çevirir.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 3.6-2.4 6.6-5.7 8.1L12 22l-3.3-2.9C5.4 17.6 3 14.6 3 11a9 9 0 0 1 9-9z"/>
        <circle cx="12" cy="11" r="3"/>
        <path d="M9 8l1.5 3 3 .5-2 2 .5 3L9 15" opacity="0.3" fill="#2A9D8F"/>
      </svg>
    ),
    title: 'Konuşma Hafızası',
    desc: 'Müşteri tekrar yazdığında önceki bilgilerini hatırlar. İsim, tercih, geçmiş rezervasyonlar → her şey kayıtlı.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
    title: 'Eksik Bilgi Kontrolü',
    desc: 'Soyad verilmediyse tekrar sorar, mekan belirtilmediyse netleştirir. Eksik bilgiyle rezervasyon kaydedilmez.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: 'Onay Akışı',
    desc: 'Tüm bilgiler toplandığında müşteriye güzel bir özet gösterip onay alınır. Yanlış bilgi kaydedilmez.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        <line x1="12" y1="2" x2="12" y2="4"/>
        <path d="M20 4l-2 2M4 4l2 2" opacity="0.5"/>
      </svg>
    ),
    title: 'Anlık Bildirim',
    desc: "Her yeni rezervasyonda anlık bildirim alırsınız: müşteri adı, tarih, saat, kişi sayısı, mekan tercihi, özel istek.",
  },
]

export default function Features() {
  return (
    <section id="ozellikler" className="bg-white py-28 md:py-32 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title — left aligned */}
        <motion.div
          className="mb-14 max-w-lg will-change-transform"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-navy text-3xl lg:text-[40px] mb-4">
            Neden Bu Sistem?
          </h2>
          <p className="text-muted text-lg">
            Her özellik, gerçek restoran ihtiyaçlarından doğdu.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group bg-[#F9F7F3] border border-border-warm rounded-[20px] p-7 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:border-gold hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-all duration-300 will-change-transform"
            >
              <div className="flex items-start gap-5">
                {/* Icon circle */}
                <div className="shrink-0 w-14 h-14 rounded-full bg-teal/[0.12] flex items-center justify-center">
                  {feature.icon}
                </div>
                {/* Text */}
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-navy text-lg mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-[15px] leading-[1.65]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-28 md:mt-32">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 0V40C240 80 480 80 720 50C960 20 1200 0 1440 30V0H0Z" fill="#FFFFFF" />
          <path d="M0 40C240 80 480 80 720 50C960 20 1200 0 1440 30V80H0V40Z" fill="#0A1628" />
        </svg>
      </div>
    </section>
  )
}
