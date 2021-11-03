const mongoose = require('mongoose');

const Test = mongoose.Schema({
    "test_title":{
        type: String
    },
    "question":{
        type: Array
    },
    "option_1":{
        type: Array
    },
    "option_2":{
        type:Array
    },
    "option_3":{
        type:[{}]
    },
    "option_4":{
        type:Array
    },
    "answer":{
        type:Array
    },
})

module.exports = mongoose.model("Test",Test)