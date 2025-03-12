import { useEffect } from 'react'
import EFFECT from 'vanta/src/vanta.dots.js'
import '../styles/Footer.css'   

function Footer() {
    useEffect(() => {
        EFFECT({
          el: '#vanta',
          backgroundColor: 0x191d2e,
          mouseControls: true,
          touchControls: true,
          size: 5.30
        })
      }, [])
    
      return (
        <>
          <div className="hero-containersss">
            <div className="bg" id="vanta">
            <div className="content1">
              <h1 className="title">IETE Committee</h1>
              <div className="logo-container">
                <img src="src/assets/iete-rectangle.jpg" alt="IETE SFIT" className="logo" />
              </div>
              <p className="tagline">Made with ❤️ by Webmasters @ IETE <br/> Copyright # 2024</p>
              <p className="tagline"></p>
               
            </div>

            </div>
          </div>
        </>
      )

      
}

export default Footer