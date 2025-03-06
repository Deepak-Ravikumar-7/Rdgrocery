import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homeimage.css';
export default function Homeimage({ name, price, image }) {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const addToCart = () => {
    const newProduct = { name, price, image, qty };
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = storedCartItems.findIndex(item => item.name === name);

    if (existingItemIndex !== -1) {
      storedCartItems[existingItemIndex].qty += qty;
    } else {
      storedCartItems.push(newProduct);
    }

    localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
    alert("Item added to cart");
  };


  const addToWishlist = () => {
    const product = { name, price, image, qty };
    const storedWishItems = JSON.parse(localStorage.getItem('wishItems')) || [];
    const existingIndex = storedWishItems.findIndex(item => item.name === name);

    if (existingIndex !== -1) {
      storedWishItems[existingIndex].qty += qty;
    } else {
      storedWishItems.push(product);
    }

    localStorage.setItem('wishItems', JSON.stringify(storedWishItems));
    alert("Item added to Wish list");
  };


  return (
    <div className="product-card">
      <img src={image} alt={name} height="150px" width="150px" className="img" />
      <div>{name}</div>
      <div>Price: ₹ {price}</div>
      <div className='qty'> <pre>Qty :  </pre>
        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}> - </button>
        <span>{qty}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
      </div>
      <button onClick={addToWishlist} className="addtocart">
        Add to wishlist
      </button>
      <button onClick={addToCart} className="addtocart">
        Add to Cart
      </button>

    </div>
  );
}
