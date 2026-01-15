import SectionHeadingOne from "../sectionheading/SectionHeadingOne"
import aboutListData from "../../data/about/aboutone.json"

import aboutThumb from "/images/about.jpg"

export default function AboutOne() {
  return (
    <>
      <section className="about_section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <SectionHeadingOne
                heading="About Global Bridge"
                headingtext="Global Bridge Consultancy Ltd is a professional consultancy specialising in international talent sourcing and global workforce mobility. Based in Mombasa, Kenya, we work with international employers, deployment partners, and individuals seeking overseas employment to support structured and practical workforce engagement across the Gulf region."
                align="left"
              />
              <div className="row">
                {aboutListData?.map((item) => (
                  <div key={item.id ?? item.title} className="col-sm-6">
                    {item?.title && (
                      <div className="about_list">
                        <div className="about_list_top">
                          {item?.icon && (
                            <div className="about_icon_box">
                              <i className={item.icon} aria-hidden="true"></i>
                            </div>
                          )}
                          <h5>{item.title}</h5>
                        </div>
                        {item?.text && <p>{item.text}</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_thumb">
                <img src={aboutThumb || "/placeholder.svg"} alt="About Global Bridge" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
