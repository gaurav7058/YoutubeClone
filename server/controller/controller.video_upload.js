const express=require("express");
const app=express();
const path=require("path");
const con = require("../model/connection");
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use("/uploads",express.static(path.join("uploads")))
function insert_video(req, res) {
  const title_video=req.body.title_video;
  // const video_url = req.file.video_url;
  console.log(req.file.path)
  // const uploader_name=req.body.uploader_name;
  // const chanel_name=req.body.chanel_name;
  // const views=req.body.views;
  // const video_path = req.file.path;
  var id = req.params.id;
  console.log(video_url)
  con.query(
    "INSERT INTO video_upload(title_video,video_url) values(?,?)",
    [title_video,video_url],
    (error, result) => {
        if(result){
          console.log(result)
          return res.status(201).send({message: 'Video Uploaded Successfully'});
        } 
        else{
          return res.status(500).send({err: error});
        }
    }
  );
}
function Register_form(req,res){
  const full_name=req.body.full_name;
  const email = req.body.email;
  const password=req.body.password;

  con.query(
    "INSERT INTO registration(full_name,email,password) values(?,?,?)",
    [full_name,email,password],
    (error, result) => {
        if(result){
          return res.status(201).send({message: 'Registration-Successfully'});
        } 
        else{
          return res.status(500).send({message:"Something problem in registration"});
        }
    }
  );
  
}

function GetVideo(req,res){
  con.query(
    "SELECT * FROM video_upload",
    (error,result)=>{
      if(result){
        res.status(200).json({ message: "Get Data",result});
    }
    else{
      res.status(501).json({ message: "problem in getdata" });
    }

    })
}
module.exports = {
  insert_video: insert_video,
  GetVideo:GetVideo,
  Register_form:Register_form
};
