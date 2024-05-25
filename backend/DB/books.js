const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://shritizkumar:1234@cluster0.3vv4wem.mongodb.net/bookshelf')


const bookSchema = new mongoose.Schema({
    name : String , 
    courseassociated:  String  ,
    availability :  { type : Boolean , default : true},
    count : Number || Boolean
});

const bookDB = mongoose.model('books', bookSchema);

module.exports = {
    bookDB
}