const mongoose = require('mongoose');
const { courseDB } = require('./course');
mongoose.connect('mongodb+srv://shritizkumar:1234@cluster0.3vv4wem.mongodb.net/bookshelf')


const student = new mongoose.Schema({
    _id : Number,
    name : String , 
    courseassociated: {type : mongoose.Schema.Types.ObjectId , ref : courseDB ,default : ''},
    assign : String || Boolean
    
})


const studentDB = new mongoose.model('student' , student)

module.exports = {
    studentDB
}