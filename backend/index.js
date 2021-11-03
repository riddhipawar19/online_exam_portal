const express = require('express');
const connectToDb = require('./dbConnection');
const cors = require('cors')

const app = express();
const PORT = 5000;

connectToDb();

app.use(express.json());
app.use(cors())

app.use("/teacher",require('./routes/teacher_routes'));
app.use("/student",require('./routes/student_routes'));

app.listen(PORT, ()=>{
    console.log(`Connected at ${PORT}`);
})