import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import './TestSection.css'

function TestSection() {

    const [testtitle, settesttitle] = useState("")
    const [question, setquestion] = useState([])
    // const question = []
    const [option1, setoption1] = useState([])
    const [option2, setoption2] = useState([])
    const [option3, setoption3] = useState([])
    const [option4, setoption4] = useState([])
    const [answer, setanswer] = useState([])

    const addNewQuestion = () => {
        setquestion("")
        setoption1("")
        setoption2("")
        setoption3("")
        setoption4("")
        setanswer("")
    }

    const state = {
        "test_title": testtitle,
        "question": question,
        "option_1": option1,
        "option_2": option2,
        "option_3": option3,
        "option_4": option4,
        "answer": answer,
    }
    const uploadTest = () => {
        // axios.post("http://localhost:5000/teacher/add_new_test",state)
        console.log(state);
        settesttitle("")
        setquestion("")
        setoption1("")
        setoption2("")
        setoption3("")
        setoption4("")
        setanswer("")
    }

    return (
        <div className="test__section">
            <div className="test__section__data">
            <TextField id="outlined-basic" value={testtitle} onChange={e =>settesttitle(e.target.value)} label="Enter test title" variant="outlined" />
            <TextField id="outlined-basic" value={question} onChange={e =>setquestion(e.target.value)} label="Enter question" variant="outlined" />
            <TextField id="outlined-basic" value={option1} onChange={e =>setoption1(e.target.value)} label="Enter option 1" variant="outlined" />
            <TextField id="outlined-basic" value={option2} onChange={e =>setoption2(e.target.value)} label="Enter option 2" variant="outlined" />
            <TextField id="outlined-basic" value={option3} onChange={e =>setoption3(e.target.value)} label="Enter option 3" variant="outlined" />
            <TextField id="outlined-basic" value={option4} onChange={e =>setoption4(e.target.value)} label="Enter option 4" variant="outlined" />
            <TextField id="outlined-basic" value={answer} onChange={e =>setanswer(e.target.value)} label="Enter answer" variant="outlined" />
            <Button variant="contained" onClick={addNewQuestion}>Add New Question</Button>
            <Button variant="contained" onClick={uploadTest}>Upload Test</Button>
            </div>
        </div>
    )
}

export default TestSection
