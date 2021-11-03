const express = require('express');
const router = express.Router();
const Test = require('../models/uploaded_tests')
const StudentInfo = require("../models/registered_students")

router.get('/get_uploaded_tests',(req,res)=>{
    Test.find()
    .then((result)=>{
        res.send(result)
    })
})

router.get ('/get_test_details:id',(req,res) => {
    Test.findOne({_id: req.params.id})
    .then((result)=> {
        res.send([result])
    })
})

router.post ('/validate_student',(req,res) => {
    StudentInfo.findOne({username:req.body.username,password:req.body.password})
    .then((result)=> {
        res.send(result)
    })
})

module.exports = router;
