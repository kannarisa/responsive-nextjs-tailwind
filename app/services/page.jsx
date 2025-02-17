import React from 'react'
import PlanSection from './components/PlanSection'
import OurServicesSection from './components/OurServicesSection'
export const metadata = {
  title: "Responsive Web | Services",
};
const page = () => {
  return (
    <div>
      <PlanSection />
      <OurServicesSection />
    </div>
  )
}

export default page