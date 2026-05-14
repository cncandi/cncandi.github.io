import type { Metadata } from 'next'
import { Arimo } from 'next/font/google'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DTR Reitz GmbH – CAD/CAM & Robotics Software',
  description: 'ENCY, P3D Slicer, SolidWorks, DELMIA und CATIA — Vertrieb, Beratung und Support seit 1994 für über 1.000 Kunden im DACH-Raum.',
  keywords: 'CAD CAM CNC Roboter ENCY P3D Slicer SolidWorks DELMIA CATIA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={arimo.variable}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-arimo), Arial, sans-serif' }}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
