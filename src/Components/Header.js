import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Togglemenu } from "../utils/Menuslice";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Header = () => {
  const [searchquery, setsearchquery] = useState("");
  const [suggetions, setsuggetions] = useState([]);
  const [showsuggetions, setshowsuggetions] = useState(false);
  const [showsearchicon, setshowsearchicon] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => searchdata(), 200);
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
    <div className="flex bg-black text-white justify-between font-roboto h-14">
      <div className="flex h-14 items-center justify-center">
        <div onClick={() => togglethemenu()} className="m-4 flex item-center">
          <Icon icon="charm:menu-hamburger" width="28" height="28" />

          <img
            src="https://imgs.search.brave.com/UzpyViJrQPPCbpJzTIz3Ac2rrPvErzU6NAVqUAApTdU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTcyNzYxMTYy/Nl9sb2dvLXlvdXR1/YmUtcG5nLmpwZw"
            alt="youtube"
            className=" w-[180px] h-9 object-contain bg-black"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center ml-[200px] bg-black text-white">
          {showsearchicon && (
            <div className="flex justify-center items-center border-2 border-gray-400 border-r-0 rounded-l-full px-[10px] h-8">
              <Icon icon="iconoir:search" width="20" height="20" />
            </div>
          )}
          <input
            value={searchquery}
            onChange={(e) => setsearchquery(e.target.value)}
            onFocus={() => {
              setshowsuggetions(true);
              setshowsearchicon(true);
            }}
            type="search"
            placeholder="Search Something"
            className={`bg-black border-2 ${
              showsearchicon
                ? "border-l-0 duration-0"
                : "border-l-2 rounded-l-full px-[20px]"
            } outline-none placeholder-gray-400 border-gray-300 h-8 w-[500px] mt-3 mb-3`}
          />
          <button className="bg-gray-800 border-2 border-gray-300 px-[20px] text-gray-300 rounded-r-full h-8 font-sans">
            Search
          </button>

          <button className="p-1 border-2 border-gray-400 hover:bg-gray-700 rounded-full ml-2">
            <Icon icon="icon-park-solid:voice" width="24" height="24"></Icon>
          </button>
        </div>

        {showsuggetions && (
          <div className=" w-[540px] ml-[200px] rounded-b-md bg-white z-10 shadow-sm text-sm h-auto absolute">
            <ul>
              {suggetions.map((s) => (
                <Link  key={s} to={`/Searchpage`+`?q=`+ `${s}`}>
                  <li
                    className="p-1 hover:bg-gray-200 gap-2 text-black z-10 flex mx-1 cursor-pointer"
                   
                  >
                    <Icon icon="iconoir:search" width="24" height="24" />
                    {s}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex gap-2 ml-8 mt-3">
        <button className="flex gap-1 items-center rounded-2xl px-3 h-[40px] border-2 hover:bg-gray-700 border-gray-400">
          <Icon icon="ic:round-add" width="24" height="24" />
          Create
        </button>
        <button className="flex gap-1 items-center rounded-2xl px-3 h-[40px] hover:bg-gray-700 border-gray-400">
          <Icon icon="mdi:bell-outline" width="28" height="28" />
        </button>
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
