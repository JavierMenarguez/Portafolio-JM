//import { useState } from 'react'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <>
      <div id="Inicio" className="min-h-dvh w-full bg-[#020617] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" >
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Navbar />
          <Hero />
          <Experience />
          <AboutMe />
        </div>
      </div>

    </>
  )
}

export default App
