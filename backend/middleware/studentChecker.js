const { bookDB } = require("../DB/books");
const { studentDB } = require("../DB/student")

async function studentChecker(req,res,next){
    // studentId
    //this will check if student exist if yes then it will send next
    const  {studentid} = req.body;
    const result = studentDB.findOne({
        studentId : studentid
    })
    if(result != null){
        res.json({
            msg : "student already exist"
        })
    }

    next()
}













//this is check if student already exist or not , if yes it will throw a error else it will send next()
async function studentUniqueFinder(req,res,next){
    const details = req.body
    const studentData = await studentDB.exists({
        studentid : details.rollNumber
    }).then((err ,doc )=>{
        
        
        if (err === null){
            next()
        }else{
            return res.json({
                masg:"student already registered"
            })
        }
    })
    


}   


module.exports = {
    studentChecker ,  studentUniqueFinder
}
