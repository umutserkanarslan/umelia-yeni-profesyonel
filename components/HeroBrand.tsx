"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBrand() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-start bg-navy overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noisy-texture opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(200,164,90,0.04)_0%,transparent_55%)] pointer-events-none"></div>
      <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-gold opacity-[0.025] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] bg-gold opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      {/* Main Centered Zone */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[90dvh] px-4">

        {/* Lion Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center will-change-transform"
        >
          <div className="relative w-[260px] h-[260px] md:w-[420px] md:h-[420px] lg:w-[52vh] lg:h-[52vh] max-w-[600px] max-h-[600px]">
            <Image
              src="/umelia_logo_transparent.png"
              alt="UMELIA Lion Graphic"
              fill
              className="object-contain pointer-events-none animate-breathe"
              priority
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-[44px] font-libre-baskerville font-bold text-[44px] md:text-[64px] lg:text-[72px] text-[#ecd6ad] uppercase tracking-[0.35em] text-center ml-[0.35em] will-change-transform"
        >
          UMELIA
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
          className="mt-[14px] font-libre-baskerville font-normal text-[12px] md:text-[15px] text-[#ecd6ad] uppercase tracking-[0.28em] text-center ml-[0.28em] will-change-transform opacity-80"
        >
          AUTOMATE. OPTIMIZE. ELEVATE.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute bottom-[36px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[20px] cursor-pointer group z-20 will-change-transform border-none bg-transparent"
        onClick={() => {
          document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Çözümlere git"
      >
        <span className="text-[#5A6A7E] text-[11px] font-plus-jakarta font-medium tracking-[0.18em] uppercase">
          Keşfet
        </span>
        <div className="flex flex-col items-center gap-[4px]">
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col gap-[3px]"
          >
            <div className="w-[1px] h-[20px] bg-gold opacity-20 mx-auto"></div>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-gold opacity-50 group-hover:opacity-80 transition-opacity duration-300">
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
}
