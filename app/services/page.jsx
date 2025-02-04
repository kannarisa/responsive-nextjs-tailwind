import FooterSection from '@/components/IndexComponents/footer-section/FooterSection'
import Navbar from '@/components/IndexComponents/navbar/Navbar'
import React from 'react'
import PlanSection from './components/PlanSection'
import OurServicesSection from './components/OurServicesSection'

const page = () => {
  return (
    <div>
      <Navbar />
      <PlanSection />
      <OurServicesSection />
      <FooterSection />
    </div>
  )
}

export default page