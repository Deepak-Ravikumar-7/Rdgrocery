import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Terms() {
  const navigate = useNavigate();
  const loghome = () => {
    navigate("/");
  }
  const Backtohome = () => {
    navigate('/');
  };
  return (
    <>
      <div >
        <div className="homepag">
          <div className="Header">
            <div className="logo-container">
              <img className="logo" src="/images/logo.png" alt="Logo" onClick={loghome} />
              <h1 className="store-name">Refresh Daily</h1>
            </div>
            <h1 className='ca'>Terms and Conditions</h1>

            <button className="button" onClick={Backtohome}>Back To Home</button>
          </div>
        </div>
      </div>
      <div className='sen'>
        <div className='senc'>
          <strong>RD – Your Online Grocery Partner</strong>
          <p><br />  RD Grocery Shopping, operated by Innovative Retail Concepts Pvt Ltd (IRCPL) and licensed from Supermarket Grocery Supplies Pvt Ltd (SGSPL), provides an online grocery shopping platform. By accessing rdgrocery.com, you agree to the following terms and conditions.

            Users must register an account to shop and are responsible for maintaining their login credentials. We ensure accurate product details and pricing but reserve the right to update them without prior notice. Orders once confirmed cannot be modified, but cancellations may be allowed within a limited timeframe. Payments are securely processed, and refunds for failed transactions follow our standard policies.

            We offer timely deliveries across multiple cities, but delivery schedules may vary. If a product is damaged or incorrect, customers can request a return or replacement. Any misuse of our platform, including fraudulent activities, may lead to account suspension.

            These terms are governed by Indian law, and any disputes will be handled in the appropriate jurisdiction. For assistance, our customer support team is always available to help.   </p>
        </div></div>
    </>
  )
}
