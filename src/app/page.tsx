import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import ProductGrid from '@/components/ProductGrid'
import SolutionsSection from '@/components/SolutionsSection'
import NewsSection from '@/components/NewsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <ProductGrid />
        <SolutionsSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
