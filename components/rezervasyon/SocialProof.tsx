'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface StatItem {
  icon: React.ReactNode
  target: string
  label: string
}

export default function SocialProof() {
  const stats: StatItem[] = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8A45A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      target: '1.200+',
      label: 'Rezervasyon Alındı',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8A45A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      target: '7/24',
      label: 'Kesintisiz Hizmet',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8A45A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      target: '50+',
      label: 'Dil Desteği',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, delay: 0.05 }}
      className="max-w-[1200px] mx-auto px-6 pb-20 will-change-transform relative z-20"
    >
      <div className="max-w-4xl mx-auto bg-[#0A1628]/50 border border-white/10 rounded-2xl py-8 px-4 backdrop-blur-sm shadow-2xl relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center justify-center gap-4 px-4 w-full md:w-1/3">
              <div className="shrink-0 opacity-90">{stat.icon}</div>
              <div className="text-left">
                <CountUpNumber value={stat.target} />
                <p className="text-light-gray text-[13px] md:text-sm mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function CountUpNumber({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateValue(value, setDisplay)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-white font-[family-name:var(--font-heading)] font-bold text-4xl lg:text-5xl">
      {display}
    </div>
  )
}

function animateValue(target: string, setDisplay: (v: string) => void) {
  // Extract numeric part
  const numMatch = target.match(/[\d.]+/)
  if (!numMatch) {
    setDisplay(target)
    return
  }
  const numStr = numMatch[0].replace('.', '')
  const targetNum = parseInt(numStr)
  const prefix = target.slice(0, target.indexOf(numMatch[0]))
  const suffix = target.slice(target.indexOf(numMatch[0]) + numMatch[0].length)
  const hasDecimalDot = numMatch[0].includes('.')

  const duration = 1500
  const steps = 40
  const stepTime = duration / steps

  let step = 0
  const interval = setInterval(() => {
    step++
    const progress = step / steps
    const eased = 1 - Math.pow(1 - progress, 3) // ease out cubic
    const current = Math.round(targetNum * eased)

    let formatted = current.toString()
    if (hasDecimalDot) {
      // Insert dot in same position
      const dotPos = numMatch[0].indexOf('.')
      if (formatted.length > dotPos) {
        formatted = formatted.slice(0, -dotPos + formatted.length - numStr.length + dotPos) + '.' + formatted.slice(-dotPos + formatted.length - numStr.length + dotPos)
      }
      // Simpler approach: just format like the target
      formatted = current >= 1000 ? Math.floor(current / 1000) + '.' + String(current % 1000).padStart(3, '0').slice(0, -1 + numMatch[0].split('.')[1].length + 1) : current.toString()
    }

    if (step >= steps) {
      setDisplay(target)
      clearInterval(interval)
    } else {
      setDisplay(prefix + formatted + suffix)
    }
  }, stepTime)
}
