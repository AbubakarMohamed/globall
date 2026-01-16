import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero_section_global_bridge" aria-label="Main hero section">
      <div className="container">
        <div className="row align-items-center min-vh-50 justify-content-center">
          <div className="col-lg-10">
            <div className="hero_content text-center">
              <h1 className={`hero_title ${isVisible ? 'fade-in-up' : ''}`}>
                <span className="hero_highlight">Structured Workforce Solutions</span> for the Gulf Region
              </h1>
              <p className={`hero_subtitle mx-auto ${isVisible ? 'fade-in-up delay-1' : ''}`} >
                Global Bridge Consultancy Ltd is a Kenya-based talent sourcing and global mobility firm supporting
                employers and partners across the Gulf through organised, transparent, and scalable workforce solutions.
              </p>
              <div className={`hero_buttons d-flex justify-content-center ${isVisible ? 'fade-in-up delay-2' : ''}`} role="group" aria-label="Call to action buttons">
                <a href="#about" className="tem_btn" aria-label="Learn more about our services">
                  Learn More
                </a>
                <a href="#contact" className="tem_btn tem_btn_border_three" aria-label="Contact us for workforce solutions">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}