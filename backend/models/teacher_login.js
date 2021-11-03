const mongoose = require('mongoose');

const TeacherLogin = mongoose.Schema({
    "username":{
        type: String
    },
    "password":{
        type:String
    },
})

module.exports = mongoose.model("Teacher_Login",TeacherLogin)