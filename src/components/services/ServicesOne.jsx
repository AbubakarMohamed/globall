import { useState, useEffect, useRef } from 'react';
import SectionHeadingOne from '../sectionheading/SectionHeadingOne';

export default function ServicesSlider() {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);

  const servicesData = [
    {
      id: 1,
      number: "01",
      title: "Workforce Demand Alignment",
      description: "We engage employers and partners to clearly define workforce needs, job categories, skill requirements, volumes, and deployment expectations before sourcing begins.",
      icon: "fas fa-users-cog"
    },
    {
      id: 2,
      number: "02",
      title: "Talent Sourcing and Screening",
      description: "We support identification and screening of candidates aligned to employer requirements, focusing on suitability, readiness, and consistency.",
      icon: "fas fa-user-check"
    },
    {
      id: 3,
      number: "03",
      title: "Global Mobility Solutions",
      description: "We coordinate workforce mobility processes, including documentation alignment, deployment timelines, and stakeholder engagement.",
      icon: "fas fa-globe-americas"
    },
    {
      id: 4,
      number: "04",
      title: "International Placement Support",
      description: "We support overseas employment processes in collaboration with employers and deployment partners to ensure clarity and smooth execution.",
      icon: "fas fa-handshake"
    },
    {
      id: 5,
      number: "05",
      title: "Process and Documentation Coordination",
      description: "We assist in managing documentation flows, approvals, and timelines to minimise delays, errors, and miscommunication.",
      icon: "fas fa-file-contract"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepId = entry.target.getAttribute('data-step-id');
          setVisibleSteps((prev) => {
            if (!prev.includes(stepId)) {
              return [...prev, stepId];
            }
            return prev;
          });
        }
      });
    }, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="services_section" id="services">
        <div className="container">
          <SectionHeadingOne 
            heading="What We Do" 
            headingtext="Our Core Services"
          />

          <div className="services_timeline">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (stepRefs.current[index] = el)}
                data-step-id={service.id}
                className={`service_step ${visibleSteps.includes(String(service.id)) ? 'visible' : ''}`}
              >
                {/* Timeline Line (Desktop) */}
                {index < servicesData.length - 1 && (
                  <div className="timeline_connector"></div>
                )}

                {/* Service Card */}
                <div className="service_card">
                  {/* Number Badge */}
                  <div className="service_number_badge">
                    <span className="service_number">{service.number}</span>
                  </div>

                  {/* Content */}
                  <div className="service_content">
                    {/* Icon */}
                    <div className="service_icon_wrapper">
                      <div className="service_icon_box">
                        <i className={service.icon} aria-hidden="true"></i>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="service_text">
                      <h3 className="service_title">{service.title}</h3>
                      <p className="service_description">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Services Section */
        .services_section {
          padding: 96px 0 120px;
          background: #ffffff;
          position: relative;
        }

        /* Timeline Container */
        .services_timeline {
          max-width: 900px;
          margin: 4rem auto 0;
          position: relative;
        }

        /* Individual Service Step */
        .service_step {
          position: relative;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .service_step.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .service_step:nth-child(1).visible {
          transition-delay: 0.1s;
        }

        .service_step:nth-child(2).visible {
          transition-delay: 0.2s;
        }

        .service_step:nth-child(3).visible {
          transition-delay: 0.3s;
        }

        .service_step:nth-child(4).visible {
          transition-delay: 0.4s;
        }

        .service_step:nth-child(5).visible {
          transition-delay: 0.5s;
        }

        /* Timeline Connector Line (Desktop Only) */
        .timeline_connector {
          position: absolute;
          left: 36px;
          top: 80px;
          width: 2px;
          height: calc(100% + 48px);
          background: linear-gradient(to bottom, #163A5F 0%, rgba(22, 58, 95, 0.3) 100%);
          z-index: 1;
        }

        /* Service Card */
        .service_card {
          background: #ffffff;
          border: 2px solid #e8eef3;
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .service_card:hover {
          border-color: #163A5F;
          box-shadow: 0 8px 24px rgba(15, 42, 68, 0.12);
          transform: translateX(8px);
        }

        /* Number Badge */
        .service_number_badge {
          position: absolute;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #163A5F 0%, #0F2A44 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(15, 42, 68, 0.2);
          z-index: 3;
        }

        .service_number {
          font-size: 1.75rem;
          font-weight: 700;
          color: #ffffff;
        }

        /* Service Content Layout */
        .service_content {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-left: 60px;
        }

        /* Icon Wrapper */
        .service_icon_wrapper {
          flex-shrink: 0;
        }

        .service_icon_box {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, rgba(22, 58, 95, 0.1) 0%, rgba(15, 42, 68, 0.05) 100%);
          border: 2px solid #163A5F;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .service_card:hover .service_icon_box {
          background: linear-gradient(135deg, #163A5F 0%, #0F2A44 100%);
          transform: scale(1.1) rotate(5deg);
        }

        .service_icon_box i {
          font-size: 1.75rem;
          color: #163A5F;
          transition: color 0.3s ease;
        }

        .service_card:hover .service_icon_box i {
          color: #ffffff;
        }

        /* Text Content */
        .service_text {
          flex: 1;
        }

        .service_title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0F2A44;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .service_description {
          font-size: 1.0625rem;
          line-height: 1.7;
          color: #5F6F7E;
          margin: 0;
          max-width: 65ch;
        }

        /* Tablet Design */
        @media (max-width: 991px) {
          .services_section {
            padding: 64px 0 80px;
          }

          .services_timeline {
            margin-top: 3rem;
          }

          .service_card {
            padding: 1.75rem;
          }

          .service_number_badge {
            width: 64px;
            height: 64px;
            left: -16px;
          }

          .service_number {
            font-size: 1.5rem;
          }

          .service_content {
            margin-left: 52px;
          }

          .service_icon_box {
            width: 56px;
            height: 56px;
          }

          .service_icon_box i {
            font-size: 1.5rem;
          }

          .service_title {
            font-size: 1.25rem;
          }

          .service_description {
            font-size: 1rem;
          }

          .timeline_connector {
            left: 32px;
          }
        }

        /* Mobile Design - Stacked Cards */
        @media (max-width: 767px) {
          .services_section {
            padding: 48px 0 64px;
          }

          .services_timeline {
            margin-top: 2rem;
          }

          /* Hide timeline connector on mobile */
          .timeline_connector {
            display: none;
          }

          .service_step {
            margin-bottom: 2rem;
          }

          .service_card {
            padding: 1.5rem;
          }

          .service_card:hover {
            transform: translateY(-4px);
          }

          /* Reposition number badge for mobile */
          .service_number_badge {
            position: relative;
            left: 0;
            top: 0;
            transform: none;
            margin: 0 auto 1.5rem;
            width: 56px;
            height: 56px;
          }

          .service_number {
            font-size: 1.25rem;
          }

          /* Stack content vertically on mobile */
          .service_content {
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            text-align: center;
          }

          .service_icon_box {
            width: 52px;
            height: 52px;
          }

          .service_icon_box i {
            font-size: 1.25rem;
          }

          .service_title {
            font-size: 1.125rem;
          }

          .service_description {
            font-size: 0.9375rem;
            max-width: 100%;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .service_card {
            padding: 1.25rem;
          }

          .service_number_badge {
            width: 48px;
            height: 48px;
            margin-bottom: 1rem;
          }

          .service_number {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </>
  );
}