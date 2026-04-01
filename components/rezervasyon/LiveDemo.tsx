'use client'

import { motion } from 'framer-motion'
import WhatsAppMockup from './WhatsAppMockup'

const demoMessages = [
  {
    type: 'incoming' as const,
    text: 'Merhaba, bu cumartesi akşam 6 kişi için yer var mı?',
    time: '14:32',
  },
  {
    type: 'outgoing' as const,
    text: 'Merhaba! 🌅 Cumartesi akşam için bakalım hemen. Adınızı ve soyadınızı alabilir miyim?',
    time: '14:32',
    showAiBadge: true,
  },
  {
    type: 'incoming' as const,
    text: 'Ayşe Kara',
    time: '14:33',
  },
  {
    type: 'outgoing' as const,
    text: 'Teşekkürler Ayşe Hanım! Saat tercihiniz nedir? 19:00 - 23:00 arası müsaitliğimiz mevcut.',
    time: '14:33',
    showAiBadge: true,
  },
  {
    type: 'incoming' as const,
    text: '21:00 olsun, beach tarafı olursa çok iyi olur',
    time: '14:34',
  },
  {
    type: 'outgoing' as const,
    text: 'Harika seçim! 🏖️ İşte rezervasyon özetiniz:\n\n👤 Ayşe Kara\n📅 22 Mart 2025, Cumartesi\n🕘 21:00\n👥 6 kişi\n📍 Beach bölümü\n💬 Özel istek: Yok\n\nHer şey doğru mu? Onaylıyor musunuz? ✅',
    time: '14:34',
    showAiBadge: true,
  },
  {
    type: 'incoming' as const,
    text: 'Evet onaylıyorum 👍',
    time: '14:35',
  },
  {
    type: 'outgoing' as const,
    text: "Rezervasyonunuz onaylandı! 🎉 22 Mart Cumartesi saat 21:00'de beach bölümünde 6 kişilik masanız hazır olacak. Görüşmek üzere Ayşe Hanım!",
    time: '14:35',
    showAiBadge: true,
  },
]

export default function LiveDemo() {
  return (
    <section className="bg-navy noise-bg py-28 md:py-32 lg:py-36 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16 will-change-transform"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-white text-3xl lg:text-[36px] mb-4">
            <em className="not-italic font-extrabold italic">Gerçek</em> Bir Rezervasyonu İzleyin
          </h2>
          <p className="text-light-gray text-lg max-w-[600px] mx-auto">
            Müşteri yazıyor, AI bilgi topluyor, siz bildirim alıyorsunuz → hepsi saniyeler içinde.
          </p>
        </motion.div>

        {/* Content: WhatsApp + Arrow + Telegram */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-4">
          {/* WhatsApp Chat - Left 55% */}
          <motion.div
            className="w-full lg:w-[55%] will-change-transform"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3 }}
          >
            <WhatsAppMockup messages={demoMessages} variant="desktop" />
          </motion.div>

          {/* Middle Arrow */}
          <motion.div
            className="flex flex-col items-center justify-center py-4 lg:py-0 lg:px-2 will-change-transform"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <p className="text-light-gray text-xs text-center mb-3 max-w-[120px] leading-tight">
              Bu sırada sizin ekranınızda...
            </p>
            {/* Arrow - rotates on mobile */}
            <div className="animate-pulse-arrow text-gold">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="lg:rotate-0 rotate-90">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </motion.div>

          {/* Telegram Notification - Right 45% */}
          <motion.div
            className="w-full lg:w-[45%] flex items-center will-change-transform"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <div
              className="bg-[#1A2A3A] rounded-2xl p-6 w-full border border-white/10"
              style={{ boxShadow: '0 0 60px rgba(200,164,90,0.12)' }}
            >
              {/* Telegram header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#2AABEE] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .664-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Rezervasyon Bildirimi</p>
                  <p className="text-light-gray text-xs">UMELIA Bot</p>
                </div>
              </div>

              {/* Notification content */}
              <div className="space-y-2.5">
                {[
                  { emoji: '🔔', text: 'YENİ REZERVASYON', bold: true },
                  { emoji: '👤', text: 'Müşteri: Ayşe Kara' },
                  { emoji: '📅', text: 'Tarih: 22 Mart 2025, Cumartesi' },
                  { emoji: '🕘', text: 'Saat: 21:00' },
                  { emoji: '👥', text: 'Kişi: 6' },
                  { emoji: '📍', text: 'Mekan: Beach bölümü' },
                  { emoji: '💬', text: 'Özel İstek: —' },
                  { emoji: '⏰', text: 'Kayıt: 14:45' },
                ].map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                    className={`text-sm will-change-transform ${line.bold ? 'text-gold font-bold text-base' : 'text-gray-300'}`}
                  >
                    {line.emoji} {line.text}
                  </motion.p>
                ))}
              </div>

              {/* Timestamp */}
              <p className="text-light-gray/50 text-xs mt-4 text-right">14:45</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 40C360 90 720 70 1080 40C1260 25 1380 10 1440 20V80H0V40Z" fill="#F7F5F0" />
        </svg>
      </div>
    </section>
  )
}
