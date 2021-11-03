import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import './AddNewStudent.css'

function AddNewStudent() {

    const [name, setname] = useState("")
    const [roll_no, setrollno] = useState("")
    const [email, setemail] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const studentInfo = {
        "name":name,
        "roll_no":roll_no,
        "email":email,
        "username":username,
        "password":password,
    }

    const addNewStudent = () => {
        axios.post("http://localhost:5000/teacher/add_new_student", studentInfo)
        setname("")
        setrollno("")
        setemail("")
        setusername("")
        setpassword("")

    }

    return (
        <div className="add__student">
        <form>
            <div className="student__info">
            {/* <h2>ADD NEW STUDENT</h2> */}
            <TextField id="outlined-basic" value={name} onChange={e =>setname(e.target.value)} label="Enter student name" variant="outlined" />
            <TextField id="outlined-basic" value={roll_no} onChange={e =>setrollno(e.target.value)} label="Enter roll no" variant="outlined" />
            <TextField id="outlined-basic" value={email} onChange={e =>setemail(e.target.value)} label="Enter email id" variant="outlined" />
            <TextField id="outlined-basic" value={username} onChange={e =>setusername(e.target.value)} label="Set username" variant="outlined" />
            <TextField id="outlined-basic" value={password} onChange={e =>setpassword(e.target.value)} label="Set password" variant="outlined" />
            <Button variant="contained" onClick={addNewStudent}>Add New Entry</Button>
            </div>
        </form>
        </div>
    )
}

export default AddNewStudent
