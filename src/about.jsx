import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function About() {
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
            <h1 className='ca'>About Us</h1>

            <button className="button" onClick={Backtohome}>Back To Home</button>
          </div>
        </div>
      </div>
      <div className='sen'>
        <div className='senc'>
          <strong>RD – Your Online Grocery Partner</strong>
          <p><br /><br />Experience the ease of online grocery shopping with rd, where you can explore a wide selection of fresh fruits, vegetables, pulses, grains, and household essentials all in one place.
            With over 40,000 products from 1,000+ trusted brands, we ensure quality, variety, and convenience for your daily needs.
            Shop effortlessly for groceries, beauty products, and cleaning essentials, all from the comfort of your home.
            Our intuitive platform lets you find everything you need, from fresh produce to branded snacks and beverages, with just a few clicks.
            We serve 300+ cities across India, making grocery shopping a hassle-free experience no matter where you are.
            Discover amazing deals and savings while enjoying a streamlined shopping journey tailored to your preferences.
            With rd, freshness and quality are guaranteed—making it your ultimate destination for seamless online grocery shopping!</p>
        </div></div>
    </>
  )
}
