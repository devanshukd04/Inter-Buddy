import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom";
import "./signup.css"
import TextareaAutosize from '@mui/material/TextareaAutosize';
// import logo from '../../images/SignUp.svg'
import logo from '../../images/login.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const [username,setusername]=useState("");
    const [email,setemail]=useState("");  
    const [password,setpassword]=useState("");  
    const navigate = useNavigate();

    const createUser = async(e) => {
        e.preventDefault();

        try{
            if(username === ""){
                toast.warn("User's name is not entered",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
            }else if(email === ""){
                toast.warn("Email is not entered",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
            }else if(password === ""){
                toast.warn("Password",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
            }else{
                const res = await axios.post('http://localhost:4000/user/register', {
                    username: username,
                    email: email,
                    password: password
                });
                console.log(res);
                toast.success(`Company ${username} created successfully!`, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 1000,})
                setTimeout(function(){navigate('/login', {state: {page:1}})}, 2500)
    
            }
            
        }catch(e){
            console.log(e);
            toast.error("Wrong Credentials",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});

        }
      }

    return(
<div className='virtualBody'>
                <div class="containerLogin" id="containerLogin">

                    <div class="form-containerLogin sign-in-containerLogin">
                        <form className='loginForm' action="#" onSubmit={createUser}>
                            <h1 className='head'>Sign Up</h1>
                            <br></br>
                            <input className='newinput' type="text" placeholder="User Name" value={username} onChange={e=>setusername(e.target.value)}/>
                            <input className='newinput' type="email" placeholder="Email" value={email} onChange={e=>setemail(e.target.value)}/>
                            <input className='newinput' type="password" placeholder="Password" value={password} onChange={e=>setpassword(e.target.value)}/>
                            <button className='buttonL' type='submit'>Sign Up</button>
                        </form>
                    </div>
                    <div class="overlay-containerLogin">
                        <div class="overlay">

                            <div class="overlay-panel overlay-right">
                            <img src={logo} className="imglogin" alt="logo" />

                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className='buttonLL' id="signUp" onClick={function(){navigate("/login")}}>Sign In</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <ToastContainer/>
        </div>

    )
}

export default SignUp