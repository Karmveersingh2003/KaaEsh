import React from 'react'
import "./signup.css"
import { FaUser ,FaLock} from "react-icons/fa";
import {useState} from 'react'; 
import Navbar from "../navbar/Navbar"
function Signup() {
   
  return (
<>

<Navbar/>

<div id='login-sing'>
            <div className='wrapperr'>
                <form action="">
                    <h1>Sign-up</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Enter your Name' required />
                        
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Enter your Username' required />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email'   />
                        {/* <button onClick={emailValidation}>Check</button> */}
                       

                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className="icon" />

                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Confirm Password' required />
                       

                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Have an account? <a href="/Login-signup">Login</a></p>
                    </div>
                </form>
            </div>
            </div>

</> 
 )
}

export default Signup