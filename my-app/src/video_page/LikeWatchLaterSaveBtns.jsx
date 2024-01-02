import React,{useState} from 'react'
import  {BsThreeDots} from 'react-icons/bs';
import  {MdPlaylistAddCheck} from 'react-icons/md';
import  {RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri';
import  {RiHeartAddFill} from 'react-icons/ri';
import  {AiFillDislike,AiFillLike,AiOutlineDislike,AiOutlineLike} from 'react-icons/ai';
import "./likewatch.css"
import Video_Page from './Video_Page';
export default function LikeWatchLaterSaveBtns() {
    const[saveVideo,setSaveVideo]=useState(true);
    const[dislikeBtn,setDisklikeBtn]=useState(false);
    const[likeBtn,setLikeBtn]=useState(false);
    const [count, setCount] = useState(0);
    function subcribe(){
        
        if(count){

            setCount(false)
        }
        else{
            setCount(true)
        }
    }
    function toogleSaveVideo(){
        if(saveVideo){
            setSaveVideo(false)
        }
        else{
            setSaveVideo(true)
        }
    }
    function toogleLikeBtn(){
        if(likeBtn){
            setLikeBtn(false)
        }
        else{
            setLikeBtn(true)
        }
    }
    function toggleDislikebtn(){
        if(dislikeBtn){
            setDisklikeBtn(false)
        }
        else{
            setDisklikeBtn(true)
        }
    }
  return (
    <>
    <div className="btn_cont_videopage">
        <div className="btn-videopage">
            <BsThreeDots></BsThreeDots>
        </div>
        <div className="btn-videopage">
        <div className="like-videopage" onClick={()=>toogleLikeBtn()}>
                {
                    likeBtn ?
                     <>
                    <AiFillLike size={22} className='btns-videopage'></AiFillLike>
    
                    </>:
                    <>
                    <AiOutlineLike size={22} className='btns-videopage'></AiOutlineLike>
                    </>
                }
                <b>1</b>
            </div>
            <div className="like-videopage" onClick={()=>toggleDislikebtn()}>
                {
                    dislikeBtn ?
                     <>
                    <AiFillDislike size={22} className='btns-videopage'></AiFillDislike>
    
                    </>:
                    <>
                    <AiOutlineDislike size={22} className='btns-videopage'></AiOutlineDislike>
                    </>
                }
                <b>Dislike</b>
            </div>
            <div className="like-videopage" onClick={()=>toogleSaveVideo()}>
                {
                    saveVideo ?
                     <>
                    <RiPlayListAddFill size={22} className='btns-videopage'></RiPlayListAddFill>
                <b>Save</b>
                    </>:
                    <>
                    <MdPlaylistAddCheck size={22} className='btns-videopage'></MdPlaylistAddCheck>
                <b>Saved</b>
                    </>
                }
            </div>

            <div className="like-videopage" >
            <RiHeartAddFill size={22} className='btns-videopage'></RiHeartAddFill>
                <b>Thanks</b>                   
            </div>
            <div className="like-videopage">
            <RiShareForwardLine size={22} className='btns-videopage'></RiShareForwardLine>
                <b>share</b>                   
            </div>
            <div className="like-videopage" onClick={()=>subcribe()}>
                {
                    count ? <><div>Subscribed</div> </> : <><div className='subscribe-btn'>Subscribe</div></>
                }       

            </div>
            {/* <Video_Page count={count}></Video_Page> */}
        </div>
    </div>
    </>
  )
}
