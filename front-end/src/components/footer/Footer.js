import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <h5 className='h-t'>Contact Us</h5>
        <div className='contact-info'> 
          <p className='foooter-p'>Phone number:</p>
          <h1>09015571997</h1>
        </div>
        <div className='contact-info2'> 
          <p className='foooter-p'>Whatsapp:</p>
          <h1>09015571997</h1>
        </div>
        <h5 className='h-t'>Social</h5>
        <div className='icons'>
          <img src='./images/facebook.svg'/>
          <img src='./images/instagram.svg'/>
          <img src='./images/twitter.svg'/>
          <img src='./images/youtube.svg'/>
        </div>
        <p className='foooter-p'>© 2023 Root group | All Rights Reserved</p>
    </div>
  )
}

export default Footer