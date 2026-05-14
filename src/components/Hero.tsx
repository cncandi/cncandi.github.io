'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Dark stone texture background */}
      <div className="absolute inset-0">
        <Image
          src="/images/mockup/homepage_03_1024x1536.png"
          alt="background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-brand-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left: Text */}
          <div>
            <h1 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-5">
              Effiziente CAD/CAM- &amp; Robotiklösungen für Ihre Fertigung
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Von der Simulation bis zur Automation - Ihre Experten für CNC, CAM und Robotik
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt"
                className="px-6 py-3 text-sm font-semibold text-brand-teal border-2 border-brand-teal rounded hover:bg-brand-teal hover:text-white transition-colors">
                Beratung anfragen
              </Link>
              <Link href="/service"
                className="px-6 py-3 text-sm font-semibold text-white border-2 border-white/40 rounded hover:border-white transition-colors">
                Download
              </Link>
            </div>
          </div>

          {/* Right: Precision part */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/mockup/Homepage_04_1280x720.jpg"
                alt="Präzisionsbauteil"
                width={640}
                height={360}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product cards strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: <CadIcon />, title: 'CAD / CAM-\nSoftware', sub: 'ENCY & CAM Lösungen', href: '/produkte/sprutcam-ency' },
            { icon: <P3DIcon />, title: 'P3D\nSlicer', sub: '3D Druck & Lösungen', href: '/produkte/p3d-slicer' },
            { icon: <SimIcon />, title: 'Simulation &\nOptimierung', sub: 'Sonderentwicklung', href: '/unternehmen/sonderentwicklung' },
            { icon: <SupportIcon />, title: 'Schulung &\nSupport', sub: 'Individuelle Trainings & Support', href: '/service' },
          ].map((card) => (
            <Link key={card.title} href={card.href}
              className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-brand-teal/50 transition-all group">
              <div className="text-brand-teal mt-1 flex-shrink-0">{card.icon}</div>
              <div>
                <div className="text-white font-semibold text-sm leading-snug mb-1 whitespace-pre-line">{card.title}</div>
                <div className="text-white/50 text-xs leading-snug">{card.sub}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function CadIcon() {
  return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/></svg>
}
function P3DIcon() {
  return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-9 5.25-9-5.25v-2.25l9-5.25 9 5.25z"/></svg>
}
function SimIcon() {
  return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
}
function SupportIcon() {
  return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>
}
