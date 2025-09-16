import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleRegister = async (e) => {
      e.preventDefault();
      try {
        const result = await axios.post("http://localhost:3001/signup", { name, email, password });
  
        if (result.data === "Mail already Exist") {
          Swal.fire({
            icon: "error",
            title: "Registration Failed!",
            text: "Email already exists. Please use a different email.",
            confirmButtonColor: "#ff4d4d",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Registration Successful!",
            text: "You can now log in with your credentials.",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate('/login');
        }}catch (err) {
            Swal.fire({
              icon: "error",
              title: "Server Error!",
              text: "Something went wrong. Please try again later.",
              confirmButtonColor: "#ff4d4d",
            });
            console.error(err);
          }}

        const Backtohome =()=>{
            navigate('/');
        }
      
    return (
        <div className='loginpage'>
            <div className='log'>
                <form onSubmit={handleRegister}> 
                    <table className='table'>
                        <tbody>
                            <tr><th>Sign up Page</th></tr>
                            
                            <tr><td>Enter your Name</td></tr>
                            <tr>
                                <td>
                                    <input 
                                        type='text' 
                                        className='user' 
                                        placeholder='Enter user name' 
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} 
                                    />
                                </td>
                            </tr>

                            <tr><td>Enter your Email</td></tr>
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

                            <tr><td>Enter New Password</td></tr>
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
                                    <button className='login' type="submit">Sign Up</button>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <button className='backtohome' type="button" onClick={Backtohome}>Back To Home</button>
                                                                  </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}
