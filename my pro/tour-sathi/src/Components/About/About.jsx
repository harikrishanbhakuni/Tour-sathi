import React from 'react'
import './About.css'
import About_img from '../../Assets/about.jpeg'
import Ply_icon from '../../Assets/ply_icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={About_img} alt='' className='about-img'/>
            <img src={Ply_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>

        </div>
        <div className='about-right'>
            <h3>ABOUT TOUR-SATHI</h3>
            <h2>Life is short, and the world is wide start exploring today.</h2>
            <p>
            Tour-Sathi is your ultimate companion for discovering the breathtaking beauty of Uttarakhand. From snow-capped peaks to lush green valleys, we guide you through every corner, ensuring your journey is as magical as the destination.</p>
            <p>With Tour-Sathi by your side, every adventure is thoughtfully crafted to bring you closer to the soul of the mountains. We combine seamless travel services with the charm and serenity of Uttarakhand to create memories that last a lifetime.</p>
            
            <p>Whether you're seeking thrilling adventures or peaceful retreats, Tour-Sathi ensures every moment of your journey is unforgettable. Let us be your trusted partner in exploring the heart of Uttarakhand.</p>
        </div>

      
    </div>
  )
}

export default About;