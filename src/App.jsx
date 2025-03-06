import './App.css'
import Login from './login.jsx';
import Home from './home.jsx';
import Cart from './cart.jsx';
import Wishlist from './Wishlist.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './about.jsx';
import Contact from './contactus.jsx';
import Terms from './terms.jsx';
import Partners from './partners.jsx';
import Register from './register.jsx';
import Policy from './policy.jsx';
import Checkout from './checkout.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/wish" element={<Wishlist />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/termsandconditions" element={<Terms />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/register" element={<Register />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;