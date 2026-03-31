"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Müşteri Yazıyor",
    desc: "Müşteri restoranın WhatsApp numarasına mesaj atar — uygulama indirmeye gerek yok.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    title: "AI Bilgi Topluyor",
    desc: "AI sıcak bir şekilde ad, tarih, saat, kişi sayısı ve mekan tercihini sorar.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    title: "Özet ve Onay",
    desc: "Tüm bilgiler toplandığında müşteriye özet gösterilir, onay istenir.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
  {
    title: "Otomatik Kayıt",
    desc: "Onaylanan rezervasyon anında kaydedilir, müşteri profili oluşturulur.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    title: "Size Bildirim",
    desc: "Anlık bildirim alırsınız: müşteri adı, tarih, saat, kişi sayısı, özel istek.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
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
            Müşteriden rezervasyon, size bildirim — 5 adımda.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[3px] bg-[rgba(200,164,90,0.25)] rounded-[20px] overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
              className="bg-[#F7F5F0] hover:bg-white transition-colors duration-300 p-[36px] md:p-[40px] flex flex-col will-change-transform group"
            >
              <span className="text-[80px] font-[800] leading-none text-gold/60 tracking-tighter font-plus-jakarta mb-[20px] select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-[44px] h-[44px] rounded-[10px] bg-teal/[0.1] flex items-center justify-center mb-[20px] shrink-0 transition-colors duration-300 group-hover:bg-teal/[0.15]">
                {step.icon}
              </div>
              <h3 className="font-plus-jakarta font-[700] text-navy text-[21px] mb-[10px] leading-[1.3]">
                {step.title}
              </h3>
              <p className="text-[#5A6A7E] text-[16px] leading-[1.7]">
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
