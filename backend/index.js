const express = require('express');
const bodyParser = require('body-parser');
const { studentRouter } = require('./routers/studenRouter');
const { bookRouter } = require('./routers/booksRouter');
const   { courseRouter } = require('./routers/course');
const app =express();
app.use(express.json())
app.use(bodyParser.json());
app.use('/student', studentRouter );
app.use('/book',bookRouter);
app.use('/course',courseRouter)
app.listen(3000 , ()=>{console.log("server online")})




