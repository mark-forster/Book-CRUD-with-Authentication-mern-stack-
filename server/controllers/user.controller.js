const User= require('../models/user.model')
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const httpStatus = require('http-status');
const AuthService= require('../services/user.service')

const register= catchAsync( async (req,res, next)=>{
       try{
        // check input fields
        if(!(req.body.name && req.body.email && req.body.password)){
            return res.json({error:"All fields are required"})
        }
        // check password length
        if(req.body.password.length < 8){
            return res.json({error:"Password must be at least 8 characters"})
        }
        // check userAlready Exists
        const existingUser = await User.findOne({email:req.body.email})
           if(existingUser){
            return res.json({error:"User already registered by this email"})
           }

        // registering new user
        const result= await AuthService.addUser(req.body);
        return res.json({success: "User Created Successfully", data: result});
       }
       catch(err){
        console.log(err);
       }
});

const login= catchAsync(async (req,res,next)=>{
    const {email, password} = req.body;
    if(! email || ! password){
        return res.json({error:"All fields are required"});
    }
 const user= await User.findOne({ email:email });
    if(! user){
        return res.json({error:"Invalid email or password"});

    }
    // check password
    const rightUser=await bcrypt.compare(password, user.password);
    if(! rightUser){
        return res.json({error:"Incorrect password"});
    }
    const token= await AuthService.loginUser(req.body, user.name);
    // generate Cookie
    const userId= user._id;
    res.cookie("token", token)
    return res.json({success: "User Login Successfully", token, userId});
})



module.exports = {
    register, 
    login,
}