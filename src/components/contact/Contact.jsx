import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <>
      <section className="contact_section" id="contact">
        <div className="container">
          <SectionHeadingOne 
            heading="Contact Global Bridge Consultancy Ltd" 
            headingtext="We welcome engagement from employers, partners, and individuals interested in overseas employment opportunities through structured and documented processes."
            align="center"
          />

          <div className="contact_content">
            <div className="row">
              {/* Left Column - Contact Details */}
              <div className="col-lg-5">
                <ContactInfo />
              </div>

              {/* Right Column - Contact Form */}
              <div className="col-lg-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact_section {
          padding: 96px 0 120px;
          background: #ffffff;
        }

        .contact_content {
          margin-top: 4rem;
        }

        @media (max-width: 991px) {
          .contact_section {
            padding: 64px 0 80px;
          }

          .contact_content {
            margin-top: 3rem;
          }
        }

        @media (max-width: 767px) {
          .contact_section {
            padding: 48px 0 64px;
          }

          .contact_content {
            margin-top: 2.5rem;
          }
        }
      `}</style>
    </>
  );
}