'use client'

import { motion } from 'framer-motion'

interface Message {
  type: 'incoming' | 'outgoing'
  text: string
  time?: string
  aiBadge?: boolean
  showStatus?: string
}

interface WhatsAppMockupProps {
  messages: Message[]
  variant?: 'phone' | 'desktop'
  className?: string
  statusText?: string
  compact?: boolean
}

function WhatsAppBubble({ msg, index }: { msg: Message; index: number }) {
  const isOutgoing = msg.type === 'outgoing'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} mb-2 will-change-transform`}
    >
      <div
        className={`max-w-[80%] px-3 py-2 text-[13px] leading-relaxed relative ${
          isOutgoing
            ? 'bg-[#dcf8c6] text-[#111B21] rounded-l-lg rounded-tr-lg rounded-br-[2px]'
            : 'bg-white text-[#111B21] rounded-r-lg rounded-tl-lg rounded-bl-[2px]'
        }`}
        style={{
          boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
        }}
      >
        {msg.aiBadge && (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-teal bg-teal/10 px-1.5 py-0.5 rounded-full mb-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            AI
          </span>
        )}
        <p className="whitespace-pre-line">{msg.text}</p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-[10px] text-gray-400">{msg.time || '14:32'}</span>
          {isOutgoing && (
            <svg width="16" height="10" viewBox="0 0 16 10" className="text-blue-500">
              <path d="M1 5l3 3 5-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 5l3 3 5-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function WhatsAppMockup({ messages, variant = 'phone', className = '', statusText, compact }: WhatsAppMockupProps) {
  const isDesktop = variant === 'desktop'

  return (
    <div className={`${className}`}>
      <div
        className={`relative ${
          isDesktop ? 'rounded-2xl w-full' : 'rounded-[32px] w-[300px] mx-auto'
        } overflow-hidden border border-gray-200 backface-hidden transform-gpu`}
        style={{
          boxShadow: isDesktop
            ? '0 0 60px rgba(42,157,143,0.15)'
            : '0 8px 40px rgba(0,0,0,0.2)',
          background: '#E5DDD5',
        }}
      >
        {/* WhatsApp Header Bar */}
        <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
          {!isDesktop && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          )}
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">
            R
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold leading-tight">Restoran Rezervasyon</p>
            <p className="text-green-200 text-[11px]">çevrimiçi</p>
          </div>
          <div className="flex items-center gap-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity="0.8">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity="0.8">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </div>
        </div>

        {/* Notch for phone variant */}
        {!isDesktop && (
          <div className="absolute top-0 left-0 right-0 mx-auto w-[120px] h-[24px] bg-black rounded-b-xl z-20 backface-hidden transform-gpu"></div>
        )}

        {/* Chat area */}
        <div
          className={`${isDesktop ? 'p-4' : 'px-3 py-4'} overflow-y-auto w-full`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8b990' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
            maxHeight: isDesktop ? '500px' : '420px',
          }}
        >
          {messages.map((msg, i) => (
            <WhatsAppBubble key={i} msg={msg} index={i} />
          ))}
        </div>

        {/* Input bar */}
        <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#919191" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
            <line x1="9" y1="9" x2="9.01" y2="9"/>
            <line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
          <div className="flex-1 bg-white rounded-full px-4 py-2 text-xs text-gray-400">
            Mesaj yazın...
          </div>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#919191">
            <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V6z"/>
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
