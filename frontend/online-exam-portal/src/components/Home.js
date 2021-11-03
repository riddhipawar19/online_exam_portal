import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router'
import './Home.css'

function Home() {

    const history = useHistory()
    const handleAdmin = () =>{
        history.push("/login")
    }

    const handleStudent = () =>{
        history.push("/student_login")
    }

    return (
        <div className="home">
            <div className="home__data">
              <h1>Online Examination Portal</h1>
              <div className="home__btns">
              <Button variant="contained" onClick={handleAdmin}>Teacher</Button>
              <Button variant="contained" onClick={handleStudent}>Student</Button>
              </div>
            </div>
        </div>
    )
}

export default Home
