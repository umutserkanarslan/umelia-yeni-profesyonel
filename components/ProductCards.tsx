"use client";
import { motion } from "framer-motion";
import { Smartphone, CalendarDays, QrCode } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductCards() {
  const cards = [
    {
      icon: <Smartphone className="w-[32px] h-[32px]" />,
      title: "VIP Otel Asistanı",
      description: "Misafiriniz hangi dilde yazarsa yazsın, kendi dilinde yanıt alır. Talepler anında hizmet ekibine ulaşır.",
      pills: ["7/24 Aktif", "Çoklu Dil Desteği", "AI Destekli", "Anlık İş Emri"],
      link: "/otel"
    },
    {
      icon: <CalendarDays className="w-[32px] h-[32px]" />,
      title: "Rezervasyon Asistanı",
      description: "Müşteriniz sadece WhatsApp'tan yazsın, gerisini AI halleder. Rezervasyon alınır, size anında bildirim gelir.",
      pills: ["Otomatik Rezervasyon", "Çoklu Dil Desteği", "Konuşma Hafızası", "Anlık Bildirim"],
      link: "/rezervasyon"
    },
    {
      icon: <QrCode className="w-[32px] h-[32px]" />,
      title: "QR Kod Sipariş Sistemi",
      description: "Müşteri masadaki QR kodu tarıyor, menüden sipariş veriyor, mutfak anında bildirimi alıyor — Garson bekleme yok, hata yok.",
      pills: ["Garson Bekleme Yok", "Dinamik Menü", "Anlık Mutfak Bildirimi", "Günlük Ciro Raporu"],
      link: "/restoran"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } }
  };

  return (
    <section id="solutions" className="w-full bg-navy pt-[100px] pb-[80px] px-4">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        
        <div className="flex flex-col items-center mb-[60px] text-center">
          <span className="text-gold text-[14px] uppercase tracking-[0.2em] font-semibold mb-[12px] font-plus-jakarta">
            Çözümlerimiz
          </span>
          <h2 className="text-white text-[36px] md:text-[40px] font-plus-jakarta font-[800] leading-[1.2] max-w-[500px]">
            İşletmenize Uygun Sistemi Seçin
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-[32px] w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "100px" }}
        >
          {cards.map((card, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full will-change-transform">
              <ProductCard {...card} />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
