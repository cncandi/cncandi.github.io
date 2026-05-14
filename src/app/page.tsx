import Header from '@/components/Header'
import Hero from '@/components/Hero'
import VorteileSection from '@/components/VorteileSection'
import ErfolgsgeschichtenSection from '@/components/ErfolgsgeschichtenSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VorteileSection />
        <ErfolgsgeschichtenSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
