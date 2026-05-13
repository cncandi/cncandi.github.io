'use client'

import { useI18n } from '@/lib/i18n'

const stats = [
  { value: '30+',    key: 'years' },
  { value: '1.000+', key: 'customers' },
  { value: '4',      key: 'products' },
  { value: '24h',    key: 'support' },
] as const

export default function StatsBar() {
  const { t } = useI18n()

  return (
    <section className="bg-brand-navy py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, key }, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl font-bold text-white mb-1">{value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">{t.stats[key]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
