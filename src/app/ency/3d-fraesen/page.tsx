import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
export default function Page() {
  return (
    <PageLayout title="3D Fräsbearbeitung">
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div key={0} className="rounded-xl overflow-hidden border border-brand-teal/20"><Image src="/images/mockup/3D_Fr%C3%A4sbearbeitung_03_1229x820.png" alt="3D Fräsbearbeitung" width={600} height={400} className="w-full object-cover" /></div>
          <div key={1} className="rounded-xl overflow-hidden border border-brand-teal/20"><Image src="/images/mockup/3D_Fr%C3%A4sbearbeitung_05_1229x820.png" alt="3D Fräsbearbeitung" width={600} height={400} className="w-full object-cover" /></div>
          <div key={2} className="rounded-xl overflow-hidden border border-brand-teal/20"><Image src="/images/mockup/3D_Fr%C3%A4sbearbeitung_07_1229x820.png" alt="3D Fräsbearbeitung" width={600} height={400} className="w-full object-cover" /></div>
          <div key={3} className="rounded-xl overflow-hidden border border-brand-teal/20"><Image src="/images/mockup/3D_Fr%C3%A4sbearbeitung_09_1229x820.png" alt="3D Fräsbearbeitung" width={600} height={400} className="w-full object-cover" /></div>
        </div>
        <div className="flex gap-4">
          <Link href="/kontakt" className="bg-brand-teal text-white px-6 py-3 rounded font-semibold hover:bg-brand-teal-dark transition-colors">Demo anfragen</Link>
          <Link href="/produkte/sprutcam-ency" className="border border-white/30 text-white px-6 py-3 rounded hover:border-white transition-colors">Zurück zu ENCY</Link>
        </div>
      </section>
    </PageLayout>
  )
}
