import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogoStrip from '@/components/LogoStrip'
import StatsBar from '@/components/StatsBar'
import ProductGrid from '@/components/ProductGrid'
import EncyShowcase from '@/components/EncyShowcase'
import P3DSection from '@/components/P3DSection'
import RobotikSection from '@/components/RobotikSection'
import SolutionsSection from '@/components/SolutionsSection'
import NewsSection from '@/components/NewsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <StatsBar />
        <ProductGrid />
        <EncyShowcase />
        <P3DSection />
        <RobotikSection />
        <SolutionsSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
