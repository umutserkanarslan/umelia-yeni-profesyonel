"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroBrand() {
  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-start bg-navy overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noisy-texture opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(200,164,90,0.03)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] bg-gold opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-gold opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Centered Zone (Top 90vh) */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[90vh] px-4">
        
        {/* Lion Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative flex justify-center will-change-transform"
        >
          <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] lg:w-[55vh] lg:h-[55vh] max-w-[650px] max-h-[650px]">
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="mt-[48px] font-libre-baskerville font-bold text-[44px] md:text-[64px] lg:text-[72px] text-[#ecd6ad] uppercase tracking-[0.35em] text-center ml-[0.35em] will-change-transform"
        >
          UMELIA
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-[16px] font-libre-baskerville font-normal text-[13px] md:text-[16px] text-[#ecd6ad] uppercase tracking-[0.25em] text-center ml-[0.25em] will-change-transform"
        >
          AUTOMATE. OPTIMIZE. ELEVATE.
        </motion.p>
      </div>

      {/* Scroll Indicator (Bottom Zone) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="absolute bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[24px] cursor-pointer group z-20 will-change-transform"
        onClick={() => {
          document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-[60px] h-[1px] bg-gold opacity-20"></div>
        <div className="flex flex-col items-center gap-[8px]">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-gold opacity-[0.7] w-[24px] h-[24px]" />
          </motion.div>
          <span className="text-[#B0B8C4] text-[15px] font-medium font-inter mt-1">Çözümlerimizi Keşfedin</span>
        </div>
      </motion.div>
    </section>
  );
}
