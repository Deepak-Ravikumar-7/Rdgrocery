import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const Backtohome = () => {
        navigate('/');
    };

    const signup = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/signup', { name, email, password })
            .then(res => {
                console.log("Signup Response:", res.data);
                if (res.data.status === "Same mail") {
                    alert("Email already exists. Please use a different email.");
                } else if (res.data.status === "Success") {
                    alert("Signup successful. Please login to continue.");
                    navigate('/login');  // Navigate to login page without auto-login
                } else {
                    alert("Signup failed. Please try again.");
                }
            })
            .catch(err => {
                console.error("Signup Error:", err);
                alert("An error occurred. Please try again later.");
            });
    };

    return (
        <div className='loginpage'>
            <div className='log'>
                <form onSubmit={signup}>
                    <table className='table'>
                        <tbody>
                            <tr><th>Sign up Page</th></tr>
                            <tr><td>Enter your Name</td></tr>
                            <tr>
                                <td>
                                    <input type='text' className='user' placeholder='Enter user name' required
                                        onChange={(e) => setName(e.target.value)} />
                                </td>
                            </tr>
                            <tr><td>Enter your Email</td></tr>
                            <tr>
                                <td>
                                    <input type='email' className='user' placeholder='Enter email-id' required
                                        onChange={(e) => setEmail(e.target.value)} />
                                </td>
                            </tr>
                            <tr><td>Enter New Password</td></tr>
                            <tr>
                                <td>
                                    <input type='password' className='user' placeholder='Enter password' required
                                        onChange={(e) => setPassword(e.target.value)} />
                                </td>
                            </tr>
                            <tr><td><button className='login' type="submit">Sign Up</button></td></tr>
                            <tr><td><button className='backtohome' type="button" onClick={Backtohome}>Back To Home</button></td></tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}  
