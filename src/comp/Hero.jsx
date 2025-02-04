import { useEffect } from 'react'
import EFFECT from 'vanta/src/vanta.dots'
import './Hero.css'

function Hero() {
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
          <div className="hero-container">
            <div className="bg" id="vanta">
            <div className="content">
                <h1 className="title">IETE Committee</h1>
                <div className="logo-container">
                    <img src="src/assets/iete-rectangle.jpg" alt="IETE SFIT" className="logo" />
                </div>
                <p className="tagline">&gt; Empowering Tech of Today.</p>
                <button className="contact-button">
                    {/* Contact Us <span className="chat-icon">💬</span> */}
                    Contact Us <span className="chat-icon"><img src="src/assets/chat-icon.svg" alt="chat" className="chat-here" /></span>
                </button>
            </div>

            </div>
          </div>
        </>
      )

      
}

export default Hero