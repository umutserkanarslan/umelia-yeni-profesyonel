"use client";
import { motion } from "framer-motion";
import { Smartphone, CalendarDays, QrCode } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductCards() {
  const cards = [
    {
      icon: <Smartphone className="w-[26px] h-[26px]" />,
      title: "VIP Otel Asistanı",
      description: "Misafiriniz hangi dilde yazarsa yazsın, kendi dilinde yanıt alır. Talepler anında hizmet ekibine ulaşır.",
      pills: ["7/24 Aktif", "Çoklu Dil Desteği", "AI Destekli", "Anlık İş Emri"],
      link: "/otel"
    },
    {
      icon: <CalendarDays className="w-[26px] h-[26px]" />,
      title: "Rezervasyon Asistanı",
      description: "Müşteriniz sadece WhatsApp'tan yazsın, gerisini AI halleder. Rezervasyon alınır, size anında bildirim gelir.",
      pills: ["Otomatik Rezervasyon", "Çoklu Dil Desteği", "Konuşma Hafızası", "Anlık Bildirim"],
      link: "/rezervasyon"
    },
    {
      icon: <QrCode className="w-[26px] h-[26px]" />,
      title: "QR Kod Sipariş Sistemi",
      description: "Müşteri masadaki QR kodu tarıyor, menüden sipariş veriyor, mutfak anında bildirimi alıyor — garson bekleme yok, hata yok.",
      pills: ["Garson Bekleme Yok", "Dinamik Menü", "Anlık Mutfak Bildirimi", "Günlük Ciro Raporu"],
      link: "/restoran"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <section id="solutions" className="w-full bg-navy pt-[120px] pb-[100px] px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-[72px]"
        >
          <div className="flex items-center gap-[12px] mb-[20px]">
            <div className="w-[28px] h-[1px] bg-gold opacity-50"></div>
            <span className="text-gold text-[11px] uppercase tracking-[0.22em] font-plus-jakarta font-semibold">
              Çözümlerimiz
            </span>
          </div>
          <h2 className="text-white text-[36px] md:text-[44px] font-plus-jakarta font-[800] leading-[1.1] tracking-tight max-w-[520px]">
            İşletmenize uygun sistemi seçin
          </h2>
          <p className="mt-[16px] text-[#5A6A7E] text-[16px] font-inter leading-[1.65] max-w-[440px]">
            Otelden restorana, her sektöre özel yapay zeka altyapısı.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-[20px] w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "80px" }}
        >
          {/* Large card: 3/5 columns */}
          <motion.div variants={itemVariants} className="md:col-span-3 will-change-transform">
            <ProductCard {...cards[0]} />
          </motion.div>

          {/* Medium card: 2/5 columns */}
          <motion.div variants={itemVariants} className="md:col-span-2 will-change-transform">
            <ProductCard {...cards[1]} />
          </motion.div>

          {/* Wide card: full width */}
          <motion.div variants={itemVariants} className="md:col-span-5 will-change-transform">
            <ProductCard {...cards[2]} size="wide" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
