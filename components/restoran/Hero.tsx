"use client";

import { motion } from "framer-motion";
import SocialProof from "./SocialProof";
import OrderFormMockup from "./OrderFormMockup";

export default function Hero() {
  return (
    <section className="noise-bg relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-teal/[0.06] blur-3xl" />
        <div className="absolute left-[5%] top-[60%] h-48 w-48 rounded-full bg-gold/[0.04] blur-3xl" />
      </div>
      
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 pb-12 pt-28 md:flex-row md:gap-8 md:pb-16 md:pt-32 lg:pb-20 lg:pt-36">
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full md:w-[55%] z-10 will-change-transform"
        >
          <div className="inline-block border border-gold/50 text-gold text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider bg-gold/[0.05]">
            Bodrum Restoranları & Barları İçin
          </div>
          <h1 className="text-white font-[family-name:var(--font-heading)] font-extrabold text-[40px] md:text-[56px] leading-[1.15] max-w-[600px] mb-6 tracking-tight">
            QR Tara, Sipariş Ver, <span className="text-gold">Garson Bekleme</span>
          </h1>
          <p className="text-light-gray text-lg md:text-[20px] leading-[1.6] max-w-[520px] mb-10 font-light">
            Müşteriniz QR kodu tarar, menüden seçer, mutfak anında görür. Hata sıfır, bekleme sıfır.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="https://wa.me/905316745900" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:scale-[1.03] hover:shadow-[0_8px_28px_rgba(200,164,90,0.18)] hover:-translate-y-[2px] active:scale-[0.98] w-full sm:w-auto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.37 0-4.557-.7-6.396-1.9l-.459-.296-2.652.889.889-2.652-.296-.459A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Demo Talep Edin
            </a>
            <a 
              href="#nasil-calisir" 
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-navy w-full sm:w-auto"
            >
              Nasıl Çalışır? ↓
            </a>
          </div>
        </motion.div>

        {/* Right Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="w-full md:w-[45%] flex justify-center md:justify-end z-10 relative mt-8 md:mt-0 will-change-transform"
        >
          {/* Decorative dots */}
          <div className="pointer-events-none absolute -right-8 -top-8 z-0">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <g opacity="0.12" fill="#2A9D8F">
                {[0, 1, 2, 3, 4].map((row) =>
                  [0, 1, 2, 3, 4].map((col) => (
                    <circle key={`${row}-${col}`} cx={12 + col * 24} cy={12 + row * 24} r="3" />
                  ))
                )}
              </g>
            </svg>
          </div>
          
          <div className="animate-float relative z-10">
            <OrderFormMockup />
          </div>
        </motion.div>
      </div>

      <motion.div
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.3, delay: 0.1 }}
         className="mx-auto max-w-[1200px] px-6 pb-32 md:pb-40 relative z-10"
      >
        <SocialProof />
      </motion.div>
      
      {/* SVG Wave Divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 60C240 120 480 120 720 80C960 40 1200 0 1440 40V120H0V60Z" fill="#F7F5F0" />
        </svg>
      </div>
    </section>
  );
}
