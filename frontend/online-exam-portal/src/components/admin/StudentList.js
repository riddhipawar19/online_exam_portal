import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './StudentList.css'
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { useEffect, useState } from 'react'

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   {student}
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function StudentList() {

  const [student, setStudent] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/teacher/get_registered_students")
        .then(result =>{
            console.log(result.data);
            setStudent(result.data)
        })
    }, [])

  return (
    <TableContainer component={Paper} className="student__list">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="table__header">
            <TableCell className="table__cell">Student Name</TableCell>
            <TableCell className="table__cell">Roll No</TableCell>
            <TableCell className="table__cell">Email ID</TableCell>
            <TableCell className="table__cell">Username</TableCell>
            <TableCell className="table__cell">Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((s) => (
            <TableRow>
              <TableCell className="table__cell_item">{s.name}</TableCell>  
              <TableCell className="table__cell_item">{s.roll_no}</TableCell> 
              <TableCell className="table__cell_item">{s.email}</TableCell> 
              <TableCell className="table__cell_item">{s.username}</TableCell> 
              <TableCell className="table__cell_item">{s.password}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

