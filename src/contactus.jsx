import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Contact() {
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
            <h1 className='ca'>Contact Us</h1>

            <button className="button" onClick={Backtohome}>Back To Home</button>
          </div>
        </div>
      </div>
      <div className='sen'>
        <div className='senc'>
          <strong>RD – Your Online Grocery Partner</strong>
          <p><br />
            To reach our customer service team please email us at<br /><strong>customerservice@rdgrocery.com</strong><br />Or<br />
            Give a missed call on number<br /> <strong>+91-934583199</strong>
            <br /><br />
            We will reach you within 10 minutes of your response<br /><br />
            For further queries contact<br />
            <strong>+140-652637</strong>
          </p>
        </div></div>
    </>
  )
}
