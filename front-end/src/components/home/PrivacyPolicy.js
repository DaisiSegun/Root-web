import React from 'react'
import { Link } from 'react-router-dom';
import './signup.css';
function PrivacyPolicy() {
  return (
    <div className='sign_up'>
       <Link to='/'>
        <img className='sign_up_logo1' src='./images/root-full-07.png'/>
        </Link>
        <p className='privacy-policy'>

            
Privacy Policy for Root Group
<p className='privacy-list'>
Effective Date: 16/10/2023
</p>
<p className='privacy-list'>
**1. Introduction**

Welcome to Root Group! This privacy policy outlines how we collect, use, and protect your personal information and includes our return policy. By using our services, you agree to the practices described in this policy.
</p>

<p className='privacy-list'>
**2. Information We Collect**

We collect the following types of information to provide and improve our services:
</p>
<p className='privacy-list'>
**2.1 Personal Information**: When you schedule a repair service, we collect your name, contact information, and address for appointment scheduling and communication.
</p>
<p className='privacy-list'>
**2.2 Device Information**: To perform accurate repairs, we collect data about your iPhone, including its model, serial number, and condition.
</p>
<p className='privacy-list'>
**2.3 Payment Information**: If you make a payment for our services, we collect payment information, such as credit card details, solely for payment processing.
</p>
<p className='privacy-list'>
**3. How We Use Your Information**

We use the information you provide for the following purposes:
</p>
<p className='privacy-list'>
**3.1 Service Fulfillment**: Your personal and device information is used to schedule, perform, and complete iPhone repairs, including the collection and return of your device.
</p>
<p className='privacy-list'>
**3.2 Customer Support**: We may use your information to respond to inquiries and provide customer support.
</p>
<p className='privacy-list'>
**3.3 Payment Processing**: Payment information is used solely for processing payments for our services.
</p>
<p className='privacy-list'>
**4. Data Sharing**

We do not share your personal information with third parties except when required by law or when necessary for service providers directly involved in the repair process.
</p>
<p className='privacy-list'>
**5. Data Security**

We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction.
</p>
<p className='privacy-list'>
**6. Cookies and Tracking**

We may use cookies and similar tracking technologies to improve your experience on our website. You can manage your cookie preferences through your browser settings.
</p>
<p className='privacy-list'>
**7. Your Rights**

You have the right to access, update, and delete your personal information. Please contact us to exercise these rights.
</p>
<p className='privacy-list'>
**8. Return Policy**
</p>
<p className='privacy-list'>
**8.1 Return Period**: We offer an 8-day return policy for our repair services. You have up to 8 days from the date of service completion to request a return or refund.
</p>
<p className='privacy-list'>
**8.2 Eligibility**: To be eligible for a return or refund, the following conditions must be met:
</p>
<p className='privacy-list'>
- The request is made within 8 days from the service completion date.
</p>
<p className='privacy-list'>
- The iPhone must not have been subjected to physical damage or any third-party repair attempts after our service.
</p>
<p className='privacy-list'>
**8.3 How to Request a Return**: To request a return, please contact our customer support team, +2349019971557. You will be required to provide specific information.
</p>
<p className='privacy-list'>
**8.4 Processing the Return**: Once we receive your request, we will review it and provide instructions on how to proceed with the return. Depending on the nature of the return, we may inspect the iPhone to ensure it meets the eligibility criteria.
</p>
<p className='privacy-list'>
**8.5 Refund**: If the return is approved, we will process your refund in accordance with our refund policy.
</p>
<p className='privacy-list'>
**9. Changes to this Policy**
</p>
<p className='privacy-list'>
We may update this policy from time to time. Please review it periodically for any changes.
</p>
<p className='privacy-list'>
**10. Contact Us**

If you have questions or concerns about this policy or the way we handle your information, please contact us at rootsgroup@gmail.com & +2349019971557.
</p>
<p className='privacy-list'>
**11. Consent**

By using our services, you consent to the collection and use of your information as described in this privacy and return policy.

---
</p>
        </p>
        <Link className='link' to='/signup'>
       <button className='button-blue5'>
           I Agree
          </button>
          </Link>
    </div>
  )
}

export default PrivacyPolicy