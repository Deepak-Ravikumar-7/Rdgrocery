import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [islog, setIsLog] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setIsLog(true);
        }
    }, []);

    const log = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result.data);
                if (result.data.status === "Success") {
                    alert('Log in successful');
                    localStorage.setItem("user", result.data.email);
                    setIsLog(true);
                    navigate('/');
                } else if (result.data.status === "Incorrect password") {
                    alert("Wrong password");
                } else {
                    alert("Wrong email");
                }
            })
            .catch(err => console.log(err));
    };

    const register = () => {
        navigate('/register');
    };

    const logout = () => {
        localStorage.removeItem("user");
        setIsLog(false);
        alert("Logged out successfully!");
        navigate('/login');
    };

    return (
        <div className='loginpage'>
            <div className='log'>
                {!islog ? (
                    <form onSubmit={log}>
                        <table className='table'>
                            <tbody>
                                <tr className='thead'>
                                    <th>Login Page</th>
                                </tr>
                                <tr>
                                    <td>User email</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type='email' className='user' placeholder='Enter email-id' required
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type='password' className='user' placeholder='Enter password' required
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className='login' type="submit">Log in</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className='backtohome' type="button" onClick={() => navigate('/')}>Back To Home</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Don't have an account? <span className='register' onClick={register}>Register</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                ) : (
                    <div>
                        <h2>Welcome, {localStorage.getItem("user")}!</h2>
                        <button className='backtohome' onClick={logout}>Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
}
