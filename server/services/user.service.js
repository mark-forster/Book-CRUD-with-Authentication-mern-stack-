const User= require('../models/user.model')
const ApiError= require('../utils/ApiError');
const httpStatus= require('http-status')
const jwt= require('jsonwebtoken')
const bcrypt= require('bcrypt');

const addUser= async (body)=>{
    const hashedPassword= await bcrypt.hash(body.password, 12);
    const user= new User({
        name: body.name,
        email: body.email,
        password: hashedPassword
    });
    await user.save();
    return user;
}

const loginUser = async (body, name)=>{
    const {email, password} = body;

    const token = jwt.sign({name,email}, "jwtsecretkey", {expiresIn: "7d"})
    return token;
}

module.exports = {
    addUser,
    loginUser
}