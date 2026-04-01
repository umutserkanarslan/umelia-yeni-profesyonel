"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Müşteriler uygulama indirmek zorunda mı?",
    answer: "Hayır. Müşteri telefonun kamerasıyla QR kodu tarar, web sayfası açılır. Uygulama indirmeye gerek yok → iPhone, Android, her telefonda çalışır."
  },
  {
    question: "Menüyü nasıl güncelliyorum?",
    answer: "Menü basit bir tablo üzerinden yönetilir. Fiyat değiştirmek, ürün eklemek veya çıkarmak için tabloyu düzenlemeniz yeterli → sistem anında güncellenir. Teknik bilgi gerektirmez."
  },
  {
    question: "Kurulum ne kadar sürüyor?",
    answer: "Menü ve masa düzeninizi aldıktan sonra ortalama 3-5 iş günü içinde sisteminiz aktif olur. QR kodlar basılı veya dijital olarak teslim edilir."
  },
  {
    question: "İnternet kesilirse ne olur?",
    answer: "Sistem internet bağlantısıyla çalışır. Restoranınızın WiFi'ı aktif olduğu sürece sorunsuz işler. Olası bir kesintide müşteriye bilgilendirme gösterilir, garsonlarınız her zamanki gibi sipariş alabilir."
  },
  {
    question: "Garsonları tamamen kaldırabilir miyim?",
    answer: "Sistem garsonların iş yükünü azaltmak için tasarlandı, tamamen kaldırmak için değil. Sipariş alma otomatikleşir ama servis, masa düzeni ve müşteri ilişkisi hâlâ garsonlarınızın değerli işi."
  },
  {
    question: "Stok takibi yapabiliyor mu?",
    answer: "Evet. Belirli bir ürün yoğun sipariş edildiğinde 'stok kontrol et' uyarısı gönderilir. Tam bir stok yönetim sistemi değil ama kritik uyarıları kaçırmazsınız."
  },
  {
    question: "İptal etmek istersem?",
    answer: "Aylık abonelik bazlı çalışırız, sözleşme yok. İstediğiniz zaman tek bir mesajla iptal edebilirsiniz → taahhüt yoktur."
  },
  {
    question: "Aylık ücret dışında ek maliyet var mı?",
    answer: "Hayır. Aylık abonelik ve tek seferlik kurulum bedeli dışında ek ücret yoktur. Güncelleme, bakım ve teknik destek aylık ücrete dahildir."
  },
  {
    question: "Masa sayısı arttıkça fiyat değişir mi?",
    answer: "Başlangıç paketi 20 masaya kadar destekler. Profesyonel pakette masa sınırı yoktur. Paket fiyatınız sabittir → yoğun sezonda da düşük sezonda da aynı ücret."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-28 md:py-32 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-[35%] lg:pt-4">
             <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3 }}
              className="text-navy font-[family-name:var(--font-heading)] font-extrabold text-3xl md:text-[38px] mb-4 leading-tight will-change-transform"
            >
              Sıkça Sorulan Sorular
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-muted text-lg md:text-[18px] will-change-transform"
            >
              Merak ettiklerinizin cevapları burada.
            </motion.p>
          </div>

          <div className="w-full lg:w-[65%]">
            <div className="flex flex-col rounded-[20px] overflow-hidden bg-[#F7F5F0]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-[#E0DDD5] last:border-b-0 px-5">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between py-5 text-left transition-colors"
                    >
                      <h3 className="text-navy font-medium text-[15px] pr-8 leading-snug">
                        {faq.question}
                      </h3>
                      <span className="flex-shrink-0 text-gold text-xl font-medium leading-none w-6 text-center">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="text-[#5A6A7E] text-[14px] leading-[1.7] pb-5 pr-8">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-28 md:mt-32">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 0V40C240 80 480 80 720 50C960 20 1200 0 1440 30V0H0Z" fill="#FFFFFF" />
          <path d="M0 40C240 80 480 80 720 50C960 20 1200 0 1440 30V80H0V40Z" fill="#0A1628" />
        </svg>
      </div>
    </section>
  );
}
