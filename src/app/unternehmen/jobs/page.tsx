import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Freie Stellen | Datentechnik Reitz' }

export default function FreieStellen() {
  return (
    <PageLayout>
      {/* Hero: Text links, Bild rechts — wie im Mockup */}
      <section className="pt-20 min-h-[320px] flex items-stretch">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-0 items-center">
          {/* Links: Text */}
          <div className="py-10">
            <h1 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-4">
              Freie Stellen bei<br />Datentechnik Reitz
            </h1>
            <p className="text-white/60 text-sm max-w-md leading-relaxed">
              Werden Sie Teil unseres dynamischen Teams und gestalten Sie die Zukunft der Fertigungsautomation. Nachfolgend finden Sie unsere aktuellen Stellenausschreibungen.
            </p>
          </div>
          {/* Rechts: Team-Foto */}
          <div className="hidden lg:block relative h-72">
            <Image
              src="/images/mockup/team_02_1536x1024.png"
              alt="Team Datentechnik Reitz"
              fill
              className="object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Vorteile */}
        <div>
          <h2 className="font-display text-2xl text-white mb-2">
            Spannende Projekte, flache Hierarchien, berufliche Sicherheit
          </h2>
          <div className="w-16 h-0.5 bg-brand-teal mb-6" />
          <p className="text-white/60 text-sm mb-6">
            Bei uns erwarten Sie interessante und abwechslungsreiche Aufgaben in einem erfahrenen und innovativen Team.<br />
            Wir bieten Ihnen:
          </p>
          <div className="space-y-3">
            {[
              'Familienfreundliche Arbeitsatmosphäre & sichere Anstellung',
              'Attraktives Gehalt, Urlaubs- & Weihnachtsgeld',
              'Flache Hierarchien und kurze Entscheidungswege',
              'Umfangreiche Weiterbildungsmöglichkeiten und hohe Zukunftssicherheit',
            ].map(v => (
              <div key={v} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-white/80 text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Aktuelle Stellen */}
        <div>
          <h2 className="font-display text-2xl text-white mb-2">Aktuelle Stellenangebote</h2>
          <div className="w-16 h-0.5 bg-brand-teal mb-8" />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'CAD/CAM Software Consultant (m/w/d)', details: ['Vollzeit', 'Breidenstein / Remote', 'Ab sofort'] },
              { title: 'Vertriebsmitarbeiter CAD/CAM (m/w/d)', details: ['Vollzeit', 'DACH-Region', 'Ab sofort'] },
            ].map(job => (
              <div key={job.title} className="border border-white/10 rounded-xl p-6 bg-white/5">
                <h3 className="text-white font-semibold mb-3">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mb-5">
                  {job.details.map(d => (
                    <span key={d} className="text-xs text-brand-teal border border-brand-teal/30 rounded-full px-3 py-1">{d}</span>
                  ))}
                </div>
                <Link href="/kontakt"
                  className="inline-flex items-center gap-2 border border-brand-teal/40 text-brand-teal text-sm px-4 py-2.5 rounded hover:bg-brand-teal/10 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  Jetzt online bewerben
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
