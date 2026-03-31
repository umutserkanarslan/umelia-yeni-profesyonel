"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Garson Bekleme Yok",
    desc: "Müşteri doğrudan sipariş veriyor. Garsonun sipariş almasını beklemeye gerek yok — masa devir hızı artar.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "Dinamik Menü",
    desc: "Menüyü istediğiniz zaman güncelleyin. Tükenmiş ürünü kapatın, fiyat değişikliğini anında yansıtın.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
  {
    title: "Anlık Mutfak Bildirimi",
    desc: "Sipariş onaylanır onaylanmaz mutfak bildirim alır: masa numarası, ürünler, adetler, özel notlar.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
  },
  {
    title: "Sipariş Hatası Sıfır",
    desc: "Müşteri kendi siparişini giriyor. Yanlış anlama, karalanmış not yok — mutfak tam siparişi görür.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    title: "Günlük Ciro Raporu",
    desc: "Gün sonunda otomatik rapor: toplam sipariş, en çok satılan ürünler, masa bazlı ciro.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
  {
    title: "Çoklu Dil Desteği",
    desc: "Menü otomatik olarak müşterinin tercih ettiği dile çevrilir. Yabancı turistler rahatça sipariş verir.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
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
