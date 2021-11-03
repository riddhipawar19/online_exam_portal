import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './StudentLogin.css'
import bg from '../../bg.png';
import { useHistory } from 'react-router';
import axios from "axios"

function StudentLogin() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [status, setstatus] = useState()

    const history = useHistory()
    const state = {
        "username":username,
        "password":password
    }
    const handleLogin = () =>{
        axios.post("http://localhost:5000/student/validate_student",state)
        .then(result =>{
            setstatus(result.status)
        })

        if (status === 200) {
            alert("Successfully logged in!")
            history.push("/student_dashboard")
        }
        else{
            alert("Invalid Credentals!")
        }
        
    }
    return (
        <div className="student__login">
        <div className="student__login__data">
        <h2>Student's Login Page</h2>
            <TextField id="outlined-basic" value={username} onChange={e => setusername(e.target.value)} label="Enter username" variant="outlined" />
            <TextField id="outlined-basic" value={password} onChange={e => setpassword(e.target.value)} label="Enter password" variant="outlined" />
            <Button variant="contained" onClick={handleLogin}>Login</Button>
        </div>
        <img src={bg}></img>
        </div>
    )
}


export default StudentLogin
