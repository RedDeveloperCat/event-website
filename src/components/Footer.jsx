import React from 'react'
import  "../styles/Footer.css"

function Footer() {
  return (
    <>
      {/* Footer - Hero Component */}
      <footer class="footer-distributed">

<div class="footer-left">
<div className="logo-container">
                    <img src="src/assets/iete-rectangle.jpg" alt="IETE SFIT" className="logo" />
            </div>
  
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>St. Francis Institute of Technology, </span> <span>Mount Poinsur,S.V.P. Road,</span> 
      <span>Borivli (West), Mumbai, 
      Maharashtra 400103</span> </p>
    
  </div>



  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">iete.contact@SFIT.AC.IN</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>ABOUT US </span>
    IETE is a premier professional society in India, founded in 1953, 
    dedicated to the advancementof Electronics & Telecommunication.
    </p>

  <div class="footer-icons">

    <a href="#">
    <img src="/src/assets/yt.svg" alt="s-m" className="social-media-link" />
    </a>
    <a href="#">
    <img src="/src/assets/twitter.svg" alt="s-m" className="social-media-link" />
    </a>
    
    <a href="#">
    <img src="/src/assets/linkedin.svg" alt="s-m" className="social-media-link" />
    </a>
    <a href="#">
    <img src="/src/assets/Instagram.svg" alt="s-m" className="social-media-link" />
    </a>
  </div>

</div>

</footer>
  </>
  )
}

export default Footer