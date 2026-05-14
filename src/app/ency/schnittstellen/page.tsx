import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
export default function Page() {
  return (
    <PageLayout title="Schnittstellen" subtitle="CAD/CAM-Schnittstellen">
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="rounded-xl overflow-hidden border border-brand-teal/20 mb-8">
          <Image src="/images/mockup/Schnittstellen_00_1229x820.png" alt="Schnittstellen" width={1200} height={500} className="w-full object-cover max-h-80" />
        </div>
        <p className="text-white/70 leading-relaxed mb-8">Diese Seite wird aktuell ausgebaut. Für Informationen nehmen Sie bitte Kontakt mit uns auf.</p>
        <Link href="/kontakt" className="inline-flex items-center gap-2 bg-brand-teal text-white px-6 py-3 rounded font-semibold hover:bg-brand-teal-dark transition-colors">
          Kontakt aufnehmen
        </Link>
      </section>
    </PageLayout>
  )
}
