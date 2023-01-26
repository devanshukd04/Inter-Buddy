import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import dotenv from 'dotenv';
const PORT = 4000;

import companyRoutes from './routers/company.js';
import interviewexpRoutes from './routers/interview.js';
import userRoutes from './routers/user.js'

// initializing the app
const app  = express();
// dotenv.config();

// cross origin resource sharing
app.use(cors());

// for images and posting data
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use('/company', companyRoutes);
app.use('/interviews', interviewexpRoutes);
app.use('/user', userRoutes)

app.get('/', (req, res)=>{
    res.send("Home Page");
})

mongoose.connect('mongodb+srv://tanishq777:tanishq777@cluster0.lzgyb.mongodb.net/WTCP?retryWrites=true&w=majority', { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});