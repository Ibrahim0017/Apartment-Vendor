import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import ActiveListing from '../Components/ActiveListing'
import ThirdSection from '../Components/ThirdSection'
import SubscribeSection from '../Components/SubscribeSection'

const LandingPage = () => {
  return (
    <>
        {/* <Header/> */}
        <Hero/>
        <ActiveListing/>
        <ThirdSection/>
        <SubscribeSection/>
    </>
  )
}

export default LandingPage