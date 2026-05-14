import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
export default function Page() {
  return (
    <PageLayout title="Funktionsmatrix ENCY">
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div key={0} className="rounded-xl overflow-hidden border border-brand-teal/20"><Image src="/images/mockup/Funktionsmatrix_ENCY_06_1452x4312.png" alt="Funktionsmatrix ENCY" width={600} height={400} className="w-full object-cover" /></div>
        </div>
        <div className="flex gap-4">
          <Link href="/kontakt" className="bg-brand-teal text-white px-6 py-3 rounded font-semibold hover:bg-brand-teal-dark transition-colors">Demo anfragen</Link>
          <Link href="/produkte/sprutcam-ency" className="border border-white/30 text-white px-6 py-3 rounded hover:border-white transition-colors">Zurück zu ENCY</Link>
        </div>
      </section>
    </PageLayout>
  )
}
