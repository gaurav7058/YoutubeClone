import React from 'react'
import "./whl.css"
import WHLVideoList from '../WHLVideolist/WHLVideoList'
export default function WHL({page,videolist}) {
  return (
    <>
    <div className="whl_container">
      <p className='container_whl'>
        <div className="box-whl leftside_whl">
          <b>Your {page} shown Here </b>
          {
            page==="History" &&
          <div className="clear_hsitory_btn">
            Clear History
          </div>
          }
        </div>
        <div className="rightside-whl">
          <h1>{page}</h1>
          <div className="whl_list">
            <WHLVideoList page={page} videolist={videolist}></WHLVideoList>
          </div>
        </div>
      </p>
    </div>
    </>
  )
}

