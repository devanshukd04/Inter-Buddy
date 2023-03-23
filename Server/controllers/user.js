import mongoose from 'mongoose';
import User from '../models/user.js';

// read
export const login = async (req, res) =>{
    const {email, password} = req.body;
    // console.log(username);
    try {

        const user = await User.findOne({email:email});
        console.log(email + " " + password);
        console.log(user);

        if(!user){
            console.log("NO such user");
            return res.status(402).json("No such user exists")
        }

        console.log(user);
        if(req.body.password != user.password)
        { 
            console.log("Invalid password");
            return res.status(402).json("Invalid password")
        }
       console.log("Valid password");
       res.status(200).json(user);
    } catch (error) {
        res.status(501).json(error)
       console.log(error);
    }
}

// registration
export const registration = async (req, res) => {
    
    const {username,email,password} = req.body;

    if(!username || !email || !password)
    {
        return res.status(401).json("Please enter all  field");
    } 
    const userExist = await User.findOne({username:username});
    
    const emailExist = await User.findOne({email:email})

    try {
         if(userExist)
        {
            return res.status(400).json("Username Exists");
        }
    else  if(emailExist)
    {
        return res.status(400).json("Email Exists");
    }
  
        // const salt = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            username:username,
            email:email,
            password:password
        })

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:error.message});
           
    }
}