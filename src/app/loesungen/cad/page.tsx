import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
export default function Page() {
  return (
    <PageLayout>
      <section className="relative bg-brand-navy py-28 overflow-hidden">
        <div className="absolute inset-0"><Image src="/images/encycam/Parametric-CAD.jpg" alt="CAD-Konstruktion" fill className="object-cover opacity-20" /><div className="absolute inset-0 bg-brand-navy/80" /></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl text-white mb-6">CAD-Konstruktion</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">SolidWorks, CATIA und DELMIA für Produktentwicklung, Anlagenbau und digitale Fabrikplanung.</p>
          <Link href="/kontakt" className="btn-primary">Beratungsgespräch vereinbaren</Link>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center" data-reveal>
          <Image src="/images/encycam/Parametric-CAD.jpg" alt="CAD-Konstruktion" width={900} height={500} className="rounded-2xl shadow-2xl mx-auto mb-12 object-cover" />
          <Link href="/demo" className="btn-primary">Demo anfragen</Link>
        </div>
      </section>
    </PageLayout>
  )
}
