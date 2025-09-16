import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './cart.css';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);


  useEffect(() => {
    if (!user) return;

    const fetchCartItems = async () => {
      try {
        const res = await axios.get("http://localhost:3001/getcart", {
          params: { user: user.email },
        });

        console.log("Fetched Cart Items from DB:", res.data);
        setCartItems(res.data);
        localStorage.setItem("cartItems", JSON.stringify(res.data));
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [user]);

 

  const removeFromCart = async (itemName) => {
    const updatedCart = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCart);

    try {
      await axios.delete("http://localhost:3001/delcart", {
        data: { user: user.email, name: itemName },
      });
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  const increaseQty = async (itemName) => {
    const updatedCart = cartItems.map((item) =>
        item.name === itemName ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    try {
        await axios.post("http://localhost:3001/cart", {  // ✅ Update backend
            user: user.email,
            newCartItem: { name: itemName, quantity: 1 } // Increment quantity by 1 in DB
        });
    } catch (error) {
        console.error("Error updating quantity:", error);
    }
};
const decreaseQty = async (itemName) => {
    const updatedCart = cartItems
        .map((item) =>
            item.name === itemName ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); // Remove if quantity is 0

    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    try {
        const response = await axios.put("http://localhost:3001/cart/decrease", {
            user: user?.email,  // Make sure user is not null
            itemName: itemName  // Ensure itemName is correct
        });

        console.log("Backend response:", response.data);
    } catch (error) {
        console.error("Error decreasing quantity:", error.response?.data || error.message);
    }
};

 
   
    const checkout = () => {
        navigate("/checkout");
    };

    const totalPrice = cartItems.reduce((total, item) => 
    total + (Number(item.price) * (Number(item.quantity) || 1)), 0
);
    return (
        <div>
            <div className="homepag">
                <div className="Header">
                    <div className="logo-container">
                        <img className="logo" src="/images/logo.png" alt="Logo" onClick={() => navigate('/')} />
                        <h1 className="store-name">Refresh Daily</h1>
                    </div>
                    <h1 className='ca'>Your Cart</h1>
                    <button onClick={() => navigate('/')} className="add-more">Add More</button>
                    <button className="button" onClick={() => navigate('/')}>Back To Home</button>
                </div>
            </div>
            <br />

            <div>
                {cartItems.length === 0 ? (
                    <div className='caa'>
                        <p>Your cart is empty</p>
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
                                    <button onClick={() => decreaseQty(item.name, item.quantity)}>-</button>
                                    <span> {item.quantity} </span>
                                    <button onClick={() => increaseQty(item.name, item.quantity)}>+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.name)} className="remove-from-cart">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {cartItems.length > 0 && (
                <div className='sum'>
                    <p className='order'>Order Summary</p> 
                    <div>Total Products: {cartItems.length} </div>
                    <div>Total Amount: ₹{totalPrice.toFixed(2)}</div>
                    <div>GST 14%: ₹{((14 / 100) * totalPrice).toFixed(2)}</div>
                    <div>Total amount to be paid: ₹{(totalPrice + (14 / 100) * totalPrice).toFixed(2)}</div>
                    <button className='checkout' onClick={checkout}>Checkout</button>
                </div>
            )}

            {/* ✅ FOOTER STARTS HERE ✅ */}
            <div className="footercart">
                <strong><center>RD – Your Online Grocery Partner</center></strong>
                <div className='more'>
                    <div className='f'>
                        <ul>
                            <br />
                            <li className='a' onClick={() => navigate('/aboutus')}>About us</li>
                            <li className='a' onClick={() => navigate('/contactus')}>Contact us</li>
                            <li className='a' onClick={() => navigate('/login')}>Login / Signup</li>
                            <li className='a' onClick={() => navigate('/termsandconditions')}>Terms and conditions</li>
                            <li className='a' onClick={() => navigate('/partners')}>Partners</li>
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
                        <pre><br />Cities We Serve<br /><br />
                            Coimbatore | Tiruppur | Chennai | Cochin | Bengaluru | Trichy<br />
                            Erode | Tiruchengode | Krishnagiri | Tenali
                        </pre>
                    </div>
                </div>
                <center>Copyright © 2024-2026 Supermarket Grocery Supplies Pvt Ltd</center>
            </div>  
        </div>
    );
}
