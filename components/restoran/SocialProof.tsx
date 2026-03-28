"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "3.500+",
    label: "Sipariş İşlendi",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    value: "~2 dk",
    label: "Sipariş Süresi",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: "%0",
    label: "Garson Hatası",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function SocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="mx-auto flex w-fit flex-col items-center justify-center gap-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-10 py-8 backdrop-blur-sm md:flex-row md:gap-0 md:divide-x md:divide-white/[0.15] md:px-10 md:py-7 will-change-transform"
    >
      {metrics.map((metric, i) => (
        <div key={i} className="flex flex-col items-center gap-2 px-6 md:px-12 lg:px-16">
          <span className="text-gold">{metric.icon}</span>
          <span className="font-[family-name:var(--font-heading)] text-[40px] font-extrabold text-white md:text-[48px]">
            {metric.value}
          </span>
          <span className="text-center text-sm text-light-gray">{metric.label}</span>
        </div>
      ))}
    </motion.div>
  );
}
