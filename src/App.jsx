import Hero from './sections/hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'

const App = () => {
  return (
    <main>
      <NavBar />  
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
    </main>
  )
}

export default App