import React from 'react'
import ShowVideoList from '../showVideoList/ShowVideoList'
export default function WHLVideoList({videolist}) {
  return (
    <>
   {
    videolist.map(m=>{
        return(
          <>
          <ShowVideoList videoId={m.id} key={m.id}></ShowVideoList>
          </>
            
        )
    })
   }
    </>
  )
}
