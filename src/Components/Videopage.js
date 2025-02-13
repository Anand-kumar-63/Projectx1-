import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "../utils/Menuslice";
import YoutubeVideo from "./Iframe";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";
import { Icon } from "@iconify/react";

const Videopage = () => {
  // to get the params from the url of the page we use searchParams
  const buttons = ["All", "React", "Web"];
  const [videodata, setvideodata] = useState([]);
  const dispatch = useDispatch();
  const btnname = "subscribe";
  //  dispatch the closemenu action inside the use effect
  useEffect(() => {
    dispatch(closemenu());
  });
  useEffect(() => {
    getdata();
  }, []);
  // to get the id
  const [SearchParams] = useSearchParams();
  const id = SearchParams.get("id");
  // to get data from id
  const getdata = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=AIzaSyCw9eOmRziBvp5ALYMHFkMIx1eRs04nbPM`
    );
    const stat = await data.json();
    console.log(stat.items[0]);
    setvideodata(stat.items[0]);
  };
  const { snippet } = videodata;
  // vedioplayer btns
  const btns = ["share", "download"];
  return (
    <div className="flex flex-row">
      {/* /video section of the video */}
      <div className="m-4 ml-[120px] w-[800px]">
      
        <div className="h-[480px] w-[800px] flex items-center justify-center bg-black  rounded-xl">
          <YoutubeVideo videoId={id} />
        </div>
      
        <div className="font-body font-bold mt-3">
          <div className="text-2xl">{snippet?.localized?.title}</div>
          <div className="flex justify-between">
            <div className="text-lg font-mono flex items-center gap-2">
              <Icon
                icon="hugeicons:circle"
                width="36"
                height="36"
                className="text-2xl"
              />
              <div className="flex items-center">
                {snippet?.channelTitle}
                <Icon icon="mdi-tick-circle" width="14" height="14"></Icon>
              </div>
              {<Button name={btnname}></Button>}
            </div>

            <div className="flex items-center">
              <div className="flex gap-0.5">
                <button className="w-12 p-1 px-4 bg-gray-400 rounded-l-full">
                  <Icon
                    icon="stash:thumb-up-light"
                    width={24}
                    height={24}
                  ></Icon>
                </button>
                <button className="w-12 p-1 bg-gray-400 rounded-r-full">
                  <Icon
                    icon="stash:thumb-down-light"
                    width={24}
                    height={24}
                  ></Icon>
                </button>
              </div>
              {btns.map((name, index) => (
                <li className="list-none" key={index}>
                  <Button name={name}></Button>
                </li>
              ))}
              <button className="rounded-full bg-gray-400">
                <Icon icon="ph:dots-three-circle" width="38" height="38"></Icon>
              </button>
            </div>
          </div>
        </div>
      
        <div className="bg-gray-300 mt-5 rounded-lg p-4">
          {}
          {snippet?.description}
          </div>
    
      </div>

      {/* suggestion section of the videopage  */}
      <div className="mt-2 h-[70px] w-auto">
        <ul className="flex mt-4 px-4">
          {buttons.map((name, index) => (
            <li key={index}>
              <Button name={name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Videopage;
