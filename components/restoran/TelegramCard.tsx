interface TelegramCardProps {
  type: "mutfak" | "garson";
}

export default function TelegramCard({ type }: TelegramCardProps) {
  if (type === "mutfak") {
    return (
      <div className="w-full sm:w-[320px] bg-[#1A2A3A] rounded-[20px] p-5 shadow-[0_0_60px_rgba(200,164,90,0.12)] border border-white/10 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[40px] rounded-full pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4 relative z-10">
          <div className="w-11 h-11 rounded-full bg-indigo-500 flex flex-shrink-0 items-center justify-center text-white font-bold text-[15px] shadow-inner">
            MB
          </div>
          <div>
            <h4 className="text-white font-bold text-[16px] leading-tight mb-0.5 tracking-wide">Mutfak Bildirimi</h4>
            <span className="text-indigo-300/80 text-[13px] font-medium">Uygulama İçi</span>
          </div>
        </div>
        <div className="text-white/90 text-[15px] whitespace-pre-wrap leading-relaxed relative z-10">
          <span className="font-bold text-white tracking-wide">🔔 YENİ SİPARİŞ — MASA 12</span>
          {"\n\n"}🍹 Mojito × 2 (şekersiz)
          {"\n"}🥗 Sezar Salata × 1
          {"\n"}🍕 Margarita Pizza × 1 (acısız)
          {"\n"}🍺 Efes Draft × 3
          {"\n\n"}⏰ Saat: 21:15
        </div>
        <button className="w-full mt-5 bg-[#2A9D8F] hover:bg-[#23877A] text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(42,157,143,0.3)] hover:scale-[1.02] relative z-10">
           ✅ Hazır 
        </button>
      </div>
    );
  }

  return (
    <div className="w-full sm:w-[320px] bg-[#1A2A3A] rounded-[20px] p-5 shadow-[0_0_60px_rgba(200,164,90,0.12)] border border-white/10 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[40px] rounded-full pointer-events-none" />
      
      <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4 relative z-10">
        <div className="w-11 h-11 rounded-full bg-emerald-500 flex flex-shrink-0 items-center justify-center text-white font-bold text-[15px] shadow-inner">
          A
        </div>
        <div>
          <h4 className="text-white font-bold text-[16px] leading-tight mb-0.5 tracking-wide">Garson — Ahmet</h4>
          <span className="text-emerald-300/80 text-[13px] font-medium">bot</span>
        </div>
      </div>
      <div className="text-white/90 text-[15px] whitespace-pre-wrap leading-relaxed relative z-10">
        <span className="font-bold text-emerald-400 tracking-wide text-[16px]">✅ SERVİS HAZIR</span>
        {"\n\n"}📍 Masa 12
        {"\n"}🍽️ 4 kalem sipariş
        {"\n"}⏰ Hazırlanma: 12 dk
        {"\n\n"}Servise çıkabilirsin! 🏃
      </div>
    </div>
  );
}
