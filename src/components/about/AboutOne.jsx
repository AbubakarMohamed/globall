import SectionHeadingOne from "../sectionheading/SectionHeadingOne";
import aboutListData from "../../data/about/aboutone.json";
import aboutThumb from "/images/about.png";

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

            <div className="col-lg-6 d-flex flex-column">
              {/* Adjust this margin to match the top offset of the paragraph on the left */}
              <div className="mt-4"> {/* ← This moves the mission down */}
                <h4 className="mb-2 font-semibold">Our Mission</h4>
                <p>
                  To support international workforce mobility through organised talent sourcing and coordinated
                  deployment solutions that serve the interests of employers, partners, and candidates.
                </p>
              </div>

              <div className="about_thumb mt-auto">
                <img src={aboutThumb || "/placeholder.svg"} alt="About Global Bridge" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}