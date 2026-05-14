'use client'
import { useEffect, useRef, useState } from 'react'
import { useI18n } from '@/lib/i18n'

const stats = [
  { value: 30, suffix: '+', key: 'years' as const },
  { value: 1000, suffix: '+', key: 'customers' as const },
  { value: 4, suffix: '', key: 'products' as const },
  { value: 24, suffix: 'h', key: 'support' as const },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true
        const duration = 1600
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setCount(Math.round(eased * value))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return <span ref={ref} className="counter-value">{count.toLocaleString('de-DE')}{suffix}</span>
}

export default function StatsBar() {
  const { t } = useI18n()
  return (
    <section className="bg-brand-navy py-16 relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute right-0 top-0 w-64 h-full opacity-5">
        <svg viewBox="0 0 256 256" className="w-full h-full"><polygon points="256,0 256,256 0,256" fill="white"/></svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map(({ value, suffix, key }, i) => (
            <div key={i} data-reveal data-delay={String(i+1)} className="text-center lg:px-8">
              <div className="font-display text-5xl lg:text-6xl font-bold text-white mb-2 leading-none">
                <Counter value={value} suffix={suffix} />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">{t.stats[key]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
