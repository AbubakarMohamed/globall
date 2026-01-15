import HeroSection from "../components/layout/HeroSection"
import AboutOne from "../components/about/AboutOne"
import Contact from "../components/contact/Contact"
import ServicesOne from "../components/services/ServicesOne"
import WhyChooseUs from "../components/whychooseus/WhyChooseUs"

export default function HomeOne() {
  return (
    <div className="homepage_one">
      <HeroSection />
      <AboutOne />
      <ServicesOne />
      <WhyChooseUs />
      <Contact />
    </div>
  )
}
