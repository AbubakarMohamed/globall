import Widget from "../../ui/widget/Widget"
import LatestPost from "./LatestPost"
import HelpfullLinks from "./HelpfullLinks"
import SocialLinks from "../../ui/sociallinks/SocialLinks"
import Newsletter from "../../ui/newsletter/Newsletter"
import ScrollToTop from "../../../helpers/ScrollToTop"

export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* About  */}
              <Widget heading="About Global Bridge">
                <p>
                  Global Bridge Consultancy specializes in structured workforce solutions for the Gulf region. We
                  connect international talent with Gulf market demands, ensuring seamless global mobility.
                </p>
              </Widget>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Helpful Link  */}
              <Widget heading="Helpful Link">
                <HelpfullLinks />
              </Widget>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Latest Articles  */}
              <Widget heading="Latest Articles">
                <LatestPost />
              </Widget>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Newsletter  */}
              <Widget heading="Subscribe now">
                <p>Stay updated with the latest opportunities in global workforce solutions and market insights.</p>
                <Newsletter />
              </Widget>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="footer_bottom_bdr"></div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="copy_right_text">
                @{new Date().getFullYear()} Global Bridge Consultancy. All rights reserved.
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="footer_social">
                <SocialLinks />
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <ScrollToTop />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
