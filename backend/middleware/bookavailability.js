// it will check if book that student asked for is available or not 

const  { bookDB }  = require( "../DB/books");
const { studentDB } = require("../DB/student");

// first it will check if student have a book or not 
// then it will check if book is there to be assigned or not 
// if all condition are met it will send next () else error
async function bookPresent(req,res,next){
    // { 
    //  studentid , bookname
    //} 

    const details = req.body;
    const studentData = studentDB.findOne({studentid : details.studentid});
    const bookData = bookDB.findOne({name : details.bookname});
 
    if((studentData.assign ) | (!bookData.count)){
        return res.json({
            mag : "can not assign you a book "
        }
        )
    }
    else{
       return  next()
    }  
}

async function bookInIt(req,res,next){
    
    const bookName = req.body;
    const result  = await bookDB.exists({
       name :  bookName.name
    })
    
    if(result){
       return  res.json(
            {
                msg : "book already exists"
            }
    )}
    else{
        next()
    }

   

}



module.exports = {
    bookInIt ,bookPresent
}