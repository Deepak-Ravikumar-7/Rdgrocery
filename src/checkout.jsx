import React from 'react'
import { useNavigate } from 'react-router-dom';
import './checkout.css'
export default function Checkout() {
    const navigate = useNavigate();
    const home = () => {
        navigate("/");
    }
    return (
        <div className='check'>
            <form>
                <table className='tbl'>
                    <tr>
                        <td>Enter your name</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Enter your Address
                        </td>
                    </tr>
                    <tr>
                        <textarea ></textarea>
                    </tr>
                    <tr>
                        <td>
                            Select Country
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select className="dropdown">
                                <option value="">India</option>
                                <option >Australia</option>
                                <option >New Zealand</option>
                                <option >China</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Enter your city name
                        </td>
                    </tr>
                    <tr>
                        <input type="text" />
                    </tr>
                    <tr>
                        <td>Enter your street name</td>
                    </tr>
                    <tr>
                        <input type="text" />
                    </tr>
                    <tr>
                        <button>Continue</button>
                    </tr>
                    <button onClick={home}>
                        back to home
                    </button>
                </table>
            </form>

        </div>
    )
}
