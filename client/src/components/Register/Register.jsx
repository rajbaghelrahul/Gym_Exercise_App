import React, { useState } from "react"
import "./Register.css"
import axios from "axios"
import { Link, Navigate } from "react-router-dom"

const Register = () => {

    // const history = useHistory();
    
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })
    const [data, setData] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value // this value comes from value of name in input tag dynamically and store in state object if value of name in input so it will not store but it will reflect in console.
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("https://gymexercisesservices.onrender.com/register", user)
            .then( res => {
                alert(res.data.message)
                if(res.data.message === "Successfully Registered, Please login now.") {
                    setData(true);
                }
                // console.log(res.data.message);
                // history.push("/login") 
            })
        } else {
            alert("invalid input")
        }
        
    }

    if (data) {
        return <Navigate to={"/login"} />;
    }
    
    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            {/* <div className="button" >Register</div> */}
            <div className="button" onClick ={register} >Register</div>
            <div>or</div> 
            <Link to='/' className="regBtn" ><div className="button">Login</div></Link>
            {/* <div className="button" onClick={() => history.push("/login")}>Login</div> */}
        </div>
    )
}

export default Register;