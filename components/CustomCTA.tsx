"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CustomCTA() {
  return (
    <section className="relative w-full py-[120px] bg-navy overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-gold opacity-15" />

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold opacity-[0.025] blur-[150px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center max-w-[680px] text-center will-change-transform"
      >
        {/* Label */}
        <div className="flex items-center gap-[12px] mb-[24px]">
          <div className="w-[20px] h-[1px] bg-gold opacity-40"></div>
          <span className="text-gold text-[11px] uppercase tracking-[0.22em] font-plus-jakarta font-semibold opacity-80">
            Özel Otomasyon
          </span>
          <div className="w-[20px] h-[1px] bg-gold opacity-40"></div>
        </div>

        <h2 className="text-[30px] md:text-[44px] font-[800] text-off-white font-plus-jakarta tracking-tight leading-[1.1] mb-[18px]">
          Farklı bir otomasyon mu arıyorsunuz?
        </h2>
        <p className="text-[15px] md:text-[17px] font-inter text-white/55 leading-[1.7] mb-[48px] max-w-[520px]">
          İşletmenize özel çözümler tasarlıyoruz. İhtiyacınızı anlatın, size en uygun sistemi birlikte kuralım.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-[14px] w-full sm:w-auto">
          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/905316745900"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-[10px] bg-gold text-navy font-[600] text-[14px] font-plus-jakarta px-[32px] py-[14px] rounded-[10px] w-full sm:w-auto transition-all duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#D4B06A] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(200,164,90,0.25)] active:scale-[0.98] active:translate-y-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.37 0-4.557-.7-6.396-1.9l-.459-.296-2.652.889.889-2.652-.296-.459A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Bize Yazın
          </Link>

          {/* Phone Button */}
          <Link
            href="tel:+905316745900"
            className="flex items-center justify-center gap-[10px] bg-transparent border border-white/15 text-white/70 font-[500] text-[14px] font-plus-jakarta px-[32px] py-[14px] rounded-[10px] w-full sm:w-auto transition-all duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.04] hover:border-white/30 hover:text-white active:scale-[0.98]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 012 2.18 2 2 0 014 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Hemen Arayın
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
