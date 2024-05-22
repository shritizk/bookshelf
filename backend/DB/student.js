const mongoose = require('mongoose');
const { bookDB } = require('./books');
const { courseDB } = require('./course');
mongoose.connect('mongodb+srv://shritizkumar:1234@cluster0.3vv4wem.mongodb.net/bookshelf')


const student = new mongoose.Schema({
    student_id : Number,
    name : String , 
    courseassociated: {type : mongoose.Schema.Types.ObjectId , ref : courseDB},
    assign : {type : mongoose.Schema.Types.ObjectId , ref : bookDB }
    
})


const studentDB = new mongoose.model('student' , student)

module.exports = {
    studentDB
}