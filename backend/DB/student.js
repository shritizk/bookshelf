const mongoose = require('mongoose');
const { courseDB } = require('./course');
mongoose.connect('mongodb+srv://shritizkumar:1234@cluster0.3vv4wem.mongodb.net/bookshelf')


const student = new mongoose.Schema({
    studentid: Number , 
    name : String , 
    courseassociated: String,
    assign :{ type :  String  , default : false} 
    
})


const studentDB = new mongoose.model('students' , student)

module.exports = {
    studentDB
}