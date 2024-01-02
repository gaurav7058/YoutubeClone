import React from 'react'
import dreamgirl from "../Video_Player/Dream.mp4";
import guns1 from "../Video_Player/guns1.mkv";
import guns2 from "../Video_Player/guns2.mkv";
import guns3 from "../Video_Player/guns3.mkv";
import WHL from '../WHL/WHL.jsx';
export default function Watch_Later() {
    const watch_later = [
      {
        id: 1,
        video_url: dreamgirl,
        title: "dream",
        uploder:"gaurav",
        views:1000,
        time_to_uplode:2020
      },
      {
        id: 2,
        video_url: guns1,
        title: "guns-1",
        uploder:"rushikesh",
        views:1000,
        time_to_uplode:2020
      },
      {
        id: 3,
        video_url: guns2,
        title: "guns-2",
        uploder:"kunal",
        views:100,
        time_to_uplode:2020
      },
      {
        id: 4,
        video_url: guns3,
        title: "guns-3",
        uploder:"aniket",
        views:10,
        time_to_uplode:2020
      },
        ];
  
  return (
   <><WHL page={"Watch Later"}  videolist={watch_later}></WHL></>
  )
}
