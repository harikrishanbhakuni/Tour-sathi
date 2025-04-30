import React from 'react'

import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import location_icon from '../../Assets/location-icon.png'
import call_icon from '../../Assets/phone-icon.png'
import white_arrow from'../../Assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5a9359d6-adc8-4fba-8238-2a27597c171b");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res)=>res.json());
    if(res.success){
      console.log("success",res);
      setResult(res.message);
      event.target.reset();
    }else{
      console.log("Error",res)
      setResult(res.message);
    }
  };
  return (
    <div className='contact'>
        <div className='contact-col'>
          <h3>Send us a message <img src={msg_icon} alt=''/></h3>
          <p>Feel free to reach out through contact form or find our contact 
            information below.Your feedback ,questions, and suggestons are 
            important to us as we strive to provide exceptional service to our 
            tour-sathi team.
          </p>
          <ul>
            <li><img src={mail_icon} alt=''/>bhakuniharikrishan@gmail.com</li>
            <li><img src={call_icon} alt=' '/>7579133318</li>
            <li><img src={location_icon} alt=''/>263676,Salt Almora Uttrakhand</li>
          </ul>
        </div>
        <div className='contact-col'>
        <form onSubmit={onSubmit}>

            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea  className='textarea'name='message' rows="6" placeholder='Enter your messages' required></textarea>
            <button type='submit' className='btn dark-btn' >Submit now<img src={white_arrow} alt=''/></button>
          </form>
          <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
