import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setIsLoggedIn(true);
            setUsername(storedUser);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result.data)
                if (result.data.status == "Success") {
                    Swal.fire({
                        icon: "success",
                        title: "Login Successful!",
                        text: "Welcome back!",
                        confirmButtonColor: "#3085d6",
                    }).then(() => {
                        localStorage.setItem("user", JSON.stringify({ email, name: result.data.name, _id: result.data._id }))
                        setIsLoggedIn(true);
                        navigate('/');
                        window.location.reload();
                    })

                }

                else {
                    Swal.fire({
                        icon: "error",
                        title: "Login Failed",
                        text: result.data,
                        confirmButtonColor: "#d33",
                    });
                }
            }
            )
            .catch(err => console.log(err))
    };


    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        setUsername("");
        alert("Logged out successfully!");
        navigate('/login');
    };

    return (
        <div className='loginpage'>
            <div className='log'>
                {!isLoggedIn ? (
                    <form onSubmit={handleLogin}>
                        <table className='table'>
                            <tbody>
                                <tr className='thead'>
                                    <th>Login Page</th>
                                </tr>
                                <tr>
                                    <td>User Email</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type='email'
                                            className='user'
                                            placeholder='Enter email-id'
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type='password'
                                            className='user'
                                            placeholder='Enter password'
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className='login' type="submit">Log in</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className='backtohome' type="button" onClick={() => navigate('/')}>
                                            Back To Home
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Don't have an account? <span className='register' onClick={() => navigate('/register')}>Register</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                ) : (
                    <div>
                        <h2>Welcome, {username.name}!</h2>
                        <button className='backtohome' onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
}
