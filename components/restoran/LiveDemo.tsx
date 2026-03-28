"use client";

import { motion } from "framer-motion";
import OrderFormMockup from "./OrderFormMockup";
import TelegramCard from "./TelegramCard";

export default function LiveDemo() {
  return (
    <section className="noise-bg relative overflow-hidden bg-navy py-28 md:py-32 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="text-white font-[family-name:var(--font-heading)] font-extrabold text-3xl md:text-[40px] mb-4 will-change-transform"
          >
            Siparişten Servise — <span className="italic text-gold">Canlı Akış</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-light-gray text-lg md:text-[18px] max-w-[600px] mx-auto will-change-transform"
          >
            Müşteri sipariş veriyor, mutfak hazırlıyor, garson servis ediyor — hepsi otomatik.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4 xl:gap-8 overflow-hidden lg:overflow-visible w-full max-w-[1240px] mx-auto py-4">
          {/* 1. Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="relative will-change-transform shrink-0 scale-95 lg:scale-[0.85] xl:scale-100 origin-center"
          >
            <div className="absolute inset-0 bg-teal/[0.20] blur-[60px] rounded-full pointer-events-none" />
            
            <div className="w-[320px] h-[540px] bg-white rounded-[32px] shadow-[0_0_60px_rgba(42,157,143,0.15)] border-[8px] border-gray-900 overflow-hidden relative flex flex-col">
              <div className="bg-white border-b border-border-warm pt-7 pb-3 px-4 shadow-sm z-10 text-center relative">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gray-200 rounded-full"></div>
                <h3 className="text-navy font-bold text-sm tracking-tight mt-1">🍽️ Bodrum Beach Bar — Masa 12</h3>
              </div>
              <div className="flex-1 p-6 bg-[#F9FAFB] flex flex-col items-center text-center justify-center h-full">
                <div className="w-16 h-16 bg-teal/[0.10] rounded-full flex items-center justify-center mb-5 text-teal text-[32px] shadow-sm">✅</div>
                <h4 className="text-navy font-bold text-xl mb-5">Siparişiniz Alındı!</h4>
                
                <div className="text-[14px] text-left w-full space-y-2 mb-6 opacity-90 border border-gray-200 bg-white p-4 rounded-2xl shadow-sm text-navy font-medium">
                  <div className="flex justify-between items-center"><span className="text-navy">🍹 Mojito × 2</span><span className="font-bold">₺560</span></div>
                  <div className="flex justify-between items-center"><span className="text-navy">🥗 Sezar Salata × 1</span><span className="font-bold">₺320</span></div>
                  <div className="flex justify-between items-center"><span className="text-navy">🍕 Margarita Pizza × 1</span><span className="font-bold">₺380</span></div>
                  <div className="flex justify-between items-center"><span className="text-navy">🍺 Efes Draft × 3</span><span className="font-bold">₺540</span></div>
                  <div className="pt-3 mt-3 border-t border-gray-100 border-dashed text-teal-700 font-semibold text-[13px] leading-tight">📝 Not: Mojitolar şekersiz, pizza acısız</div>
                  <div className="pt-3 mt-1 font-bold text-navy flex justify-between items-center text-[15px]"><span>💰 Toplam:</span><span className="text-lg text-gold">₺1.800</span></div>
                </div>

                <div className="text-[14px] font-bold text-navy/80 border border-blue-50/50 bg-blue-50/70 w-full py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                  <span>⏱️ Tahmini süre: ~15 dakika</span>
                </div>
                <p className="text-[13px] text-muted/80 font-medium mt-5">Siparişiniz mutfağa iletildi. İyi akşamlar! 🌙</p>
              </div>
            </div>
          </motion.div>

          {/* 2. Arrow to Mutfak */}
          <div className="flex justify-center shrink-0 my-4 lg:my-0 lg:-mx-4 xl:mx-0">
            {/* Desktop Arrow */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:flex flex-col items-center justify-center text-gold opacity-60 relative w-12"
            >
              <span className="text-[10px] font-bold text-light-gray whitespace-nowrap uppercase tracking-wider absolute -top-8">Mutfağa Bildirim</span>
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="0" y1="10" x2="32" y2="10" />
                <polyline points="26,4 32,10 26,16" />
              </svg>
            </motion.div>
            {/* Mobile Arrow */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex lg:hidden flex-col items-center justify-center text-gold opacity-60"
            >
              <span className="text-xs font-semibold text-light-gray whitespace-nowrap uppercase tracking-wider mb-2">Mutfağa Bildirim</span>
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="0" x2="12" y2="32" />
                <polyline points="6,26 12,32 18,26" />
              </svg>
            </motion.div>
          </div>

          {/* 3. Mutfak Card */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="will-change-transform shrink-0 scale-95 lg:scale-[0.85] xl:scale-100 origin-center"
          >
            <TelegramCard type="mutfak" />
          </motion.div>

          {/* 4. Arrow to Garson */}
          <div className="flex justify-center shrink-0 my-4 lg:my-0 lg:-mx-4 xl:mx-0">
            {/* Desktop Arrow */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:flex flex-col items-center justify-center text-gold opacity-60 relative w-12"
            >
              <span className="text-[10px] font-bold text-light-gray whitespace-nowrap uppercase tracking-wider absolute -top-8">Hazır Bildirimi</span>
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="0" y1="10" x2="32" y2="10" />
                <polyline points="26,4 32,10 26,16" />
              </svg>
            </motion.div>
            {/* Mobile Arrow */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex lg:hidden flex-col items-center justify-center text-gold opacity-60"
            >
              <span className="text-xs font-semibold text-light-gray whitespace-nowrap uppercase tracking-wider mb-2">Hazır Bildirimi</span>
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="0" x2="12" y2="32" />
                <polyline points="6,26 12,32 18,26" />
              </svg>
            </motion.div>
          </div>

          {/* 5. Garson Card */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="will-change-transform shrink-0 scale-95 lg:scale-[0.85] xl:scale-100 origin-center"
          >
            <TelegramCard type="garson" />
          </motion.div>
        </div>
      </div>
      
      {/* Wave to Fiyatlandırma (Off-white) */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 40C360 90 720 70 1080 40C1260 25 1380 10 1440 20V80H0V40Z" fill="#F7F5F0" />
        </svg>
      </div>
    </section>
  );
}
