import React from "react";
import Sidebar from "./Components/Sidebar";
// import MainContainer from  "./Components/MainContainer"
import { Outlet } from "react-router-dom";
const Body = ()=>{
  return(
    <div className="flex w-auto font-body">
      <Sidebar />
      <Outlet />
      {/* To load either the main comtainer or the watch page we use outlet*/}
      {/* <MainContainer /> */}
    </div>
  )
}

export default Body