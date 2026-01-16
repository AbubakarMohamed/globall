import { useState } from 'react';
import SectionHeadingOne from "../sectionheading/SectionHeadingOne";

export default function Markets() {
  const [activeMarket, setActiveMarket] = useState(null);

  const marketsData = [
    {
      id: 1,
      country: "Saudi Arabia",
      flag: "🇸🇦",
      summary: "A high-volume market with demand across multiple sectors",
      description: "Engagements are driven by clear role definition and coordinated deployment planning.",
      icon: "fas fa-building"
    },
    {
      id: 2,
      country: "United Arab Emirates",
      flag: "🇦🇪",
      summary: "A mature workforce market with structured demand.",
      description: "Structured demand across construction, hospitality, logistics, and services.",
      icon: "fas fa-city"
    },
    {
      id: 3,
      country: "Qatar",
      flag: "🇶🇦",
      summary: "A regulated market requiring careful coordination.",
      description: "Requires defined role profiles, workforce readiness, and careful process coordination.",
      icon: "fas fa-landmark"
    },
    {
      id: 4,
      country: "Kuwait",
      flag: "🇰🇼",
      summary: "A steady market with ongoing demand.",
      description: "Ongoing demand across skilled and semi-skilled roles. ",
      icon: "fas fa-globe-asia"
    },
    {
      id: 5,
      country: "Bahrain",
      flag: "🇧🇭",
      summary: "A specialised market requiring targeted sourcing.",
      description: "Requires targeted sourcing and selective engagement.",
      icon: "fas fa-map-marked-alt"
    }
  ];

  const toggleMarket = (id) => {
    setActiveMarket(activeMarket === id ? null : id);
  };

  return (
    <>
      <section className="markets_section" id="markets">
        {/* Map Watermark Background */}
        <div className="map_watermark">
          <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" className="map_illustration">
            {/* Simplified Gulf Region Map Outline */}
            <g opacity="0.06" fill="#163A5F">
              {/* Saudi Arabia approximate shape */}
              <path d="M 400 300 L 550 280 L 600 350 L 580 450 L 500 480 L 420 450 Z" />
              
              {/* UAE approximate shape */}
              <path d="M 620 380 L 680 370 L 700 400 L 690 420 L 630 410 Z" />
              
              {/* Qatar approximate shape */}
              <path d="M 600 350 L 620 340 L 625 370 L 610 375 Z" />
              
              {/* Kuwait approximate shape */}
              <path d="M 580 280 L 600 275 L 610 295 L 595 300 Z" />
              
              {/* Bahrain approximate shape */}
              <circle cx="590" cy="360" r="8" />
              
              {/* Kenya approximate position (bottom left) */}
              <path d="M 200 600 L 250 590 L 270 640 L 240 660 L 210 640 Z" />
              
              {/* Decorative connection lines */}
              <line x1="240" y1="620" x2="450" y2="400" stroke="#163A5F" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
              <line x1="240" y1="620" x2="650" y2="390" stroke="#163A5F" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
            </g>
          </svg>
        </div>

        <div className="container">
          <SectionHeadingOne 
            heading="Markets We Support" 
            headingtext=""
            align="center" 
          />
          
          <p className="markets_intro">
            Global Bridge Consultancy Ltd supports workforce engagement across selected Middle East markets, 
            guided by employer demand and partner capacity.
          </p>

          {/* Accordion Structure */}
          <div className="markets_accordion">
            {marketsData.map((market) => (
              <div 
                key={market.id}
                className={`market_accordion_item ${activeMarket === market.id ? 'active' : ''}`}
              >
                {/* Accordion Header */}
                <button
                  className="market_accordion_header"
                  onClick={() => toggleMarket(market.id)}
                  aria-expanded={activeMarket === market.id}
                  aria-controls={`market-content-${market.id}`}
                >
                  <div className="market_header_left">
                    <span className="market_flag">{market.flag}</span>
                    <div className="market_header_text">
                      <h3 className="market_country">{market.country}</h3>
                      <p className="market_summary">{market.summary}</p>
                    </div>
                  </div>
                  
                  <div className="market_toggle_icon">
                    <i className={`fas fa-chevron-${activeMarket === market.id ? 'up' : 'down'}`} aria-hidden="true"></i>
                  </div>
                </button>

                {/* Accordion Content */}
                <div 
                  id={`market-content-${market.id}`}
                  className="market_accordion_content"
                  style={{
                    maxHeight: activeMarket === market.id ? '500px' : '0',
                    opacity: activeMarket === market.id ? '1' : '0'
                  }}
                >
                  <div className="market_content_inner">
                    <div className="market_icon_wrapper">
                      <i className={market.icon} aria-hidden="true"></i>
                    </div>
                    <p className="market_description">{market.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Markets Section */
        .markets_section {
          padding: 96px 0 120px;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        /* Map Watermark Background */
        .map_watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          max-width: 1200px;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .map_illustration {
          width: 100%;
          height: 100%;
          opacity: 0.4;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        /* Markets Intro */
        .markets_intro {
          max-width: 800px;
          margin: 2rem auto 3rem;
          text-align: center;
          font-size: 1.125rem;
          line-height: 1.7;
          color: #5F6F7E;
        }

        /* Accordion Container */
        .markets_accordion {
          max-width: 900px;
          margin: 0 auto;
        }

        /* Accordion Item */
        .market_accordion_item {
          background: #ffffff;
          border: 2px solid #e8eef3;
          border-radius: 12px;
          margin-bottom: 1.25rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .market_accordion_item:hover {
          border-color: #163A5F;
          box-shadow: 0 4px 12px rgba(15, 42, 68, 0.08);
        }

        .market_accordion_item.active {
          border-color: #163A5F;
          box-shadow: 0 6px 20px rgba(15, 42, 68, 0.12);
        }

        /* Accordion Header */
        .market_accordion_header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.75rem 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background-color 0.3s ease;
        }

        .market_accordion_header:hover {
          background-color: rgba(22, 58, 95, 0.02);
        }

        .market_accordion_item.active .market_accordion_header {
          background-color: rgba(22, 58, 95, 0.03);
        }

        .market_header_left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex: 1;
        }

        /* Flag */
        .market_flag {
          font-size: 2.5rem;
          flex-shrink: 0;
          line-height: 1;
        }

        /* Header Text */
        .market_header_text {
          flex: 1;
        }

        .market_country {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0F2A44;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
        }

        .market_summary {
          font-size: 1rem;
          color: #5F6F7E;
          margin: 0;
          line-height: 1.5;
        }

        /* Toggle Icon */
        .market_toggle_icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(22, 58, 95, 0.1) 0%, rgba(15, 42, 68, 0.05) 100%);
          border-radius: 50%;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .market_accordion_item.active .market_toggle_icon {
          background: linear-gradient(135deg, #163A5F 0%, #0F2A44 100%);
        }

        .market_toggle_icon i {
          color: #163A5F;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .market_accordion_item.active .market_toggle_icon i {
          color: #ffffff;
        }

        /* Accordion Content */
        .market_accordion_content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.4s ease, padding 0.4s ease;
        }

        .market_content_inner {
          padding: 0 2rem 2rem 2rem;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .market_icon_wrapper {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, rgba(22, 58, 95, 0.1) 0%, rgba(15, 42, 68, 0.05) 100%);
          border: 2px solid #163A5F;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .market_icon_wrapper i {
          font-size: 1.5rem;
          color: #163A5F;
        }

        .market_description {
          flex: 1;
          font-size: 1.0625rem;
          line-height: 1.7;
          color: #5F6F7E;
          margin: 0;
          padding-top: 0.5rem;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .markets_section {
            padding: 64px 0 80px;
          }

          .markets_intro {
            font-size: 1rem;
            margin: 1.5rem auto 2.5rem;
          }

          .market_accordion_header {
            padding: 1.5rem;
          }

          .market_flag {
            font-size: 2rem;
          }

          .market_country {
            font-size: 1.25rem;
          }

          .market_summary {
            font-size: 0.9375rem;
          }

          .market_content_inner {
            padding: 0 1.5rem 1.5rem 1.5rem;
          }
        }

        @media (max-width: 767px) {
          .markets_section {
            padding: 48px 0 64px;
          }

          .markets_intro {
            margin: 1rem auto 2rem;
          }

          .market_accordion_header {
            padding: 1.25rem;
          }

          .market_header_left {
            gap: 1rem;
          }

          .market_flag {
            font-size: 1.75rem;
          }

          .market_country {
            font-size: 1.125rem;
          }

          .market_summary {
            font-size: 0.875rem;
          }

          .market_toggle_icon {
            width: 36px;
            height: 36px;
          }

          .market_content_inner {
            flex-direction: column;
            padding: 0 1.25rem 1.25rem 1.25rem;
          }

          .market_icon_wrapper {
            width: 48px;
            height: 48px;
          }

          .market_icon_wrapper i {
            font-size: 1.25rem;
          }

          .market_description {
            font-size: 1rem;
            padding-top: 0;
          }
        }

        @media (max-width: 480px) {
          .market_accordion_item {
            margin-bottom: 1rem;
          }

          .market_accordion_header {
            padding: 1rem;
          }

          .market_header_left {
            gap: 0.75rem;
          }

          .market_flag {
            font-size: 1.5rem;
          }

          .market_country {
            font-size: 1rem;
          }

          .market_content_inner {
            padding: 0 1rem 1rem 1rem;
          }
        }
      `}</style>
    </>
  );
}