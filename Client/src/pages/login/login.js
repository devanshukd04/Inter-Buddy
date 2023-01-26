import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom";
import "./login.css"
import TextareaAutosize from '@mui/material/TextareaAutosize';
import logo from '../../images/login.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");  
    const navigate = useNavigate();

    const {state} = useLocation()

    const validNavigate = () => {
        const {page} = state;
        if(page == 1){
            navigate("/")
        }
        if(page == 2){
            navigate("/companyForm")
        }
        if(page == 3){
            navigate("/interviewExpForm", {state : {name: state.name, id: state.id, img: state.img}})
        }
        

    }

    const validate = async(e) => {
        e.preventDefault();

        try{
            if(email === ""){
                toast.warn("User's email is not entered",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
            }else if(password === ""){
                toast.warn("Password not entered",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
            }else{
                const res = await axios.post('http://localhost:4000/user/login', {
                    email: email,
                    password: password
                });
                console.log(res);
                localStorage.setItem("userInfo",JSON.stringify(res))
                toast.success(` ${email} verified successfully!`, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 1000,})
                setTimeout(validNavigate, 2500)
    
            }
            
        }catch(e){
            console.log(email+" "+password);
            console.log(e.response.data);
            if(e.response.data == "No such user exists"){
                toast.error("Wrong Credentials",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
            }else if(e.response.data == "Invalid password"){
                toast.error("Wrong Credentials",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
            }
        }
      }

    return(
        <div className='virtualBody'>
                <div class="containerLogin" id="containerLogin">

                    <div class="form-containerLogin sign-in-containerLogin">
                        <form className='loginForm' action="#">
                            <h1 className='head'>Sign in</h1>
                            <br></br>
                            <input className='newinput' type="text" placeholder="Email" value={email} onChange={e=>setemail(e.target.value)}/>
                            <input className='newinput' type="password" placeholder="Password" value={password} onChange={e=>setpassword(e.target.value)}/>
                            <button className='buttonL' onClick={validate}>Sign In</button>
                        </form>
                    </div>
                    <div class="overlay-containerLogin">
                        <div class="overlay">

                            <div class="overlay-panel overlay-right">
                            <img src={logo} className="imglogin" alt="logo" />

                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className='buttonLL' id="signUp" onClick={function(){navigate("/signup")}}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <ToastContainer/>
        </div>

    )
}

export default Login