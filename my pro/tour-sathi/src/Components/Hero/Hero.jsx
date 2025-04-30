import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Welcome To Tour-Sathi</h1>
        <p>Tour-Sathi is a travel company dedicated to providing exceptional tour services across the beautiful state of Uttarakhand. From serene hill stations to adventurous treks and spiritual destinations, Tour-Sathi ensures travelers experience the best of Uttarakhand’s natural beauty and cultural richness. Whether you’re looking for a relaxing getaway, a pilgrimage journey, or thrilling adventures, Tour-Sathi offers personalized packages to meet every traveler's needs.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
