import React, { useRef } from 'react'
import './Testimonials.css'
import next_btn from '../../Assets/next-icon.png'
import back_btn from '../../Assets/back-icon.png'
import user_1 from '../../Assets/user-1.png'
import user_2 from '../../Assets/user-2.png'
import user_3 from '../../Assets/user-3.png'
import user_4 from '../../Assets/user-4.png'

const Testimonials = () => {
  const slider= useRef();
  let tx=0;
  const slideForward = () =>{
      if(tx > -50){
        tx -= 25;
      }
      slider.current.style.transform =`translateX(${tx}%)`;
    


  }
  const slideBackward=()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform =`translateX(${tx}%)`;
  
    
    
    

  }
  return (
    <div className='testimonials'>
        <img  src={next_btn} className='next-btn' onClick={slideForward}/>
         <img  src={back_btn} className='back-btn' onClick={slideBackward}/>
         <div className="slider">
          <ul ref={slider}>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user_1} alt=''/>
                  <div>
                    <h3>Gurmeet Kaur Sidhu</h3>
                    <span>from,USA</span>
                  </div>
                </div>
                <p>I have visited many places in India, but Uttarakhand is truly unique. Tour-Sathi is the perfect resource for exploring Uttarakhand. The Tour-Sathi team is excellent, and I enjoyed every moment with them
                </p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user_2} alt=''/>
                  <div>
                    <h3>Karan kumar</h3>
                    <span>Noida,UP</span>
                  </div>
                </div>
                <p>If you're looking to explore Uttarakhand, Tour-Sathi is the way to go. They turn travel dreams into reality with their expertise and warmth.
                </p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user_3} alt=''/>
                  <div>
                    <h3>Sophia Taylor"</h3>
                    <span>from,Russia</span>
                  </div>
                </div>
                <p>The Tour-Sathi team made the trip effortless and fun. Their dedication to making sure every traveler enjoys their journey is inspiring.
                </p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user_4} alt=''/>
                  <div>
                    <h3>Harry</h3>
                    <span>from,Londan</span>
                  </div>
                </div>
                <p>Tour-Sathi turned my trip into a journey of discovery. Their well-organized team and deep knowledge of Uttarakhand made every moment special
                </p>
              </div>
            </li>
          </ul>
         </div>
      
    </div>
  )
}

export default Testimonials
