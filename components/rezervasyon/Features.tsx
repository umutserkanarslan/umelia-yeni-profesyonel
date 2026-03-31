"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Çoklu Dil, Otomatik Algılama",
    desc: "Müşteri hangi dilde yazarsa yazsın, AI kendi dilinde yanıt verir. Türkçe, İngilizce, Rusça, Almanca, Arapça ve çok daha fazlası.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
  {
    title: "Doğal Tarih Anlama",
    desc: "Müşteri 'yarın', 'cumartesi' veya '15 Mart' yazdığında AI otomatik olarak doğru tarihe çevirir.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: "Konuşma Hafızası",
    desc: "Müşteri tekrar yazdığında önceki bilgilerini hatırlar. İsim, tercih, geçmiş rezervasyonlar — her şey kayıtlı.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        <path d="M8 10h8M8 14h5"/>
      </svg>
    ),
  },
  {
    title: "Eksik Bilgi Kontrolü",
    desc: "Soyad verilmediyse tekrar sorar, mekan belirtilmediyse netleştirir. Eksik bilgiyle rezervasyon kaydedilmez.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
  },
  {
    title: "Onay Akışı",
    desc: "Tüm bilgiler toplandığında müşteriye güzel bir özet gösterip onay alınır. Yanlış bilgi kaydedilmez.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
  {
    title: "Anlık Bildirim",
    desc: "Her yeni rezervasyonda anlık bildirim alırsınız: müşteri adı, tarih, saat, kişi sayısı, mekan tercihi, özel istek.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
        <line x1="12" y1="2" x2="12" y2="4"/>
      </svg>
    ),
  },
];

const colSpans = [
  "md:col-span-3",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-2",
];

export default function Features() {
  return (
    <section id="ozellikler" className="bg-white py-[120px]">
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
            <span className="text-gold text-[11px] uppercase tracking-[0.22em] font-plus-jakarta font-semibold">Özellikler</span>
          </div>
          <h2 className="text-navy text-[36px] md:text-[44px] font-plus-jakarta font-[800] leading-[1.1] tracking-tight mb-[16px]">
            Neden bu sistem?
          </h2>
          <p className="text-[#5A6A7E] text-[16px] leading-[1.65] max-w-[420px]">
            Her özellik, gerçek restoran ihtiyaçlarından doğdu.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[16px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
              className={`${colSpans[i]} group bg-[#ECEAE4] border border-[#DDD9D0] rounded-[16px] p-[36px] transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[rgba(200,164,90,0.4)] hover:bg-white hover:-translate-y-[4px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] will-change-transform`}
            >
              <div className="w-[48px] h-[48px] rounded-[10px] bg-teal/[0.1] flex items-center justify-center mb-[24px] transition-colors duration-300 group-hover:bg-teal/[0.15]">
                {feature.icon}
              </div>
              <h3 className="font-plus-jakarta font-[700] text-navy text-[19px] mb-[12px] leading-[1.3]">
                {feature.title}
              </h3>
              <p className="text-[#5A6A7E] text-[15px] leading-[1.7]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave to navy LiveDemo */}
      <div className="mt-[120px]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 0V40C240 80 480 80 720 50C960 20 1200 0 1440 30V0H0Z" fill="#FFFFFF" />
          <path d="M0 40C240 80 480 80 720 50C960 20 1200 0 1440 30V80H0V40Z" fill="#0A1628" />
        </svg>
      </div>
    </section>
  );
}
