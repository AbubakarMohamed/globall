import SectionHeadingOne from "../sectionheading/SectionHeadingOne";
import aboutThumb from "/images/about.png";

export default function AboutOne() {
  return (
    <>
      {/* About Section - Editorial Layout */}
      <section className="about_section" id="about">
        <div className="container">
          <div className="row">
            {/* Left Column - Main Narrative (8 columns) */}
            <div className="col-lg-8">
              <SectionHeadingOne
                heading="About Global Bridge"
                headingtext=""
                align="left"
              />

              <div className="about_narrative">
                <p className="about_paragraph">
                  Global Bridge Consultancy Ltd is a professional consultancy specialising in international talent 
                  sourcing and global workforce mobility.
                </p>

                <p className="about_paragraph">
                  Based in Mombasa, Kenya, we work with international employers, deployment partners, and individuals 
                  seeking overseas employment to support structured and practical workforce engagement across the Gulf 
                  region, including the United Arab Emirates, Qatar, Kuwait, and Bahrain.
                </p>

                <p className="about_paragraph">
                  International workforce mobility is complex. It involves differing regulations, expectations, timelines, 
                  and operational realities on both the employer and candidate side. When these elements are not well 
                  coordinated, outcomes suffer.
                </p>

                <p className="about_paragraph">
                  Global Bridge was established to operate with structure, clarity, and commercial realism. We align 
                  employer demand with prepared talent pipelines through defined processes, clear communication, and 
                  coordinated execution.
                </p>

                <p className="about_paragraph">
                  We approach this work as a professional service. We are direct about requirements, realistic about 
                  timelines, and deliberate about the partnerships we enter. Our objective is to support repeat 
                  engagements and sustainable outcomes rather than short-term transactions.
                </p>
              </div>
            </div>

            {/* Right Column - Pull Highlights (4 columns) */}
            <div className="col-lg-4">
              <div className="pull_highlights">
                <div className="highlight_box">
                  <h5 className="highlight_title">Single Point of Coordination</h5>
                  <p className="highlight_text">
                  We act as a central coordination layer between
employers, partners, and candidates, reducing fragmentation and misalignment.
                  </p>
                </div>

                <div className="highlight_box">
                  <h5 className="highlight_title">Predictability Over Promises</h5>
                  <p className="highlight_text">
                    We focus on realistic timelines and achievable
outcomes rather than aggressive claims.</p>
                </div>

                <div className="highlight_box">
                  <h5 className="highlight_title">Regional Market Understanding</h5>
                  <p className="highlight_text">
                    We work across multiple Gulf markets and
understand that each operates differently in terms of requirements, expectations,
and deployment realities. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Visual Pause Section */}
      <section className="mission_statement_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <div className="mission_content">
                <h3 className="mission_label">Our Mission</h3>
                <p className="mission_statement">
                  To support international workforce mobility through organised talent sourcing and coordinated 
                  deployment solutions that serve the interests of employers, partners, and candidates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* About Section Styles */
        .about_section {
          padding: 96px 0 120px;
          background: #ffffff;
        }

        .about_narrative {
          margin-top: 2rem;
        }

        .about_paragraph {
          max-width: 70ch;
          font-size: 1.0625rem;
          line-height: 1.75;
          color: #5F6F7E;
          margin-bottom: 1.75rem;
        }

        .about_paragraph:last-child {
          margin-bottom: 0;
        }

        /* Pull Highlights - Right Column */
        .pull_highlights {
          margin-top: 6rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .highlight_box {
          background: #ffffff;
          border: 2px solid #163A5F;
          border-radius: 8px;
          padding: 1.75rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .highlight_box:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(15, 42, 68, 0.12);
          border-color: #0F2A44;
        }

        .highlight_icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #163A5F 0%, #0F2A44 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .highlight_icon i {
          font-size: 1.5rem;
          color: white;
        }

        .highlight_title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #0F2A44;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .highlight_text {
          font-size: 0.9375rem;
          color: #5F6F7E;
          line-height: 1.6;
          margin: 0;
        }

        /* Mission Statement Section - Visual Pause */
        .mission_statement_section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e8eef3 100%);
          padding: 96px 0;
          position: relative;
          overflow: hidden;
        }

        .mission_statement_section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #163A5F 50%, transparent);
          opacity: 0.3;
        }

        .mission_statement_section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #163A5F 50%, transparent);
          opacity: 0.3;
        }

        .mission_content {
          text-align: center;
          padding: 2rem 0;
        }

        .mission_label {
          font-size: 1.25rem;
          font-weight: 600;
          color: #163A5F;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
        }

        .mission_statement {
          font-size: 1.75rem;
          font-weight: 500;
          line-height: 1.6;
          color: #0F2A44;
          margin: 0;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .about_section {
            padding: 64px 0 80px;
          }

          .pull_highlights {
            margin-top: 3rem;
          }

          .mission_statement_section {
            padding: 64px 0;
          }

          .mission_statement {
            font-size: 1.5rem;
          }

          .about_paragraph {
            font-size: 1rem;
          }
        }

        @media (max-width: 767px) {
          .about_section {
            padding: 48px 0 64px;
          }

          .mission_statement_section {
            padding: 48px 0;
          }

          .mission_statement {
            font-size: 1.25rem;
          }

          .highlight_box {
            padding: 1.5rem;
          }

          .about_paragraph {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}