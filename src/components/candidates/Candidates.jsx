import SectionHeadingOne from "../sectionheading/SectionHeadingOne";

export default function Candidates() {
  const expectationsChecklist = [
    {
      id: 1,
      text: "Clear role requirements and eligibility criteria"
    },
    {
      id: 2,
      text: "Screening based on employer needs"
    },
    {
      id: 3,
      text: "Step-by-step documented processes"
    },
    {
      id: 4,
      text: "Ongoing communication as processes progress"
    }
  ];

  return (
    <>
      <section className="candidates_section" id="candidates">
        <div className="container">
          <SectionHeadingOne 
            heading="Candidate Engagement" 
            headingtext=""
            align="center" 
          />

          {/* Two-Column Split Layout */}
          <div className="candidates_content">
            <div className="row align-items-center">
              
              {/* Left Column - Process Explanation */}
              <div className="col-lg-6">
                <div className="process_explanation">
                  <div className="process_icon_badge">
                    <i className="fas fa-users" aria-hidden="true"></i>
                  </div>
                  
                  <h3 className="process_heading">How We Work With Candidates</h3>
                  
                  <p className="process_paragraph">
                    Global Bridge engages individuals seeking overseas employment through structured and 
                    documented processes aligned to employer demand.
                  </p>
                  
                  <p className="process_paragraph">
                    Candidate engagement begins only where roles, requirements, and deployment parameters 
                    are clearly defined.
                  </p>

                  <div className="process_note">
                    <div className="note_icon">
                      <i className="fas fa-info-circle" aria-hidden="true"></i>
                    </div>
                    <p className="note_text">
                      Candidates who meet requirements and are prepared to follow defined procedures are 
                      welcome to contact us for guidance on available opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - "What to Expect" Checklist */}
              <div className="col-lg-6">
                <div className="expectations_checklist">
                  <h3 className="checklist_heading">What Candidates Can Expect</h3>
                  
                  <div className="checklist_items">
                    {expectationsChecklist.map((item) => (
                      <div key={item.id} className="checklist_item">
                        <div className="check_icon">
                          <i className="fas fa-check-circle" aria-hidden="true"></i>
                        </div>
                        <p className="checklist_text">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Calm, Reassuring Contact Section - No Aggressive CTA */}
                  <div className="contact_info">
                    <p className="contact_text">
                      For enquiries about available opportunities:
                    </p>
                    <a href="mailto:info@globalbridge.co.ke" className="contact_link">
                      info@globalbridge.co.ke
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Candidates Section */
        .candidates_section {
          padding: 96px 0 120px;
          background: #ffffff;
          position: relative;
        }

        .candidates_content {
          max-width: 1200px;
          margin: 3rem auto 0;
        }

        /* Left Column - Process Explanation */
        .process_explanation {
          padding-right: 2rem;
        }

        .process_icon_badge {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, rgba(22, 58, 95, 0.1) 0%, rgba(15, 42, 68, 0.05) 100%);
          border: 3px solid #163A5F;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .process_icon_badge i {
          font-size: 2rem;
          color: #163A5F;
        }

        .process_heading {
          font-size: 2rem;
          font-weight: 700;
          color: #0F2A44;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .process_paragraph {
          font-size: 1.0625rem;
          line-height: 1.7;
          color: #5F6F7E;
          margin-bottom: 1.5rem;
          max-width: 60ch;
        }

        /* Process Note Box */
        .process_note {
          background: #f8f9fa;
          border-left: 4px solid #163A5F;
          padding: 1.5rem;
          margin-top: 2rem;
          border-radius: 0 8px 8px 0;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .note_icon {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #163A5F;
          border-radius: 50%;
        }

        .note_icon i {
          color: #ffffff;
          font-size: 1rem;
        }

        .note_text {
          font-size: 1rem;
          line-height: 1.6;
          color: #5F6F7E;
          margin: 0;
          flex: 1;
        }

        /* Right Column - Expectations Checklist */
        .expectations_checklist {
          background: linear-gradient(135deg, #f8f9fa 0%, #e8eef3 100%);
          padding: 3rem 2.5rem;
          border-radius: 12px;
          border: 2px solid #e8eef3;
        }

        .checklist_heading {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0F2A44;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        /* Checklist Items */
        .checklist_items {
          margin-bottom: 2.5rem;
        }

        .checklist_item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 0.75rem;
          background: #ffffff;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .checklist_item:hover {
          transform: translateX(8px);
          box-shadow: 0 4px 12px rgba(15, 42, 68, 0.08);
        }

        .checklist_item:last-child {
          margin-bottom: 0;
        }

        /* Check Icon with Circle */
        .check_icon {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .check_icon i {
          font-size: 1.75rem;
          color: #28a745;
        }

        .checklist_text {
          font-size: 1.0625rem;
          line-height: 1.6;
          color: #0F2A44;
          margin: 0;
          padding-top: 0.25rem;
          font-weight: 500;
        }

        /* Calm Contact Section - No Aggressive CTA */
        .contact_info {
          padding-top: 2rem;
          border-top: 2px solid rgba(22, 58, 95, 0.1);
          text-align: center;
        }

        .contact_text {
          font-size: 1rem;
          color: #5F6F7E;
          margin-bottom: 0.75rem;
          font-weight: 500;
        }

        .contact_link {
          display: inline-block;
          font-size: 1.125rem;
          color: #163A5F;
          text-decoration: none;
          font-weight: 600;
          padding: 0.5rem 0;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .contact_link:hover {
          color: #0F2A44;
          border-bottom-color: #0F2A44;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .candidates_section {
            padding: 64px 0 80px;
          }

          .candidates_content {
            margin-top: 2.5rem;
          }

          .process_explanation {
            padding-right: 0;
            margin-bottom: 3rem;
          }

          .process_icon_badge {
            width: 64px;
            height: 64px;
            margin-bottom: 1.5rem;
          }

          .process_icon_badge i {
            font-size: 1.75rem;
          }

          .process_heading {
            font-size: 1.75rem;
          }

          .checklist_heading {
            font-size: 1.5rem;
          }

          .expectations_checklist {
            padding: 2.5rem 2rem;
          }
        }

        @media (max-width: 767px) {
          .candidates_section {
            padding: 48px 0 64px;
          }

          .candidates_content {
            margin-top: 2rem;
          }

          .process_explanation {
            margin-bottom: 2.5rem;
          }

          .process_icon_badge {
            width: 56px;
            height: 56px;
            margin-bottom: 1.25rem;
          }

          .process_icon_badge i {
            font-size: 1.5rem;
          }

          .process_heading {
            font-size: 1.5rem;
            margin-bottom: 1.25rem;
          }

          .process_paragraph {
            font-size: 1rem;
            margin-bottom: 1.25rem;
          }

          .process_note {
            padding: 1.25rem;
            margin-top: 1.5rem;
          }

          .note_icon {
            width: 28px;
            height: 28px;
          }

          .note_icon i {
            font-size: 0.875rem;
          }

          .note_text {
            font-size: 0.9375rem;
          }

          .expectations_checklist {
            padding: 2rem 1.5rem;
          }

          .checklist_heading {
            font-size: 1.375rem;
            margin-bottom: 1.5rem;
          }

          .checklist_items {
            margin-bottom: 2rem;
          }

          .checklist_item {
            margin-bottom: 1.25rem;
            padding: 0.625rem;
          }

          .checklist_item:hover {
            transform: translateX(4px);
          }

          .check_icon {
            width: 28px;
            height: 28px;
          }

          .check_icon i {
            font-size: 1.5rem;
          }

          .checklist_text {
            font-size: 1rem;
          }

          .contact_text {
            font-size: 0.9375rem;
          }

          .contact_link {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .process_explanation {
            margin-bottom: 2rem;
          }

          .process_heading {
            font-size: 1.375rem;
          }

          .expectations_checklist {
            padding: 1.75rem 1.25rem;
          }

          .checklist_heading {
            font-size: 1.25rem;
          }

          .checklist_item {
            padding: 0.5rem;
          }

          .checklist_text {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </>
  );
}