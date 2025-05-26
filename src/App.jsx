import { useEffect } from 'react'
import Hero from './sections/hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <NavBar />  
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
    </main>
  )
}

export default App