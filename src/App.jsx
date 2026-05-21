import { lazy, Suspense } from 'react'
import Navbar from './MyNavbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'

const Projects = lazy(() => import('./Projects'))

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Projects />
      </Suspense>

      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App