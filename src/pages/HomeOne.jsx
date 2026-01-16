import HeroSection from "../components/layout/HeroSection"
import AboutOne from "../components/about/AboutOne"
import Contact from "../components/contact/Contact"
import ServicesOne from "../components/services/ServicesOne"

import Markets from "../components/markets/Markets"
import Principles from "../components/principles/Principles"
import Candidates from "../components/candidates/Candidates"

export default function HomeOne() {
  return (
    <div className="homepage_one">
      <HeroSection />
      <AboutOne />
      <ServicesOne />
      <Markets />
      <Principles />
      <Candidates />
      <Contact />
    </div>
  )
}
