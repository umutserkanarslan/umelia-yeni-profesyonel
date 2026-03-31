"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Misafir Yazıyor",
    desc: "Misafir otelin WhatsApp numarasına mesaj atar — uygulama indirmeye gerek yok.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 36 36" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="3" width="18" height="30" rx="4" />
        <path d="M15 7h6" />
        <path d="M14 24h8M14 28h5" />
        <path d="M15 15.5l2 2 3.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Misafiri Tanıyor",
    desc: "Telefon numarasından misafiri tanıyor, oda numarası ve ismini eşleştiriyor.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 36 36" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="7" width="26" height="22" rx="4" />
        <circle cx="18" cy="16" r="4.5" />
        <path d="M12 26c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
  },
  {
    title: "AI Yanıtlıyor",
    desc: "AI misafirin dilinde, doğal ve sıcak bir üslupla anında yanıt verir.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 36 36" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 5l2.5 5 5.5.8-4 3.9 1 5.5L18 17.5l-5 2.7 1-5.5-4-3.9 5.5-.8z" />
        <path d="M9 23h18M11 27h14M13 31h10" />
      </svg>
    ),
  },
  {
    title: "Ekibiniz Bilgileniyor",
    desc: "Oda servisi, arıza gibi talepler ekibinize anlık iş emri olarak iletilir.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 36 36" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 5H12a3 3 0 00-3 3v20a3 3 0 003 3h12a3 3 0 003-3V11l-5-6z" />
        <path d="M22 5v6h5M14 18h8M14 22h8M14 26h4" />
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
            Misafirden talep, personelinize iş emri — 4 adımda.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-[rgba(200,164,90,0.1)] rounded-[20px] overflow-hidden">
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
