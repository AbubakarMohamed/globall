import Widget from "../../ui/widget/Widget";
import ScrollToTop from "../../../helpers/ScrollToTop";

export default function Footer() {
  const servicesLinks = [
    { id: 1, text: "Workforce Demand Alignment", href: "#services" },
    { id: 2, text: "Talent Sourcing & Screening", href: "#services" },
    { id: 3, text: "Global Mobility Solutions", href: "#services" },
    { id: 4, text: "International Placement Support", href: "#services" },
    { id: 5, text: "Process & Documentation", href: "#services" }
  ];

  const marketsLinks = [
    { id: 1, text: "Saudi Arabia", href: "#markets" },
    { id: 2, text: "United Arab Emirates", href: "#markets" },
    { id: 3, text: "Qatar", href: "#markets" },
    { id: 4, text: "Kuwait", href: "#markets" },
    { id: 5, text: "Bahrain", href: "#markets" }
  ];

  const principlesLinks = [
    { id: 1, text: "Structured Execution", href: "#principles" },
    { id: 2, text: "Demand-Led Engagement", href: "#principles" },
    { id: 3, text: "Operational Transparency", href: "#principles" },
    { id: 4, text: "Partnership Selectivity", href: "#principles" }
  ];

  return (
    <>
      <footer className="footer_section">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              
              {/* Column 1: Company Overview */}
              <div className="col-lg-3 col-md-6">
                <Widget heading="Global Bridge Consultancy">
                  <p className="footer_text">
                    A professional consultancy specializing in international talent sourcing and global 
                    workforce mobility, supporting structured workforce engagement across the Gulf region.
                  </p>
                  <div className="footer_logo_text">
                    Based in Mombasa, Kenya
                  </div>
                </Widget>
              </div>

              {/* Column 2: Services */}
              <div className="col-lg-3 col-md-6">
                <Widget heading="Our Services">
                  <ul className="footer_links">
                    {servicesLinks.map((link) => (
                      <li key={link.id}>
                        <a href={link.href}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </Widget>
              </div>

              {/* Column 3: Markets & Principles */}
              <div className="col-lg-3 col-md-6">
                <Widget heading="Markets We Support">
                  <ul className="footer_links">
                    {marketsLinks.map((link) => (
                      <li key={link.id}>
                        <a href={link.href}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </Widget>
              </div>

              {/* Column 4: Contact Information */}
              <div className="col-lg-3 col-md-6">
                <Widget heading="Contact Information">
                  <ul className="footer_contact_list">
                    <li className="footer_contact_item">
                      <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                      <span>Mombasa, Kenya</span>
                    </li>
                    <li className="footer_contact_item">
                      <i className="fas fa-phone-alt" aria-hidden="true"></i>
                      <a href="tel:+254702281909">+254 702 281 909</a>
                    </li>
                    <li className="footer_contact_item">
                      <i className="fas fa-envelope" aria-hidden="true"></i>
                      <a href="mailto:info@globalbridge.co.ke">info@globalbridge.co.ke</a>
                    </li>
                    <li className="footer_contact_item">
                      <i className="fas fa-clock" aria-hidden="true"></i>
                      <span>Monday to Friday</span>
                    </li>
                  </ul>
                </Widget>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer_bottom">
          <div className="container">
            <div className="footer_bottom_border"></div>
            <div className="row align-items-center">
              <div className="col-lg-10 col-md-9 col-12">
                <div className="copyright_text">
                  © {new Date().getFullYear()} Global Bridge Consultancy Ltd. All Rights Reserved.
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-12">
                <ScrollToTop />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Footer Section - Dark Background */
        .footer_section {
          background: #0F2A44;
          color: #b8c5d0;
        }

        .footer_top {
          padding: 80px 0 40px;
        }

        /* Footer Text Styling */
        .footer_section :global(.widget_heading) {
          color: #ffffff !important;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }

        .footer_text {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: #b8c5d0;
          margin-bottom: 1.25rem;
        }

        .footer_logo_text {
          font-size: 0.875rem;
          color: #8a9aa9;
          font-style: italic;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(184, 197, 208, 0.2);
        }

        /* Footer Links */
        .footer_links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer_links li {
          margin-bottom: 0.75rem;
        }

        .footer_links li:last-child {
          margin-bottom: 0;
        }

        .footer_links a {
          color: #b8c5d0;
          text-decoration: none;
          font-size: 0.9375rem;
          line-height: 1.6;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer_links a:hover {
          color: #ffffff;
          transform: translateX(5px);
        }

        /* Footer Contact List */
        .footer_contact_list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer_contact_item {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
          margin-bottom: 1rem;
          color: #b8c5d0;
          font-size: 0.9375rem;
          line-height: 1.6;
        }

        .footer_contact_item:last-child {
          margin-bottom: 0;
        }

        .footer_contact_item i {
          color: #8a9aa9;
          font-size: 1rem;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }

        .footer_contact_item a {
          color: #b8c5d0;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer_contact_item a:hover {
          color: #ffffff;
        }

        /* Footer Bottom Bar */
        .footer_bottom {
          padding: 1.5rem 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .footer_bottom_border {
          height: 1px;
          background: rgba(184, 197, 208, 0.15);
          margin-bottom: 1.5rem;
        }

        .copyright_text {
          color: #8a9aa9;
          font-size: 0.875rem;
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .footer_top {
            padding: 60px 0 30px;
          }

          .footer_section :global(.widget) {
            margin-bottom: 2.5rem;
          }

          .footer_section :global(.widget_heading) {
            font-size: 1.125rem;
            margin-bottom: 1.25rem;
          }
        }

        @media (max-width: 767px) {
          .footer_top {
            padding: 48px 0 24px;
          }

          .footer_section :global(.widget) {
            margin-bottom: 2rem;
          }

          .footer_bottom {
            padding: 1.25rem 0;
          }

          .footer_bottom_border {
            margin-bottom: 1.25rem;
          }

          .copyright_text {
            text-align: center;
            margin-bottom: 1rem;
          }

          .footer_section :global(.scroll_to_top) {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer_top {
            padding: 40px 0 20px;
          }

          .footer_section :global(.widget) {
            margin-bottom: 1.75rem;
          }

          .footer_section :global(.widget_heading) {
            font-size: 1rem;
          }

          .footer_text,
          .footer_links a,
          .footer_contact_item {
            font-size: 0.875rem;
          }

          .copyright_text {
            font-size: 0.8125rem;
          }
        }
      `}</style>
    </>
  );
}