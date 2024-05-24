const { Router } = require("express");
const { studentDB } = require("../DB/student");
const { courseDB } = require("../DB/course");
const { studentChecker, assighChecker, falseassighChecker } = require("../middleware/studentChecker");
const { availability } = require("../middleware/bookavailability");
const { bookDB } = require("../DB/books");

// ADD student 

Router.post("/registerStudent", studentChecker ,async function(req,res){
    const {id , name , course }  = req.body.id;
    const course_id = courseDB.findOne({
        course
    })
    
    
    const  newData = await new studentDB({
        _id : id,
        name : name , 
        courseassociated : course_id._id,
        assign: false
    })
    newData.save()

})


// assigh student a book

Router.put('/assign',availability,assighChecker,async function(req,res){
    try{
        const {
            studentid , bookId
        } = req.body;
       
        // updateing student and book DB 
        const studentDetails = await studentDB.updateOne({
            _id : studentid
            },
            {
                assign : bookId
            })  
        
        const bookDetails = await bookDB.updateOne({
                _id : bookId
                },
                {
                    count : count  - 1
                })    
        await studentDetails.save()  &&  await  bookDetails.save()

        
        
        res.status(200).json({
    
            msg:"book assigned"
        })
    }catch{
        res.status(402).json({
    
            msg:"somethign went wrong"
        })
    }

})

// submit book

Router.post('/submit',falseassighChecker,async function(req,res){
   try{
    const { studentId ,  bookId} = req.body;
    const studentDetails = studentDB.updateOne({
        _id : studentId 
    },
    {
        assign : false
    })

    const bookDetails = bookDB.updateOne({
        _id : bookId
    },{
        count : count + 1
    })

    await studentDetails.save() &&  await bookDetails.save() // this syntax might not work

    res.status(200).json({
        msg:"submited"
    })
   }catch{
    res.json({
        msg:"something went wrong "
    })
   }

})

module.exports = {
    studentRouter : Router
}




