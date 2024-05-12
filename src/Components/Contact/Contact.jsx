import React from 'react'
import Headers from '../Headers/Headers'
import msg_icon from '../../Assests/msg-icon.png'
import mail_icon from '../../Assests/mail-icon.png'
import phone_icon from '../../Assests/phone-icon.png'
import location_icon from '../../Assests/location-icon.png'
import './Contact.css'
import white_arrow from '../../Assests/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a9f59873-7bfc-46cc-ba78-27cd96c6dfa5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='main' id='contact'>
        <Headers sub_title='CONTACT US' main_title='Get in Touch'/>
     <div className='main-div'>
        <div className='left-div'>
            <h3>Send us a message<img className='msg_icon' src={msg_icon} alt="message"/></h3>
            <p className='send-msg'>Feel free to reach out through contact form or find our contact 
                information below. Your feedback, questions and suggestions are 
                important to us as we strive to provide exceptional service to 
                our university community.</p>
            <div className='icons'><img className='m-icons' src={mail_icon} alt="mail"/><p className='email-ad'>Contact@GreatStack.dev</p></div>
            <div className='icons'><img className='p-icons' src={phone_icon} alt="phone"/><p className='phone-num'>+1123-456-7890</p></div>
            <div className='icons'><img className='l-icons' src={location_icon} alt="location"/><p className='address'>77 Massachusetts Ave, Cambridge MA 02139, United States</p></div>
        </div>
        <div className='right-div'>
            <form onSubmit={onSubmit}>
            <p className='y-name'>Your name</p>
            <input className='name-txt' type='text' placeholder='Enter your name'/>
            <p className='y-num'>Phone number</p>
            <input className='num-txt' type='text' placeholder='Enter your mobile number'/>
            <p className='y-msg'>Write your messages here</p>
            <textarea className='msg-txt' placeholder='Enter your message' rows={7}></textarea>
           <div><button className='sub-btn'>Submit now<img src={white_arrow} alt='arrow'/></button></div>  
           </form>
        </div>
    </div>
   </div>
  )
}

export default Contact
