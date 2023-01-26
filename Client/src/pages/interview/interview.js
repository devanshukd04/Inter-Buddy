import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom";
import "./interviews.css"
import TextareaAutosize from '@mui/material/TextareaAutosize';
import logo from '../../images/interview.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/navbar';

const Interview = () => {
    const {state} = useLocation()
    const {item} = state;
    const {name} = state;
    console.log(state);
    return(
        <div>
            <>
            <Navbar/>
            <section class="container2">
                <div class="left-half">
                    <h1 className='header1'>
                        {item.candidateName}
                    </h1>
                    <p className='component11'>{item.year}</p>
                    <p className='component11'>{item.placementType}</p>
                    <p className='component11'>{item.stipend}R per month</p>
                    <p className='component11'>{item.role}</p>
                    <p className='component11'>{name}</p>
                    <img src={logo} className="img11" alt="logo" />
                </div>
                <div class="right-half">
                    <h1 className='experience'>{item.experience}</h1>

                </div>
            </section>
            </>
            {/* <button onClick={function(){navigate('/interviewExpForm', { state : "637bbe44443ce0a175ecb356"})}}> navigate</button> */}
        </div>
    )
}

export default Interview