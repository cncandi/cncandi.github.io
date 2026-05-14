import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
export default function Page() {
  return (
    <PageLayout>
      <section className="relative bg-brand-navy py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal to-transparent" />
        <div className="absolute inset-0"><Image src="/images/encycam/Lathe.png" alt="Drehen" fill className="object-cover opacity-20" /><div className="absolute inset-0 bg-brand-navy/80" /></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl text-white mb-6">Drehen</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">Diese Seite wird aktuell ausgebaut.</p>
          <Link href="/kontakt" className="btn-primary">Kontakt aufnehmen</Link>
        </div>
      </section>
    </PageLayout>
  )
}
