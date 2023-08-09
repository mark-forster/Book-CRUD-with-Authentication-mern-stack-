const httpStatus = require('http-status');
const Book= require('../models/book.model')
const fileHelper= require('../utils/fileHelper');
const ApiError = require('../utils/ApiError');
const path= require('path')

const getAllBooks= async ()=>{
    const books= await Book.find({});
    if(!books){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Book not found');
    }
    return books;
}

const createNewBook= async (body, image)=>{
    const book= new Book({
        title: body.title,
        description: body.description,
        author: body.author,
        category: body.category,
        image: image.path,
        slug: body.title
    });

    await book.save();
    return book;
}

const getBookBySlug= async (slug)=>{
    try{
        const book = await Book.findOne({slug:slug});
        return book;
    }
    catch(err){
        throw new ApiError(httpStatus.BAD_REQUEST,"Book slug not found")
    }
}

const updateNewBook= async (slug, news, image) =>{
    try{
        const oldBook= await Book.findOne({slug:slug});
        if( ! image){
            const book= await Book.updateOne({slug:slug}, {
                title: news.title,
                description: news.description,
                author: news.author,
                category: news.category,
                slug: news.title,
                image: oldBook.image
            });
            return book;
        }
        else{
            fileHelper.deleteFile(oldBook.image);  
            const book= await Book.updateOne({slug:slug}, 
                {
                    title: news.title,
                    description: news.description,
                    author: news.author,
                    category: news.category,
                    slug: news.title,
                    image: image.path
                },{new: true});
            return book;
        }
       
    }
    catch(err){
         console.log(err)
    }

}

const deleteBookbyId= async (id) =>{
    const oldBook = await Book.findById({_id: id})
    // delete Old Image
    fileHelper.deleteFile(oldBook.image);  

    await Book.findByIdAndDelete(id);
    return oldBook;
    
}


module.exports = {
    getAllBooks,
    createNewBook,
    getBookBySlug,
    updateNewBook,
    deleteBookbyId,
}