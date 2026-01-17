import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero_section_global_bridge" aria-label="Main hero section">
        <div className="container">
          <div className="row align-items-center min-vh-100 py-5">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="hero_content">
                <h1 className={`hero_title ${isVisible ? 'fade-in-up' : ''}`}>
                  Structured Workforce Solutions<br/>
                  <span className="hero_highlight">for the Gulf Region</span>
                </h1>
                <p className={`hero_subtitle ${isVisible ? 'fade-in-up delay-1' : ''}`}>
                  Global Bridge Consultancy Ltd is a Kenya-based talent sourcing and global mobility firm supporting
                  employers and partners across the Gulf through organised, transparent, and scalable workforce solutions.
                </p>
                <div className={`hero_buttons d-flex gap-3 ${isVisible ? 'fade-in-up delay-2' : ''}`} role="group" aria-label="Call to action buttons">
                  <a href="#contact" className="btn_primary" aria-label="Engage with us">
                    Engage with Us →
                  </a>
                  <a href="#about" className="btn_secondary" aria-label="Explore our approach">
                    Explore Our Approach →
                  </a>
                </div>
              </div>
            </div>

            {/* Right Visual - Enhanced Map */}
            <div className="col-lg-6">
              <div className={`hero_visual ${isVisible ? 'fade-in-right' : ''}`}>
                <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="hero_illustration">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#163A5F', stopOpacity: 0.1}} />
                      <stop offset="100%" style={{stopColor: '#0F2A44', stopOpacity: 0.05}} />
                    </linearGradient>
                    
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Background */}
                  <circle cx="300" cy="300" r="250" fill="url(#gradient1)" opacity="0.3" />
                  
                  {/* Gulf Countries at Top */}
                  {/* UAE */}
                  <g className="country_node" transform="translate(180, 80)">
                    <circle cx="0" cy="0" r="35" fill="#163A5F" opacity="0.1" className="pulse-ring" />
                    <circle cx="0" cy="0" r="20" fill="#163A5F" opacity="0.2" />
                    <circle cx="0" cy="0" r="12" fill="#163A5F" />
                    <text x="0" y="45" textAnchor="middle" fill="#0F2A44" fontSize="13" fontWeight="600">UAE</text>
                  </g>
                  
                  {/* Saudi Arabia */}
                  <g className="country_node" transform="translate(280, 60)">
                    <circle cx="0" cy="0" r="35" fill="#163A5F" opacity="0.1" className="pulse-ring" />
                    <circle cx="0" cy="0" r="20" fill="#163A5F" opacity="0.2" />
                    <circle cx="0" cy="0" r="12" fill="#163A5F" />
                    <text x="0" y="45" textAnchor="middle" fill="#0F2A44" fontSize="13" fontWeight="600">Saudi Arabia</text>
                  </g>
                  
                  {/* Qatar */}
                  <g className="country_node" transform="translate(380, 80)">
                    <circle cx="0" cy="0" r="35" fill="#163A5F" opacity="0.1" className="pulse-ring" />
                    <circle cx="0" cy="0" r="20" fill="#163A5F" opacity="0.2" />
                    <circle cx="0" cy="0" r="12" fill="#163A5F" />
                    <text x="0" y="45" textAnchor="middle" fill="#0F2A44" fontSize="13" fontWeight="600">Qatar</text>
                  </g>
                  
                  {/* Kuwait */}
                  <g className="country_node" transform="translate(220, 140)">
                    <circle cx="0" cy="0" r="35" fill="#163A5F" opacity="0.1" className="pulse-ring" />
                    <circle cx="0" cy="0" r="20" fill="#163A5F" opacity="0.2" />
                    <circle cx="0" cy="0" r="12" fill="#163A5F" />
                    <text x="0" y="45" textAnchor="middle" fill="#0F2A44" fontSize="13" fontWeight="600">Kuwait</text>
                  </g>
                  
                  {/* Bahrain */}
                  <g className="country_node" transform="translate(340, 140)">
                    <circle cx="0" cy="0" r="35" fill="#163A5F" opacity="0.1" className="pulse-ring" />
                    <circle cx="0" cy="0" r="20" fill="#163A5F" opacity="0.2" />
                    <circle cx="0" cy="0" r="12" fill="#163A5F" />
                    <text x="0" y="45" textAnchor="middle" fill="#0F2A44" fontSize="13" fontWeight="600">Bahrain</text>
                  </g>
                  
                  {/* Kenya at Bottom - Larger & Prominent */}
                  <g className="country_node kenya_node" transform="translate(300, 480)">
                    <circle cx="0" cy="0" r="50" fill="#0F2A44" opacity="0.1" className="pulse-ring-large" />
                    <circle cx="0" cy="0" r="30" fill="#0F2A44" opacity="0.15" />
                    <circle cx="0" cy="0" r="18" fill="#0F2A44" />
                    
                    {/* Kenya flag colors mini indicator */}
                    <rect x="-8" y="-3" width="16" height="2" fill="#000000" opacity="0.6" />
                    <rect x="-8" y="-1" width="16" height="2" fill="#BB0000" opacity="0.6" />
                    <rect x="-8" y="1" width="16" height="2" fill="#006600" opacity="0.6" />
                    
                    <text x="0" y="-55" textAnchor="middle" fill="#0F2A44" fontSize="18" fontWeight="700">KENYA</text>
                    <text x="0" y="-38" textAnchor="middle" fill="#5F6F7E" fontSize="12" fontWeight="500">Talent Source</text>
                  </g>
                  
                  {/* Animated Connection Lines from Kenya to Each Gulf Country */}
                  {/* To UAE */}
                  <path d="M 300 460 Q 240 270 180 95" 
                        stroke="#163A5F" 
                        strokeWidth="2.5" 
                        fill="none" 
                        opacity="0.3"
                        strokeDasharray="8,4"
                        className="connection-line">
                    <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  
                  {/* To Saudi Arabia */}
                  <path d="M 300 460 Q 290 260 280 75" 
                        stroke="#163A5F" 
                        strokeWidth="2.5" 
                        fill="none" 
                        opacity="0.4"
                        strokeDasharray="8,4"
                        className="connection-line">
                    <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.3s" repeatCount="indefinite" />
                  </path>
                  
                  {/* To Qatar */}
                  <path d="M 300 460 Q 340 270 380 95" 
                        stroke="#163A5F" 
                        strokeWidth="2.5" 
                        fill="none" 
                        opacity="0.3"
                        strokeDasharray="8,4"
                        className="connection-line">
                    <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.7s" repeatCount="indefinite" />
                  </path>
                  
                  {/* To Kuwait */}
                  <path d="M 300 460 Q 260 300 220 155" 
                        stroke="#163A5F" 
                        strokeWidth="2.5" 
                        fill="none" 
                        opacity="0.35"
                        strokeDasharray="8,4"
                        className="connection-line">
                    <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.4s" repeatCount="indefinite" />
                  </path>
                  
                  {/* To Bahrain */}
                  <path d="M 300 460 Q 320 300 340 155" 
                        stroke="#163A5F" 
                        strokeWidth="2.5" 
                        fill="none" 
                        opacity="0.35"
                        strokeDasharray="8,4"
                        className="connection-line">
                    <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.6s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Floating talent/people icons along paths */}
                  <g className="talent_icon" opacity="0.6">
                    <circle cx="270" cy="280" r="4" fill="#163A5F">
                      <animateMotion path="M 300 460 Q 240 270 180 95" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  
                  <g className="talent_icon" opacity="0.6">
                    <circle cx="290" cy="280" r="4" fill="#163A5F">
                      <animateMotion path="M 300 460 Q 290 260 280 75" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  
                  <g className="talent_icon" opacity="0.6">
                    <circle cx="320" cy="280" r="4" fill="#163A5F">
                      <animateMotion path="M 300 460 Q 340 270 380 95" dur="4.5s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  
                  {/* Document/Process Icons */}
                  <g transform="translate(480, 300)">
                    <rect x="0" y="0" width="35" height="45" rx="3" fill="white" stroke="#163A5F" strokeWidth="2" opacity="0.7" />
                    <line x1="6" y1="10" x2="29" y2="10" stroke="#163A5F" strokeWidth="1.5" opacity="0.5" />
                    <line x1="6" y1="18" x2="29" y2="18" stroke="#163A5F" strokeWidth="1.5" opacity="0.5" />
                    <line x1="6" y1="26" x2="24" y2="26" stroke="#163A5F" strokeWidth="1.5" opacity="0.5" />
                    <circle cx="10" cy="35" r="2" fill="#163A5F" opacity="0.6" />
                    <path d="M 10 35 L 15 40 L 25 30" stroke="#163A5F" strokeWidth="2" fill="none" opacity="0.6" />
                    <text x="17.5" y="70" textAnchor="middle" fill="#5F6F7E" fontSize="10" fontWeight="500">Structured</text>
                    <text x="17.5" y="82" textAnchor="middle" fill="#5F6F7E" fontSize="10" fontWeight="500">Process</text>
                  </g>
                  
                  {/* Shield/Trust Icon */}
                  <g transform="translate(80, 300)">
                    <path d="M 17.5 0 L 35 8 L 35 25 Q 35 40 17.5 50 Q 0 40 0 25 L 0 8 Z" 
                          fill="white" 
                          stroke="#163A5F" 
                          strokeWidth="2" 
                          opacity="0.7" />
                    <path d="M 10 23 L 15 28 L 25 16" 
                          stroke="#163A5F" 
                          strokeWidth="2.5" 
                          fill="none" 
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          opacity="0.7" />
                    <text x="17.5" y="70" textAnchor="middle" fill="#5F6F7E" fontSize="10" fontWeight="500">Transparent</text>
                    <text x="17.5" y="82" textAnchor="middle" fill="#5F6F7E" fontSize="10" fontWeight="500">& Reliable</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>


      <style jsx>{`
        /* Hero Section Styles */
        .hero_section_global_bridge {
          background: linear-gradient(135deg, #f8f9fa 0%, #e8eef3 100%);
          position: relative;
          overflow: hidden;
        }

        .hero_content {
          padding-right: 2rem;
        }

        .hero_title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #0F2A44;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
        }

        .hero_title.fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .hero_highlight {
          color: #0F2A44;
          display: block;
        }

        .hero_subtitle {
          font-size: 1.125rem;
          color: #5F6F7E;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 600px;
          opacity: 0;
          transform: translateY(30px);
        }

        .hero_subtitle.fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .hero_buttons {
          opacity: 0;
          transform: translateY(30px);
        }

        .hero_buttons.fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .btn_primary {
          background-color: #163A5F;
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn_primary:hover {
          background-color: #0F2A44;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(15, 42, 68, 0.2);
        }

        .btn_secondary {
          background-color: transparent;
          color: #163A5F;
          padding: 0.875rem 2rem;
          border: 2px solid #163A5F;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn_secondary:hover {
          background-color: #163A5F;
          color: white;
          transform: translateY(-2px);
        }

        .hero_visual {
          opacity: 0;
          transform: translateX(50px);
        }

        .hero_visual.fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }

        .hero_illustration {
          width: 100%;
          height: auto;
          max-width: 600px;
        }

        /* SVG Animations */
        .pulse-ring {
          animation: pulseRing 2s ease-out infinite;
        }

        .pulse-ring-large {
          animation: pulseRingLarge 2.5s ease-out infinite;
        }

        @keyframes pulseRing {
          0% {
            r: 20;
            opacity: 0.15;
          }
          50% {
            r: 35;
            opacity: 0.05;
          }
          100% {
            r: 20;
            opacity: 0.15;
          }
        }

        @keyframes pulseRingLarge {
          0% {
            r: 30;
            opacity: 0.15;
          }
          50% {
            r: 50;
            opacity: 0.05;
          }
          100% {
            r: 30;
            opacity: 0.15;
          }
        }

        .country_node {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .country_node:hover {
          transform: scale(1.1);
        }

        .kenya_node:hover {
          transform: scale(1.15);
        }

        .connection-line {
          animation: fadeInLine 1s ease-out forwards;
        }

        @keyframes fadeInLine {
          from {
            opacity: 0;
            stroke-dasharray: 0, 1000;
          }
          to {
            opacity: 0.4;
            stroke-dasharray: 8, 4;
          }
        }

        /* Trust Signal Strip */
        .trust_signal_strip {
          background: white;
          border-top: 1px solid #e0e6ec;
          border-bottom: 1px solid #e0e6ec;
          padding: 2rem 0;
        }

        .trust_signals_wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          opacity: 0;
          transform: translateY(30px);
        }

        .trust_signals_wrapper.fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .trust_signal {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .trust_icon {
          font-size: 2rem;
          color: #163A5F;
          flex-shrink: 0;
        }

        .trust_content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .trust_name {
          font-weight: 600;
          color: #0F2A44;
          font-size: 1rem;
        }

        .trust_caption {
          color: #5F6F7E;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        /* Animations */
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .delay-1 {
          animation-delay: 0.2s;
        }

        .delay-2 {
          animation-delay: 0.4s;
        }

        .delay-3 {
          animation-delay: 0.6s;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .hero_title {
            font-size: 2.5rem;
          }

          .hero_content {
            padding-right: 0;
            text-align: center;
            margin-bottom: 3rem;
          }

          .hero_subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .hero_buttons {
            justify-content: center;
          }

          .hero_visual {
            margin-top: 2rem;
          }

          .trust_signals_wrapper {
            grid-template-columns: 1fr;
          }

          .trust_signal {
            justify-content: center;
            text-align: center;
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 576px) {
          .hero_title {
            font-size: 2rem;
          }

          .btn_primary,
          .btn_secondary {
            width: 100%;
            text-align: center;
          }

          .hero_buttons {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}