const { courseDB } = require("../DB/course");

async function courseFinder(req,res,next){
    const course = req.body.name;

    const courseFound = await courseDB.exists({
        name :course
    })
    if(!courseFound){
        next()
    }
    else{
       return  res.json({
            msg : "course already exist"    
        })
    }
}


module.exports = {
    courseFinder , 
}