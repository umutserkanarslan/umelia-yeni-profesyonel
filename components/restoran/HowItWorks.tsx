"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "QR Kodu Tara",
    desc: "Müşteri masadaki QR kodu telefonuyla tarar — uygulama indirmeye gerek yok.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        <rect x="14" y="14" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/>
      </svg>
    ),
  },
  {
    title: "Menüden Seç",
    desc: "Dinamik menüden ürün seçer, adet belirler, özel not ekler — acısız olsun, buz istiyorum.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/><path d="M13 13h4M13 17h4"/>
      </svg>
    ),
  },
  {
    title: "Sipariş Gönder",
    desc: "Sipariş butonuna basar — sipariş otomatik kaydedilir, mutfağa anında bildirim düşer.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    ),
  },
  {
    title: "Mutfak Hazırlıyor",
    desc: "Mutfak formatlanmış sipariş alır: masa no, ürünler, adetler, özel notlar.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 13.87A4 4 0 017.41 6a5.11 5.11 0 01 1.05-1.54 5 5 0 017.08 0A5.11 5.11 0 0116.59 6 4 4 0 0118 13.87V21H6z"/>
        <line x1="6" y1="17" x2="18" y2="17"/>
      </svg>
    ),
  },
  {
    title: "Hazır Bildirimi",
    desc: "Mutfak hazır butonuna basınca garsona anlık servis bildirimi gider.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    title: "Otomatik Ciro Raporu",
    desc: "Gün sonunda işletme sahibine günlük ciro özeti otomatik gönderilir.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="bg-[#F7F5F0] py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="mb-[64px] will-change-transform"
        >
          <div className="flex items-center gap-[12px] mb-[20px]">
            <div className="w-[28px] h-[1px] bg-gold opacity-50" />
            <span className="text-gold text-[11px] uppercase tracking-[0.22em] font-plus-jakarta font-semibold">Süreç</span>
          </div>
          <h2 className="text-navy text-[36px] md:text-[44px] font-plus-jakarta font-[800] leading-[1.1] tracking-tight mb-[16px]">
            Nasıl çalışır?
          </h2>
          <p className="text-[#5A6A7E] text-[16px] leading-[1.65] max-w-[420px]">
            QR koddan masaya servis — 6 adımda.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[rgba(200,164,90,0.1)] rounded-[20px] overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
              className="bg-[#F7F5F0] hover:bg-white transition-colors duration-300 p-[36px] md:p-[40px] flex flex-col will-change-transform group"
            >
              <span className="text-[64px] font-[800] leading-none text-gold/40 tracking-tighter font-plus-jakarta mb-[20px] select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-[44px] h-[44px] rounded-[10px] bg-teal/[0.1] flex items-center justify-center mb-[20px] shrink-0 transition-colors duration-300 group-hover:bg-teal/[0.15]">
                {step.icon}
              </div>
              <h3 className="font-plus-jakarta font-[700] text-navy text-[18px] mb-[10px] leading-[1.3]">
                {step.title}
              </h3>
              <p className="text-[#5A6A7E] text-[15px] leading-[1.7]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave to navy LiveDemo */}
      <div className="mt-[120px]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 0V40C240 80 480 80 720 50C960 20 1200 0 1440 30V0H0Z" fill="#F7F5F0" />
          <path d="M0 40C240 80 480 80 720 50C960 20 1200 0 1440 30V80H0V40Z" fill="#0A1628" />
        </svg>
      </div>
    </section>
  );
}
