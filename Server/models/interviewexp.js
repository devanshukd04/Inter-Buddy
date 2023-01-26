import mongoose from "mongoose";

const Schema = mongoose.Schema;

let InterviewExp = new Schema({
    candidateName: {
        type: String,
        required: true
    },
    placementType: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    stipend: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    experience : {
        type: String,
        required: true
    },
    
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('InterviewExp', InterviewExp);