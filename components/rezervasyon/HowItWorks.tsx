'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: 1,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
        <path d="M8 6h8M8 10h5"/>
      </svg>
    ),
    title: 'Müşteri Yazıyor',
    desc: "Müşteri restoranın WhatsApp numarasına mesaj atar → uygulama indirmeye gerek yok.",
  },
  {
    num: 2,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M12 7l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5L7 10.5l3.5-.5z" fill="#2A9D8F" opacity="0.3"/>
      </svg>
    ),
    title: 'AI Bilgi Topluyor',
    desc: 'AI sıcak bir şekilde ad, tarih, saat, kişi sayısı ve mekan tercihini sorar.',
  },
  {
    num: 3,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: 'Özet ve Onay',
    desc: 'Tüm bilgiler toplandığında müşteriye özet gösterilir, onay istenir.',
  },
  {
    num: 4,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: 'Otomatik Kayıt',
    desc: "Onaylanan rezervasyon anında kaydedilir, müşteri profili oluşturulur.",
  },
  {
    num: 5,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    title: 'Size Bildirim',
    desc: "Anlık bildirim alırsınız: müşteri adı, tarih, saat, kişi sayısı, özel istek.",
  },
]

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="bg-off-white py-28 md:py-32 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-16 will-change-transform"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-navy text-3xl lg:text-[40px] mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-muted text-lg max-w-[500px] mx-auto">
            Müşteriden rezervasyon, size bildirim → 5 adımda.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting dashed line - horizontal on desktop, vertical on mobile */}
          <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gold/30 z-0" />
          <div className="lg:hidden absolute left-[36px] top-[60px] bottom-[60px] w-[2px] border-l-2 border-dashed border-gold/30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group will-change-transform"
              >
                <div className="bg-white rounded-[20px] border border-border-warm shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-7 lg:p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-t-[3px] hover:border-t-gold h-full flex flex-col items-center">
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full bg-gold text-navy font-[family-name:var(--font-heading)] font-bold text-lg flex items-center justify-center mb-4 shadow-[0_0_0_4px_rgba(200,164,90,0.2)]">
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">{step.icon}</div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-navy text-lg mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted text-[15px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
