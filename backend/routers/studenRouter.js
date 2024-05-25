const { Router } = require("express");
const router = Router();
const { studentDB } = require("../DB/student");
const { courseDB } = require("../DB/course");
const {  falseassighChecker, assighChecker, studentUniqueFinder, studentChecker } = require("../middleware/studentChecker");
const { availability, bookPresent, bookInIt } = require("../middleware/bookavailability");
const { bookDB } = require("../DB/books");
const { coursePoositiveFiner } = require("../middleware/courseFinedr");

//ADD student 

router.post("/registerStudent"  , studentUniqueFinder ,async function(req,res){
    
    // this will register student with below parameter
    // studentID , studetname , coursename
    const details = req.body;
    
    await studentDB.create({
        studentid : details.rollNumber , 
        name : details.name , 
        courseassociated : details.coursename 
    }).catch(()=>{
        console.log("can not get ti DB")
    })

    res.json({
        msg : "student registered"
    })
   
})


// assigh student a book

router.put('/assign',bookPresent,async function(req,res){
    // { 
    //  studentid , bookname
    //} 


    const details = req.body;
    const bookData = await bookDB.findOne({name : details.bookname})
    await bookData.updateOne({count : bookData.count-1})
    await studentDB.findOneAndUpdate({studentid : details.studentid},{assign : bookData.name})

    return res.json({
        msg : "book assigned"
    })


    
        
})
    
    

// submit book
 
router.put('/submit',async function(req,res){
    const {studentid} = req.body;
    const studentDetails = await studentDB.findOne({studentid : studentid}).catch(()=>{
        return res.json({
            msg : "student not found"
        })
    })
    const bookDetails = await bookDB.findOne({name : studentDetails.assign});
    
    await studentDetails.updateOne({assign  : false});
    await bookDetails.updateOne({count : bookDetails.count + 1});
   
    return res.json({
        mag : "submited"
    })
})

module.exports = {
    studentRouter : router
}




