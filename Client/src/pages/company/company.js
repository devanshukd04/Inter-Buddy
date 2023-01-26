import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom";
import "./company.css"
import TextareaAutosize from '@mui/material/TextareaAutosize';
import logo from '../../logo.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Grid, CircularProgress} from '@material-ui/core'
import { AiOutlineRight } from "react-icons/ai";
import Navbar from '../../components/navbar';

const Company = () => {
    const {state} = useLocation();
    const {name} = state;
    const {id} = state;
    const {img} = state;
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [pageNo,setPageNo] = useState(1);
    console.log("State " + state);
    console.log(img);

    useEffect(()=>{
		getData();
	},[]);

    const getData = async(e) => {
        await axios.get(`http://localhost:4000/company/${id}/interviews`)
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
        !data.length ? 
        (<div>
            <>
            <Navbar/>
            <section class="container2">
                <div class="left-half">
                    <h1 className='header'>
                        {name}
                    </h1>
                    <p className='text'>If you work hard enough and refer to the experiences for {name} provided here, success is easy.</p>
                    <img src={img} className="imgC" alt="logo" />
                </div>
                <div class="right-half">
                    <h1 className='text'>Have a new interview experience?</h1>
                    <p className='componentAdd' onClick={function(){ localStorage.getItem('userInfo') ? navigate("/interviewExpForm", {state:{name: name, id: id, img: img}}) : navigate("/login", {state:{name: name, id: id, img: img, page: 3}})}}>Add a new Interview Experience  +</p>
                    <div onScroll={firstEvent} className='listView'>
                        <p className='text'>No interview experiences for this company</p>
                    </div>

                </div>
            </section>
            </>
            {/* <button onClick={function(){navigate('/interviewExpForm', { state : "637bbe44443ce0a175ecb356"})}}> navigate</button> */}
        </div>)
        :
        (<div>
            <>
            <Navbar/>

            <section class="container2">
                <div class="left-half">
                    <h1 className='header'>
                        {name}
                    </h1>
                    <p className='text'>If you work hard enough and refer to the experiences for {name} provided here, success is easy.</p>
                    <img src={img} className="imgC" alt="logo" />
                </div>
                <div class="right-half">
                    <h1 className='text'>Have a new interview experience?</h1>
                    <p className='componentAdd' onClick={function(){localStorage.getItem('userInfo') ? navigate("/interviewExpForm", {state:{name: name, id: id, img: img}}) : navigate("/login", {state:{name: name, id: id, img: img, page: 3}})}}>Add a new Interview Experience  +</p>
                    <div onScroll={firstEvent} className='listView'>
                        {data.map(item => {
                            return(
                                <div className='component'>
                                <div className='left-half-comp'>
                                    <p className='element'>{item.candidateName}</p>
                                    <p className='component1'>{item.placementType}</p>
                                </div>
                                <div className='right-half-comp'>
                                    <AiOutlineRight className='arrow' onClick={function(){navigate('/interviewExperience', { state : {item:item, name:name, img: img}})}}></AiOutlineRight>
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

export default Company