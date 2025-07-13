import React from 'react'
import TechnologiesScroller from '../components/ui/TechnologiesScroller'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/layout/HeroSection'
import Experience from '../components/layout/Experience'
import Project from '../components/layout/Project'
import Contact from '../components/layout/Contact'


const HomePage = () => {
  return (
    <div>
        <div className="flex justify-center bg-black ">
        <Navbar />
      </div>
      <div className='mt-8 '>
        <HeroSection />
      </div>
      <div className='mt-8'>
        <TechnologiesScroller />
      </div>
      <div className=''>
        <Project />
      </div>
      <div className=''>
        <Experience />
      </div>
      <div className=''>
        <Contact />
      </div>
    </div>
  )
}

export default HomePage