import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homeimage.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
export default function Homeimage({ name, price,quantity,image }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(quantity || 1);
  const [qty, setQty] = useState(1);
  const [user,setUser] = useState(null);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const store = localStorage.getItem("user");
    if (store) {
      setUser(JSON.parse(store));
    }
  }, [])

  useEffect(() => {
    if (!user) return;
    const fetchCart = async () => {
      try {
        const res = await axios.get("http://localhost:3001/getcart", {
          params: { user: user.email },
        });
        console.log("Fetched Cart from DB:", res.data);
        setCart(res.data);
        localStorage.setItem("cartItems", JSON.stringify(res.data));
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };
    fetchCart();
  }, [user]);

  const addToCart = async () => {
    if (!user) {
      Swal.fire({
        title: "Login Required!",
        text: "You need to log in to add items to cart.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    const newCartItem = {
      name: name,
      price: price,
      image: image,
      quantity: count
    };

    if (cart.some((item) => item.name === newCartItem.name)) {
      Swal.fire({
        title: "Already in Cart!",
        text: "This item is already in your cart.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return; 
    }

    try {
      await axios.post("http://127.0.0.1:3001/cart", {
        user: user.email,
        newCartItem
      });

      const updatedCart = [...cart, newCartItem]; 
      setCart(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      Swal.fire({
        title: "Added to Cart!",
        text: "Item has been successfully added to your cart.",
        icon: "success",
        confirmButtonText: "OK",
      });

    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const addToWishlist = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      Swal.fire({
        title: 'Login Required',
        text: 'Please log in to add items to your wishlist!',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    const item = { name, price, image };
    axios.post("http://localhost:3001/addToWishlist", {
      user: storedUser.email,
      item
    })
      .then(res => {
        Swal.fire({
          title: 'Success!',
          text: res.data.message,
          icon: 'success',
          confirmButtonText: 'OK'
        });
      })
      .catch(err => console.error("Add to Wishlist Error:", err));
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} height="150px" width="150px" className="img" />
      <div>{name}</div>
      <div>Price: ₹ {price}</div>

      <div className='qty'>
        <pre>Qty: </pre>
        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}> - </button>
        <span>{qty}</span>
        <button onClick={() => setQty(qty + 1)}> + </button>
      </div>

      <button onClick={addToWishlist} className="addtocart">
        Add to Wishlist
      </button>
      <button onClick={() => addToCart({ name, price, image, qty })} className="addtocart">
        Add to Cart
      </button>
    </div>
  );
}
