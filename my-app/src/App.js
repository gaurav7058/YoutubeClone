import './App.css';
import Login from './login_system/login';
import Home from "./Home"
import Links from './links/links';
import WatchHistry from './WatchHistry/WatchHistry';
import {  Route, BrowserRouter, Routes } from 'react-router-dom'
import Header from './NavBar/Header';
import Video_Page from './video_page/Video_Page';
import LikeVideo from './LikeVideo/LikeVideo';
import Regitration_page from './login_system/Regitration_page';

function App() {
  return (
    <> 
   
    <BrowserRouter>
      <Links></Links>
        <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/history" element={<WatchHistry></WatchHistry>}></Route>
        <Route path="/like_video" element={<LikeVideo></LikeVideo>}></Route>
        <Route path="/videopage/:vid" element={<Video_Page></Video_Page>}></Route>
        <Route path="/registration_form" element={<Regitration_page></Regitration_page>}></Route>
        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
