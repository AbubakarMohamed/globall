import SectionHeadingOne from "../sectionheading/SectionHeadingOne"
import principlesData from "../../data/principles/principles.json"

export default function Principles() {
  if (!principlesData?.length) {
    return (
      <section className="principles_section">
        <div className="container">
          <p className="text-center">No principles information available.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="principles_section" id="principles">
      <div className="container">
        <SectionHeadingOne heading="Our Operating Principles" align="center" />
        <div className="row">
          {principlesData?.map((item) => (
            <div className="col-lg-6 col-md-6 mb-4" key={item.id}>
              <div className="principles_card">
                <div className="principles_icon">
                  <i className={item.icon} aria-hidden="true"></i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
