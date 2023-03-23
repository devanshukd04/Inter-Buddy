import mongoose from 'mongoose';
import InterviewExp from '../models/InterviewExp.js';

// read
export const getInterviewExp = async (req, res) =>{
    try{
        const companies = await InterviewExp.find();
        res.status(200).json(companies);
    }catch(e){
        res.status(404).json({message: e.message})
    }
}

// create
export const createInterviewExp = async (req, res) => {
    
    const newInterviewExp = InterviewExp(req.body);

    try{
        await newInterviewExp.save();
        res.status(201).json(newInterviewExp);
    }catch(e){
        res.status(404).json({message: e.message});
    }
}