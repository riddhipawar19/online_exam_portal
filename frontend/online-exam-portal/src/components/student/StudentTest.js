import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './StudentTest.css'
import { useParams } from 'react-router'

function StudentTest() {

    const [test, settest] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/student/get_test_details${id}`)
        .then(result =>{
            // console.log(result.data);
            settest(result.data);
            console.log(result.data);
            // console.log(id);
        })
        .catch(err=>console.log(err))
    }, [])

    const total = test.length
    return (
        <div className="test">
            <div className="test__question__count">
                <h5>Total Questions</h5>
                <div className="total__count__chart">
                    {[...Array(total)].map((e,i) =>{
                        return <p id="qusetion__no">{i+1}</p>
                    })}
                </div>
            </div>
            <hr></hr>
            <div className="test__content">
            {test.map(t =>{
                return (
                    <div className="question__section">
            <div className="question__options">
                <div className="question">
                    <p>Que. {t.question}</p>
                    <p>1 marks</p>
                </div>
                <div className="options">
                <div className="options__top">
                    <p>A. {t.option_1}</p>
                    <p>B. {t.option_2}</p>
                </div>
                <div className="options__bottom">
                    <p>C. {t.option_3}</p>
                    <p>D. {t.option_4}</p>
                </div>
                <div className="btns">
                <Button variant="contained" >Confirm</Button>
                <Button variant="contained" >Clear choice</Button>
                </div>
                </div>
            </div>
            </div>
                )
            })}
            </div>
            </div>
    )
}

export default StudentTest
