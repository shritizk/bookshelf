const {Router} = require('express');
const router = Router();
const { courseDB } = require('../DB/course');
const { courseFinder } = require('../middleware/courseFinedr');
 
//ADD course

router.post('/addcourse',courseFinder,async function(req,res){
    // takes { name  : String in body }
    
    try{
        const  courseDetials = req.body;
        
      
        courseDB.create({
            name : courseDetials.name
        })

        res.json({
            msg : "course created"
        })

    }catch{
        res.json({
            msg : "something went wrong"
        })
    }
}) 

module.exports = {
    courseRouter : router
}


