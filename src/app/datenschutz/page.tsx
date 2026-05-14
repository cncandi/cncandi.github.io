import PageLayout from '@/components/PageLayout'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Datenschutz | DTR Reitz' }
export default function DatenschutzPage() {
  return (
    <PageLayout cta={false}>
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="font-display text-3xl text-brand-navy mb-8">Datenschutzerklärung</h1>
          <p className="text-brand-muted leading-relaxed">Diese Seite wird aktuell überarbeitet. Bei Fragen zum Datenschutz wenden Sie sich bitte direkt an: reitz@cnc-technik.de</p>
        </div>
      </section>
    </PageLayout>
  )
}
