export default function OrderFormMockup() {
  return (
    <div className="w-[320px] h-[640px] bg-white rounded-[36px] shadow-[0_24px_80px_rgba(0,0,0,0.4)] border-[10px] border-gray-900 overflow-hidden relative flex flex-col">
      {/* Top Bar */}
      <div className="bg-white border-b border-border-warm pt-8 pb-3 px-4 shadow-sm z-10 text-center relative">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gray-200 rounded-full"></div>
        <h3 className="text-navy font-bold text-sm tracking-tight mt-2">🍽️ Bodrum Beach Bar — Masa 7</h3>
      </div>

      {/* Categories */}
      <div className="flex px-4 py-3 gap-2 overflow-x-auto border-b border-gray-50 bg-gray-50/50 hide-scrollbar pb-3">
        <div className="px-4 py-2 rounded-full text-xs font-semibold text-muted bg-white border border-border-warm shadow-sm whitespace-nowrap cursor-pointer">Yiyecekler</div>
        <div className="px-4 py-2 rounded-full text-xs font-semibold bg-navy text-white shadow-md whitespace-nowrap cursor-pointer">İçecekler</div>
        <div className="px-4 py-2 rounded-full text-xs font-semibold text-muted bg-white border border-border-warm shadow-sm whitespace-nowrap cursor-pointer">Tatlılar</div>
      </div>

      {/* Items */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#F9FAFB]">
        {/* Item 1 */}
        <div className="bg-white p-4 rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-border-warm">
          <div className="flex justify-between items-start mb-3">
            <span className="font-bold text-navy text-[15px]">🍹 Mojito</span>
            <span className="text-gold font-bold text-[15px]">₺280</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full bg-gray-50 rounded-xl p-1.5 flex items-center justify-between border border-border-warm">
              <button className="w-9 h-9 flex items-center justify-center text-gray-400 font-bold bg-white rounded-lg shadow-sm text-lg hover:text-navy transition-colors">-</button>
              <span className="font-bold text-navy text-base">2</span>
              <button className="w-9 h-9 flex items-center justify-center text-navy font-bold bg-white rounded-lg shadow-sm text-lg hover:bg-gray-50 transition-colors">+</button>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-white p-4 rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-border-warm">
          <div className="flex justify-between items-start mb-3">
            <span className="font-bold text-navy text-[15px]">🍺 Efes Draft</span>
            <span className="text-gold font-bold text-[15px]">₺180</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full bg-gray-50 rounded-xl p-1.5 flex items-center justify-between border border-border-warm">
              <button className="w-9 h-9 flex items-center justify-center text-gray-400 font-bold bg-white rounded-lg shadow-sm text-lg hover:text-navy transition-colors">-</button>
              <span className="font-bold text-navy text-base">1</span>
              <button className="w-9 h-9 flex items-center justify-center text-navy font-bold bg-white rounded-lg shadow-sm text-lg hover:bg-gray-50 transition-colors">+</button>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-white p-4 rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-border-warm opacity-60">
          <div className="flex justify-between items-start mb-3">
            <span className="font-bold text-navy text-[15px]">🫖 Türk Çayı</span>
            <span className="text-muted font-bold text-[15px]">₺60</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full bg-gray-50 rounded-xl p-1.5 flex items-center justify-between border border-border-warm">
              <button className="w-9 h-9 flex items-center justify-center text-gray-300 font-bold bg-white rounded-lg shadow-sm text-lg">-</button>
              <span className="font-bold text-muted text-base">0</span>
              <button className="w-9 h-9 flex items-center justify-center text-navy font-bold bg-white rounded-lg shadow-sm text-lg">+</button>
            </div>
          </div>
        </div>

        {/* Note Field */}
        <div className="mt-4">
          <div className="bg-blue-50/60 border border-blue-100/60 p-3.5 rounded-2xl text-[13px] text-navy/80 leading-relaxed shadow-sm">
            <span className="font-bold text-navy">📝 Not:</span> Mojitolar şekersiz olsun
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="bg-white border-t border-border-warm p-5 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] z-10 pb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[15px] font-semibold text-muted">🛒 3 ürün</span>
          <span className="text-xl font-black text-navy">₺740</span>
        </div>
        <button className="w-full bg-teal text-white font-bold py-4 rounded-2xl shadow-[0_8px_24px_rgba(42,157,143,0.3)] hover:bg-[#23877A] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-base">
          Sipariş Ver <span className="text-xl">✓</span>
        </button>
      </div>
    </div>
  );
}
