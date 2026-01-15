import AboutTwo from "../components/about/AboutTwo"
import BlogGridTwo from "../components/blog/BlogGridTwo"
import BrandLogo from "../components/brandlogo/BrandLogo"
import GalleryTwo from "../components/gallery/GalleryTwo"
import PricingTableTwo from "../components/pricingtable/PricingTableTwo"
import Promo from "../components/promo/Promo"
import ServicesTwo from "../components/services/ServicesTwo"
import SliderFive from "../components/slider/SliderFive"
import TeamTwo from "../components/team/TeamTwo"
import TestimonialsTwo from "../components/testimonials/TestimonialsTwo"
import VideoPopupTwo from "../components/videopopup/VideoPopupTwo"

export default function HomeOnePageTwo() {
  return (
    <div className="homepage_two">
      <SliderFive />
      <Promo />
      <AboutTwo />
      <ServicesTwo />
      <VideoPopupTwo />
      <GalleryTwo />
      <TeamTwo />
      <PricingTableTwo />
      <TestimonialsTwo />
      <BlogGridTwo />
      <BrandLogo />
    </div>
  )
}
