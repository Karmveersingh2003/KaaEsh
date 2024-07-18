import React from 'react'
import "./login.css"
import { FaUser ,FaLock} from "react-icons/fa";
import {useState} from 'react'; 
import Navbar from "../navbar/Navbar"
function Login() {
        const [user,setUser]=useState("");
        const [password,setPassword]=useState("");
        const [userErr,setUserErr]=useState(false);
        const [passErr,setPassErr]=useState(false);
 
      
      
      function loginHandle(e)
        {
            if(user.length<3 || password.length<3)
            {
                alert("type correct values")
            }
            else
            {
                alert("all good :)")
            }
      
            e.preventDefault()
        }
        function userHandler(e){
            let item=e.target.value;
            if(item.length<3 )
            {
               setUserErr(true)
            }
            else
            {
                setUserErr(false)
            }
            setUser(item)
        }
        function passwordHandler(e){
            let item=e.target.value;
            if(item.length<3 )
            {
               setPassErr(true)
            }
            else
            {
                setPassErr(false)
            }
            setPassword(item)  }

          
  return (
<>


<Navbar/>
<div id='login-sing'>
            <div className='wrapperr'>
                <form action="">
                    <h1>Login</h1>
                    <form onSubmit={loginHandle}>
                    <div className="input-box">
                        
                        <input type="text" placeholder='Username' onChange={userHandler} required />{userErr?<span>User Not Valid</span>:""}
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}

                        <FaLock className="icon" />

                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="/signup">Register</a></p>
                    </div>
                </form>
                </form>
            </div>
            </div>

</> 
 )
}

export default Login