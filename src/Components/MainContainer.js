import React from 'react'
import Buttonlist from "./Buttonlist";
import VedioContainer from './Videoplayer/VedioContainer';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  
    const ismenuopen = useSelector((state) => state.sidebar.istogglemenu);
  return (
    <div className= {`flex flex-col items-center w-6/7 bg-black ${ismenuopen?" ml-[245px]":"ml-0"} absolute`} >
     <Buttonlist />
     <VedioContainer />
    </div>
  )
}

export default MainContainer;