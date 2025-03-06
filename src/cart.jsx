import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './cart.css'
export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [noofproducts, setNoofproducts] = useState(0);
  const navigate = useNavigate();
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
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
    setNoofproducts(storedCartItems.length);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, itemIndex) => itemIndex !== index);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    setNoofproducts(updatedCart.length);
  };

  const increaseQty = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].qty += 1;
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const decreaseQty = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].qty > 1) {
      updatedCart[index].qty -= 1;
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };

  const addMoreItem = () => {
    navigate('/');
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  const Backtohome = () => {
    navigate('/');
  };
  const loghome = () => {
    navigate("/");
  }
  const checkout = () => {
    navigate("/checkout");
  }
  return (
    <div >
      <div className="homepag">
        <div className="Header">
          <div className="logo-container">
            <img className="logo" src="/images/logo.png" alt="Logo" onClick={loghome} />
            <h1 className="store-name">Refresh Daily</h1>
          </div>
          <div></div>
          <h1 className='ca'>Your Cart</h1>
          <button onClick={addMoreItem} className="add-more">
            Add More
          </button>
          <button className="button" onClick={Backtohome}>Back To Home</button>
        </div>
      </div>
      <br />
      <div >
        {cartItems.length === 0 ? (
          <div className='caa'>
            <p>Your cart is empty<br /></p>
            <img src="/images/empcart.png" height="200px" />
          </div>
        ) : (
          
          <div className="products-containerc">
            {cartItems.map((item, index) => (
              <div key={index} className="product-card">
                <img src={item.image} alt={item.name} height="150px" width="150px" className="img" />
                <div>{item.name}</div>
                <div>Price: ₹{item.price}</div>

                <div className='qty'>
                  <pre>Quantity : </pre>
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span> {item.qty}</span>
                  <button onClick={() => increaseQty(index)}>+</button>
                </div>

                <button onClick={() => removeFromCart(index)} className="remove-from-cart">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div> {cartItems.length > 0 && (
        <div className='sum'>
          <p className='order'>Order Summary</p>
          <div>Total Products: {noofproducts} </div>
          <div>Total Amount: ₹{totalPrice.toFixed(2)}</div>
          <div>GST 14%: ₹{((14 / 100) * totalPrice).toFixed(2)}</div>
          <div>Total amount to be paid: ₹{(totalPrice + (14 / 100) * totalPrice).toFixed(2)}</div>
          <button className='checkout' onClick={checkout}>Checkout</button>
        </div>

      )}
      <div className="footercart">
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