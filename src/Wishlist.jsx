import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';
export default function Wishlist() {
  const [wishItems, setwishItems] = useState([]);
  const navigate = useNavigate();
  const [Nofproducts, setNofproducts] = useState(0);

  useEffect(() => {
    const storedWishItems = JSON.parse(localStorage.getItem('wishItems')) || [];
    setwishItems(storedWishItems);
    setNofproducts(storedWishItems.length);
  }, []);

  const removeFromWish = (index) => {
    const updatedWish = wishItems.filter((_, itemIndex) => itemIndex !== index);
    localStorage.setItem('wishItems', JSON.stringify(updatedWish));
    setwishItems(updatedWish);
    setNofproducts(updatedWish.length);
  };

  const addToCart = (index) => {
    const item = wishItems[index];
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = storedCartItems.findIndex(cartItem => cartItem.name === item.name);

    if (existingItemIndex !== -1) {
      storedCartItems[existingItemIndex].qty += 1;
    } else {
      storedCartItems.push({ ...item, qty: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
    removeFromWish(index);
    alert("Item moved to cart!");
  };

  const navigateHome = () => navigate('/');
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
  return (
    <div>
      <div className="homepag">
        <div className="Header">
          <div className="logo-container">
            <img className="logo" src="/images/logo.png" alt="Logo" onClick={navigateHome} />
            <h1 className="store-name">Refresh Daily</h1>
          </div>
          <h1 className='ca'>Your Wish List</h1>
          <button onClick={() => navigateHome()} className="add-more">Add More</button>
          <button className="button" onClick={navigateHome}>Back To Home</button>
        </div>
      </div>
      <br />

      <div className="products-containerc">
        {wishItems.length === 0 ? (
          <p>Your Wish List is empty.</p>
        ) : (
          wishItems.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.image} alt={item.name} height="150px" width="150px" className="img" />
              <div>{item.name}</div>
              <div>Price: ${item.price}</div>

              <button onClick={() => removeFromWish(index)} className="remove-from-cart">Remove</button>
              <button onClick={() => addToCart(index)} className="addtocart">Move to Cart</button>
            </div>
          ))
        )}
      </div>

      <div className="footerwish">
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
            <pre><br />                                       Cities We Serve<br /><br />
              Coimbatore   |   Tiruppur   |  Chennai   |   Cochin   |   Bengalure   |   Trichiy<br />
              Erode   |   Tiruchengode   |   Krishnagiri   |   Tenali

            </pre>
          </div>
        </div>



        <center>Copyright © 2024-2026 Supermarket Grocery Supplies Pvt Ltd</center>
      </div>
    </div>
  );
}
