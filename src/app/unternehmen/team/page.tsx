import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
export default function Page() {
  return (
    <PageLayout title="Team" subtitle="Unsere Mitarbeiter">
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          
              <div className="border border-brand-teal/20 rounded-xl overflow-hidden bg-white/5 text-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-brand-teal/30">
                  <Image src="/images/assets/Andreas.png" alt="Andreas Reitz" fill className="object-cover" />
                </div>
                <h3 className="text-white font-semibold">Andreas Reitz</h3>
                <p className="text-brand-teal text-sm">Geschäftsführer</p>
              </div>

              <div className="border border-brand-teal/20 rounded-xl overflow-hidden bg-white/5 text-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-brand-teal/30">
                  <Image src="/images/assets/Dieter.png" alt="Dieter" fill className="object-cover" />
                </div>
                <h3 className="text-white font-semibold">Dieter</h3>
                <p className="text-brand-teal text-sm">Mitarbeiter</p>
              </div>
        </div>
      </section>
    </PageLayout>
  )
}
