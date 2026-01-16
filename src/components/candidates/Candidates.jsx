import SectionHeadingOne from "../sectionheading/SectionHeadingOne"
import candidatesData from "../../data/candidates/candidates.json"
import candidatesBg from "/images/service_7.png"

export default function Candidates() {
  return (
    <section className="candidates_section" id="candidates">
      <div className="container">
        <SectionHeadingOne heading={candidatesData.heading} align="center" />
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <p className="candidates_intro text-center mb-3">{candidatesData.intro}</p>
            <p className="candidates_subintro text-center">{candidatesData.subIntro}</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-6 mb-4">
            <img src={candidatesBg || "/placeholder.svg"} alt="Candidate Engagement" className="candidates_img" />
          </div>
          <div className="col-lg-6">
            <h4 className="mb-4">What Candidates Can Expect</h4>
            <div className="row">
              {candidatesData.expectations?.map((item) => (
                <div className="col-sm-6 mb-4" key={item.id}>
                  <div className="candidates_box">
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="candidates_cta text-center">
          <p>{candidatesData.cta}</p>
          <a href="mailto:info@globalbridge.co.ke" className="tem_btn tem_btn_three">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
