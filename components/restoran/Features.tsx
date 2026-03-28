"use client";

import { motion } from "framer-motion";
import { QrCode, RefreshCcw, BellRing, ArrowRightSquare, MessageSquare, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Her Masaya Özel QR Kod",
    desc: "Her masanın kendine özel QR kodu var → masa numarası otomatik tanınır. Müşteri hiçbir şey girmez, tarar ve başlar.",
    icon: QrCode,
  },
  {
    title: "Dinamik Menü",
    desc: "Menüyü istediğiniz zaman güncelleyin → fiyat, ürün, açıklama. Değişiklik anında sisteme yansır.",
    icon: RefreshCcw,
  },
  {
    title: "Mutfağa Formatlanmış Bildirim",
    desc: "Mutfağa düzenli bildirim düşer: masa numarası, sipariş kalemleri, adetler, notlar ve saat.",
    icon: BellRing,
  },
  {
    title: "Hazır → Garsona Bildirim",
    desc: "Mutfak 'Hazır' butonuna basınca garsona anlık servis bildirimi gider. Sipariş masada soğumaz.",
    icon: ArrowRightSquare,
  },
  {
    title: "Müşteriye WhatsApp Onay",
    desc: "Sipariş verildiğinde müşteriye otomatik onay ve tahmini süre gider. Müşteri ne zaman geleceğini bilir.",
    icon: MessageSquare,
  },
  {
    title: "Günlük Ciro Raporu",
    desc: "Gün sonunda otomatik ciro özeti → en çok satan ürünler, toplam sipariş ve gelir. Rapor doğrudan size ulaşır.",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section id="ozellikler" className="bg-white py-28 md:py-32 lg:py-36 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16 md:mb-20 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="text-navy font-[family-name:var(--font-heading)] font-extrabold text-3xl md:text-[40px] mb-4 will-change-transform"
          >
            Neden Bu Sistem?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-muted text-lg md:text-[18px] will-change-transform"
          >
            Her özellik, gerçek restoran ihtiyaçlarından doğdu.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex flex-col sm:flex-row gap-5 bg-[#F9F7F3] p-7 md:p-8 rounded-2xl border border-border-warm shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-gold hover:scale-[1.01] transition-all duration-300 will-change-transform"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal/[0.12] flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                <feature.icon className="text-teal group-hover:text-white w-7 h-7 transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-navy font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-[#4A4A4A] text-[15px] leading-[1.65]">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Wave down to Live Demo (Navy) */}
      <div className="mt-28 md:mt-32">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 0V40C240 80 480 80 720 50C960 20 1200 0 1440 30V0H0Z" fill="#FFFFFF" />
          <path d="M0 40C240 80 480 80 720 50C960 20 1200 0 1440 30V80H0V40Z" fill="#0A1628" />
        </svg>
      </div>
    </section>
  );
}
