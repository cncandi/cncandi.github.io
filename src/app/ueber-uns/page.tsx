import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Über uns | ENCY' }

export default function UeberUnsPage() {
  return (
    <PageLayout title="Kompetenz für CAD/CAM, CNC & Robotik - seit 1994"
      subtitle="Wir unterstützen Fertigungsunternehmen dabei, Prozesse sicher zu planen, effizient zu programmieren und erfolgreich zu automatisieren.">
      <section className="py-12 max-w-7xl mx-auto px-6 space-y-16">
        {/* CTAs */}
        <div className="flex gap-4">
          <Link href="/kontakt" className="px-6 py-3 text-sm font-semibold bg-brand-teal text-white rounded hover:bg-brand-teal-dark transition-colors">Beratung anfragen</Link>
          <Link href="/service" className="px-6 py-3 text-sm font-semibold border-2 border-white/30 text-white rounded hover:border-white transition-colors">Download</Link>
        </div>

        {/* Was wir tun */}
        <div>
          <h2 className="font-display text-2xl text-white mb-4">Was wir tun</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="text-white/70 text-sm leading-relaxed space-y-3">
              <p>Datentechnik Reitz ist Ihr Partner für praxisnahe Lösungen in der digitalen Fertigung.</p>
              <p>Unser Schwerpunkt liegt auf CAD/CAM-Software, CNC-Programmierung und Industrierobotik. Kombiniert mit Simulation und anwendungsspezifischen Anpassungen, die im realen Produktionsalltag funktionieren.</p>
              <p>Dabei begleiten wir Projekte von der ersten Präsentation der Software über die Angebotsstellung, Installation und Anpassung an die Maschinen des Kunden, sowie Schulungen in Ihren Schulungsräumen oder beim Kunden vor Ort sowie der Betreuung.</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-brand-teal/20">
              <Image src="/images/mockup/homepage_08_1536x1024.png" alt="ENCY Software" width={600} height={400} className="w-full object-cover" />
            </div>
          </div>
        </div>

        {/* Wer sind wir */}
        <div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden border border-brand-teal/20">
              <Image src="/images/assets/IMG_0453-scaled-3.webp" alt="Team" width={600} height={400} className="w-full object-cover" />
            </div>
            <div>
              <h2 className="font-display text-2xl text-white mb-4">Wer sind wir</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-3">Die Firma wurde von Andreas Reitz, dem jetzigen Geschäftsführer gegründet. Am Standort in Breidenstein beschäftigt die Datentechnik Reitz derzeit 10 Mitarbeiter. Darüber hinaus sind weitere Außendienstmitarbeiter in den Regionen Stuttgart, Frankfurt und Hannover für das Unternehmen tätig.</p>
              <p className="text-white/70 text-sm leading-relaxed">Wir verfügen über eine 5-Achs-Fräsmaschine und einen Roboter von Kuka, um die Software an realen Teilen zu zeigen und dem Kunden eine komplette Beratung zu ermöglichen, sowie die Bearbeitung mit Maschine oder Roboter live zeigen zu können.</p>
            </div>
          </div>
        </div>

        {/* Praxis statt Theorie */}
        <div>
          <h2 className="font-display text-2xl text-white mb-4">Unsere Stärke: Praxis statt Theorie</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-3xl">
            Alle unsere Mitarbeiter haben Erfahrung mit CNC-Maschinen und/oder Robotern. Das hat den entscheidenden Vorteil, dass ein Mitarbeiter nicht nur mit der Software, sondern auch mit den Bearbeitungsmethoden vertraut sind. Und das seit mehr als 30 Jahren: Schulungen nicht nur an der Software, sondern an der Maschine oder am Roboter durchgeführt werden.
          </p>
        </div>

        {/* Andreas Reitz */}
        <div className="grid lg:grid-cols-2 gap-8 items-center border border-brand-teal/20 rounded-xl p-8 bg-white/5">
          <div className="flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-brand-teal/30">
              <Image src="/images/assets/Andreas.png" alt="Andreas Reitz" fill className="object-cover" />
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl text-white mb-3">Andreas Reitz</h3>
            <p className="text-white/70 text-sm leading-relaxed italic">
              „Unser Ziel ist es, unseren Kunden eine Lösung rund um das Thema CAD/CAM zu erarbeiten. Wenn wir dies mit unseren Standardmodulen ENCY und P3D tun können, umso besser. Sind jedoch Sonderentwicklungen notwendig, können wir dies problemlos realisieren."
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
