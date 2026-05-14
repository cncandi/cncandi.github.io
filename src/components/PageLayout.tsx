import Header from './Header'
import Footer from './Footer'
import CTASection from './CTASection'
import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

interface Props {
  children: React.ReactNode
  cta?: boolean
  title?: string
  subtitle?: string
}

export default function PageLayout({ children, cta = true, title, subtitle }: Props) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen">
        {/* Stone texture bg — covers entire page */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <img
            src="/images/mockup/homepage_03_1024x1536.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-brand-navy/80" />
        </div>

        {/* Page title hero */}
        {title && (
          <div className="pt-20 pb-8 max-w-7xl mx-auto px-6">
            <h1 className="font-display text-4xl lg:text-5xl text-white pt-8 mb-3">{title}</h1>
            {subtitle && <p className="text-white/60 text-base max-w-2xl">{subtitle}</p>}
          </div>
        )}

        {children}

        {cta && <CTASection />}
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
