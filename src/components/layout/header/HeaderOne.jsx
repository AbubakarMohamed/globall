import Navbar from './navbar/Navbar';
import HeaderInfo from './HeaderOneInfo';

export default function HeaderOne() {
  return (
    <header className="header_area">
      <div className="header_top_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <HeaderInfo />
            </div>
            <div className="col-md-4">
              <div className="header_button">
                <a href="mailto:info@globalbridge.co.ke" className="tem_btn tem_btn_three">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <Navbar />
    </header>
  );
}