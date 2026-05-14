import PageLayout from '@/components/PageLayout'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Impressum | DTR Reitz' }
export default function ImpressumPage() {
  return (
    <PageLayout cta={false}>
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 prose prose-slate">
          <h1 className="font-display text-3xl text-brand-navy mb-8">Impressum</h1>
          <h2 className="font-semibold text-brand-navy">Angaben gemäß § 5 TMG</h2>
          <p className="text-brand-muted">CAD/CAM Systeme Datentechnik Reitz GmbH &amp; Co. KG<br/>Perfstraße 2<br/>35216 Breidenstein</p>
          <h2 className="font-semibold text-brand-navy mt-6">Kontakt</h2>
          <p className="text-brand-muted">Telefon: +49 6461 7593437<br/>Fax: +49 6461 7593438<br/>E-Mail: reitz@cnc-technik.de</p>
          <h2 className="font-semibold text-brand-navy mt-6">Vertreten durch</h2>
          <p className="text-brand-muted">Geschäftsführer: Andreas Reitz</p>
        </div>
      </section>
    </PageLayout>
  )
}
