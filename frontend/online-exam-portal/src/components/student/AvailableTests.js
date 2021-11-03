import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './AvailableTests.css'
import axios from 'axios'

function AvailableTests() {

    const [testTitle, settestTitle] = useState([])
    // const [id, setid] = useState("")

    useEffect(() => {
        axios.get("http://localhost:5000/student/get_uploaded_tests")
        .then(result =>{
            console.log(result.data);
            settestTitle(result.data)
        })
    }, [])

    const history = useHistory()
    const handleClick = (id) => {
        history.push(`/student_test${id}`)
    }
    return (
        <div className="available__tests">
        {testTitle.map(test =>{
            return <div className="available__tests__title">
                <h4>{test.test_title}</h4>
                <Button variant="contained" onClick={e =>{handleClick(test._id)}}>Attempt Now</Button>
            </div>
        })}
        </div>
    )
}

export default AvailableTests
