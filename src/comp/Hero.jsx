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
        })
      }, [])
    
      return (
        <>
          <div className="Hero">
            <div className="bg" id="vanta">
              
            </div>
          </div>
        </>
      )

      
}

export default Hero