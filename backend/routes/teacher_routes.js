const express = require('express');
const router = express.Router();
const TeacherLogin = require('../models/teacher_login')
const StudentInfo = require('../models/registered_students')
const Test = require('../models/uploaded_tests')

router.post('/register_teacher',(req,res)=>{
    res.send(req.body)
    teacher_login = TeacherLogin(req.body)
    teacher_login.save().then(()=>{
        console.log("Data saved..");
    })
})

router.post('/add_new_student',(req,res)=>{
    res.send(req.body)
    student_info = StudentInfo(req.body)
    student_info.save().then(()=>{
        console.log("Data saved..");
    })
})

router.post('/add_new_test',(req,res)=>{
    res.send(req.body)
    test = Test(req.body)
    test.save().then(()=>{
        console.log("Data saved..");
    })
})

router.get('/get_registered_students',(req,res)=>{
    StudentInfo.find()
    .then((result)=>{
        res.send(result)
    })
})

router.post('/validate_login_info',(req,res)=>{
    TeacherLogin.findOne({username: req.body.username,password: req.body.password}).then((result)=>{
        res.send(result)
    })
})


router.post('/register_teacher',(req,res)=>{
    register_teacher = TeacherLogin(req.body)
    register_teacher.save().then(() =>{
        res.statusCode(200)
    })
    // res.send(req.body)
})

module.exports = router;