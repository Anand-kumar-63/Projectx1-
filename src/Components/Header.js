import React from "react";
import { useDispatch } from "react-redux";
import { Togglemenu } from "../utils/Menuslice";
const Header = () => {

  const dispatch = useDispatch();
  const togglethemenu=()=>{
    dispatch(Togglemenu());
  }
  return (
    <div className="flex bg-white justify-between shadow-lg rounded-md font-mono" >
      <div className="flex gap-1 h-16 items-center justify-center">
        <img
        onClick={()=>togglethemenu()}
          src="https://imgs.search.brave.com/-KeMJ4XDPtfRHSk5eYvtEpdUD5fXEOap4xqVNgYjwJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA5LzQ1Lzgw/LzM2MF9GXzEwOTQ1/ODAxNV9Rc1dtY2hs/enV3Q1pQcUlVV1I3/SGNURHNiYnB0ZWpS/di5qcGc"
          alt="hmaburger icon"
          className="h-7 w-8 cursor-pointer ml-4"
        />

        <img
          src="https://imgs.search.brave.com/UzpyViJrQPPCbpJzTIz3Ac2rrPvErzU6NAVqUAApTdU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTcyNzYxMTYy/Nl9sb2dvLXlvdXR1/YmUtcG5nLmpwZw"
          alt="youtube"
          className="h-auto w-[180px] h-9"
        />
      </div>

      <div className="flex justify-center items-center bg-white">
        <input type="search" placeholder="Search Something" className="bg-white border-2 placeholder-gray-500 border-gray-400 px-[20px] rounded-l-full h-10 w-[500px] mt-3 mb-3" />
        <button className="bg-gray-200 border-2 border-gray-400 px-[20px] rounded-r-full px-10 h-10 font-sans" >Search</button>
      </div>

     <div>
     <img className="h-12 w-12 m-2" src="https://static.vecteezy.com/system/resources/previews/036/885/313/non_2x/blue-profile-icon-free-png.png"></img>     
     </div>
    </div>
  );
};

export default Header;
