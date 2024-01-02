import React from 'react'
import Show_Video from '../show_video/Show_Video'
import "./showVideoGrid.css";
export default function ShowVideoGrid({video}) {
   
  return (
    <div className='container_showvideo_Grid'>
        {
            video?.map(vi=>{
                return(
                    <div key={vi.id}>
                        <Show_Video video={vi} vi videoId={vi.id} key={vi.id}></Show_Video>
                    </div>
                    
                )
            })
            
        }
      
    </div>
  )
}
