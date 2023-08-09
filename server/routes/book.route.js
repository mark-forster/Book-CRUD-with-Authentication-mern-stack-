const express = require('express');
const router= express.Router();
const store= require('../config/multer');
const bookController= require('../controllers/book.controller')
const verifyAuth= require('../middlewares/isAuth')

router.get('/', bookController.getBooks)
router.post('/create', verifyAuth, store.single('image',12),bookController.postNewBook);
// single Route
router.get('/:slug', bookController.getSingleBook)
router.put('/:slug', verifyAuth, store.single('image',12), bookController.updateBook)
router.delete('/:id',verifyAuth, bookController.deleteBook)

module.exports =router;