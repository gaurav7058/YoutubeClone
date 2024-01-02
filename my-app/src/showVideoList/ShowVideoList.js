import Show_Video from '../show_video/Show_Video';
import dreamgirl from "../Video_Player/Dream.mp4";
import "../ShowVideoGrid/showVideoGrid.css";
import "../show_video/show_video.css";
export default function ShowVideoList({videoId}) {
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
    <>
    <div>
        {
            video?.filter(q=>q.id===videoId).map(vi=>{
                return(
                    <div key={vi.id}>
                        <Show_Video video={vi}></Show_Video>
                    </div>
                )
            })
        }
      
    </div>
    </>
  )
}
