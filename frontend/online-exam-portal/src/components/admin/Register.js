import React, { useState } from 'react'
import './Register.css'
import { Button, TextField } from '@mui/material'
import bg from '../../bg.png';
import { useHistory } from 'react-router';
import axios from 'axios'

function Register() {

    const history = useHistory();

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")
    const [status, setstatus] = useState()

    const state = {
        "username": username,
        "password": password
    }

    const registerTeacher = () =>{
        if (password === cpassword) {
            axios.post('http://localhost:5000/teacher/register_teacher',state)
            .then(result =>{
                setstatus(result.status);  
            })
        }
        if (status === 200) {
            history.push('/login')
        }
        else{
            alert("Please check your password again!")
        }
    }

    return (
        <div className="register">
        <div className="register__data">
            <TextField id="outlined-basic" onChange={e =>setusername(e.target.value)} label="Enter username" variant="outlined" />
            <TextField id="outlined-basic" type="password" onChange={e =>setpassword(e.target.value)} label="Enter password" variant="outlined" />
            <TextField id="outlined-basic" type="password" onChange={e =>setcpassword(e.target.value)} label="Confirm password" variant="outlined" />
            <Button variant="contained" onClick={registerTeacher}>Register</Button>
        </div>
        <img src={bg}></img>
        </div>
    )
}

export default Register
