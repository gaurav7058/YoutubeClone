import React from 'react'
import Video_Page from './Video_Page'
import dreamgirl from "../Video_Player/Dream.mp4"; 
export default function StoreId_for_videopage() {
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
  return (
    <div>
      {/* {
    video.map(m=>{
        return(
          <>
          <Video_Page videoId={m.id} key={m.id}></Video_Page>
  
          </>
            
        )
    })
   } */}
      
      
    </div>
  )
}
