import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  pills: string[];
  link: string;
  size?: "default" | "wide";
}

export default function ProductCard({ icon, title, description, pills, link, size = "default" }: ProductCardProps) {
  const isWide = size === "wide";

  return (
    <Link href={link} className="block w-full h-full group">
      <div className={`
        ${isWide ? "flex flex-col md:flex-row md:items-start" : "flex flex-col"}
        h-full bg-navy-light
        rounded-[18px]
        ${isWide ? "p-[36px] md:p-[44px]" : "p-[36px]"}
        border border-[rgba(200,164,90,0.1)]
        shadow-[0_2px_20px_rgba(0,0,0,0.2)]
        transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        group-hover:border-[rgba(200,164,90,0.38)]
        group-hover:-translate-y-[8px]
        group-hover:shadow-[0_20px_56px_rgba(200,164,90,0.1),0_4px_16px_rgba(0,0,0,0.3)]
        group-active:scale-[0.99]
        group-active:translate-y-[0px]
      `}>

        {/* Main content side */}
        <div className={`flex flex-col ${isWide ? "md:flex-1" : "h-full"}`}>

          {/* Icon — square, not circle */}
          <div className="w-[50px] h-[50px] shrink-0 rounded-[12px] flex items-center justify-center bg-[rgba(200,164,90,0.07)] border border-[rgba(200,164,90,0.12)] mb-[28px] text-gold transition-all duration-300 group-hover:bg-[rgba(200,164,90,0.11)] group-hover:border-[rgba(200,164,90,0.22)]">
            {icon}
          </div>

          <h3 className="font-plus-jakarta font-[700] text-[21px] md:text-[23px] text-white mb-[10px] tracking-tight leading-[1.2]">
            {title}
          </h3>

          <p className="font-inter font-normal text-[14px] md:text-[15px] leading-[1.7] text-[#7A8A9A] mb-[28px] max-w-[58ch]">
            {description}
          </p>

          {/* Feature list — default layout */}
          {!isWide && (
            <div className="flex flex-col gap-[9px] mb-[36px]">
              {pills.map((pill, idx) => (
                <div key={idx} className="flex items-center gap-[10px]">
                  <div className="w-[5px] h-[5px] rounded-full bg-teal shrink-0 opacity-70" />
                  <span className="font-inter text-[13px] text-[#7A8A9A]">{pill}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA — default layout */}
          {!isWide && (
            <div className="mt-auto flex items-center gap-[6px] text-gold font-inter font-[500] text-[13px]">
              <span className="group-hover:underline underline-offset-[3px] transition-all duration-300">Detayları İncele</span>
              <ArrowRight className="w-[14px] h-[14px] transition-transform duration-300 group-hover:translate-x-[5px]" />
            </div>
          )}
        </div>

        {/* Wide layout: divider + features column */}
        {isWide && (
          <>
            {/* Vertical divider */}
            <div className="hidden md:block w-[1px] self-stretch bg-[rgba(200,164,90,0.1)] mx-[44px] shrink-0" />
            {/* Horizontal divider on mobile */}
            <div className="block md:hidden h-[1px] w-full bg-[rgba(200,164,90,0.1)] my-[32px]" />

            {/* Features + CTA column */}
            <div className="md:w-[300px] shrink-0 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-[12px]">
                {pills.map((pill, idx) => (
                  <div key={idx} className="flex items-center gap-[12px]">
                    <div className="w-[26px] h-[26px] rounded-[8px] bg-[rgba(42,157,143,0.1)] border border-[rgba(42,157,143,0.18)] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[rgba(42,157,143,0.15)]">
                      <Check className="w-[13px] h-[13px] text-teal" />
                    </div>
                    <span className="font-inter text-[13px] text-[#7A8A9A]">{pill}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-[6px] text-gold font-inter font-[500] text-[13px] mt-[32px]">
                <span className="group-hover:underline underline-offset-[3px] transition-all duration-300">Detayları İncele</span>
                <ArrowRight className="w-[14px] h-[14px] transition-transform duration-300 group-hover:translate-x-[5px]" />
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
