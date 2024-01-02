import dreamgirl from "../Video_Player/Dream.mp4";
import WHL from '../WHL/WHL.jsx';
import Header from "../NavBar/Header.jsx";
export default function WatchHistry() {
  const history = [
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
      <Header></Header> 
      <WHL page={"History"} videolist={history}></WHL>  
   </>
  )
}
