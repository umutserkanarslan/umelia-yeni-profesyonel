import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  pills: string[];
  link: string;
}

export default function ProductCard({ icon, title, description, pills, link }: ProductCardProps) {
  return (
    <Link href={link} className="block w-full h-full group">
      <div className="flex flex-col h-full bg-navy-light rounded-[20px] p-[40px] border border-[rgba(200,164,90,0.12)] shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:border-[rgba(200,164,90,0.5)] group-hover:-translate-y-[10px] group-hover:shadow-[0_12px_50px_rgba(200,164,90,0.15)]">
        
        {/* Icon */}
        <div className="w-[64px] h-[64px] shrink-0 rounded-full flex items-center justify-center bg-[rgba(200,164,90,0.08)] border border-[rgba(200,164,90,0.15)] mb-[24px] text-gold group-hover:text-[#E8C678] transition-colors duration-400">
          {icon}
        </div>

        {/* Text Content */}
        <h3 className="font-plus-jakarta font-bold text-[22px] md:text-[24px] text-white mb-[12px]">
          {title}
        </h3>
        
        <p className="font-inter font-normal text-[15px] leading-[1.65] text-[#8A95A5] mb-[20px]">
          {description}
        </p>

        {/* Feature Pills */}
        <div className="flex flex-col items-start gap-2 mb-[40px]">
          {pills.map((pill, idx) => (
            <span key={idx} className="flex items-center gap-[6px] bg-[rgba(42,157,143,0.1)] border border-[rgba(42,157,143,0.2)] text-teal rounded-[20px] px-[16px] py-[8px] text-[13px] font-inter">
              <Check className="w-[14px] h-[14px] opacity-80 text-teal" />
              {pill}
            </span>
          ))}
        </div>

        {/* CTA Link (pushed to bottom) */}
        <div className="mt-auto flex items-center text-gold font-semibold text-[15px] group/cta">
          <span className="group-hover/cta:underline transition-all duration-300">Detayları İncele</span>
          <ArrowRight className="w-[18px] h-[18px] ml-1 transition-transform duration-300 group-hover/cta:translate-x-[8px]" />
        </div>
      </div>
    </Link>
  );
}
