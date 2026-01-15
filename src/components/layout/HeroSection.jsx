export default function HeroSection() {
  return (
    <section className="hero_section_global_bridge">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8">
            <div className="hero_content">
              <h1 className="hero_title">
                <span className="hero_highlight">Structured Workforce Solutions</span> for the Gulf Region
              </h1>
              <p className="hero_subtitle">
                Global Bridge Consultancy Ltd is a Kenya-based talent sourcing and global mobility firm supporting
                employers and partners across the Gulf through organised, transparent, and scalable workforce solutions.
              </p>
              <div className="hero_buttons">
                <a href="#about" className="tem_btn">
                  Learn More
                </a>
                <a href="#contact" className="tem_btn tem_btn_border_three">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="hero_stats">
              <div className="stat_item">
                <h3>150+</h3>
                <p>Successful Deployments</p>
              </div>
              <div className="stat_item">
                <h3>450+</h3>
                <p>Satisfied Candidates</p>
              </div>
              <div className="stat_item">
                <h3>8</h3>
                <p>Gulf Markets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
