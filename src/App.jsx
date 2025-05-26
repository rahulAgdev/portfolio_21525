import Hero from './sections/hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <main>
      <NavBar />  
      <Hero />
      <ShowcaseSection />
    </main>
  )
}

export default App