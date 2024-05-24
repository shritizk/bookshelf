const { Router } = require("express");
const { bookDB } = require("../DB/books");


Router.post('/addBook',async function(req,res){
    try{
        const book = req.body;
    const bookDetails = await  bookDB.findOne({    
        _id : book.bookId , name : book.name 
        
    }).then((e)=>{  
        if(e){
            e.count+book.count
            e.save()
        }
        else{
            const bookDetials = new bookDB({
                _id : book.bookid , 
                name : book.name , 
                availability : true , 
                count : book.count

            })
            bookDetails.save()
            res.json({
                msg : "book added"
            })
        }
    }
    )  


    }catch{
        res.json({
            msg:"something went wrong"
        })
    }
})

module.exports = {
    bookRouter : Router
}