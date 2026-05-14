'use client'

const logos = [
  { name: 'KUKA',        img: null, text: 'KUKA' },
  { name: 'FANUC',       img: null, text: 'FANUC' },
  { name: 'ABB',         img: null, text: 'ABB Robotics' },
  { name: 'Yaskawa',     img: null, text: 'Yaskawa' },
  { name: 'SolidWorks',  img: '/images/logos/logo-solidworks.png' },
  { name: 'Dassault',    img: null, text: 'Dassault Systèmes' },
  { name: 'ENCY',    img: '/images/logos/logo-encycam.png' },
  { name: 'P3D Slicer',  img: '/images/logos/logo-p3d.png' },
  { name: 'HEIDENHAIN',  img: null, text: 'HEIDENHAIN' },
  { name: 'Siemens',     img: null, text: 'Siemens 840D' },
  { name: 'Fanuc NC',    img: null, text: 'Fanuc 31i' },
  { name: 'Mitsubishi',  img: null, text: 'Mitsubishi' },
]

export default function LogoStrip() {
  const items = [...logos, ...logos] // duplicate for seamless loop
  return (
    <div className="bg-white border-y border-gray-100 py-5 overflow-hidden">
      <div className="flex marquee-track gap-12 w-max">
        {items.map((l, i) => (
          <div key={i} className="flex items-center gap-2 flex-shrink-0 px-4 opacity-50 hover:opacity-100 transition-opacity cursor-default">
            {l.img
              ? <img src={l.img} alt={l.name} className="h-7 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
              : <span className="text-brand-navy font-bold text-sm tracking-tight whitespace-nowrap">{l.text}</span>
            }
          </div>
        ))}
      </div>
    </div>
  )
}
