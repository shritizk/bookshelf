import { studentDB } from "../DB/student";

export function studentChecker(req,res,next){
    const  studentid = req.body.id;
    if(studentDB.find({
        studentid
    })){
        res.status(403).json({
            msg:"student already registered!"
        })
    }

    next()
}



// checks if student already have a book
export function assighChecker(req,res,next){
    const  studentid = req.body.id;
    const studentDetails   = studentDB.findOne({
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

export function falseassighChecker(req,res,next){
    const  studentid = req.body.id;
    const studentDetails   = studentDB.findOne({
        _id : studentid
    })
    if(studentDetails.assign === false){
        res.status(407).json({
            msg:"no book assigned"
        })
    }
    next()

}



