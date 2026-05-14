import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DTR Reitz GmbH – CAD/CAM & Robotics Software',
  description: 'ENCY, P3D Slicer, SolidWorks, DELMIA und CATIA — Vertrieb, Beratung und Support seit 1994 für über 1.000 Kunden im DACH-Raum.',
  keywords: 'CAD CAM CNC Roboter ENCY P3D Slicer SolidWorks DELMIA CATIA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased bg-white text-brand-navy">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
