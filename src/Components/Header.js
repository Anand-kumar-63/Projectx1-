import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Togglemenu } from "../utils/Menuslice";

const Header = () => {
  const [searchquery, setsearchquery] = useState("");
  const [suggetions , setsuggetions] = useState([]);
  const [showsuggetions , setshowsuggetions] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => searchdata(), 200);
    // to end this timer if any other key is pressed within the 200ms time
    return () => {
      clearTimeout(timer);
    };
  }, [searchquery]);

  const searchdata = async () => {
    try {
      const response = await fetch(
        `https://suggestqueries-clients6.youtube.com/complete/search?client=youtube-reduced&hl=en&gs_ri=youtube-reduced&ds=yt&q=${searchquery}&xhr=t&xssi=t&gl=us`
      );
      const textData = await response.text(); // Get raw response as text
      // Remove the YouTube security prefix
      const jsonData = JSON.parse(textData.replace(/^\)\]\}'/, ""));
      console.log(jsonData[1]); // Log the cleaned-up response
      setsuggetions(jsonData[1]);
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const dispatch = useDispatch();
  const togglethemenu = () => {
    dispatch(Togglemenu());
  };
  return (
    <div className="flex bg-white justify-between shadow-md rounded-md font-roboto h-14">
      <div className="flex h-14 items-center">
        <img
          onClick={() => togglethemenu()}
          src="https://imgs.search.brave.com/-KeMJ4XDPtfRHSk5eYvtEpdUD5fXEOap4xqVNgYjwJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA5LzQ1Lzgw/LzM2MF9GXzEwOTQ1/ODAxNV9Rc1dtY2hs/enV3Q1pQcUlVV1I3/SGNURHNiYnB0ZWpS/di5qcGc"
          alt="hmaburger icon"
          className="h-7 w-6 object-contain cursor-pointer ml-4"
        />

        <img
          src="https://imgs.search.brave.com/UzpyViJrQPPCbpJzTIz3Ac2rrPvErzU6NAVqUAApTdU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTcyNzYxMTYy/Nl9sb2dvLXlvdXR1/YmUtcG5nLmpwZw"
          alt="youtube"
          className=" w-[180px] h-9 object-contain"
        />
      </div>
      <div>
        <div className="flex justify-center items-center bg-white">
          <input
            value={searchquery}
            onChange={(e) => setsearchquery(e.target.value)}
            onFocus={()=>setshowsuggetions(true)}
            onBlur={()=>setshowsuggetions(false)}
            type="search"
            placeholder="Search Something"
            className="bg-white border-2 outline-none placeholder-gray-500 border-gray-400 px-[20px] rounded-l-full h-8 w-[500px] mt-3 mb-3"
          />
          <button className="bg-gray-200 border-2 border-gray-400 px-[20px] rounded-r-full px-10 h-8 font-sans">
            Search
          </button>
        </div>

     {showsuggetions &&   <div className=" w-[500px] rounded-b-md bg-white shadow-sm text-sm h-auto absolute">
          <ul>
            {/* map over suggestion array to make list of items to show in suggetions bar */}
          {suggetions.map(s=><li className="m-1 hover:bg-gray-100 flex mx-4" key={s}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
         	<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" stroke-width="1" />
          </svg>{s}</li>)}        
          </ul>
         </div>}

      </div>
      <div>
        <img
          className="h-12 w-12 m-2"
          src="https://static.vecteezy.com/system/resources/previews/036/885/313/non_2x/blue-profile-icon-free-png.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
/*
key-i
- on change function is called and state variable is updated

-render the component
-use  effect()
- start timer for 200ms after that funtion to fetch the data is called

key- ip {within the time 200ms then clearTimeout will be called}
- rerender the component 
- use effect()
- start timer for 200ms after that function to fetch the data is called
*/
