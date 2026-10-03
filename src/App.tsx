import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductDemo } from './components/ProductDemo'
import { DownloadSection, FAQ, Features, Footer, Sources, Steps } from './components/Sections'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        <Features />
        <Steps />
        <ProductDemo />
        <Sources />
        <FAQ />
        <DownloadSection />
      </main>
      <Footer />
    </>
  )
}
