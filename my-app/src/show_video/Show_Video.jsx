import React from 'react'
import "./show_video.css";
import { Link } from 'react-router-dom';
export default function Show_Video({video,videoId},props) { 
  return (
    <> 
      <div className="">
      <Link to={`/videopage/${videoId}`}>
        <div>
        <video src={video.video_url}   className='video_showVideo'> </video>
        </div> 
           </Link> 
       
       <div className="video_description">
            <div className="channel_logo_app">
                <div className="fsChar_logo">
                {video?.uploader_name?.charAt(0).toUpperCase()}
                </div>     
            </div>
            <div className="video_detail">
                <p className='title_video'>title:{video.title}</p>
                <pre className='video_views_uploader_time'>chanel Name:{video.chanel_name}</pre>
                <pre className='video_views_uploader_time'>Uploader_name:{video.uploader_name}</pre>
                <pre className='video_views_uploader_time'>views:{video.views}</pre>
            </div>
        </div>
      </div>
  
    </>
  )
}
