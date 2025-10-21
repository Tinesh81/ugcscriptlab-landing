import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import LabProcess from '@/components/LabProcess'
import LabResults from '@/components/LabResults'
import TestingCriteria from '@/components/TestingCriteria'
import ComparisonTable from '@/components/ComparisonTable'
import HowItWorks from '@/components/HowItWorks'
import ExampleOutput from '@/components/ExampleOutput'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <LabProcess />
      <LabResults />
      <TestingCriteria />
      <ComparisonTable />
      <HowItWorks />
      <ExampleOutput />
      <CTASection />
      <Footer />
    </main>
  )
}
