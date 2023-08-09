const mongoose = require('mongoose');
const bookSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    category:{
        type: Array,
        default:[]
    },
    slug:{
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('Book', bookSchema);