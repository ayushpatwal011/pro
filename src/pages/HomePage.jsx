import React from 'react'
import TechnologiesScroller from '../components/ui/TechnologiesScroller'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/layout/HeroSection'
import Experience from '../components/layout/Experience'
import Project from '../components/layout/Project'
import Contact from '../components/layout/Contact'
import Skills from '../components/layout/Skills'


const HomePage = () => {
  return (
    <div>
        <div className="flex justify-center bg-black ">
        <Navbar />
      </div>
      <secion id="Home" className='mt-8 '>
        <HeroSection />
      </secion>
      <section id="skills" className='mt-8'>
        <TechnologiesScroller />
      </section>
      <section id='Projects'>
        <Project />
      </section>
      <section id='Experience'>
        <Experience />
      </section>
      <section id='Skills'>
        <Skills />
      </section>
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  )
}

export default HomePage
