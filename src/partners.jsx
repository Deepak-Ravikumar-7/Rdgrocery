import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Partners() {
  const contact = () => {
    navigate("/contactus");
  }
  const terms = () => {
    navigate("/termsandconditions");
  }
  const about = () => {
    navigate('/aboutus');
  };
  const log = () => {
    navigate('/login');
  };
  const partners = () => {
    navigate('/partners');
  }
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
            <h1 className='ca'>Partners</h1>

            <button className="button" onClick={Backtohome}>Back To Home</button>
          </div>
        </div>
        <div className='cont' >

          <div className='co'>
            <img src="/images/deepak.jpg" /><br />
            <p>Mr. Deepak</p><br />
            <p>Founder of RD Grocery Store</p>
          </div>
          <div className='co'>
            <img src="/images/ash.jpg" /><br />
            <p>Mr. Ashvanth</p><br />
            <p>Founder of star rentals</p>
          </div>
          <div className='co'>
            <img src="/images/hari.jpg" /><br />
            <p>Mr. Hari Prasath</p><br />
            <p>Founder of BookLand</p>
          </div>
          <div className='co'>
            <img src="/images/jai.jpg" /><br />
            <p>Mr. Jaya Prakash</p><br />
            <p>Founder of Jk HungerHub</p>
          </div>
          <div className='co'>
            <img src="/images/xavier.png" /><br />
            <p>Mr. Dhana Xavier</p><br />
            <p>Founder of DX Cafe</p>
          </div>
          <div className='co'>
            <img src="/images/aadthi.jpg" /><br />
            <p>Dr. Aadhithya</p><br />
            <p>Founder of JKSA Hospital</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <strong><center>RD – Your Online Grocery Partner</center>   </strong>
        <div className='more'>

          <div className='f'>
            <ul>
              <br />
              <li className='a' onClick={about}>About us</li>
              <li className='a' onClick={contact}>Contact us</li>
              <li className='a' onClick={log}>Login / signup</li>
              <li className='a' onClick={terms}>Terms and conditions</li>
              <li className='a' onClick={partners}>Partners</li>
            </ul>
            <div className='fol'><br />
              Follow us on social media<br /><br />
              <div className='image'>
                <a href=''><img src="/images/fac.webp" height="30px" width="30px" /></a>
                <a href='https://www.instagram.com/_._deepak._._07/?next=%2F' target="_blank" rel="noopener noreferrer"><img src="/images/insta.webp" height="30px" width="30px" /></a>
                <a href=''><img src="/images/twit.webp" height="33px" width="33px" /></a>
              </div>
            </div>
            <p className='address'><br />
              Registered Office Address:<br /><br />
              RD Grocery Store PVT Limited,<br />
              123, Fresh Avenue,<br />
              Green Market Complex,<br />
              Outer Ring Road, Kangeyam,<br />
              Tiruppur, 638701,<br />
              Tamil Nadu, India.
            </p>
            <p className='address'>
              <br />

            </p>
          </div>
        </div>



        <center>Copyright © 2024-2026 Supermarket Grocery Supplies Pvt Ltd</center>
      </div>
    </>
  )
}
