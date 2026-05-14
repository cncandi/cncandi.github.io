'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

const apps = [
  {img:'/images/encycam/Welding.png',           de:'Schweißen',    en:'Welding'},
  {img:'/images/encycam/Cutting.png',           de:'Schneiden',    en:'Cutting'},
  {img:'/images/encycam/Polishing.png',         de:'Schleifen',    en:'Polishing'},
  {img:'/images/encycam/Paint-Spray-Coating.png',de:'Sprühen',     en:'Spraying'},
  {img:'/images/encycam/Pick-and-Place-1.png',  de:'Pick & Place', en:'Pick & Place'},
  {img:'/images/assets/druck1-1.webp',          de:'3D-Druck',     en:'3D Printing'},
]

export default function RobotikSection() {
  const { lang } = useI18n()
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div data-reveal="left">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-widest uppercase">
                {lang==='de' ? 'Roboter-Bearbeitung' : 'Robot Machining'}
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-brand-navy leading-tight mb-6 red-line">
              {lang==='de' ? 'Offline-Programmierung für alle Industrieroboter' : 'Offline programming for all industrial robots'}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-8">
              {lang==='de'
                ? 'Programmieren Sie Ihren Roboter offline — ohne Stillstand. SprutCAM ENCY und P3D Slicer unterstützen KUKA, FANUC, ABB, Yaskawa und alle weiteren gängigen Hersteller.'
                : 'Program your robot offline — without downtime. SprutCAM ENCY and P3D Slicer support KUKA, FANUC, ABB, Yaskawa and all other common manufacturers.'}
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {apps.map((a,i) => (
                <div key={a.de} data-reveal data-delay={String(i+1)} className="group relative rounded-xl overflow-hidden aspect-square img-zoom">
                  <Image src={a.img} alt={a.de} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 to-transparent" />
                  <div className="absolute bottom-2 inset-x-1 text-white text-xs font-bold text-center">{lang==='de' ? a.de : a.en}</div>
                </div>
              ))}
            </div>
            <Link href="/loesungen/roboter" className="btn-primary">
              {lang==='de' ? 'Robotik-Lösungen ansehen' : 'View robotics solutions'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
          <div data-reveal="right" className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl img-zoom">
              <Image src="/images/encycam/Build-Your-Robotic-Cell-Digital-Twin-scaled.jpg" alt="Roboter Digital Twin" width={640} height={380} className="w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg img-zoom">
                <Image src="/images/encycam/Kinematics-aware-toolpath-calculation.png" alt="Kinematik" width={300} height={190} className="w-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg img-zoom">
                <Image src="/images/encycam/Full-robotic-cell-simulation.png" alt="Zellsimulation" width={300} height={190} className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
