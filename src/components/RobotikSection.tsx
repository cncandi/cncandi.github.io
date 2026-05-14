'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

const applications = [
  { img: '/images/encycam/Welding.png',           labelDe: 'Schweißen',    labelEn: 'Welding' },
  { img: '/images/encycam/Cutting.png',           labelDe: 'Schneiden',    labelEn: 'Cutting' },
  { img: '/images/encycam/Polishing.png',         labelDe: 'Schleifen',    labelEn: 'Polishing' },
  { img: '/images/encycam/Paint-Spray-Coating.png', labelDe: 'Sprühen',   labelEn: 'Spray Coating' },
  { img: '/images/encycam/Pick-and-Place-1.png',  labelDe: 'Pick & Place', labelEn: 'Pick & Place' },
  { img: '/images/encycam/Sculpture-Stone.png',   labelDe: 'Fräsen',       labelEn: 'Milling' },
]

export default function RobotikSection() {
  const { lang } = useI18n()
  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-widest uppercase">
                {lang === 'de' ? 'Roboter-Bearbeitung' : 'Robot Machining'}
              </span>
            </div>
            <h2 className="font-display text-4xl text-brand-navy leading-tight mb-6">
              {lang === 'de' ? 'Offline-Programmierung für Industrieroboter' : 'Offline programming for industrial robots'}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-8">
              {lang === 'de'
                ? 'Programmieren Sie Ihren Industrieroboter offline — ohne Maschinenstillstand. SprutCAM ENCY und P3D Slicer unterstützen alle gängigen Hersteller: KUKA, FANUC, ABB, Yaskawa und mehr.'
                : 'Program your industrial robot offline — without machine downtime. SprutCAM ENCY and P3D Slicer support all major manufacturers: KUKA, FANUC, ABB, Yaskawa and more.'}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {applications.map(a => (
                <div key={a.labelDe} className="group relative rounded-xl overflow-hidden aspect-square">
                  <Image src={a.img} alt={a.labelDe} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold text-center">
                    {lang === 'de' ? a.labelDe : a.labelEn}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/loesungen/roboter" className="btn-primary">
              {lang === 'de' ? 'Robotik-Lösungen' : 'Robotics solutions'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/encycam/Build-Your-Robotic-Cell-Digital-Twin-scaled.jpg" alt="Roboter Digital Twin" width={600} height={340} className="w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/encycam/Kinematics-aware-toolpath-calculation.png" alt="Kinematik" width={280} height={180} className="w-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/assets/robot-1.webp" alt="Roboter" width={280} height={180} className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
