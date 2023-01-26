import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom";
import "./interview.css"
import TextareaAutosize from '@mui/material/TextareaAutosize';
import logo from '../../images/newInterview.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InterviewExpForm = () => {

  const [candidateName,setcandidateName]=useState("");
  const [placementType,setplacementType]=useState("");
  const [year,setyear]=useState("");
  const [stipend,setstipend]=useState("");
  const [role,setrole]=useState("");
  const [experience,setexperience]=useState("");
  const navigate = useNavigate();

  // setcandidateName(localStorage.getItem('userInfo').)
  const dat = JSON.parse(localStorage.getItem('userInfo'))
  console.log(dat.data.username)

  // setcandidateName(dat.data.username)

  const {state} = useLocation();
  console.log(state);

  const styles = {
    width: '300px',
    innerHeight: "200px",
  }

  const createInterview = async(e) => {
    e.preventDefault();
    try{
        // if(candidateName === ""){
        //     toast.warn("Candidate Name is not entered",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
        // }else 
        if(placementType === ""){
            toast.warn("Company's type is not entered",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
        }else if(year === ""){
          toast.warn("Year of internship is not entered",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
        }else if(stipend.toString === ""){
          toast.warn("Stipend is not entered",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
        }else if(role === ""){
          toast.warn("Role is not entered",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
        }else if(experience === ""){
          toast.warn("Experience is not entered",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
        }
        else{
            await axios.post(`http://localhost:4000/company/${state.id}/createInterviewExperience`, {
                candidateName: dat.data.username,
                placementType: placementType,
                year: year,
                stipend: stipend,
                role: role,
                experience: experience
            });
            toast.success(`New interview experience created successfully!`, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 1000,})
            setTimeout(function(){navigate('/companyDetails', {state: {id: state.id, name: state.name, img: state.img}})}, 2500)
        }
    }catch(e){
      toast.error("Wrong Credentials",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});

        console.log(e);
    }
  }

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={createInterview}>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="placementType" value={placementType} onChange={e=>setplacementType(e.target.value)}  />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="year" className='inputText' value={year} onChange={e=>setyear(e.target.value)}  />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="number" placeholder="stipend" className='inputText' value={stipend} onChange={e=>setstipend(e.target.value)}  />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="role" className='inputText' value={role} onChange={e=>setrole(e.target.value)}  />
            </div>
            <div className="input-fieldta">
              <TextareaAutosize
                className='input-fieldta'
                style={styles}
                placeholder='   experience'
                onChange={e=>setexperience(e.target.value)}
                value={experience}
                maxLength={1000}
                maxRows={6}
              />
            </div>
            <br></br>
            <br></br>
            <input type="submit" value="Create Experience" className="btn solid"   />
            </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h1>Please add you experience for {state.name}</h1>
            <br></br>
            <button className="btn transparent" id="sign-up-btn" onClick={function(){navigate("/companies", {state: {id: state.id, name: state.name, img: state.img}})}}>
             Back to Companies
            </button>
          </div>
          <img src={logo} className="img1" alt="logo" />
        </div>
        <ToastContainer/>
      </div>
    </div>
  )
 
}

export default InterviewExpForm