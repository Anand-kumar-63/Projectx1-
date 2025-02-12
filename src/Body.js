import React from "react";
import Sidebar from "./Components/Sidebar";
// import MainContainer from  "./Components/MainContainer"
import { Outlet } from "react-router-dom";
const Body = ()=>{
  return(
    <div className="grid grid-cols-8 w-[1345px] font-sans">
      <Sidebar />
      <Outlet />
      {/* To load either the main comtainer or the watch page we use outlet*/}
      {/* <MainContainer /> */}
    </div>
  )
}

export default Body