import React from 'react'
import myImg from '../images/DesmondPicture.jpg'
function Hero() {
  return (
    <section className="second-row">
        
        <img src={myImg} alt="Me"/>
        <h2 id = "BrighterTomorrow" ><text>Brighter Tomorrow</text></h2>

    </section>
  )
}

export default Hero