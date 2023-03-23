import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import CompanyForm from './forms/company/company';
import InterviewExpForm from './forms/interview/interview';
import Companies from './pages/companies/companies';
import Interview from './pages/interview/interview';
import Company from './pages/company/company';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Home from './pages/home/home';
const cID = "637b8f60e3d8bec143ba284b"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Router>
      <Routes>
          <Route exact path='/' element = {<App/>}/>
          <Route exact path='/companyForm' element = {<><CompanyForm/></>}/>
          <Route exact path='/interviewExpForm' element = {<><InterviewExpForm/></>}/>
          <Route exact path='/companies' element = {<><Companies/></>}/>
          <Route exact path='/companyDetails' element = {<><Company/></>}/>
          <Route exact path='/interviewExperience' element = {<><Interview/></>}/>
          <Route exact path='/login' element = {<><Login/></>}/>
          <Route exact path='/signup' element = {<><SignUp/></>}/>
          <Route exact path='/home' element = {<><Home/></>}/>

      </Routes>
  </Router>
  

  </>
);

reportWebVitals();
