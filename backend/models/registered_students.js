const mongoose = require('mongoose');

const StudentInfo = mongoose.Schema({
    "name":{
        type: String
    },
    "roll_no":{
        type: String
    },
    "email":{
        type: String
    },
    "username":{
        type:String
    },
    "password":{
        type:String
    },
})

module.exports = mongoose.model("Student_Information",StudentInfo)