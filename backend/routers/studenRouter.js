const { Router } = require("express");
const router = Router();
const { studentDB } = require("../DB/student");
const { courseDB } = require("../DB/course");
const { studentChecker, assighChecker, falseassighChecker } = require("../middleware/studentChecker");
const { availability } = require("../middleware/bookavailability");
const { bookDB } = require("../DB/books");

// ADD student 

router.post("/registerStudent" ,async function(req,res){
    
    
    try{const details  = req.body;
    const courseId = courseDB.findOne({name : details.course});
    await studentDB.create({
        _id : details.studentId , 
        name : details.studentName , 
        courseassociated :  courseId._id , 
        assign : false
    }).then(()=>{
        res.json({
            msg:"student data inserted"
        })
    })}catch{
        res.json({
            msg:"something went wrong"
        })
    }

   
})


// assigh student a book

router.put('/assign',availability,assighChecker,async function(req,res){
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

router.post('/submit',falseassighChecker,async function(req,res){
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
    studentRouter : router
}




