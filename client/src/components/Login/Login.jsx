import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = ({setUserName}) => {
  const [data, setData] = useState(false);
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

  // const { name, email, password, reEnterPassword } = user
  //       if( name && email && password && (password === reEnterPassword)){
  //           axios.post("http://localhost:3004/register", user)
  //           .then( res => {
  //               alert(res.data.message)
  //               if(res.data.message === "Successfully Registered, Please login now.") {
  //                   setData(true);
  //               }
  //               // console.log(res.data.message);
  //               // history.push("/login") 
  //           })
  //       } else {
  //           alert("invalid input")
  //       }
 
  const login = () => {
    try {
      const { email, password } = user;
      if (email && password ) {
        axios.post('http://localhost:3004/login', user)
          .then(res => {
            alert(res.data.message);
            if(res.data.message === "User logged In") {
              setUserName(res.data.user);
              setData(true);
              window.localStorage.setItem("isLoggedIn", true);
              // const userLocaly = localStorage.setItem("useName", JSON.stringify(res.data.user));
              // setUserName(userLocaly);
            }
          })
      } else {
        alert("Invalid Input");
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  if(data) {
    return <Navigate to={"/"} />
  }

  return (
    <div className='login'>
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={handleChange} />
        <input type="password" name="password" value={user.password} placeholder='Enter your Password' onChange={handleChange} />
        <div className='button' onClick={login}>Login</div>
        <div>or</div>
        <Link to='/register' className='logBtn'><div className='button'>Register</div></Link>
    </div>
  )
}

export default Login;

