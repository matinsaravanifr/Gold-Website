import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import WellcomeSection from '../components/Wellcome-section/WellcomeSection'
import LivePrice from '../components/LivePrice/LivePrice'
import WhyUsCards from '../components/WhyUsCards/WhyUsCards'

export default function Home() {
  return (
    <>
    <Navbar/>
    <WellcomeSection/>
    <LivePrice/>
    <WhyUsCards/>
    </>
  )
}
