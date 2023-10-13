import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import Header from '../header/Header'

function CustomerService() {
  return (
    <div className='main'>
    <div className='menu-container'>
      <Header/>
      <hr className='line'></hr>
      <div className='nav-container'>
        <h1 className='headers'>Customer Service</h1>
        <nav className='nav'>
          <div className='split-customer'>
          
          <button className='nav-button2'>
          <div className='split-customer1'>
            <span className='nav-tit'>Call Us </span> 
            <img src='/images/call-us.svg'/>
            <span className='nav-reach'>+2349019971557</span> 
            <span className='nav-reach'>+2348069100884</span>
            </div> 
          </button>
          
          
        
          <Link className='link5' to='whatsapp://send?phone=+2349019971557'>  
          <button className='nav-button2'>
          <div className='split-customer1'>
            <span>Reach us on whatsapp</span>
            <img src='/images/chat-us.svg'/>
            <span className='nav-reach'>+2349019971557</span>
            </div>
          </button>
          </Link>
       

          <Link className='link5' to='mailto:rootsgotyou@gmail.com'> 
            <button className='nav-button2'>
              <div className='split-customer1'>
                <span className='nav-tit'>Send us an Email</span>
                <img src='/images/email-us.svg' alt='Email Us Icon'/> 
                <span className='nav-reach'>rootsgotyou@gmail.com</span>
              </div>
            </button>
            </Link>

         
          
            {/*<Link className='link' to='/feedback'>
            <button className='nav-button'>
            <span className='send-feedback'>Give us your feedback</span>
            <img className='nav-icon-01' src='./images/nav-blue.svg'/>
          </button></Link> */}
          </div>
          
          
          
          
          <div className='space'></div>
          
        </nav>
        
        </div>
      </div>
  </div>
  )
}

export default CustomerService