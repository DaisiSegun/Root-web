import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

function VerifyCode() {

  const [counter, setCounter] = React.useState(60);
    React.useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

  return (
    <div className='sign_up'>
      <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
        <h1 className='header_step'>Step 2 0f 2</h1>

      <div className='sign_up_container'>
        <h5>Verification Code</h5>
        <h1 className='sms-to-text'>We sent an Sms to your number: <span className='sms-to-num'>09019971557</span></h1>
        <form className='form'>
            <label className='verify-label'>Please input verifcation code</label>
            <input type='number' placeholder='- - - - - -'/>

            <Link to='/welcome'>
            <button className='button-blue'>Continue</button>
            </Link>
            <h1 className='sms-to-text2'>Resend OTP in: <span className='sms-to-num2'>0:{counter}</span></h1>
            <h1 className='resend-code'>Resend Code</h1>
            

          
          
            
            
            
            
        </form>
      </div>
    </div>
  )
}

export default VerifyCode