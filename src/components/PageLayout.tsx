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
  heroBg?: string
}

export default function PageLayout({ children, cta = true, title, subtitle, heroBg }: Props) {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        {title && (
          <section className="relative pt-24 pb-12 overflow-hidden">
            <div className="absolute inset-0">
              <Image src={heroBg || '/images/mockup/homepage_03_1024x1536.png'} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-brand-navy/75" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6">
              <h1 className="font-display text-4xl lg:text-5xl text-white mb-3">{title}</h1>
              {subtitle && <p className="text-white/60 text-lg max-w-2xl">{subtitle}</p>}
            </div>
          </section>
        )}

        {/* Stone bg wrapper for all content */}
        <div className="relative">
          <div className="fixed inset-0 -z-10">
            <Image src="/images/mockup/homepage_03_1024x1536.png" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-brand-navy/80" />
          </div>
          {children}
        </div>

        {cta && <CTASection />}
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
