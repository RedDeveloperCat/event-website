import React from 'react'
import "../styles/Footer.css"

function Footer() {
  return (
    <>
      {/* Footer - Hero Component */}
      <footer className="footer-container">

        <div className="footer-section-left">
          <div className="footer-logo-container">
            <img src="/iete-rectangle.jpg" alt="IETE SFIT" className="footer-logo" />
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
            <p><a href="mailto:support@company.com">ietesfit.db@gmail.com</a></p>
          </div>

        </div>

        <div className="footer-section-right">

          <p className="footer-about">
            <span>ABOUT US </span>
            The IETE student Chapter at SFIT started in 2008,
            dedicated to the advancement of Electronics & Telecommunication.
          </p>

          <div className="footer-social-icons">
            <a href="#">
              <img src="/yt.svg" alt="s-m" className="footer-social-media-link" />
            </a>
            <a href="#">
              <img src="/twitter.png" alt="s-m" className="footer-social-media-link" />
            </a>

            <a href="#">
              <img src="/linkedin.svg" alt="s-m" className="footer-social-media-link" />
            </a>
            <a href="#">
              <img src="/instagram.png" alt="s-m" className="footer-social-media-link" />
            </a>
          </div>

        </div>

      </footer>
    </>
  )
}

export default Footer
