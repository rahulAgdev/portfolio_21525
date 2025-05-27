import { useEffect } from 'react'
import Hero from './sections/hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

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
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}

export default App