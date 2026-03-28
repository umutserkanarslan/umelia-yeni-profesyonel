'use client'

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import WhatsAppMockup from './WhatsAppMockup'

const heroMessages = [
  {
    type: 'incoming' as const,
    text: 'Merhaba, yarın akşam 4 kişilik rezervasyon yapabilir miyiz?',
    time: '14:28',
  },
  {
    type: 'outgoing' as const,
    text: 'Merhaba! 🌊 Tabii ki, yarın akşam için hemen ayarlayalım. Adınızı ve soyadınızı alabilir miyim?',
    time: '14:28',
    aiBadge: true,
  },
  {
    type: 'incoming' as const,
    text: 'Mehmet Yılmaz',
    time: '14:29',
  },
  {
    type: 'outgoing' as const,
    text: 'Teşekkürler Mehmet Bey! 📋 Saat tercihiniz nedir? Akşam 19:00 - 23:00 arası müsaitliğimiz var.',
    time: '14:29',
    aiBadge: true,
  },
  {
    type: 'incoming' as const,
    text: 'Biz 20:30 olalım, deniz kenarı masa olursa süper',
    time: '14:30',
  },
  {
    type: 'outgoing' as const,
    text: 'Harika! İşte rezervasyon özetiniz:\n\n👤 Mehmet Yılmaz\n📅 15 Mart 2025, Cumartesi\n🕐 20:30\n👥 4 kişi\n📍 Deniz kenarı masa\n\nOnaylıyor musunuz? ✅',
    time: '14:30',
    aiBadge: true,
  },
]

const metrics = [
  {
    value: "1.200+",
    label: "Rezervasyon Alındı",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    value: "7/24",
    label: "Kesintisiz Hizmet",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: "50+",
    label: "Dil Desteği",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

function AnimatedCounter({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!isInView) return;
    const match = target.match(/^(\d+)(.*)$/);
    if (!match) { setDisplay(target); return; }
    const numericValue = parseInt(match[1]);
    const textSuffix = match[2];
    const duration = 1500;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * numericValue);
      setDisplay(String(current) + textSuffix);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(target);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return <span ref={ref}>{display}</span>;
}

export default function Hero() {
  return (
    <section className="bg-navy noise-bg relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-teal/[0.06] blur-3xl" />
        <div className="absolute left-[5%] top-[60%] h-48 w-48 rounded-full bg-gold/[0.04] blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Left side - Text content (55%) */}
          <motion.div
            className="flex-[55] text-center md:text-left will-change-transform"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center border border-gold/50 text-gold text-xs font-medium px-4 py-1.5 rounded-full mb-6 will-change-transform"
            >
              Bodrum Restoranları & Beach Club'ları İçin
            </motion.div>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-heading)] font-extrabold text-[32px] md:text-[44px] lg:text-[54px] leading-[1.12] text-white max-w-[600px] mx-auto md:mx-0 mb-6">
              Rezervasyonlarınızı WhatsApp&apos;tan{' '}
              <span className="text-gold">Otomatik</span> Alın
            </h1>

            {/* Subheadline */}
            <p className="text-light-gray text-base md:text-lg lg:text-[19px] leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-8">
              Müşteriniz WhatsApp&apos;tan yazıyor, AI bilgileri topluyor, rezervasyon onaylanıyor → siz telefonla uğraşmıyorsunuz.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="https://wa.me/905316745900" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-transform hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(200,164,90,0.4)] active:scale-[0.98]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.37 0-4.557-.7-6.396-1.9l-.459-.296-2.652.889.889-2.652-.296-.459A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                Demo Talep Edin
              </a>
              <a href="#nasil-calisir" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-navy">
                Nasıl Çalışır? ↓
              </a>
            </div>
          </motion.div>

          {/* Right side - Phone Mockup (45%) */}
          <motion.div
            className="relative flex-[45] will-change-transform"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {/* Decorative dots behind phone */}
            <div className="absolute -top-10 -right-10 w-[200px] h-[200px] opacity-10 pointer-events-none z-0">
              <svg viewBox="0 0 200 200" fill="#2A9D8F">
                {Array.from({ length: 8 }).map((_, row) =>
                  Array.from({ length: 8 }).map((_, col) => (
                    <circle key={`${row}-${col}`} cx={12 + col * 25} cy={12 + row * 25} r="4" />
                  ))
                )}
              </svg>
            </div>

            <div className="animate-float relative z-10 mx-auto w-fit">
              <div className="rounded-[36px] border-[3px] border-white/10 bg-[#1a1a1a] p-2 shadow-[0_16px_60px_rgba(0,0,0,0.3)]">
                <div className="relative">
                  <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#1a1a1a]" />
                </div>
                <div className="overflow-hidden rounded-[28px]">
                  <WhatsAppMockup messages={heroMessages} statusText="✓ Rezervasyon kaydedildi" compact />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Proof inside Hero */}
      <div className="relative z-20 mx-auto max-w-[1200px] px-6 pb-36">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mx-auto flex w-fit flex-col items-center justify-center gap-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-10 py-8 backdrop-blur-sm md:flex-row md:gap-0 md:divide-x md:divide-white/[0.15] md:px-10 md:py-7 will-change-transform"
        >
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center gap-2 px-6 md:px-12 lg:px-16">
              <span className="text-gold">{metric.icon}</span>
              <span className="font-[family-name:var(--font-heading)] text-[40px] font-extrabold text-white md:text-[48px]">
                <AnimatedCounter target={metric.value} />
              </span>
              <span className="text-center text-sm text-light-gray">{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 60C240 120 480 120 720 80C960 40 1200 0 1440 40V120H0V60Z" fill="#F7F5F0" />
        </svg>
      </div>
    </section>
  )
}
