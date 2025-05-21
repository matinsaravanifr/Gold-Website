import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import WellcomeSection from '../components/Wellcome-section/WellcomeSection'
import LivePrice from '../components/LivePrice/LivePrice'
import WhyUsCards from '../components/WhyUsCards/WhyUsCards'
import Steps from '../components/Steps/Steps'
import Products from '../components/Products/Products'
import AboutAs from '../components/AboutUs/AboutAs'

export default function Home() {
  return (
    <>
    <Navbar/>
    <WellcomeSection/>
    <LivePrice/>
    <WhyUsCards/>
    <Steps/>
    <Products/>
    <AboutAs/>
    </>
  )
}
