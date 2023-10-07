import React from 'react'

import './signup.css'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div className='sign_up'>
     
<div className='error-con'>
<img className='error-img' src='/images/error.svg'/>
      <h1 className='error-text1'>We are so sorry, search feature is not working for now.</h1>
      <p className='error-small1'>We are working on it. Please navigate with the category on home page. Thank you. </p>
      <Link className='link' to='/'>
      <button className='button-blue3'>Go Home</button>
      </Link>
</div>
     
      
    </div>
  )
}

export default Error