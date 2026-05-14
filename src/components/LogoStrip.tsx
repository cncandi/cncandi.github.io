'use client'
const logos = [
  { text: 'KUKA' }, { text: 'FANUC' }, { text: 'ABB Robotics' },
  { img: '/images/logos/logo-solidworks.png', name: 'SolidWorks' },
  { img: '/images/logos/logo-encycam.png', name: 'ENCY' },
  { img: '/images/logos/logo-p3d.png', name: 'P3D' },
  { text: 'Yaskawa' }, { text: 'HEIDENHAIN' }, { text: 'Siemens 840D' },
  { text: 'Dassault Systèmes' }, { text: 'Universal Robots' }, { text: 'STÄUBLI' },
]
export default function LogoStrip() {
  const items = [...logos, ...logos]
  return (
    <div className="bg-white border-y border-gray-100 py-5 overflow-hidden">
      <div className="flex marquee-track gap-14 w-max">
        {items.map((l, i) => (
          <div key={i} className="flex items-center flex-shrink-0 opacity-40 hover:opacity-80 transition-opacity">
            {'img' in l && l.img
              ? <img src={l.img} alt={l.name} className="h-7 w-auto object-contain grayscale" />
              : <span className="text-brand-navy font-bold text-sm tracking-tight whitespace-nowrap">{'text' in l ? l.text : ''}</span>
            }
          </div>
        ))}
      </div>
    </div>
  )
}
