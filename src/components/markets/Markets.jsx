import SectionHeadingOne from "../sectionheading/SectionHeadingOne"
import marketsData from "../../data/markets/markets.json"

export default function Markets() {
  if (!marketsData?.length) {
    return (
      <section className="markets_section">
        <div className="container">
          <p className="text-center">No markets information available.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="markets_section" id="markets">
      <div className="container">
        <SectionHeadingOne heading="Markets We Support" align="center" />
        <p className="markets_intro text-center mb-5">
          Global Bridge Consultancy Ltd supports workforce engagement across selected markets in the Middle East, guided
          by employer demand and partner capacity.
        </p>
        <div className="row">
          {marketsData?.map((item) => (
            <div className="col-lg-6 col-md-6 mb-4" key={item.id}>
              <div className="markets_card">
                <div className="markets_icon">
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
