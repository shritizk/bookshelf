const { studentDB } = require("../DB/student")

async function studentChecker(req,res,next){
    const  studentid = req.body.id;
    if(await  studentDB.findOne({
        studentid
    })){
        res.status(403).json({
            msg:"student already registered!"
        })
    }

    next()
}



// checks if student already have a book
async function assighChecker(req,res,next){
    const  studentid = req.body.id;
    const studentDetails   = await studentDB.findOne({
        _id : studentid
    })
    if(studentDetails.assign === false){
        next()
    }
    res.status(407).json({
        msg:"pls submit old assign book"
    })

}

// check if its not false

async  function falseassighChecker(req,res,next){
    const  studentid = req.body.id;
    const studentDetails   = await studentDB.findOne({
        _id : studentid
    })
    if(studentDetails.assign === false){
        res.status(407).json({
            msg:"no book assigned"
        })
    }
    next()

}


module.exports = {
    studentChecker , falseassighChecker ,  assighChecker
}
