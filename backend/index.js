const express = require('express');
const { studentRouter } = require('./routers/studenRouter');
const { bookRouter } = require('./routers/booksRouter');
const app =express();
app.use(express.json())

app.router('student/', studentRouter )
app.router('book/',bookRouter)

app.listen(3000 , ()=>{console.log("server online")})




