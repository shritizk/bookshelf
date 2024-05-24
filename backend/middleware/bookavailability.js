// it will check if book that student asked for is available or not 

const  { bookDB }  = require( "../DB/books");

async function availability(req,res,next){

     try{
        const book_name = req.body.book_name;
    // find book in shelf
    const bookPayload =await  bookDB.findOne({ book_name});

    if(bookPayload.count > 0){
        next()
    }

    res.json({
        msg:'book not available'
    })
    

     }catch{
        res.status(200).json({
            msg:"something went wrong "
        })
     }

}

module.exports = {
    availability
}