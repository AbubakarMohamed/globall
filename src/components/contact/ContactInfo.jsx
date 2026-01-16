export default function ContactInfo() {
  const contactData = [
    {
      id: 1,
      icon: "fas fa-map-marker-alt",
      heading: "Office Location",
      info: "Mombasa, Kenya"
    },
    {
      id: 2,
      icon: "fas fa-phone-alt",
      heading: "Phone",
      info: "+254 702 281 909"
    },
    {
      id: 3,
      icon: "fas fa-envelope",
      heading: "Email",
      info: "info@globalbridge.co.ke"
    },
    {
      id: 4,
      icon: "fas fa-clock",
      heading: "Office Hours",
      info: "Monday to Friday 9am to 5pm"
    }
  ];

  return (
    <>
      <div className="contact_info_wrapper">
        <h3 className="contact_info_title">Get in Touch</h3>
        <p className="contact_info_description">
          Reach out to us for enquiries about workforce solutions, partnership opportunities, 
          or guidance on overseas employment.
        </p>

        <div className="contact_info_list">
          {contactData.map((item) => (
            <div className="contact_info_item" key={item.id}>
              <div className="contact_info_icon_box">
                <i className={item.icon} aria-hidden="true"></i>
              </div>
              <div className="contact_info_content">
                <span className="contact_info_heading">{item.heading}</span>
                <span className="contact_info_text">{item.info}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .contact_info_wrapper {
          padding-right: 2rem;
        }

        .contact_info_title {
          font-size: 2rem;
          font-weight: 700;
          color: #0F2A44;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .contact_info_description {
          font-size: 1.0625rem;
          line-height: 1.7;
          color: #5F6F7E;
          margin-bottom: 2.5rem;
          max-width: 50ch;
        }

        .contact_info_list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact_info_item {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.25rem;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #163A5F;
          transition: all 0.3s ease;
        }

        .contact_info_item:hover {
          background: #e8eef3;
          transform: translateX(8px);
          box-shadow: 0 4px 12px rgba(15, 42, 68, 0.08);
        }

        .contact_info_icon_box {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #163A5F 0%, #0F2A44 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact_info_icon_box i {
          font-size: 1.25rem;
          color: #ffffff;
        }

        .contact_info_content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }

        .contact_info_heading {
          font-size: 0.875rem;
          font-weight: 600;
          color: #163A5F;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact_info_text {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0F2A44;
          line-height: 1.4;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .contact_info_wrapper {
            padding-right: 0;
            margin-bottom: 3rem;
          }

          .contact_info_title {
            font-size: 1.75rem;
          }

          .contact_info_description {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 767px) {
          .contact_info_wrapper {
            margin-bottom: 2.5rem;
          }

          .contact_info_title {
            font-size: 1.5rem;
          }

          .contact_info_description {
            margin-bottom: 1.75rem;
          }

          .contact_info_list {
            gap: 1.25rem;
          }

          .contact_info_item {
            padding: 1rem;
          }

          .contact_info_item:hover {
            transform: translateX(4px);
          }

          .contact_info_icon_box {
            width: 44px;
            height: 44px;
          }

          .contact_info_icon_box i {
            font-size: 1.125rem;
          }

          .contact_info_text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .contact_info_item {
            padding: 0.875rem;
          }

          .contact_info_icon_box {
            width: 40px;
            height: 40px;
          }

          .contact_info_icon_box i {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}