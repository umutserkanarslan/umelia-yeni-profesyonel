'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqItems = [
  {
    q: 'Müşterilerim WhatsApp kullanmıyorsa ne olacak?',
    a: "Bodrum'a gelen turistlerin büyük çoğunluğu WhatsApp kullanıyor → özellikle Avrupalı ve Rus turistler. Ama AI Instagram DM ve SMS entegrasyonuyla da genişletilebilir. Kullanmayan müşteriler için telefonla rezervasyon her zamanki gibi devam eder. Sistem ek bir kanal, mevcut hizmetin yerine geçmez.",
  },
  {
    q: 'AI yanlış bilgi toplarsa ne olur?',
    a: 'AI her zaman özet gösterip onay alıyor. Müşteri onaylamadan hiçbir rezervasyon kaydedilmez. Ayrıca eksik bilgi kontrolü sayesinde soyad, saat, kişi sayısı gibi kritik alanlar mutlaka tamamlanıyor.',
  },
  {
    q: 'Kurulum ne kadar sürüyor?',
    a: 'Menü, mekan bilgileri ve çalışma saatlerinizi aldıktan sonra ortalama 3-5 iş günü içinde sisteminiz aktif olur. Kurulum sırasında operasyonunuz etkilenmez.',
  },
  {
    q: 'Mevcut rezervasyon sistemime entegre olabiliyor mu?',
    a: 'Evet. Mevcut takvim ve restoran yönetim sisteminizle entegre çalışır. Altyapınıza göre özelleştirilir.',
  },
  {
    q: 'İptal etmek istersem?',
    a: 'Aylık abonelik bazlı çalışırız, sözleşme yok. Deneme sonrası devam etmek istemezseniz tek bir mesajla iptal edebilirsiniz → taahhüt yoktur.',
  },
  {
    q: 'Müşteri daha önce gelmiş biriyse ne oluyor?',
    a: 'AI konuşma hafızasıyla müşteriyi tanır. Tekrar yazdığında adını, tercihlerini ve geçmiş rezervasyonlarını hatırlar → kişisel bir deneyim sunar.',
  },
  {
    q: 'Aylık ücret dışında ek maliyet var mı?',
    a: 'Hayır. Aylık abonelik ve tek seferlik kurulum bedeli dışında ek ücret yoktur. Güncelleme, bakım ve teknik destek aylık ücrete dahildir.'
  },
  {
    q: 'Beğenmezsem iptal edebilir miyim?',
    a: 'Elbette. 14 günlük ücretsiz deneme süresinde hiçbir ücret alınmaz. Deneme sonrası devam etmek istemezseniz tek bir mesajla iptal edebilirsiniz, taahhüt yoktur.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="bg-white py-28 md:py-32 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left title — 35% */}
          <motion.div
            className="lg:w-[35%] shrink-0 will-change-transform"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-navy text-[28px] lg:text-[32px] mb-3 sticky top-28">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-muted text-base lg:sticky lg:top-40">
              Merak ettiklerinizin cevapları burada.
            </p>
          </motion.div>

          {/* Right accordion — 65% */}
          <div className="lg:w-[65%] rounded-[20px] overflow-hidden bg-[#F7F5F0]">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border-b border-[#E0DDD5] last:border-b-0 px-5 will-change-transform"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-navy font-medium text-[16px] pr-4">
                    {item.q}
                  </span>
                  <span className="shrink-0 text-gold text-xl font-light leading-none w-5 text-center">
                    {openIndex === i ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#5A6A7E] text-[14px] leading-[1.7] pb-5">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
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
