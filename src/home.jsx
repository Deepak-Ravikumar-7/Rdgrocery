import React, { useEffect, useState } from 'react';
import './App.css';
import './home.css'
import { useNavigate } from 'react-router-dom';
import searchIcon from '/images/cart.png';
import Homeimage from './Homeimage';
import fruit from './fruitscontent';
import essentials from './essentialcontent';
import vegetables from './content';
import homeimg from './default';
import fruitsNewarrival from './fruitsNewarrival';
import vegetablesNewarrival from './vegetablesNewarrival';
import essentailsNewarrival from './essentialsNewarrival';
import defaultNewarrival from './defaultNewarrival';
import defaultbestseller from './defaultbestseller';
import fruitsbestseller from './fruitsbestseller';
import essentialsbestseller from './essentialsbestseller';
import vegetablesbestseller from './vegetablesbestseller';
import beverage from './beverages';
import beveragesbestseller from './beveragesbestseller';
import beveragesNewarrival from './beveragesnewarrival';
function Home() {
    const navigate = useNavigate();
    const [products, setProducts] = useState(homeimg);
    const [newArrival, setnewArrival] = useState(defaultNewarrival);
    const [bestseller, setbestseller] = useState(defaultbestseller);
    const [image, setImage] = useState('/images/home.jpg');
    const Cartpage = () => {
        navigate('/cart');
    };
    const Wishpage = () => {
        navigate("/wish");
    }
    const contact = () => {
        navigate("/contactus");
    }
    const policy = () => {
        navigate("/policy");
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
    const showdefault = () => {
        setProducts(homeimg);
        setnewArrival(defaultNewarrival);
        setbestseller(defaultbestseller);
    };
    const showVegetables = () => {
        setImage('/images/vegetable.webp')
        setProducts(vegetables);
        setnewArrival(vegetablesNewarrival);
        setbestseller(vegetablesbestseller);
    };
    const showBeverages = () => {
        setImage('/images/bever.webp');
        setProducts(beverage);
        setnewArrival(beveragesNewarrival);
        setbestseller(beveragesbestseller);
    };
    const showFruits = () => {
        setImage('/images/fruits.webp');
        setProducts(fruit);
        setnewArrival(fruitsNewarrival);
        setbestseller(fruitsbestseller);
    };

    const showEssentials = () => {
        setImage('/images/essentials.webp')
        setProducts(essentials);
        setnewArrival(essentailsNewarrival);
        setbestseller(essentialsbestseller);
    };
    const loghome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    const [img, setImg] = useState("gro");
    var images = ['gro', 'gro1', 'gro2'];
    useEffect(() => {
        const interval = setInterval(() => {
            setImg((prev) => {
                const cidx = images.indexOf(prev);
                const nextidx = (cidx + 1) % images.length;
                return images[nextidx];
            });
        }, 3000);
        return () => {
            clearInterval(interval);
        }
    }, [images]);

    return (
        <div className="homepag">
            <div className="Header">
                <div className="logo-container">
                    <img className="logo" src="/images/logo.png" alt="Logo" onClick={loghome} />
                    <h1 className="store-name" >Refresh Daily</h1>
                </div>
                <div className="search-container">
                    <input type="search" placeholder="Enter product to search" className="search-input" />
                    <img src="/images/search.png" className="search-icon" alt="Search Icon" />
                </div>
                <div className="search-container"></div>
                <div className='prof'>
                    <img src="/images/lo.png" onClick={log} width="75px" height="75px" className='logbtn' />
                    <img src="/images/wish.png" height="55px" className='wish' onClick={Wishpage} />
                    <img src={searchIcon} className="cart" onClick={Cartpage} alt="Cart" />
                </div>
            </div>
            <hr />

            <div className='head' style={{ backgroundImage: `url(/images/${img}.webp)` }}>
                <br />
                <br />
                <h2>"Freshness you can taste, quality you can trust."</h2><br /><br /><br /> <br />
                <p>Welcome to <strong>RD Grocery Store</strong>, your one-stop destination for the freshest fruits, vegetables, and groceries.
                    We are committed to delivering top-quality products, sourced carefully to ensure you get the best for your home.
                    Whether you need farm-fresh produce, pantry essentials, or daily groceries, we’ve got you covered.</p>
                <br /><br /><br /><br />
                <h3>✨ Why Shop With Us? ✨</h3>
                <ul>
                    <li>✔ Fresh & Organic Produce</li>
                    <li>✔ Wide Range of Grocery Essentials</li>
                    <li>✔ Hassle-Free Shopping Experience</li>
                    <li>✔ Quality You Can Rely On</li>
                </ul><br /><br />

                <p>Shop with confidence and enjoy the convenience of fresh groceries delivered to your doorstep! 🛒🥦<br /> <br /><br /></p>
                <center>
                    <h1 className="scroll-down">
                        ⬇️✨ Scroll Down to Explore Freshness ✨⬇️
                    </h1>
                </center>

            </div>

            <center className="cen">
                <div className="dropdown">

                    <button className="dropbtn">Shop By Category</button>

                    <div className="dropdown-content">
                        <button onClick={showVegetables}>Vegetables</button>
                        <button onClick={showFruits}>Fruits</button>
                        <button onClick={showEssentials}>Essentials</button>
                        <button onClick={showBeverages}>Beverages</button>
                    </div>

                </div>
                <a href="#New" className='new-arrival'>New arrivals !</a>
                <a href="#Best" className='new-arrival'>Best Sellers !</a>

            </center>


            <br />
            <div>
                <img src={image} alt="img" width="100%" height="400px" />
                <div className="products-container">
                    {products.map((item, index) => (
                        <Homeimage
                            key={index}
                            name={item.name}
                            price={item.price}
                            image={item.img}
                        />
                    ))}  </div><br />
                <center><h1 id="New" className='new'><img src="/images/new.jpg" width="100%" /></h1><br /></center>
                <div className="products-best">
                    {newArrival.map((item, index) => (
                        <Homeimage
                            key={index}
                            name={item.name}
                            price={item.price}
                            image={item.img}
                        />
                    ))

                    }
                </div><br />
                <center><h1 id="Best" className='Best'><img src="/images/best.jpg" width="100%" /></h1><br /></center>
                <div className="products-best">
                    {bestseller.map((item, index) => (
                        <Homeimage
                            key={index}
                            name={item.name}
                            price={item.price}
                            image={item.img}
                        />
                    ))

                    }
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
                            <li className='a' onClick={policy}>Privacy Policy</li>
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



                <center>Copyright © 2024-2026 Supermarket Grocery Supplies Pvt Ltd</center><br />
            </div>
        </div>
    );
}
export default Home;