'use client'
import { useEffect, useRef, useState } from 'react'
import { useI18n } from '@/lib/i18n'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true
        const dur = 1600, start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1)
          setCount(Math.round((1 - Math.pow(1 - p, 3)) * value))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [value])
  return <span ref={ref}>{count.toLocaleString('de-DE')}{suffix}</span>
}

const stats = [
  { value: 30,   suffix: '+', key: 'years' as const },
  { value: 1000, suffix: '+', key: 'customers' as const },
  { value: 4,    suffix: '',  key: 'products' as const },
  { value: 24,   suffix: 'h', key: 'support' as const },
]

export default function StatsBar() {
  const { t } = useI18n()
  return (
    <section className="bg-brand-teal py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/20">
          {stats.map(({ value, suffix, key }, i) => (
            <div key={i} data-reveal data-delay={String(i+1)} className="text-center lg:px-8">
              <div className="font-display text-5xl lg:text-6xl font-bold text-white mb-2 leading-none">
                <Counter value={value} suffix={suffix} />
              </div>
              <div className="text-xs text-white/70 uppercase tracking-widest font-medium">{t.stats[key]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
