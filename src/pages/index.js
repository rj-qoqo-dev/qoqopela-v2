import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { signupObj, freeObj, exploreObj, matchupObj } from '../components/InfoSection/InfoObjects'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/SideBar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...signupObj} />
      <InfoSection {...freeObj} />
      <InfoSection {...exploreObj} />
      <InfoSection {...matchupObj} />
      <Services />
      <Footer />
    </>
  )
}

export default Home