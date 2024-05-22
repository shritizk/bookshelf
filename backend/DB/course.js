const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shritizkumar:1234@cluster0.3vv4wem.mongodb.net/bookshelf');

const courseSchema = new mongoose.Schema(
    {
        name : String
    
    }
);

const courseDB = mongoose.model('course',courseSchema);

console.log('done')

module.exports = {
    courseDB 
}

