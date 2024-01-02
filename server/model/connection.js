const express=require("express");
const app=express();
const mysql=require("mysql");

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"student"
})

con.connect(function(err){
    if(err) {
        console.log('Error connecting to Db');
    }
    else{
        console.log("connected");
    }
    
})

module.exports=con;