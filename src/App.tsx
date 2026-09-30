import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductDemo } from './components/ProductDemo'
import { CompanionSection, DownloadSection, FAQ, Features, Footer, MadeForMac, Routine, Sources, Steps, Why } from './components/Sections'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        <Features />
        <Why />
        <Steps />
        <ProductDemo />
        <MadeForMac />
        <CompanionSection />
        <Sources />
        <Routine />
        <FAQ />
        <DownloadSection />
      </main>
      <Footer />
    </>
  )
}
