import React,{useEffect, useState} from 'react'
import dreamgirl from "../Video_Player/Dream.mp4"; 
import "./video_page.css"
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Header from "../NavBar/Header";
export default function Video_Page({videoId}) {
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
    const [count, setCount] = useState();

   
    function subcribe(){
        
        if(count){
            setCount(false)
        }
        else{
            setCount(true)
        }
    }
  return (
    <>
    <Header></Header>
      <div className="container-video-page">
      <div className="container-2-video-page">
       <div className="video_displya_screen-video_page" onClick={()=>subcribe()}>
        
       {/* {
         video?.filter(q=>q.id===videoId).map(vi=>{
           return(
             <div key={vi.id}>
                    {
                      count? <><video src={vi.video_url} className='video_show_video_page' controls  loop></video></> : <><h1>To see this video subcribe first</h1></>
                    }
                    </div>
                    
                    )
                  })
                  
      } */}
                {
                      count? <><video src={dreamgirl} className='video_show_video_page' controls  loop></video></> : <><h1>To see this video subcribe first</h1></>
                }
        <div className="video_details_video_page">
            <div className="video_btns_title_videopage_container">
                <p className='video_title_Videopage'>Title:Dream girl movie</p>
                <div className="views_date_btns_viewspage">
                <div className="views_date_btn_videopage">
                     views:1000  <div className="dot"></div> 
                </div>
                <LikeWatchLaterSaveBtns></LikeWatchLaterSaveBtns>
                </div>

            </div>
            <div className="channel_details_videopage">
                <b className='channel_logo_videopage'>
                    <p>G</p>
                </b> 
                <p className='channel_name_videopage'>
                    Channel name:friends
                </p>
            </div>
            <div className="comments_videopage">
                <h2>
                    <u>Comment</u> 
                </h2>
            </div>
        </div>
       </div>
       <div className="more_video_bar">
        More video
       </div>

      </div>        
      </div>
    </>
  )
}
