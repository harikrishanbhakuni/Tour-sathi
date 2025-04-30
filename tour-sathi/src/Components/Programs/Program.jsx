import React from 'react'
import './Program.css'
import program_1 from '../../Assets/Program_1.avif'
import program_2 from '../../Assets/program_2.jpeg'
import program_3 from '../../Assets/Program_3.avif'
import Yoga from '../../Assets/yoga_icon.jpeg'
import Tiger from '../../Assets/tiger_icon.jpeg'
import nainital from '../../Assets/nainital.icon.jpeg'
import Kedarnath from '../../Assets/kedarnath.jpeg'
import K_icon from '../../Assets/k_icon.png'
import Traking from '../../Assets/traking.webp'
import Camping from '../../Assets/camping.jpg'
import C_icon from '../../Assets/c_icon.png'
import T_icon from '../../Assets/t_icon.png'

const Program = () => {
  return (
    <div className='programs '>
        <div className="program">
            <img src={program_1} alt=''/>
            <div className='caption'>
                <img src={Yoga} alt=''/>
                <p>Yog Nagari </p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt='' className='pros'/>
            <div className='caption'>
                <img src={Tiger} alt=''/>
                <p> National Park</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt='' className='port'/>
            <div className='caption'>
                <img src={nainital} alt=''/>
                <p> Explore Nainital</p>
            </div>
        </div>
        <div className="program">
            <img src={Kedarnath} alt=''/>
            <div className='caption'>
                <img src={K_icon} alt=''/>
                <p>Kedarnath</p>
            </div>
        </div>
        <div className="program">
            <img src={Traking} alt=''/>
            <div className='caption'>
                <img src={T_icon} alt=''/>
                <p>Traking </p>
            </div>
        </div>
        <div className="program">
            <img src={Camping} alt=''/>
            <div className='caption'>
                <img src={C_icon} alt=''/>
                <p>Camping </p>
            </div>
        </div>
      
    </div>
  )
}

export default Program
