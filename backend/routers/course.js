const {Router} = require('express');
const { courseDB } = require('../DB/course');
const router = Router();
 




//ADD course

router.post('/addcourse',async function(req,res){

    try{
        const  courseDetials = req.body;
    if(!(await courseDB.findOne({
        name : courseDetials
    }))){
        await courseDB.create({
            name : courseDetials
        })        
    }
    else{
        res.json({
            msg : "already exist"
        })
    }

    }catch{
        res.json({
            msg : "something went wrong"
        })
    }
}) 

module.exports = {
    courseRouter : router

}

