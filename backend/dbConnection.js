const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/online_exam_portal"

const connectToDb = () =>{
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected to MongoDb");
    })
}

module.exports = connectToDb;