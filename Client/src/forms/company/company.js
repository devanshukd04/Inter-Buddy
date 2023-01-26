import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./company.css"
import logo from '../../images/newCompany.svg'
import FileBase from 'react-file-base64';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FadeTransform} from 'react-animation-components';

const CompanyForm = () => {

  const [company_name,setcompany_name]=useState("");
  const [company_type,setcompany_type]=useState("");  
  const [selectedFile,setselectedFile]=useState("");  
  const navigate = useNavigate();

  const createCompany = async(e) => {
    e.preventDefault();
    try{
        if(company_name === ""){
            toast.warn("Company's name is not entered",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
        }else if(company_type === ""){
            toast.warn("Company's type is not entered",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
        }else if(selectedFile === ""){
            toast.warn("You have to select logo of company",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
        }else{
            axios.post('http://localhost:4000/company/create', {
                company_name: company_name,
                company_type: company_type,
                selectedFile: selectedFile
            });
            toast.success(`Company ${company_name} created successfully!`, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 1000,})
            setTimeout(function(){navigate('/companies')}, 2500)

        }
        
    }catch(e){
        console.log(e);
        toast.error("Wrong Credentials",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});

    }
  }

  return (
    <div className="container">
      <FadeTransform
          in
          transformProps={{
              enterTransform: 'translateX(0px)',
              exitTransform: 'translateX(-100px)'
          }}
      ></FadeTransform>
      <div className="forms-container">
    

        <div className="signin-signup-company">
          <form action="#" className="sign-in-form" onSubmit={createCompany}>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="company_name" className='inputText' value={company_name} onChange={e=>setcompany_name(e.target.value)}  />
            </div>
            <br></br>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="company_type" value={company_type} onChange={e=>setcompany_type(e.target.value)}  />
            </div>
            <br></br>
            <br></br>
            <label color='#fff'></label>
            <h3 className="logoHead">Select Logo of your company</h3>
            <br></br>

            <FileBase
                    align="center"
                    type="file"
                    multiple={false}
                    className = "fileSubmit"
                    onDone={({base64}) => setselectedFile(base64)}
                />
                <br></br>
            <br></br>
            <input type="submit" value="Create Company" className="btn solid"   />
            </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Please add a new company in which you are working right now</h3>
            <br></br>

            <button className="btn transparent" id="sign-up-btn" onClick={function(){navigate("/companies")}}>
             Back To Companies
            </button>
          </div>
          <img src={logo} className="img1" alt="logo" />
        </div>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default CompanyForm