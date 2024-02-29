const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age:{
        type: String,
        require: true,
    },
    sex:{
        type: String,
        enum: ["Male", "Female"],
        required: true,
    }, 
    mobile:{
        type: String,
        required: true,
    },
    govtIdType:{
        type:String,
        enum: ["Aadhar", "Pan"],
        required: true,
    },
    govtIssueId: {
        type:String,
        required: true,
    },
    address: {
        type: String,
    },
    state:{
        type: String,
    },
    city:{
        type: String,
    },
    country:{
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
    }
})

module.exports = mongoose.model("User", userSchema);