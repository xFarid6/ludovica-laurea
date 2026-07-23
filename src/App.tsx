import FloatingBackground from './components/FloatingBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import InvestigationPlayground from './components/InvestigationPlayground'
import Gallery from './components/Gallery'
import Diploma from './components/Diploma'
import PeriodicCard from './components/PeriodicCard'
import GuestbookWall from './components/GuestbookWall'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <FloatingBackground />
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <InvestigationPlayground />
        <Gallery />
        <Diploma />
        <PeriodicCard />
        <GuestbookWall />
      </main>
      <Footer />
    </>
  )
}

export default App
