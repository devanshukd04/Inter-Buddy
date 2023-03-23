import mongoose from 'mongoose';
import Company from '../models/company.js';
import InterviewExp from '../models/InterviewExp.js';


// read
export const getCompanies = async (req, res) =>{
    try{
        const companies = await Company.find();
        res.status(200).json(companies);
    }catch(e){
        res.status(404).json({message: e.message})
    }
}

// get a single company
export const getCompany =  async(req, res) => {
    try{
        const company = await Company.findById(req.params.id)
        res.status(200).json(company);
    }catch(e){
        res.status(404).json({message: e.message})
    }
}

// create
export const createCompany = async (req, res) => {
    
    const newCompany = Company(req.body);

    try{
        await newCompany.save();
        res.status(201).json(newCompany);
    }catch(e){
        res.status(404).json({message: e.message});
    }
}


// read
export const getInterviews = async (req, res) =>{
    try{
        const companies = await Company.findById(req.params.id);
        res.status(200).json(companies.company_interviews);
    }catch(e){
        res.status(404).json({message: e.message})
    }
}

// create
export const createInterviewExp = async (req, res) => {
    
    const newInterviewExp = InterviewExp(req.body);
    const company = await Company.findById(req.params.id);

    try{
        company.company_interviews.push(newInterviewExp);
        await Company.findByIdAndUpdate(req.params.id, {company_interviews: company.company_interviews}, {new:true});
        await newInterviewExp.save();
        console.log(newInterviewExp, company);
        return res.status(200).send({newInterviewExp, company});
    }catch(e){
        return res.status(404).json({message: e, id: req.params.id, body: req.body,company: company});
    }
}

// get a single company
export const getInterviewExp =  async(req, res) => {
    try{
        const interview = await InterviewExp.findById(req.params.iid)
        res.status(200).json(interview);
    }catch(e){
        res.status(404).json({message: e.message})
    }
}