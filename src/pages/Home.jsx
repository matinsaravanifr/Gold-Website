import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import WellcomeSection from '../components/Wellcome-section/WellcomeSection'
import LivePrice from '../components/LivePrice/LivePrice'

export default function Home() {
  return (
    <>
    <Navbar/>
    <WellcomeSection/>
    <LivePrice/>
    </>
  )
}
