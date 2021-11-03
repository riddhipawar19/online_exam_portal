import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Login.css'
import bg from '../../bg.png';
import { useHistory } from 'react-router';
import axios from 'axios';

function Login() {

    const history = useHistory()

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [status, setstatus] = useState()

    const state = {
        "username": username,
        "password": password
    }

    const loginTeacher = () =>{
        console.log("hello");
        axios.post('http://localhost:5000/teacher/validate_login_info',state)
        .then(result =>{
            // setstatus(result.status);  
            setstatus(result.status);
        })
        if (status === 200) {
           history.push("/dashboard") 
           alert("Successfully logged in!")
        }
        else{
            alert("Invalid credentials!")
        }
    }

    return (
        <div className="login">
        <div className="login__data">
        <h2>Teacher's Login Page</h2>
            <TextField id="outlined-basic" onChange={e =>setusername(e.target.value)} label="Enter username" variant="outlined" />
            <TextField id="outlined-basic" type="password" onChange={e =>setpassword(e.target.value)} label="Enter password" variant="outlined" />
            <Button variant="contained" onClick={loginTeacher}>Login</Button>
            <p>Don't have an account ? <a href="/register">Register here</a></p>
        </div>
        <img src={bg}></img>
        </div>
    )
}


export default Login
