import React from 'react'
import "../styles/Footer.css"

function Footer() {
  return (
    <>
      {/* Footer - Hero Component */}
      <footer className="footer-container">

        <div className="footer-section-left">
          <div className="footer-logo-container">
            <img src="src/assets/iete-rectangle.jpg" alt="IETE SFIT" className="footer-logo" />
          </div>

        </div>

        <div className="footer-section-center">

          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>St. Francis Institute of Technology, </span> <span>Mount Poinsur, S.V.P. Road,</span>
              <span>Borivli (West), Mumbai,
                Maharashtra 400103</span> </p>

          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">iete.contact@SFIT.AC.IN</a></p>
          </div>

        </div>

        <div className="footer-section-right">

          <p className="footer-about">
            <span>ABOUT US </span>
            IETE is a premier professional society in India, founded in 1953,
            dedicated to the advancement of Electronics & Telecommunication.
          </p>

          <div className="footer-social-icons">
            <a href="#">
              <img src="/src/assets/yt.svg" alt="s-m" className="footer-social-media-link" />
            </a>
            <a href="#">
              <img src="/src/assets/twitter.svg" alt="s-m" className="footer-social-media-link" />
            </a>

            <a href="#">
              <img src="/src/assets/linkedin.svg" alt="s-m" className="footer-social-media-link" />
            </a>
            <a href="#">
              <img src="/src/assets/instagram.svg" alt="s-m" className="footer-social-media-link" />
            </a>
          </div>

        </div>

      </footer>
    </>
  )
}

export default Footer
