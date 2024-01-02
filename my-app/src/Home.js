import React,{useEffect, useState} from 'react'
import "react-html5video/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import dreamgirl from "./Video_Player/Dream.mp4";
// import { FaThumbsUp, } from 'react-icons/fa';
// import { FaThumbsDown, } from 'react-icons/fa';
import ShowVideoGrid from "./ShowVideoGrid/ShowVideoGrid";
import axios from "axios";
import Header from './NavBar/Header';
export default function Home() {
  
  const [videos, setVideos] = useState([]);
  const video = [
    {
      id: 1,
      video_url: dreamgirl,
      chanel_name:"friends",
      title: "video-1",
      uploader_name:"gaurav",
      views:1000,
      upload_time:2020
    },
    {
      id: 2,
      video_url: dreamgirl,
      chanel_name:"friends",
      title: "video-rr",
      uploader_name:"rushikesh",
      views:1000,
      upload_time:2020
    },
    {
      id: 3,
      video_url: dreamgirl,
      chanel_name:"friends",
      title: "video-3",
      uploader_name:"kunal",
      views:100,
      upload_time:2020
    },
    {
      id: 4,
      video_url: dreamgirl,
      chanel_name:"friends",
      title: "video-4",
      uploader_name:"aniket",
      views:10,
      upload_time:2020
    },
  ];
  // Fetch videos from the server
  // useEffect(() => {
  //   GetData()
  // })
  // function GetData(){
  //   fetch("http://localhost:2000/GetAllData").then((result) => {
  //     result.json().then((json) => {
  //       setVideos(json.result)  
  //     });
  //   });
    
  // }
  return (
    <>
    <Header></Header>
        <div className="home-page">
        
        <ShowVideoGrid video={video}></ShowVideoGrid>
        </div>
      
    </>
  );
}
