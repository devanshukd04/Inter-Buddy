import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import "./companies.css"
import TextareaAutosize from '@mui/material/TextareaAutosize';
import logo from '../../images/companies.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Grid, CircularProgress} from '@material-ui/core'
import { AiOutlineRight } from "react-icons/ai";
import Navbar from '../../components/navbar';

const Companies = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [pageNo,setPageNo] = useState(1);

    useEffect(()=>{
		getData();
	},[]);

    const getData = async(e) => {
        await axios.get('http://localhost:4000/company/')
            .then(response => {
                setData(response.data);
                console.log(data);
            })
            .catch(function (error){
                console.log(error);
            })
    }

    const firstEvent = (e) => {
		var bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
		if(bottom){
			let pg = pageNo + 1;
			setPageNo(pg);
			getData();
		}
	}

    return(
        !data.length ? <><Navbar/><CircularProgress className='circularProgress'/> </> :
        (<div>
            <>
            <Navbar/>
            <section class="container2">
                <div class="left-half">
                    <p className='header'>
                        Companies you are looking for!
                    </p>
                    <p className='text'>Find a list of all the companies whose interview experience have been added by our alumni. Hope you get to know more about the sepcific company and add your experience for the same in future ;)</p>
                    <img src={logo} className="img1" alt="logo" />
                </div>
                <div class="right-half">
                    <h1 className='text'>Have a new experience in a new Company?</h1>
                    <p className='componentAddd' onClick={function(){(localStorage.getItem('userInfo'))?navigate('/companyForm'):navigate('/login', {state: {page: 2}})}}>Add a new Company  +</p>
                    <div onScroll={firstEvent} className='listView'>
                        {data.map(item => {
                            return(
                                <div className='component'>
                                <div className='left-half-comp'>
                                    <p className='element'>{item.company_name}</p>
                                    <p className='component1'>{item.company_type}</p>
                                </div>
                                <div className='right-half-comp'>
                                    <AiOutlineRight className='arrow' onClick={function(){navigate('/companyDetails', { state : {id : item._id, name : item.company_name, img: item.selectedFile}})}}></AiOutlineRight>
                                </div>
        
                            </div>
                            )
                        })}
                    </div>

                </div>
            </section>
            </>
            {/* <button onClick={function(){navigate('/interviewExpForm', { state : "637bbe44443ce0a175ecb356"})}}> navigate</button> */}
        </div>)
    )
}

export default Companies