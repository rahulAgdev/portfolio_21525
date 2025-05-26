import Hero from './sections/hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'

const App = () => {
  return (
    <main>
      <NavBar />  
      <Hero />
      <ShowcaseSection />
      <LogoSection />
    </main>
  )
}

export default App