const Book= require('../models/book.model')
const httpStatus= require('http-status')
const fileHelper= require('../utils/fileHelper')
const catchAsync = require('../utils/catchAsync');
const { getAllBooks,createNewBook,getBookBySlug, updateNewBook, deleteBookbyId} = require('../services/book.service')

const getBooks= async (req, res, next) =>{
    const data = await getAllBooks();
    res.json(data)
}

const postNewBook= catchAsync(async (req, res) =>{
   const body= req.body;
   const image= req.file;
   const result= await createNewBook(body, image)
   res.json({data: result})

})

const updateBook= catchAsync(async (req, res, next) =>{
    const slug= req.params.slug;
    const image= req.file;
    const news= req.body;
    const updatedBook= await updateNewBook(slug, news, image);
    res.json("Book Updated Successfully")
});


const getSingleBook= async (req, res, next) =>{
    const slug= req.params.slug;
    const book= await getBookBySlug(slug);
    res.json(book);
}


const deleteBook= async (req, res, next) =>{
   const book= await deleteBookbyId(req.params.id);
        return res.json({success:"Book Deleted Successfully"});
    
}


module.exports={
    getBooks,
    postNewBook,
    getSingleBook,
    updateBook,
    deleteBook,
}