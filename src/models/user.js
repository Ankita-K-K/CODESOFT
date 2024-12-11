const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailId:{
        type: String
    },
    password:{
        type: String
    },
    age:{
        type: Number
    },
    gender:{
        type: String
    },
    address: {
        type: [String]
    },
    phoneNo:{
        type: String
    }
});

module.exports = mongoose.model("users", userSchema);