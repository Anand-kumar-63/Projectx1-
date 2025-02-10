import React from "react";
import Sidebar from "./Components/Sidebar";
import MainContainer from  "./Components/MainContainer"
const Body = ()=>{
  return(
    <div className="grid grid-cols-8 font-mono">
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default Body