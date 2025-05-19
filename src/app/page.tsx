import HowItWorks from "@/sections/howItWorks/HowItWorks"
import Header from "../components/Header"
import Hero from "../sections/hero/Hero"
import AIInActionSection from "@/sections/AIInAction/AIInActionSection"
import ProblemStatementSection from "@/sections/ProblemStatementSection/ProblemStatementSection"
import SolutionOverview from "@/sections/SolutionOverview/SolutionOverview"
import IntegrationsSection from "@/sections/IntegrationsSection/IntegrationsSection"
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemStatementSection />
        <SolutionOverview />
        <HowItWorks />
        <IntegrationsSection />
        <AIInActionSection />
      </main>
    </div>
  )
}
