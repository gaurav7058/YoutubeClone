const express=require("express");
const rateLimit=require("express-rate-limit");

const limiter=rateLimit({
    window: 60 * 60 * 1000,
    max:5,
    handler:(req,res)=>{
        const date=new Date(req.rateLimit.resetTime);
        req.rateLimit.resetTime=date.toLocaleTimeString();
        res.status(429).json({
            message:"failed",
            payload:`five time you enter wrong password so your account is block try after ${req.rateLimit.resetTime}`
        })
    }
    
    
})
module.exports=limiter

