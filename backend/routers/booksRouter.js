const {Router} = require('express');
const router = Router();
const { bookDB } = require("../DB/books");
const { bookInIt } = require('../middleware/bookavailability');


router.post('/addBook',bookInIt,async function(req,res){

    //  name  : String  , courseassociated # you have ti get its  from courseDB , count 
    try { 
        const Details = req.body;
    
    await bookDB.create({
        name : Details.name , courseassociated : Details.course , count : Details.count
    })
    res.json({
        msg : " book added"
    })
    }catch { 
        res.json({
            msg : "something went wrong"
        })
    }
    


})

module.exports = {
    bookRouter : router
}