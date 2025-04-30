import React from 'react'
import './Gallery.css'
import gallery_1 from '../../Assets/mussoorie.jpeg'
import gallery_2 from '../../Assets/ranikhet.jpeg'
import gallery_3 from '../../Assets/almora.jpeg'
import gallery_4 from '../../Assets/haridwar.jpeg'
import white_arrow from '../../Assets/white-arrow.png'

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className='photos'>
            <img src={gallery_1} alt=''/>
            <img src={gallery_2} alt=''/>
            <img src={gallery_3} alt=''/>
            <img src={gallery_4} alt=''/>
        </div>
    <button className='btn dark-btn'>See more here <img  src={white_arrow} alt=''/></button>
      
    </div>
  )
}

export default Gallery
