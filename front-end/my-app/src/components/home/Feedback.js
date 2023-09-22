import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
function Feedback() {
  return (
    <div className='sign_up'>
    <Link to='/'>
     <img className='sign_up_logo' src='./images/root-full-07.png'/>
     </Link>
    

   <div className='sign_up_container'>
     <h5 className='describe-h-text'>Feedback Form</h5>
     <h1 className='phone-number-note2'>Please give us your feedback</h1>
     <form className='form'>
         <label>Full Name</label>
         <input type='text' />

         <label>Email</label>
         <input type='email' />

         <label>Message</label>
         <input className='decribe-issue' type='text' /> 

       
         
         <button className='button-blue'>Submit</button>
        
         
         
     </form>
   </div>
 </div>
  )
}

export default Feedback