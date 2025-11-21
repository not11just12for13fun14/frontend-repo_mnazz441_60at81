import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.10),transparent_60%)]" />

      <div className="relative">
        <Hero />
        <Services />
        <Footer />
      </div>
    </div>
  )
}

export default App
