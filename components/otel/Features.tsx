"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Çoklu Dil, Otomatik Algılama",
    desc: "Misafir hangi dilde yazarsa yazsın sistem kendi dilinde yanıtlar. Türkçe, İngilizce, Rusça, Almanca, Arapça ve çok daha fazlası.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="11" />
        <line x1="3" y1="14" x2="25" y2="14" />
        <path d="M14 3a17 17 0 014.5 11A17 17 0 0114 25a17 17 0 01-4.5-11A17 17 0 0114 3z" />
      </svg>
    ),
  },
  {
    title: "Sadece Doğru Bilgi",
    desc: "AI sadece sizin tanımladığınız bilgilerle yanıt verir. Kahvaltı saati, WiFi şifresi, havuz saatleri — hepsi doğru, hepsi güncel.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V7l9-4z" />
        <path d="M10 14l2.5 2.5L17 12" />
      </svg>
    ),
  },
  {
    title: "Misafiri Otomatik Tanır",
    desc: "Telefon numarasından misafiri tanır, adını ve odasını bilir. Her misafir kişisel bir karşılama alır.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="10" r="4" />
        <path d="M7 23c0-4 3.1-7 7-7s7 3 7 7" />
      </svg>
    ),
  },
  {
    title: "Akıllı Mesaj Birleştirme",
    desc: "Misafir peş peşe 5 mesaj atsa bile hepsi tek talep olarak algılanır. Ekibiniz gereksiz bildirimlerle boğulmaz.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="12" rx="2" />
        <rect x="8" y="12" width="16" height="12" rx="2" />
      </svg>
    ),
  },
  {
    title: "Ekibinize Anlık İş Emri",
    desc: "Oda servisi, ekstra yastık, teknik arıza — talep geldiğinde ekibinize formatlanmış iş emri düşer: misafir adı, oda numarası, talep detayı.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6H8a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V12l-4-6z" />
        <path d="M18 6v6h4M10 16h8M10 20h5" />
      </svg>
    ),
  },
  {
    title: "Spam Koruması",
    desc: "Dakikada 5'ten fazla mesaj gönderen numaralar otomatik filtrelenir. Sisteminiz trollerden ve spam'dan korunur.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V7l9-4z" />
        <path d="M10 14l4-4M14 14l-4-4" />
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
            Her özellik, gerçek otel ihtiyaçlarından doğdu.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[20px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
              className={`${colSpans[i]} group bg-[#E5E2D9] border border-[#C8C4B8] rounded-[16px] p-[36px] transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[rgba(200,164,90,0.4)] hover:bg-white hover:-translate-y-[4px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] will-change-transform`}
            >
              <div className="w-[48px] h-[48px] rounded-[10px] bg-teal/[0.1] flex items-center justify-center mb-[24px] transition-colors duration-300 group-hover:bg-teal/[0.15]">
                {feature.icon}
              </div>
              <h3 className="font-plus-jakarta font-[700] text-navy text-[22px] mb-[12px] leading-[1.3]">
                {feature.title}
              </h3>
              <p className="text-[#5A6A7E] text-[16px] leading-[1.7]">
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
