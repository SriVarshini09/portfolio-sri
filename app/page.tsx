'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Research from '@/components/sections/Research'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <ScrollProgress />
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="education">
        <Education />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="experience">
        <Experience />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      
      <div id="research">
        <Research />
      </div>
      
      <div id="certifications">
        <Certifications />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
    </main>
  )
}
