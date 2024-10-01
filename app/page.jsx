import NavBar from './components/NavBar'

import Hero from './components/Hero'
import TechStack from './components/TechStack'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-neutral-100">
      <NavBar />
      <Hero />
      <TechStack />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
