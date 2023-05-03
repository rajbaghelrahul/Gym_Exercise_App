import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({setUserName}) => {
  
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
 
  const notify = () => {
    toast("Login Successfully!")
    console.log("Login Successfully!");
  };
  const notify1 = () => {
    toast("Password is Incorrect!")
    console.log("Password is Incorrect!");
  };
  const notify2 = () => {
    toast("First Fill All Inputs!")
    console.log("First Put Input!");
  };
  const notify3 = () => {
    toast("Invalid User!")
    console.log("Invalid User!");
  };
  

  const login = () => {
    try {
      const { email, password } = user;
      if (email && password ) {
        // notify();
        axios.post('https://gymexercisesservices.onrender.com/login', user)
          .then(res => {
            console.log(res.data.message);
            if(res.data.message === "User logged In") {
              setUserName(res.data.user);
              // setData(true);
              window.localStorage.setItem("isLoggedIn", true);
              notify();
            } else if(res.data.message === "Password is Incorrect") {
              notify1();
            } else if(res.data.message === "Invalid User") {
              notify3();
            }
          })
      } else {
        notify2();
      }
      
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='login'>
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={handleChange} />
        <input type="password" name="password" value={user.password} placeholder='Enter your Password' onChange={handleChange} onKeyPress={(e) => {
          if(e.key === "Enter") {
            login();
          }
        }} />
        <div className='button' onClick={login}>Login</div>
        {/* <button onClick={notify}>Notify!</button> */}
        <ToastContainer />
        <div>or</div>
        <Link to='/register' className='logBtn'><div className='button'>Register</div></Link>
    </div>
  )
}

export default Login;

