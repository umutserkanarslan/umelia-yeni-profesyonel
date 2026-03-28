import Link from "next/link";

export default function FooterMinimal() {
  return (
    <footer className="w-full bg-[#060F1D] py-[40px] flex flex-col items-center justify-center">
      <div className="font-playfair text-gold text-[16px] tracking-[0.2em] mb-4 font-semibold">
        UMELIA
      </div>
      <div className="text-[#4A5568] text-[13px] font-inter mb-1">
        © 2026 UMELIA — Tüm hakları saklıdır.
      </div>
      <div className="text-[#4A5568] text-[13px] font-inter">
        Bodrum, Türkiye
      </div>
    </footer>
  );
}
