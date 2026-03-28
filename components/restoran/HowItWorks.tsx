"use client";

import { motion } from "framer-motion";
import { ScanLine, MenuSquare, Send, ChefHat, CheckCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "QR Kodu Tara",
    desc: "Müşteri masadaki QR kodu telefonuyla tarar → uygulama indirmeye gerek yok.",
    icon: ScanLine,
  },
  {
    id: 2,
    title: "Menüden Seç",
    desc: "Dinamik menüden ürün seçer, adet belirler, özel not ekler: 'acısız olsun', 'buz istiyorum'.",
    icon: MenuSquare,
  },
  {
    id: 3,
    title: "Sipariş Gönder",
    desc: "Sipariş butonuna basar → sipariş otomatik kaydedilir, mutfağa anında bildirim düşer.",
    icon: Send,
  },
  {
    id: 4,
    title: "Mutfak Hazırlıyor",
    desc: "Mutfak formatlanmış sipariş alır: masa no, ürünler, adetler, notlar.",
    icon: ChefHat,
  },
  {
    id: 5,
    title: "Hazır Bildirimi",
    desc: "Mutfak 'Hazır' butonuna basınca garsona anlık servis bildirimi gider.",
    icon: CheckCircle,
  },
  {
    id: 6,
    title: "Otomatik Ciro Raporu",
    desc: "Gün sonunda işletme sahibine günlük ciro özeti otomatik gönderilir.",
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="bg-off-white py-28 md:py-32 lg:py-36 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 md:mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="text-navy font-[family-name:var(--font-heading)] font-extrabold text-3xl md:text-[40px] mb-4 will-change-transform"
          >
            Nasıl Çalışır?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-muted text-lg md:text-[18px] max-w-[500px] mx-auto will-change-transform"
          >
            QR koddan masaya servis — 6 adımda.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop/Tablet */}
          <div className="absolute top-[32px] md:top-[68px] lg:top-[32px] left-0 w-full h-[2px] border-t-2 border-dashed border-gold/[0.4] hidden md:block z-0 transform -translate-y-1/2" />
          
          {/* Vertical Connecting Line for Mobile */}
          <div className="absolute top-0 left-[24px] w-[2px] h-full border-l-2 border-dashed border-gold/[0.4] md:hidden z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-x-6 md:gap-y-16 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -10, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-white rounded-[20px] p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-border-warm hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-t-[3px] hover:border-t-gold transition-all duration-300 relative lg:pt-14 ml-10 md:ml-0 will-change-transform"
              >
                {/* Step Number Badge */}
                <div className="absolute top-1/2 -left-[40px] md:-top-[28px] md:left-1/2 -translate-y-1/2 md:-translate-y-0 -translate-x-1/2 w-12 h-12 rounded-full bg-gold text-navy font-bold text-xl flex items-center justify-center shadow-[0_0_0_4px_rgba(200,164,90,0.2)] md:shadow-[0_0_0_6px_rgba(255,255,255,1),0_0_0_10px_rgba(200,164,90,0.2)] z-20">
                  {step.id}
                </div>

                <div className="flex flex-col h-full lg:items-center lg:text-center mt-2 md:mt-0">
                  <step.icon className="text-teal w-9 h-9 mb-4 hidden lg:block" strokeWidth={1.5} />
                  <div className="flex items-center gap-3 lg:hidden mb-3">
                    <step.icon className="text-teal w-7 h-7" strokeWidth={1.5} />
                    <h3 className="text-navy font-bold text-[18px]">{step.title}</h3>
                  </div>
                  <h3 className="text-navy font-bold text-[17px] mb-2 hidden lg:block leading-tight">{step.title}</h3>
                  <p className="text-body-text text-[15px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
