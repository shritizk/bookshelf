const mongoose = require('mongoose');
const { courseDB } = require('./course');

mongoose.connect('mongodb+srv://shritizkumar:1234@cluster0.3vv4wem.mongodb.net/bookshelf')


const bookSchema = new mongoose.Schema({
    name : String , 
    courseassociated: {type : mongoose.Schema.Types.ObjectId , ref : courseDB }

});

const bookDB = mongoose.model('books', bookSchema);

module.exports = {
    bookDB
}