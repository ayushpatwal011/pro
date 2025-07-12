import React from 'react'
import TechnologiesScroller from '../components/ui/TechnologiesScroller'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/layout/HeroSection'

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
    </div>
  )
}

export default HomePage