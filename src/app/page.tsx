import HowItWorks from "@/sections/howItWorks/HowItWorks"
import Header from "../components/Header"
import Hero from "../sections/hero/Hero"
import AIInActionSection from "@/sections/AIInAction/AIInActionSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <AIInActionSection />
      </main>
    </div>
  )
}
