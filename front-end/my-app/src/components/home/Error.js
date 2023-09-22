import React from 'react'

import './signup.css'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div className='sign_up'>
      <div className='space'></div>

      <img className='error-img' src='/images/error.svg'/>
      <h1 className='error-text'>Opps!</h1>
      <p className='error-small'>Sorry, not found</p>
      <Link className='link' to='/'>
      <button className='button-blue3'>Go Home</button>
      </Link>
      
    </div>
  )
}

export default Error