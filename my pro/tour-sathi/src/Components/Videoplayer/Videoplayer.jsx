import React from 'react'
import './videoplayer.css'
import video from '../../Assets/video.mp4'

const Videoplayer = () => {
  return (
    <div className='video-player'>
        <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default Videoplayer
