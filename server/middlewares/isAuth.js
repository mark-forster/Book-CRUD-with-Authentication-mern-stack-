const express=require('express');
const jwt = require('jsonwebtoken');
const isAuth=async (req,res,next)=>{
    const token= req.headers.authorization;
    if(token){
        jwt.verify(token, "jwtsecretkey",(err)=>{
            if (err) return res.sendStatus(403)
            next()
        })
    }
    else{
        res.sendStatus(401)
    }
}

module.exports=isAuth