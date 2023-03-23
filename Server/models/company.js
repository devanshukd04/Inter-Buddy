import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Company = new Schema({
    company_name: {
        type: String,
        required: true
    },
    company_type: {
        type: String,
        required: true
    },
    company_interviews: {
        type: Array
    },
    selectedFile: String,
});

export default mongoose.model('Company', Company);