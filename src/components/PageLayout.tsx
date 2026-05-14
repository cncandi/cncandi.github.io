import Header from './Header'
import Footer from './Footer'
import CTASection from './CTASection'
import ScrollReveal from './ScrollReveal'

export default function PageLayout({ children, cta = true }: { children: React.ReactNode; cta?: boolean }) {
  return (
    <>
      <Header />
      <main className="pt-20">
        {children}
        {cta && <CTASection />}
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
